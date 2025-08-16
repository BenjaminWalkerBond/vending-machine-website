import './FooterSection.css';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-contact">
        <div>
          <strong>Tributary Market Vending Inc.</strong><br />
          109 Park Ln, San Marcos, TX 78666<br />
          Tel: (800) 488-7555<br />
          Email: info@tributarymarketvending.com
        </div>
      </div>
      <div className="footer-links">
        <a href="#service">Vending Service</a> |
        <a href="#machines">Machines We Carry</a> |
        <a href="#about">About</a> |
      </div>
      <div className="footer-copyright">
        Copyright © 2025 CVV | Powered by Tech 2 Success
      </div>
    </footer>
  );
}

export default FooterSection;
