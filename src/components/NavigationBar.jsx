import React, { useState, useEffect } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation-bar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">Tributary Market Smart Coolers</div>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        ☰
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#about">Services</a></li>
        <li><a href="#machines">Machines We Carry</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
