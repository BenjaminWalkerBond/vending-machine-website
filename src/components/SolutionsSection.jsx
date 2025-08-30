import BackgroundImageWrapper from './BackgroundImageWrapper';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';
import './SolutionsSection.css';
import { handleButtonClick } from '../utils/buttonHandlers';
import stockwellImage from '../assets/stockwell.png';
import picoCoolerImage from '../assets/pico_fridge_400x400.png';
import hahaDoubleDoor from '../assets/haha_double_door_400x400.png';

function SolutionsSection() {
  const fadeRef = useFadeInOnScroll();
  return (
    <BackgroundImageWrapper>
      <section className="solutions-section" id="machines" ref={fadeRef}>
        <h2>Vending Solutions to Help Your Business Grow</h2>
        <div className="solutions-cards">
          {/* <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Ambient Smart Cooler" className="solution-image" />
            </div>
            <h3>Ambient Smart Coolers</h3>
            <p>Anything Machine</p>
          </div> */}
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={picoCoolerImage} alt="Refrigerated Smart Cooler" className="solution-image" />
            </div>
            <h3>Refrigerated Smart Coolers</h3>
            <p>Cold Drinks, Snacks, and Meal Machine</p>
          </div>
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={hahaDoubleDoor} alt="Freezer Smart Cooler" className="solution-image" />
            </div>
            <h3>Double Door Smart Coolers</h3>
            <p>Large Anything Machine</p>
          </div>
          <div className="solution-card">
            <div className="solution-image-container">
              <img src={stockwellImage} alt="Gourmet Coffee Vending Machine" className="solution-image" />
            </div>
            <h3>Double Door Smart Coolers</h3>
            <p>Anything Machine</p>
          </div>
        </div>
        <p className="solutions-note">Any of our non-freezer machines can also serve common household products such as: soap, toilet paper, laundry detergent, etc.</p>
        <a className="cta-button" href="#about" onClick={handleButtonClick}>Learn More About Us</a>
      </section>
    </BackgroundImageWrapper>
  );
}

export default SolutionsSection;
