import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div className="container my-5 cart-page">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div
              key={item.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="me-3 img-thumbnail"
                />
                <div>
                  <h6 className="mb-1">{item.titulo}</h6>
                  <p className="mb-0 text-muted">
                    {item.quantity} x ${item.precio} = $
                    {item.quantity * item.precio}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeItem(item.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button className="btn btn-dark mt-3" onClick={clear}>
          Vaciar carrito
        </button>
      )}
    </div>
  );
};

export default CartPage;
