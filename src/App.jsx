import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <div>
      <h1>Flipkart Lite</h1>
      <p>Cart Items: {cart.length}</p>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default App;
