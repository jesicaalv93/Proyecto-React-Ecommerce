import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout"; // Importamos el formulario
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  return (
    <div className="container my-5 cart-page">
      <h2>Tu carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
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
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
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

          <div className="purchase-info alert alert-light border rounded p-3 mb-4">
            <p className="checkout-note text-secondary mb-4">
              Una vez recibida la orden de compra, nos pondremos en contacto
              dentro de las 48 hs para confirmar la forma de pago. No te
              cobramos nada por adelantado.
            </p>
          </div>

          {!showCheckout ? (
            <div className="cart-info-text">
              <button className="btn btn-dark" onClick={handleCheckoutClick}>
                Finalizar compra
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <Checkout />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
