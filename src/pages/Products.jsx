import { useState } from "react";
import "./Products.css";
import ProductCard from "../components/ProductCard";
import productsData from "../content/Products.json";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

export default function Products() {
  const { products } = productsData;
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Helmet>
        <title>Our Products | Kidney Health & Probiotic Solutions | Pedgy Biotech</title>

        <meta
          name="description"
          content="Explore Pedgy Biotech's innovative probiotic products designed to support kidney health, nephrology care, and advanced therapeutic solutions."
        />

        <link rel="canonical" href="https://pedgy.in/products" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pedgy Biotech Products" />
        <meta
          property="og:description"
          content="Advanced probiotic solutions for kidney health and nephrology."
        />
        <meta property="og:url" content="https://pedgy.in/products" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kidney Health Probiotic Products | Pedgy Biotech" />
        <meta
          name="twitter:description"
          content="Innovative probiotic formulations focused on kidney care."
        />
      </Helmet>

      <div className="products">
        <h1>Our Products</h1>
        <p className="subtitle">
          High-quality pharmaceutical formulations you can trust
        </p>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {selectedProduct && (
          <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-image">
                  <img
                    src={`/products/${selectedProduct.image}`}
                    alt={selectedProduct.title}
                  />
                </div>

                <div className="modal-details">
                  <h2>{selectedProduct.title}</h2>
                  <p className="pack">{selectedProduct.packSize}</p>

                  <ul>
                    {selectedProduct.description.map((point, index) => (
                      <li key={index}>
                        <ReactMarkdown>
                          {point}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
