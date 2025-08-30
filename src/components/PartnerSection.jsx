import BackgroundImageWrapper from './BackgroundImageWrapper';
import './PartnerSection.css';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';

function PartnerSection() {
  const fadeRef = useFadeInOnScroll();
  return (
    <BackgroundImageWrapper>
      <section className="partner-section" ref={fadeRef}>
        <h2>Does your business qualify?</h2>
        <p> Contact us below to see if you business qualifies for on of our free smart coolers!</p>
      </section>
    </BackgroundImageWrapper>
  );
}

export default PartnerSection;
