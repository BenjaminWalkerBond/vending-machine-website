import BackgroundImageWrapper from './BackgroundImageWrapper';
import './HeroSection.css';

function HeroSection() {
  return (
    <BackgroundImageWrapper>
      <section className="hero-section">
        <h1>Modern AI Vending Machine Amenities</h1>
        <h2>Make Money During Breaktime With Vending Machines</h2>
        <p>Tributary Market Vending approaches each new business opportunity in an individualized manner. We manage corporate headquarters, large and small businesses, hospitals, and educational institutions with ease.</p>
        <a className="cta-button" href="#service">View Vending Service</a>
      </section>
    </BackgroundImageWrapper>
  );
}

export default HeroSection;
