import './FooterSection.css';
import { handleButtonClick } from '../utils/buttonHandlers';

function FooterSection() {
  return (
    <div className="footer-background">
      <footer className="footer-section">
      <div className="footer-contact">
        <div>
          <strong>Tributary Market Vending Inc.</strong><br />
          Tel: (800) 488-7555<br />
          Email: info@tributarymarketsmartcoolers.com
        </div>
      </div>
      <div className="footer-links">
        <a href="#about" onClick={handleButtonClick}>Vending Service</a> |
        <a href="#machines" onClick={handleButtonClick}>Machines We Carry</a> |
        <a href="#about" onClick={handleButtonClick}>About</a> |
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Tributary Market LLC
      </div>
    </footer>
    </div>
    
  );
}

export default FooterSection;
