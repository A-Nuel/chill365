import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="eyebrow">Chorlton-cum-Hardy · Greater Manchester · Est. 20+ yrs</div>
          <h1 className="hero-title">
            Cooling that <span className="grad-word">thinks</span> ahead.
          </h1>
          <p className="hero-sub">
            Chill365 has fitted, fixed and serviced air conditioning across Manchester for two decades.
            Now our comfort assistant gets you a quote, books your slot, and gets it done —
            day or night, before you've finished your coffee.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">
              Get an instant estimate <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn btn-ghost">
              See our work
            </a>
          </div>
          <div className="hero-stats">
            <div><strong>20+</strong><span>years installing</span></div>
            <div><strong>24/7</strong><span>assistant on call</span></div>
            <div><strong>M21</strong><span>local, Chorlton-based</span></div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 140px 0 90px;
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(94,234,212,0.16) 0%, rgba(245,166,35,0.05) 45%, transparent 70%);
          filter: blur(10px);
          pointer-events: none;
        }
        .hero-inner { position: relative; z-index: 1; max-width: 760px; }
        .hero-title {
          font-size: clamp(2.6rem, 6vw, 4.4rem);
          margin: 20px 0 24px;
        }
        .grad-word {
          background: linear-gradient(90deg, #5EEAD4, #F5A623);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-sub {
          font-size: 18px;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
        .hero-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }
        .hero-stats div { display: flex; flex-direction: column; }
        .hero-stats strong {
          font-family: var(--display);
          font-size: 26px;
          color: var(--cyan);
        }
        .hero-stats span { font-size: 13px; color: var(--frost-dim); }
        @media (max-width: 640px) {
          .hero { padding: 110px 0 60px; }
          .hero-stats { gap: 28px; }
        }
      `}</style>
    </section>
  );
}
