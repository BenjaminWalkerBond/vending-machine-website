const base = import.meta.env.BASE_URL;
export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="grid-2 reveal about-grid">
        <div className="about-bubbles">
          <figure className="bubble bubble--lg">
            <img src={`${base}SanMarcosRiver.jpg`} alt="San Marcos River" />
          </figure>

          <figure className="bubble bubble--sm">
           <img src={`${base}SanMarcosRiverTwo.jpg`} alt="San Marcos River (two)" />
          </figure>

          <div className="about-bubbles-glow" aria-hidden="true" />
        </div>

        <div className="about-copy">
          <h2 className="rule-coral" style={{ marginBottom: 12 }}>
            Locally Owned in San Marcos, TX
          </h2>
          <p className="lead" style={{ marginBottom: 16 }}>
            Tributary Market brings modernized smart coolers to Central Texas workplaces. They're installed and managed end-to-end with no upfront cost.
          </p>
          <p className="muted">
            Inspired by the San Marcos River, we are clear, dependable, and part of everyday life here. Our service is built the same way: reliable,
            transparent, and tailored to local offices, gyms, schools, and businesses.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#solutions" className="cta-btn btn--md">See Features</a>
            <a href="#contact" className="cta-btn cta-btn--ghost btn--md">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
