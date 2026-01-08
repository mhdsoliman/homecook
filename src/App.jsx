import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const menu = [
    { id: 1, name: "Chicken Biryani", price: 12 },
    { id: 2, name: "Stuffed Grape Leaves", price: 8 },
    { id: 3, name: "Beef Lasagna", price: 14 },
    { id: 4, name: "Vegetarian Bowl", price: 10 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>HomeCooked Orders</h1>

      <div style={{ display: "flex", gap: 32 }}>
        <div>
          <h2>Menu</h2>
          {menu.map((item) => (
            <div key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.name}</strong> – ${item.price}
              <br />
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
          ))}
        </div>

        <div>
          <h2>Your Order</h2>
          {cart.length === 0 && <p>Cart is empty</p>}
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} – ${item.price}
            </div>
          ))}
          <hr />
          <strong>Total: ${total}</strong>
        </div>
      </div>
    </div>
  );
}
