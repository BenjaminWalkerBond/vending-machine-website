import { useState } from 'react';
import BackgroundImageWrapper from './BackgroundImageWrapper';
import './ContactFormSection.css';
import { useFadeInOnScroll } from '../utils/useFadeInOnScroll';

function ContactFormSection() {
  const fadeRef = useFadeInOnScroll();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target;
      const data = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/xzzarjdo', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <BackgroundImageWrapper>
      <section className="contact-form-section" id="contact" ref={fadeRef}>
        <h2>Contact Us</h2>
        {submitted ? (
          <div className="form-success-message">
            <h3>Thank you for your submission!</h3>
            <p>We'll get back to you as soon as possible.</p>
            <button onClick={() => setSubmitted(false)} className="reset-button">
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email *" name="email" required />
            <input type="text" placeholder="Service Interested In" name="service" />
            <textarea placeholder="How may we assist you today? *" name="message" required></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Form'}
            </button>
          </form>
        )}
      </section>
    </BackgroundImageWrapper>
  );
}

export default ContactFormSection;
