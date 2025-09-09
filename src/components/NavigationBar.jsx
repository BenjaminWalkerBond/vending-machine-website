import React from "react";
import logo from "../assets/tributary_market_logo.png";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src={logo} alt="Tributary Market" className="brand-mark" />
          <span className="brand-name">Tributary Market</span>
        </a>

        <div className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#solutions" className="nav-link">Features</a>
          <a href="#contact" className="btn-cta-sm">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
