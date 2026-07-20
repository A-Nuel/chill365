import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Wrench, CalendarCheck, Building2, Star, ChevronRight } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const services = [
  { icon: Wind, title: 'New Installations', desc: 'Split, multi-split and ducted systems sized right for your space.', href: '/services#install' },
  { icon: Wrench, title: 'Repairs', desc: 'Fast diagnosis, van-stocked with common parts. Most fixes in one visit.', href: '/services#repair' },
  { icon: CalendarCheck, title: 'Maintenance', desc: 'Annual servicing keeps your system efficient and under warranty.', href: '/services#servicing' },
  { icon: Building2, title: 'Commercial', desc: 'Offices, restaurants, server rooms — we scope and fit.', href: '/services#commercial' },
];

const stats = [
  { value: '20+', label: 'Years in Manchester' },
  { value: '500+', label: 'Systems installed' },
  { value: '24/7', label: 'AI assistant' },
  { value: 'M21', label: 'Local, Chorlton-based' },
];

const reviews = [
  { name: 'James R.', loc: 'Chorlton', text: 'Called on a Tuesday, fitted by Thursday. Immaculate job, tidy workers, exactly what you want from a local firm.' },
  { name: 'Sarah M.', loc: 'Didsbury', text: 'Used them for our office fit-out — three units, all running perfectly. Professional from quote to sign-off.' },
  { name: 'Tom H.', loc: 'Whalley Range', text: 'Best AC company I\'ve dealt with in Manchester. Honest pricing, no upselling, brilliant result.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero grain" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg-glow" aria-hidden />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(130px, 18vw, 180px)', paddingBottom: 'clamp(80px, 12vw, 130px)' }}>
          <motion.div {...fade(0)} className="eyebrow" style={{ marginBottom: 28 }}>
            Chorlton-cum-Hardy · Greater Manchester
          </motion.div>
          <motion.h1 {...fade(0.1)} className="display home-hero-title">
            Air conditioning<br />
            <em>done properly.</em>
          </motion.h1>
          <motion.p {...fade(0.2)} className="home-hero-sub">
            Chill365 has installed, repaired and maintained air conditioning systems across Manchester for over 20 years.
            Talk to Frost, our AI assistant — get a quote, book a callback, or just ask a question.
          </motion.p>
          <motion.div {...fade(0.3)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-amber">Book a survey <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn btn-outline-light">Our services</Link>
          </motion.div>
        </div>
      </section>

      {/* STATS BAND */}
      <div className="stats-band">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...inView(i * 0.07)} className="stat-item">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="section-warm" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <motion.div {...inView()}>
            <div className="eyebrow eyebrow-dark">What we do</div>
            <div className="gold-rule" />
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: 520, marginBottom: 56 }}>
              Everything your building needs to stay cool.
            </h2>
          </motion.div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={s.title} {...inView(i * 0.08)}>
                <Link to={s.href} className="service-card-warm">
                  <s.icon size={22} color="var(--amber)" />
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="card-cta">Learn more <ChevronRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section-dark about-strip" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container about-strip-inner">
          <motion.div {...inView()} style={{ flex: 1 }}>
            <div className="eyebrow">Our story</div>
            <div className="gold-rule" />
            <h2 className="display" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 20 }}>
              Two decades of keeping Manchester comfortable.
            </h2>
            <p style={{ color: 'rgba(245,240,235,0.65)', maxWidth: 480, lineHeight: 1.8, marginBottom: 32 }}>
              We started in Chorlton and we've stayed local — because local means we show up fast, we know
              the housing stock, and we stand behind every job we do.
            </p>
            <Link to="/about" className="btn btn-outline-light">About Chill365 <ArrowRight size={15} /></Link>
          </motion.div>
          <motion.div {...inView(0.15)} className="about-strip-visual">
            <div className="about-number-card"><span>20</span><small>years</small></div>
            <div className="about-tag">Fully insured</div>
            <div className="about-tag">F-Gas certified</div>
            <div className="about-tag">Greater Manchester</div>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-warm" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <motion.div {...inView()} style={{ marginBottom: 48 }}>
            <div className="eyebrow eyebrow-dark">What clients say</div>
            <div className="gold-rule" />
            <h2 className="display" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Trusted across Greater Manchester.
            </h2>
          </motion.div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <motion.div key={r.name} {...inView(i * 0.1)} className="review-card">
                <div className="review-stars">{[...Array(5)].map((_, j) => <Star key={j} size={13} fill="var(--amber)" color="var(--amber)" />)}</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author"><strong>{r.name}</strong><span>{r.loc}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band-inner">
          <motion.div {...inView()}>
            <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Ready to get started?
            </h2>
            <p>Talk to Frost — our AI assistant will take your details and pass you straight through to the team on WhatsApp.</p>
          </motion.div>
          <motion.div {...inView(0.1)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', flexShrink: 0 }}>
            <Link to="/contact" className="btn btn-amber">Get a free quote <ArrowRight size={15} /></Link>
            <a href="https://wa.me/447841666401" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">WhatsApp us</a>
          </motion.div>
        </div>
      </section>

      <style>{`
        .home-hero { background: var(--bg-dark); min-height: 100svh; display: flex; flex-direction: column; justify-content: center; }
        .hero-bg-glow {
          position: absolute; top: -10%; left: 40%; width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(74,191,173,0.13) 0%, rgba(200,136,42,0.06) 50%, transparent 72%);
          filter: blur(60px); pointer-events: none; z-index: 1;
        }
        .home-hero-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          margin-bottom: 28px; max-width: 720px;
        }
        .home-hero-title em { font-style: italic; color: var(--teal); }
        .home-hero-sub { font-size: clamp(16px, 2vw, 19px); color: rgba(245,240,235,0.65); max-width: 540px; line-height: 1.75; margin-bottom: 40px; }
        .stats-band {
          background: #141414; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; justify-content: center; flex-wrap: wrap;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center; padding: 32px 48px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .stat-item:last-child { border-right: none; }
        .stat-item strong { font-family: var(--serif); font-size: 36px; color: var(--warm-white); }
        .stat-item span { font-size: 12px; color: var(--stone); letter-spacing: 0.06em; margin-top: 4px; }
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .service-card-warm {
          display: flex; flex-direction: column; gap: 12px;
          background: #fff; border: 1px solid rgba(28,28,28,0.08);
          border-radius: 8px; padding: 28px 24px;
          color: var(--charcoal); transition: all 0.2s ease;
        }
        .service-card-warm:hover { border-color: var(--amber); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(200,136,42,0.1); }
        .service-card-warm h3 { font-family: var(--serif); font-size: 18px; font-weight: 600; }
        .service-card-warm p { font-size: 14px; color: #6A6560; line-height: 1.6; flex: 1; }
        .card-cta { font-size: 13px; font-weight: 600; color: var(--amber); display: flex; align-items: center; gap: 4px; }
        .about-strip-inner { display: flex; gap: 80px; align-items: center; flex-wrap: wrap; }
        .about-strip-visual { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; }
        .about-number-card {
          background: var(--teal); border-radius: 8px; padding: 24px 28px;
          display: flex; flex-direction: column; color: var(--ink);
        }
        .about-number-card span { font-family: var(--serif); font-size: 52px; font-weight: 700; line-height: 1; }
        .about-number-card small { font-size: 13px; font-weight: 600; letter-spacing: 0.06em; }
        .about-tag {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 40px; padding: 10px 18px; font-size: 13px; color: var(--stone);
        }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .review-card { background: #fff; border-radius: 8px; padding: 28px; }
        .review-stars { display: flex; gap: 3px; margin-bottom: 14px; }
        .review-text { font-size: 15px; color: #3A3530; line-height: 1.7; margin-bottom: 20px; font-style: italic; }
        .review-author { display: flex; gap: 8px; align-items: center; font-size: 13px; }
        .review-author strong { color: var(--charcoal); }
        .review-author span { color: var(--stone); }
        .cta-band { background: var(--charcoal-soft); border-top: 1px solid rgba(255,255,255,0.06); padding: var(--section-pad) 0; }
        .cta-band-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .cta-band h2 { margin-bottom: 12px; }
        .cta-band p { color: rgba(245,240,235,0.6); max-width: 460px; }
        @media (max-width: 960px) { .services-grid { grid-template-columns: repeat(2,1fr); } .reviews-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } .stat-item { padding: 24px 28px; flex: 1 1 50%; } .cta-band-inner { flex-direction: column; } }
      `}</style>
    </>
  );
}
