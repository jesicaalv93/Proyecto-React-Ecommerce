import React from "react";
import "./Header.css";
import headerImage from "../../assets/banner.jpg";
import logo from "../../assets/logo.png"; 

const Header = () => {
  return (
    <header className="header-banner position-relative text-center">
      <img src={headerImage} alt="Banner" className="header-image w-100" />
      <img
        src={logo}
        alt="Logo Latir"
        className="header-logo position-absolute top-50 start-50 translate-middle"
      />
    </header>
  );
};

export default Header;
