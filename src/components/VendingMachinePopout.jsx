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
          <div className="vending-popout-desc">Our vending machines and services can be customized to fit your unique space and dietary preferences. Large area? Double Door! Small Area? Pico Cooler!</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Appear Premium <span role="img" aria-label="morale">😊</span></div>
          <div className="vending-popout-desc">Forget the traditional bag of doritos! Offer a selection of premium items that cater to the varied needs of your customers, employees, or students. </div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Guaranteed New <span role="img" aria-label="maintenance">🛠️</span></div>
          <div className="vending-popout-desc">Every machine installed is guaranteed new. Additionally, our team stocks, maintains, and handles all repairs.</div>
        </div>
      </div>
      <div className="vending-popout-center">
        <div className="vending-popout-subtitle"><h2>Fully Stocked & Maintained Machines</h2></div>
        <img src={micromartImage} alt="Micromart Vending Machine" className="vending-popout-img" style={{ transform: 'scale(1.15)' }} />
        <h1 className="vending-popout-main-title">We Supply, Repair, and Stock Smart Coolers</h1>
      </div>
      <div className="vending-popout-right">
        <div className="vending-feature-box">
          <div className="vending-popout-title">Enhance Your Space <span role="img" aria-label="environment">🚶‍♂️</span></div>
          <div className="vending-popout-desc">Give your occupants the convenience of fresh food, beverages, or convenience items just steps away. Your resident forgot to buy laundry pods? Guess what, your apartment complex has them in the lobby!</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Live Monitoring <span role="img" aria-label="monitoring">📊</span></div>
          <div className="vending-popout-desc">With 4G connectivity, we monitor inventory and sales, ensuring no machine goes unstocked.</div>
        </div>
        <div className="vending-feature-box">
          <div className="vending-popout-title">Customer-Driven Products <span role="img" aria-label="insights">📈</span></div>
          <div className="vending-popout-desc">We leverage detailed reports from our monitoring system to track product preferences and adjust offerings based on real-time customer demand.</div>
        </div>
      </div>
    </div>
    <WaveBackground style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '120px', zIndex: 0, pointerEvents: 'none' }} />
  </div>
);

export default VendingMachinePopout;
