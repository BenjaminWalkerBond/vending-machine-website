import BackgroundImageWrapper from './BackgroundImageWrapper';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';
import './SolutionsSection.css';
import { handleButtonClick } from '../utils/buttonHandlers';
import stockwellImage from '../assets/stockwell.png';

function SolutionsSection() {
  const fadeRef = useFadeInOnScroll();
  return (
    <BackgroundImageWrapper>
      <section className="solutions-section" id="machines" ref={fadeRef}>
        <h2>Vending Solutions to Help Your Business Grow</h2>
        <div className="solutions-cards">
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Ambient Smart Cooler" className="solution-image" />
            </div>
            <h3>Ambient Smart Coolers</h3>
            <p>Anything Machine</p>
          </div>
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Refrigerated Smart Cooler" className="solution-image" />
            </div>
            <h3>Refrigerated Smart Coolers</h3>
            <p>Cold Drinks, Snacks, and Meal Machine</p>
          </div>
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Freezer Smart Cooler" className="solution-image" />
            </div>
            <h3>Freezer Smart Coolers</h3>
            <p>Frozen Meal Machine</p>
          </div>
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Gourmet Coffee Vending Machine" className="solution-image" />
            </div>
            <h3>Double Door Smart Coolers</h3>
            <p>Anything Machine</p>
          </div>
        </div>
        <p className="solutions-note">Proudly serving, New Jersey, Eastern Pennsylvania and Southern Florida with over 6000 Vending Machines in the East Coast!</p>
        <a className="cta-button" href="#about" onClick={handleButtonClick}>Learn More About Us</a>
      </section>
    </BackgroundImageWrapper>
  );
}

export default SolutionsSection;
