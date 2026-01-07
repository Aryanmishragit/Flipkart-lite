import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useCart } from "./context/CartContext";

function App() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Flipkart Lite</h1>

      <p>
        Cart Items:{" "}
        {cart.reduce((total, item) => total + item.qty, 0)}
      </p>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id}>
          {item.title} — Qty: {item.qty}
        </div>
      ))}
    </div>
  );
}

export default App;
