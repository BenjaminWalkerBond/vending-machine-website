import React, { useRef, useEffect } from 'react';
import micromartImage from '../assets/micromart_side_view_transparent.png';
import './VendingMachinePopout.css';

function WaveBackground({ style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 120;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = 20 * Math.sin((x / 100) + t) + 40 * Math.sin((x / 250) - t / 2) + 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = '#00bcd4';
      ctx.fill();
      ctx.restore();
      t += 0.003;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="wave-bg"
      style={style}
    />
  );
}

const VendingMachinePopout = () => (
  <div className="vending-popout-section">
    <div className="vending-popout-content">
      <div className="vending-popout-left">
        <div className="vending-feature-box">
          <div className="vending-popout-title">Customizable Machines <span role="img" aria-label="customize">👥</span></div>
          <div className="vending-popout-desc">Our vending machines and services can be customized to fit your unique space and dietary preferences.</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Boost Morale <span role="img" aria-label="morale">😊</span></div>
          <div className="vending-popout-desc">Offer a selection of healthy snacks that cater to the varied needs of your customers, employees, or students.</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Reliable Maintenance <span role="img" aria-label="maintenance">🛠️</span></div>
          <div className="vending-popout-desc">Our team ensures your vending machines are consistently stocked, maintained, and repaired to minimize downtime and keep your operations running smoothly.</div>
        </div>
      </div>
      <div className="vending-popout-center">
        <div className="vending-popout-subtitle"><h2>Fully Stocked & Maintained Machines</h2></div>
        <img src={micromartImage} alt="Micromart Vending Machine" className="vending-popout-img" style={{ transform: 'scale(1.15)' }} />
        <h1 className="vending-popout-main-title">We Service, Repair, and Supply Vending Machines</h1>
      </div>
      <div className="vending-popout-right">
        <div className="vending-feature-box">
          <div className="vending-popout-title">Enhanced Environment <span role="img" aria-label="environment">🚶‍♂️</span></div>
          <div className="vending-popout-desc">Enjoy the convenience of fresh food and beverages just steps away.</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Live Monitoring <span role="img" aria-label="monitoring">📊</span></div>
          <div className="vending-popout-desc">With 4G connectivity, our machines provide real-time updates on inventory and sales, allowing us to optimize machine performance.</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Data-Driven Insights <span role="img" aria-label="insights">📈</span></div>
          <div className="vending-popout-desc">Leverage detailed reports from our monitoring system to track product preferences and adjust offerings based on real-time customer demand.</div>
        </div>
      </div>
    </div>
    <WaveBackground style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '120px', zIndex: 0, pointerEvents: 'none' }} />
  </div>
);

export default VendingMachinePopout;
