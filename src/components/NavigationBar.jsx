import React, { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">Tributary Market Vending</div>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        ☰
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#service">Vending Service</a></li>
        <li><a href="#machines">Machines We Carry</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
