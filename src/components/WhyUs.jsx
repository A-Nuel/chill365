import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="whyus" id="quote">
      <div className="container whyus-inner">
        <motion.div
          className="whyus-copy"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Why Chorlton trusts us</div>
          <h2>20 years of keeping this neighbourhood comfortable.</h2>
          <ul className="trust-list">
            <li><ShieldCheck size={18} /> Fully insured, experienced engineers</li>
            <li><Clock size={18} /> Fast turnarounds — most repairs same visit</li>
            <li><MapPin size={18} /> Local to Chorlton, covering Greater Manchester</li>
          </ul>
          <p className="whyus-note">
            Want a rough price before you commit to anything? Open the assistant in the
            corner — it'll ask a couple of quick questions and give you an estimate range on the spot.
          </p>
        </motion.div>
        <motion.div
          className="whyus-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="gauge-ring">
            <div className="gauge-core">
              <span className="gauge-temp">18°</span>
              <span className="gauge-label">optimal comfort</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .whyus { padding: 90px 0 110px; }
        .whyus-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .whyus-copy h2 {
          font-size: clamp(1.7rem, 3.2vw, 2.3rem);
          margin: 16px 0 26px;
          max-width: 480px;
        }
        .trust-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 14px; }
        .trust-list li { display: flex; align-items: center; gap: 10px; color: var(--frost); font-size: 15px; }
        .trust-list svg { color: var(--cyan); flex-shrink: 0; }
        .whyus-note { max-width: 440px; }
        .whyus-visual { display: flex; justify-content: center; }
        .gauge-ring {
          width: 280px; height: 280px;
          border-radius: 50%;
          background: conic-gradient(from 200deg, #5EEAD4, #F5A623, #5EEAD4);
          padding: 6px;
          display: flex; align-items: center; justify-content: center;
        }
        .gauge-core {
          width: 100%; height: 100%;
          border-radius: 50%;
          background: var(--deep);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 6px;
        }
        .gauge-temp { font-family: var(--display); font-size: 52px; font-weight: 700; }
        .gauge-label { font-size: 13px; color: var(--frost-dim); letter-spacing: 0.04em; }
        @media (max-width: 860px) {
          .whyus-inner { grid-template-columns: 1fr; }
          .gauge-ring { width: 220px; height: 220px; }
        }
      `}</style>
    </section>
  );
}
