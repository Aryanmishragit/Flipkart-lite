import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 150 }}
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
