import BackgroundImageWrapper from './BackgroundImageWrapper';
import './SolutionsSection.css';

function SolutionsSection() {
  return (
    <BackgroundImageWrapper>
      <section className="solutions-section" id="machines">
        <h2>Vending Solutions to Help Your Business Grow</h2>
        <div className="solutions-cards">
          <div className="solution-card">
            <h3>Glass Front Snack Vending Machines</h3>
            <p>Healthy & Snack Machine</p>
          </div>
          <div className="solution-card">
            <h3>Pepsi-Co Branded Vending Machines</h3>
            <p>Cold Drinks Machine</p>
          </div>
          <div className="solution-card">
            <h3>Coca-Cola Branded Vending Machines</h3>
            <p>Cold Drinks Machine</p>
          </div>
          <div className="solution-card">
            <h3>Gourmet Coffee Vending Machines</h3>
            <p>Hot Drinks Machine</p>
          </div>
        </div>
        <p className="solutions-note">Proudly serving, New Jersey, Eastern Pennsylvania and Southern Florida with over 6000 Vending Machines in the East Coast!</p>
        <a className="cta-button" href="#about">Learn More About Us</a>
      </section>
    </BackgroundImageWrapper>
  );
}

export default SolutionsSection;
