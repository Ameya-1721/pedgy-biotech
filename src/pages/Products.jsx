import { useState } from "react";
import "./Products.css";
import ProductCard from "../components/ProductCard";
import productsData from "../content/Products.json";

export default function Products() {
  const { products } = productsData;
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
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
                    <li key={index}>{point}</li>
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
  );
}
