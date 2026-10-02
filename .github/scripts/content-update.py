import os
import json
import re
import urllib.request
from pathlib import Path


# -------------------------
# Load GitHub Event Payload
# -------------------------

with open(os.environ["GITHUB_EVENT_PATH"], "r", encoding="utf-8") as f:
    event = json.load(f)

issue_body = event["issue"]["body"]


# -------------------------
# Helper Functions
# -------------------------

def extract_field(label):
    pattern = rf"### {re.escape(label)}[\r\n]+([\s\S]*?)(?=\n###|\Z)"
    match = re.search(pattern, issue_body)

    if not match:
        return None

    value = match.group(1).strip()

    # GitHub forms can sometimes contain placeholder text
    if not value:
        return None

    return value


def slugify(text):
    slug = re.sub(r'[^a-z0-9]+', '-', text.lower())
    slug = re.sub(r'^-|-$', '', slug)
    return slug


def extract_image_url(text):
    if not text:
        return None

    # Try extracting src from <img> tag
    img_match = re.search(r'src="(https://[^"]+)"', text)

    if img_match:
        return img_match.group(1)

    # Fallback: extract plain URL
    url_match = re.search(r'(https://\S+)', text)

    if url_match:
        return url_match.group(1)

    return None


def download_image(url, filepath):
    try:
        with urllib.request.urlopen(url) as response:
            if response.status != 200:
                raise Exception(
                    f"Failed to download image: HTTP {response.status}"
                )

            content_type = response.headers.get("Content-Type", "")

            if "image" not in content_type:
                raise Exception(
                    "URL does not point to a valid image."
                )

            with open(filepath, "wb") as f:
                f.write(response.read())

        print("Image downloaded successfully.")

    except Exception as e:
        raise Exception(f"Image download failed: {str(e)}")


# -------------------------
# Extract Fields
# -------------------------

hero = extract_field("Hero Paragraph")

home_content = extract_field(
    "Home Content (Separate paragraphs with blank line)"
)

about_content = extract_field(
    "About Content (Separate paragraphs with blank line)"
)

product_title = extract_field("Product Title")
product_pack = extract_field("Pack Size")
product_desc = extract_field(
    "Product Description (One point per line)"
)

raw_image_field = extract_field("Product Image")
product_image = (
    extract_image_url(raw_image_field)
    if raw_image_field
    else None
)


# -------------------------
# Track Whether Anything Changed
# -------------------------

changes_made = False


# -------------------------
# HOME UPDATE
# -------------------------

if hero or home_content:

    home_path = Path("src/content/Home.json")

    with open(home_path, "r", encoding="utf-8") as f:
        home_data = json.load(f)

    if hero:
        home_data["hero"]["p"] = hero
        print("Hero paragraph updated.")

    if home_content:
        paragraphs = [
            p.strip()
            for p in home_content.split("\n\n")
            if p.strip()
        ]

        for index, paragraph in enumerate(paragraphs):
            home_data["content"][f"p{index + 1}"] = paragraph

        print("Home content updated.")

    with open(home_path, "w", encoding="utf-8") as f:
        json.dump(home_data, f, indent=2, ensure_ascii=False)

    changes_made = True


# -------------------------
# ABOUT UPDATE
# -------------------------

if about_content:

    about_path = Path("src/content/About.json")

    with open(about_path, "r", encoding="utf-8") as f:
        about_data = json.load(f)

    paragraphs = [
        p.strip()
        for p in about_content.split("\n\n")
        if p.strip()
    ]

    for index, paragraph in enumerate(paragraphs):
        about_data["content"][f"p{index + 1}"] = paragraph

    with open(about_path, "w", encoding="utf-8") as f:
        json.dump(about_data, f, indent=2, ensure_ascii=False)

    print("About updated.")

    changes_made = True


# -------------------------
# PRODUCT UPDATE / CREATE
# -------------------------

# A product operation is considered requested if
# ANY product field was filled.
product_section_used = any([
    product_title,
    product_pack,
    product_desc,
    product_image
])


if product_section_used:

    # Description and image are ALWAYS required
    # for a product operation.
    if not product_desc:
        raise Exception(
            "Product Description is required when updating or adding a product."
        )

    if not product_image:
        raise Exception(
            "Product Image is required when updating or adding a product."
        )

    # Title is required to identify the product.
    if not product_title:
        raise Exception(
            "Product Title is required when updating or adding a product."
        )

    products_path = Path("src/content/Products.json")

    with open(products_path, "r", encoding="utf-8") as f:
        products_data = json.load(f)

    existing_products = products_data.get("products", [])

    slug = slugify(product_title)

    # Find existing product
    existing_product = next(
        (
            p for p in existing_products
            if p.get("slug") == slug
        ),
        None
    )

    # -------------------------
    # Existing Product
    # -------------------------

    if existing_product:

        print("Existing product found. Updating...")

        image_name = f"{slug}.webp"
        image_path = Path("public/products") / image_name
        image_path.parent.mkdir(parents=True, exist_ok=True)

        download_image(product_image, image_path)

        description_array = [
            line.strip()
            for line in product_desc.split("\n")
            if line.strip()
        ]

        existing_product["title"] = product_title

        # Only update pack size if user provided it.
        if product_pack:
            existing_product["packSize"] = product_pack

        existing_product["image"] = image_name
        existing_product["description"] = description_array

        print("Existing product updated.")

        changes_made = True

    # -------------------------
    # New Product
    # -------------------------

    else:

        # Pack size is required only for a new product.
        if not product_pack:
            raise Exception(
                "Pack Size is required when adding a new product."
            )

        print("Product not found. Creating new...")

        image_name = f"{slug}.webp"
        image_path = Path("public/products") / image_name
        image_path.parent.mkdir(parents=True, exist_ok=True)

        download_image(product_image, image_path)

        description_array = [
            line.strip()
            for line in product_desc.split("\n")
            if line.strip()
        ]

        if existing_products:
            new_id = max(
                p["id"] for p in existing_products
            ) + 1
        else:
            new_id = 1

        new_product = {
            "id": new_id,
            "slug": slug,
            "title": product_title,
            "packSize": product_pack,
            "image": image_name,
            "description": description_array
        }

        products_data["products"].append(new_product)

        with open(products_path, "w", encoding="utf-8") as f:
            json.dump(
                products_data,
                f,
                indent=2,
                ensure_ascii=False
            )

        print("New product created.")

        changes_made = True


# -------------------------
# Final Validation
# -------------------------

if not changes_made:
    raise Exception(
        "No valid content update was provided. "
        "Please update at least one section."
    )


print("Content update complete.")