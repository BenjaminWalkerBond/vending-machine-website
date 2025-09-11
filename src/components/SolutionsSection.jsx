import { Cog, Sparkles, ShieldCheck, Building2, Signal, TrendingUp } from "lucide-react";

export default function SolutionsSection() {
  const steps = [
    { n: 1, t: 'Install & Setup', b: 'We deliver and install at no cost, place the cooler where it fits best, and configure card readers and connectivity.' },
    { n: 2, t: 'Stock & Launch',  b: 'Initial stock tailored to your space. We handle ongoing replenishment and equipment upkeep.' },
    { n: 3, t: 'Monitor & Optimize', b: '4G live monitoring, sales insights, and product swaps based on what people actually buy.' },
  ];

  const features = [
    { icon: Cog, t: 'Customizable Machines', b: 'Double Door for big spaces, Pico Cooler for compact spots, and product mixes for dietary preferences.' },
    { icon: Sparkles, t: 'Premium Appearance', b: 'A curated selection that feels modern, not “junky vending.”' },
    { icon: ShieldCheck, t: 'Guaranteed New', b: 'Every install is a brand-new machine. We handle maintenance and repairs.' },
    { icon: Building2, t: 'Enhance Your Space', b: 'Convenience items on site. Fresh food, beverages, even essentials like laundry pods for residents.' },
    { icon: Signal, t: 'Live Monitoring', b: '4G connectivity tracks inventory so machines don’t sit empty.' },
    { icon: TrendingUp, t: 'Customer-Driven Products', b: 'We adjust offerings from real usage data to keep favorites in stock.' },
  ];

 return (
  <section id="solutions" className="section sandbar solutions">
    <h2 className="rule-coral" style={{ marginBottom: 12 }}>The Smart Cooler</h2>
    <p className="lead">Zero cost to the business. Transparent pricing to customers. We manage everything end-to-end.</p>

    <div className="solutions-grid">
     
      {steps.map((s) => (
        <div key={`step-${s.n}`} className="step">
          <div className="step-badge" aria-hidden="true">{s.n}</div>
          <div className="step-body">
            <h3 className="step-title">{s.t}</h3>
            <p className="muted">{s.b}</p>
          </div>
        </div>
      ))}

      
      <div className="solutions-divider" role="separator" aria-label="Setup divider" />

     
      {features.map((f) => (
        <div key={f.t} className="feature-card">
          <div className="icon-badge" aria-hidden="true">
            <f.icon className="icon" strokeWidth={2} />
          </div>
          <h3 className="feature-title">{f.t}</h3>
          <p className="muted">{f.b}</p>
        </div>
      ))}
    </div>
  </section>
);

}
