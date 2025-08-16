import BackgroundImageWrapper from './BackgroundImageWrapper';
import './ContactFormSection.css';

function ContactFormSection() {
  return (
    <BackgroundImageWrapper>
      <section className="contact-form-section" id="request">
        <h2>How May We Assist You?</h2>
        <form className="contact-form">
          <input type="text" placeholder="First Name" name="firstName" />
          <input type="text" placeholder="Last Name" name="lastName" />
          <input type="email" placeholder="Email *" name="email" required />
          <input type="text" placeholder="Service Interested In" name="service" />
          <textarea placeholder="How may we assist you today? *" name="message" required></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </section>
    </BackgroundImageWrapper>
  );
}

export default ContactFormSection;
