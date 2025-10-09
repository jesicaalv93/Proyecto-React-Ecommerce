import { NavLink } from "react-router-dom";
import CartWidget from "../cart-widget/CartWidget";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Links de navegación */}
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <NavLink className="nav-link fw-bold" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categories">
              Categorías
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contacto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cuidados">
              Cómo cuidar tus prendas
            </NavLink>
          </li>
        </ul>

        {/* Carrito a la derecha */}
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
