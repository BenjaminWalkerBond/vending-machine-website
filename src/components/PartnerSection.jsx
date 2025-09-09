import BackgroundImageWrapper from './BackgroundImageWrapper';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';

export default function PartnerSection() {
  const fadeRef = useFadeInOnScroll();

  return (
    <BackgroundImageWrapper>
      <section className="section partner" ref={fadeRef} aria-labelledby="partner-title">
        <div className="partner-intro">
      
          <h2 id="partner-title" className="rule-coral">Does your business qualify?</h2>
          <p className="lead">
            Contact us below to see if your business qualifies for one of our free smart coolers.
          </p>
        </div>
      </section>
    </BackgroundImageWrapper>
  );
}
