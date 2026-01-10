import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <strong>{item.title}</strong>
          <p>Qty: {item.qty}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
