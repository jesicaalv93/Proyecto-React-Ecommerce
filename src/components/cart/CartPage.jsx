import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.titulo} x {item.quantity} - ${item.precio * item.quantity}
              <button onClick={() => removeItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
    </div>
  );
};

export default CartPage;