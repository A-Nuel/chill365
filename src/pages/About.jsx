import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Users, MapPin } from 'lucide-react';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const values = [
  { icon: ShieldCheck, title: 'Honest assessments', desc: "If a repair isn't worth it, we'll tell you. We'd rather lose a small job than sell you something that fails in six months." },
  { icon: Award, title: 'Quality that lasts', desc: "Every installation is commissioned properly, documented and handed over with a service record. We're still fixing units we fitted 15 years ago." },
  { icon: Users, title: 'Local to Chorlton', desc: "We're based in M21. We know the housing stock, we show up fast, and you'll probably see our vans on Beech Road." },
  { icon: MapPin, title: 'Greater Manchester', desc: "We cover the whole of Greater Manchester — Didsbury, Withington, Sale, Salford, the city centre, and everywhere in between." },
];

const timeline = [
  { year: '2004', event: 'Chill365 founded in Chorlton. First year: domestic installs across M21 and M20.' },
  { year: '2008', event: 'Expanded into commercial work — first large office fitout in Manchester city centre.' },
  { year: '2014', event: 'Hit 200 active maintenance contracts. Took on our first full-time apprentice.' },
  { year: '2019', event: 'Became an approved installer for Mitsubishi Electric and Daikin in the North West.' },
  { year: '2024', event: 'Launched Frost — our AI assistant — to give customers instant quotes and booking, any time of day.' },
];

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="section-warm" style={{ paddingTop: 'clamp(110px,15vw,160px)', paddingBottom: 'clamp(60px,8vw,100px)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="eyebrow eyebrow-dark">Our story</div>
            <div className="gold-rule" />
            <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', maxWidth: 680, color: 'var(--charcoal)', marginBottom: 24 }}>
              A Manchester firm. Two decades of getting it right.
            </h1>
            <p style={{ fontSize: 18, color: '#6A6560', maxWidth: 560, lineHeight: 1.8 }}>
              Chill365 started in Chorlton in 2004 with a simple idea: do good work, be honest about pricing, and look after customers properly. That's still the whole business model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-dark" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <motion.div {...inView()} style={{ marginBottom: 56 }}>
            <div className="eyebrow">Twenty years</div>
            <div className="gold-rule" />
            <h2 className="display" style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>How we got here.</h2>
          </motion.div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <motion.div key={t.year} {...inView(i * 0.09)} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-event">{t.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-warm" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <motion.div {...inView()} style={{ marginBottom: 52 }}>
            <div className="eyebrow eyebrow-dark">How we work</div>
            <div className="gold-rule" />
            <h2 className="display" style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', color: 'var(--charcoal)' }}>
              What you can expect from us.
            </h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} {...inView(i * 0.09)} className="value-card">
                <v.icon size={22} color="var(--amber)" />
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--charcoal)', margin: '14px 0 10px' }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#6A6560', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS BAND */}
      <section className="section-dark certs-band">
        <div className="container">
          <motion.div {...inView()} style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Accreditations</div>
            <div className="gold-rule" style={{ margin: '24px auto' }} />
            <h2 className="display" style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>Certified where it counts.</h2>
          </motion.div>
          <div className="certs-grid">
            {['F-Gas Certified', 'Mitsubishi Approved', 'Daikin Approved', 'Fully Insured', 'REFCOM Registered', '5★ Reviews'].map((c, i) => (
              <motion.div key={c} {...inView(i * 0.07)} className="cert-badge">{c}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-warm" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container" style={{ display: 'flex', gap: 60, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <motion.div {...inView()}>
            <h2 className="display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--charcoal)', marginBottom: 12 }}>
              Let's talk about your project.
            </h2>
            <p style={{ color: '#6A6560', maxWidth: 420 }}>Whether it's a single room or a whole building, we'll give you a straight answer and an honest price.</p>
          </motion.div>
          <motion.div {...inView(0.1)}>
            <Link to="/contact" className="btn btn-amber">Get in touch <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        .timeline { display: flex; flex-direction: column; gap: 0; max-width: 680px; }
        .timeline-item { display: grid; grid-template-columns: 80px 24px 1fr; gap: 0 20px; align-items: flex-start; padding-bottom: 40px; position: relative; }
        .timeline-year { font-family: var(--mono); font-size: 13px; color: var(--teal); padding-top: 2px; }
        .timeline-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--amber); margin-top: 5px; position: relative; flex-shrink: 0; }
        .timeline-item:not(:last-child) .timeline-dot::after { content:''; position: absolute; left: 4px; top: 14px; width: 2px; height: calc(100% + 26px); background: rgba(255,255,255,0.08); }
        .timeline-event { font-size: 15px; color: rgba(245,240,235,0.75); line-height: 1.7; padding-top: 1px; }
        .values-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        .value-card { background: #fff; border-radius: 8px; padding: 28px; border: 1px solid rgba(28,28,28,0.07); }
        .certs-band { padding: var(--section-pad) 0; }
        .certs-grid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .cert-badge { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 40px; padding: 12px 24px; font-size: 14px; color: rgba(245,240,235,0.8); }
        @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr; } .timeline-item { grid-template-columns: 60px 16px 1fr; } }
      `}</style>
    </>
  );
}
