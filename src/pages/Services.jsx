import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wind, Wrench, CalendarCheck, Building2, CheckCircle, ArrowRight } from 'lucide-react';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const services = [
  {
    id: 'install',
    icon: Wind,
    title: 'New Installations',
    tagline: 'Designed for your space. Fitted to last.',
    desc: `Whether you need a single-room split system or a whole-building solution, we design and install the right system for your property — not the most expensive one. Every install is fully commissioned, tested and handed over with documentation.`,
    points: ['Free site survey and system design', 'All major brands: Mitsubishi, Daikin, Samsung, LG', 'Fully F-Gas certified engineers', 'Clean, tidy installation — we leave as we find', 'Full warranty registration and handover pack'],
    estimate: '£1,000 – £2,500 per unit, fully installed',
  },
  {
    id: 'repair',
    icon: Wrench,
    title: 'Repairs',
    tagline: 'Fast diagnosis. Most fixes in one visit.',
    desc: `AC stopped working in a heatwave? We carry common parts on the van and aim to fix on first visit. We'll give you an honest assessment — sometimes a repair isn't worth it, and we'll tell you that too rather than patch a unit that's on its way out.`,
    points: ['Same or next-day appointments where possible', 'Van-stocked with common parts and refrigerants', 'All makes and models', 'Clear quote before any work starts', 'No call-out fee if we fix it'],
    estimate: '£80 – £350 for most common repairs',
  },
  {
    id: 'servicing',
    icon: CalendarCheck,
    title: 'Servicing & Maintenance',
    tagline: 'Keep it running. Keep it under warranty.',
    desc: `Annual servicing is the single best thing you can do for an AC system. It maintains efficiency, extends the unit's life, and keeps most manufacturer warranties valid. We'll also spot any issues before they become expensive.`,
    points: ['Coil clean, filter service, drain flush', 'Refrigerant level check', 'Full electrical and controls check', 'Written service report', 'Reminder service — we\'ll contact you when you\'re due'],
    estimate: '£80 – £150 per unit for a full service',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Cooling',
    tagline: 'Scoped properly. Fitted professionally.',
    desc: `From small offices to large commercial premises — restaurants, retail, data rooms, warehouses. We understand the operational constraints of commercial work: out-of-hours installs, minimum disruption, and systems that simply don't fail.`,
    points: ['Full site survey and CAD-based system design', 'VRF/VRV multi-zone systems', 'Planned preventative maintenance contracts', 'Emergency callout cover', 'CIBSE-compliant installations'],
    estimate: 'Commercial projects quoted individually after site survey',
  },
];

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header section-warm">
        <div className="container" style={{ paddingTop: 'clamp(110px,15vw,160px)', paddingBottom: 'clamp(60px,8vw,100px)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="eyebrow eyebrow-dark">Services</div>
            <div className="gold-rule" />
            <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', maxWidth: 640, marginBottom: 20, color: 'var(--charcoal)' }}>
              Everything air conditioning. Done properly.
            </h1>
            <p style={{ fontSize: 18, color: '#6A6560', maxWidth: 520, lineHeight: 1.75 }}>
              Twenty years of installations, repairs and maintenance across Greater Manchester —
              domestic and commercial, small and large.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={i % 2 === 0 ? 'section-dark' : 'section-warm'}
          style={{ padding: 'var(--section-pad) 0' }}
        >
          <div className="container srv-row">
            <motion.div {...inView()} className="srv-copy">
              <div className={`eyebrow ${i % 2 === 0 ? '' : 'eyebrow-dark'}`}>
                0{i + 1} — {s.title}
              </div>
              <div className="gold-rule" />
              <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: 16, color: i % 2 === 0 ? 'var(--warm-white)' : 'var(--charcoal)' }}>
                {s.tagline}
              </h2>
              <p style={{ color: i % 2 === 0 ? 'rgba(245,240,235,0.65)' : '#6A6560', lineHeight: 1.8, marginBottom: 28 }}>{s.desc}</p>
              <ul className="srv-points">
                {s.points.map(p => (
                  <li key={p}>
                    <CheckCircle size={15} color="var(--teal)" />
                    <span style={{ color: i % 2 === 0 ? 'rgba(245,240,235,0.8)' : '#4A4540' }}>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="srv-estimate" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(200,136,42,0.08)', borderColor: i % 2 === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(200,136,42,0.25)' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: i % 2 === 0 ? 'var(--teal)' : 'var(--amber)', fontFamily: 'var(--mono)' }}>Typical cost</span>
                <strong style={{ color: i % 2 === 0 ? 'var(--warm-white)' : 'var(--charcoal)' }}>{s.estimate}</strong>
                <span style={{ fontSize: 12, color: i % 2 === 0 ? 'rgba(245,240,235,0.45)' : '#9A9590' }}>Confirmed by a technician on-site — every job is different.</span>
              </div>
              <Link to="/contact" className="btn btn-amber" style={{ marginTop: 32 }}>
                Get a quote for {s.title.toLowerCase()} <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div {...inView(0.15)} className="srv-icon-block" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(28,28,28,0.06)' }}>
              <s.icon size={72} color={i % 2 === 0 ? 'rgba(74,191,173,0.4)' : 'rgba(200,136,42,0.4)'} strokeWidth={1} />
              <span style={{ fontFamily: 'var(--serif)', fontSize: 80, fontWeight: 700, color: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(28,28,28,0.06)', lineHeight: 1, userSelect: 'none' }}>0{i+1}</span>
            </motion.div>
          </div>
        </section>
      ))}

      <style>{`
        .srv-row { display: flex; gap: 80px; align-items: center; }
        .srv-copy { flex: 1.2; }
        .srv-icon-block {
          flex: 0.8; border-radius: 12px; min-height: 280px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 16px; border: 1px solid rgba(255,255,255,0.05);
        }
        .srv-points { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .srv-points li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.5; }
        .srv-estimate { border: 1px solid; border-radius: 8px; padding: 20px 24px; display: flex; flex-direction: column; gap: 6px; }
        .srv-estimate strong { font-family: var(--serif); font-size: 19px; }
        @media (max-width: 820px) { .srv-row { flex-direction: column; gap: 40px; } .srv-icon-block { width: 100%; min-height: 160px; } }
      `}</style>
    </>
  );
}
