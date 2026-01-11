import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Home() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Flipkart Lite</h1>

      <p>
        Cart Items:{" "}
        {cart.reduce((total, item) => total + item.qty, 0)}
      </p>

      {products.map((product) => (
         <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;