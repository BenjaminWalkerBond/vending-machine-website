import BackgroundImageWrapper from './BackgroundImageWrapper';
import './ServiceAreaSection.css';

function ServiceAreaSection() {
  return (
    <BackgroundImageWrapper>
      <section className="service-area-section" id="service">
        <h2>Customers We Serve In New Jersey & Florida</h2>
        <div className="service-area-images">
          {/* Replace these with your own assets */}
          <img src="/assets/customer1.jpg" alt="Customer 1" />
          <img src="/assets/customer2.jpg" alt="Customer 2" />
          <img src="/assets/customer3.jpg" alt="Customer 3" />
        </div>
      </section>
    </BackgroundImageWrapper>
  );
}

export default ServiceAreaSection;
