import CartWidget from "../cart-widget/CartWidget";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Links a la izquierda */}
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link fw-bold" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cómo cuidar tus prendas</a>
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
