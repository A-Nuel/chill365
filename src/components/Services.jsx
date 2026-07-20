import { motion } from 'framer-motion';
import { Wind, Wrench, CalendarCheck, Building2 } from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'New installations',
    desc: 'Split, multi-split and ducted systems fitted right the first time — sized properly for your space, not oversold.',
  },
  {
    icon: Wrench,
    title: 'Repairs',
    desc: "Unit playing up? We diagnose fast and carry common parts on the van, so most repairs are done in one visit.",
  },
  {
    icon: CalendarCheck,
    title: 'Servicing & maintenance',
    desc: 'Annual servicing keeps units efficient and under warranty. We\'ll remind you before summer hits.',
  },
  {
    icon: Building2,
    title: 'Commercial cooling',
    desc: 'Offices, restaurants, server rooms, retail — we scope and fit systems that keep businesses running.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="eyebrow">What we do</div>
        <h2 className="services-title">Four ways we keep Manchester cool</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <s.icon size={22} color="var(--cyan)" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services { padding: 90px 0; }
        .services-title {
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          margin: 16px 0 44px;
          max-width: 600px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .service-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 28px 22px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .service-card:hover { border-color: rgba(94,234,212,0.4); transform: translateY(-3px); }
        .service-card h3 {
          font-size: 17px;
          margin: 16px 0 8px;
        }
        .service-card p { font-size: 14px; }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
