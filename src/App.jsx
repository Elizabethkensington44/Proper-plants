import { useState } from "react";
import PLANTS from "./data";

import Cart from "./cart/Cart";
import Plants from "./plants/Plants";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExist = cart.find((i) => i.id === plant.id);
    if (itemExist) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  /*function PlantList() {
    return (
      <section>
        <ul>
          <li>fern</li>
          <button>add to cart</button>
          <li>sprout</li>
          <button>add to cart</button>
        </ul>
      </section>
    );
  }
  function CartList() {
    return (
      <section>
        <h2>cart</h2>
        <h3>add to cart</h3>
        <button>add to cart</button>
      </section>
    );
  }*/
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
