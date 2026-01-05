import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, qty: 1 }];
  });
}


  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

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
          onAddToCart={addToCart}
        />
      ))}
      <h2>Cart</h2>

{cart.length === 0 && <p>Cart is empty</p>}

{cart.map((item) => (
  <div key={item.id}>
    <p>
      {item.title} — Qty: {item.qty}
    </p>
  </div>
))}

    </div>
  );
}

export default App;
