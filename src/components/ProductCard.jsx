import "./ProductCard.css";

export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="image-wrapper">
        <img
          src={`/products/${product.image}`}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">{product.packSize}</p>
      </div>
    </div>
  );
}
