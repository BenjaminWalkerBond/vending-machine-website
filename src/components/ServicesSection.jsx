import React, { useEffect, useState, useRef } from "react";
import coolerImg from "../assets/micromart_side_view_transparent.png";
import compactStockwellImg from "../assets/compact_stockwell.png";
import hahaDoubledoorImg from "../assets/haha_double_door_400x400.png";

export default function ServicesSection() {
  const slides = [
    {
      key: "single",
      title: "Refrigerated Smart Cooler",
      subtitle: "Cold drinks, snacks & meals",
      bullets: ["Cashless checkout", "Secure access", "Installs in minutes"],
      img: coolerImg,
    },
    {
      key: "double",
      title: "Large Double Door Smart Coolers",
      subtitle: "The larger anything machine",
      bullets: ["Great for 100+ people", "More facings, fewer restocks", "Same live monitoring"],
      img: hahaDoubledoorImg,  
    },
    {
      key: "pico",
      title: "Compact Stockwell Cooler",
      subtitle: "For small spaces",
      bullets: ["Countertop footprint", "Ideal for lobbies & studios", "Plug-and-play"],
      img: compactStockwellImg,
    },
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const viewportRef = useRef(null);
  const ignoreScrollRef = useRef(false);
  const clearTimerRef = useRef(0);

  const DURATION = 600;

  function scrollToSlide(i, behavior = "smooth") {
    const vp = viewportRef.current;
    if (!vp) return;

    ignoreScrollRef.current = behavior === "smooth";

    vp.scrollTo({
      left: i * vp.clientWidth,
      behavior: behavior === "smooth" ? "smooth" : "auto",
    });

    clearTimeout(clearTimerRef.current);
    if (ignoreScrollRef.current) {
      clearTimerRef.current = setTimeout(() => {
        ignoreScrollRef.current = false;
      }, DURATION + 80);
    }
  }

  const goTo = (to) => {
    const target = (to + total) % total;
    setIndex(target);
    scrollToSlide(target, "smooth");
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);


  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);


  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    let rAF = 0;
    const onScroll = () => {
      if (ignoreScrollRef.current) return;
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const w = vp.clientWidth || 1;
        const i = Math.round(vp.scrollLeft / w);
        const clamped = Math.max(0, Math.min(total - 1, i));
        if (clamped !== index) setIndex(clamped);
      });
    };

    vp.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      vp.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAF);
    };
  }, [index, total]);

  useEffect(() => {
    scrollToSlide(index, "auto");
    
  }, []);


  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const onResize = () => scrollToSlide(index, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <section id="services" className="section services">
      <h2 className="rule-coral" style={{ marginBottom: 12 }}>Some of Our Services</h2>
      <p className="lead">From compact coolers to double-door units, choose the right fit for your space.</p>

      <div className="carousel">
        <div
          className="carousel-viewport"
          ref={viewportRef}
          role="region"
          aria-label="Services carousel"
          tabIndex={0}
        >
          <div className="carousel-slides">
            {slides.map((s) => (
              <article key={s.key} className="carousel-slide">
                <div className="slide-grid">
                  <div className="slide-copy">
                    <h3 className="slide-title">{s.title}</h3>
                    <ul className="slide-bullets">
                      {s.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <a href="#contact" className="cta-btn btn--md">Get a Free Placement</a>
                    </div>
                  </div>
                  <div className="slide-media">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className="carousel-nav prev" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-nav next" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="carousel-dots" role="tablist" aria-label="Slide dots">
  {slides.map((_, i) => (
   
    <button
      key={i}
      className={`dot ${i === index ? "is-active" : ""}`}
      onClick={() => goTo(i)}
      role="tab"
      aria-selected={i === index}
      aria-label={`Go to slide ${i + 1}`}
    />
  ))}
</div>

      </div>
    </section>
  );
}
