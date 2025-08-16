import BackgroundImageWrapper from './BackgroundImageWrapper';
import './PartnerSection.css';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';

function PartnerSection() {
  const fadeRef = useFadeInOnScroll();
  return (
    <BackgroundImageWrapper>
      <section className="partner-section" ref={fadeRef}>
        <h2>Partnered with Cantaloupe</h2>
        <p>With micropayment processing, enterprise cloud software, IoT technology, and point of sale innovations, Cantaloupe empowers businesses of all sizes to provide self-service experiences for consumers.</p>
      </section>
    </BackgroundImageWrapper>
  );
}

export default PartnerSection;
