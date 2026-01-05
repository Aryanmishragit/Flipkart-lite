function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "150px", display: "block" }}
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
