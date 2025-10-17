import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Sumar la cantidad de todos los items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget btn btn-outline-dark d-flex align-items-center">
      <i className="bi-cart-fill me-1"></i>
      Cart
      <span className="badge bg-dark text-white ms-1 rounded-pill">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;

