import "./Products.css";
import ProductCard from "../components/ProductCard";

import pbPlus from "../assets/products/pb-plus.jpg";
import bphPlus from "../assets/products/bph-plus.jpg";

const products = [
  {
    id: 1,
    title: "PB Plus",
    price: "3 x 10 Capsules",
    image: pbPlus
  },
  {
    id: 2,
    title: "BPH Plus",
    price: "3 x 10 Capsules",
    image: bphPlus
  }
];

export default function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <p className="subtitle">
        High-quality pharmaceutical formulations you can trust
      </p>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
