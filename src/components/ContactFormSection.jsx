import React, { useState } from 'react';

export default function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);


  
    const fieldStyle = {
        width: '100%',
        padding: '12px 14px',
        borderRadius: 12,
        border: '1px solid #E4E8F2', 
        fontSize: 16,
        fontFamily: 'inherit',
        backgroundColor: '#FFFFFF', 
        color: '#0E1320', 
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    };
    
   
    const containerStyle = {
        background: '#FFFFFF', 
        border: '1px solid #E4E8F2', 
        borderRadius: 16,
        padding: '24px',
        boxShadow: '0 8px 24px rgba(14,19,32,.08)',
        marginTop: 16,
        transition: 'opacity 0.5s ease-in-out',
        minHeight: '430px', 
        display: 'flex',
        flexDirection: 'column',
    };

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);
        const form = event.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                
                const responseData = await response.json();
                setError(responseData.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            
            setError('Could not submit the form. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };
    

    if (isSubmitted) {
        return (
            <section id="contact" className="section contact-section">
                <h2 className="reveal rule-coral">Get a Free Cooler Placement</h2>
                <div style={{ ...containerStyle, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: '#EAF2FF', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 24,
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2573e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 style={{ color: '#0E1320', fontSize: 24, fontWeight: 600, margin: 0 }}>Thank You!</h3>
                    <p style={{ color: '#5B6477', fontSize: 16, marginTop: 8, maxWidth: '350px' }}>
                        Your request has been received. We'll be in touch with you shortly.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section contact-section">
            <h2 className="reveal rule-coral">Get a Free Cooler Placement</h2>

            <form
                action="https://formspree.io/f/xzzarjdo"
                method="POST"
                onSubmit={handleSubmit}
                className="reveal"
                style={{ ...containerStyle, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
                <input name="name" placeholder="Name" required style={fieldStyle}/>
                <input name="email" type="email" placeholder="Email" required style={fieldStyle}/>
                <input name="company" placeholder="Company / Property" style={fieldStyle}/>
                <input name="city" placeholder="City (San Marcos + nearby)" style={fieldStyle}/>
                <textarea name="message" rows={5} placeholder="Tell us about your shared space…" style={{...fieldStyle, gridColumn:'1 / -1', resize: 'vertical'}}/>
                <div style={{gridColumn: '1 / -1', justifySelf: 'start'}}>
                    <button
                        type="submit"
                        className="cta-btn"
                        disabled={isSubmitting}
                        style={{
                            backgroundColor: isSubmitting ? '#BFD3FF' : '#2573e7', 
                            color: '#fff',
                            padding: '12px 24px',
                            border: 'none',
                            borderRadius: 12,
                            fontSize: 16,
                            fontWeight: 600,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        {isSubmitting ? 'Submitting...' : 'Request Info'}
                    </button>
                    {error && <p style={{color: '#FF8A7A', marginTop: '10px'}}>{error}</p>}
                </div>
            </form>
        </section>
    );
}
