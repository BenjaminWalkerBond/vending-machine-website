import './FooterSection.css';

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
        <a href="#service">Vending Service</a> |
        <a href="#machines">Machines We Carry</a> |
        <a href="#about">About</a> |
      </div>
      <div className="footer-copyright">
        Copyright © 2025 Tributary Market LLC
      </div>
    </footer>
    </div>
    
  );
}

export default FooterSection;
