import { NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import "./NavBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
            <NavLink className="nav-link" to="/medios-de-pago">
              Medios de pago
            </NavLink>
          </li>
        </ul>

        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
