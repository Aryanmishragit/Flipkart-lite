import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: 150, display: "block" }}
        />
        <h3>{product.title}</h3>
        <p>₹ {product.price}</p>
      </Link>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
