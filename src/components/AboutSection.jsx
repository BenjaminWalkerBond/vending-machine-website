import BackgroundImageWrapper from './BackgroundImageWrapper';
import VendingMachinePopout from './VendingMachinePopout';
import './AboutSection.css';

function AboutSection() {
  return (
    <BackgroundImageWrapper>
      <section className="about-section" id="about">
        <h2>About Tributary Market Smart Coolers</h2>
        <p>Tributary Market Smart Coolers is a locally owned business out of San Marcos, TX. </p>
        <VendingMachinePopout />
      </section>
    </BackgroundImageWrapper>
  );
}

export default AboutSection;
