import React from "react";
import "./Header.css"; 
import headerImage from "../../assets/banner.jpg";
const Header = () => {
  return (
    <header className="header-banner">
      <img src={headerImage} alt="Banner" className="header-image" />
    </header>
  );
};

export default Header;
