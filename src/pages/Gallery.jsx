import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const projects = [
  { id: 1, cat: 'Residential', title: 'Split system — Chorlton terrace', desc: 'Single-room Mitsubishi install, sympathetically positioned in a period property.', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80', wide: true },
  { id: 2, cat: 'Commercial', title: 'Office cooling — City centre', desc: 'Four-unit VRF system across two floors, installed over a weekend.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', wide: false },
  { id: 3, cat: 'Residential', title: 'Multi-room — Didsbury semi', desc: 'Three-room Daikin multi-split system, single outdoor unit.', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=700&q=80', wide: false },
  { id: 4, cat: 'Commercial', title: 'Restaurant — Withington', desc: 'Kitchen and front-of-house cooling designed around a commercial kitchen heat load.', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=80', wide: false },
  { id: 5, cat: 'Residential', title: 'New build — Sale', desc: 'Whole-house cooling with concealed cassette units throughout.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80', wide: false },
  { id: 6, cat: 'Commercial', title: 'Server room — Salford Quays', desc: 'Precision cooling with redundant units and 24/7 monitoring.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80', wide: true },
];

const cats = ['All', 'Residential', 'Commercial'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const shown = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <>
      {/* HEADER */}
      <section className="section-warm" style={{ paddingTop: 'clamp(110px,15vw,160px)', paddingBottom: 'clamp(60px,8vw,90px)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="eyebrow eyebrow-dark">Our work</div>
            <div className="gold-rule" />
            <h1 className="display" style={{ fontSize: 'clamp(2.4rem,5.5vw,4rem)', maxWidth: 580, color: 'var(--charcoal)', marginBottom: 24 }}>
              Twenty years of projects across Manchester.
            </h1>
            <p style={{ fontSize: 17, color: '#6A6560', maxWidth: 500, lineHeight: 1.8, marginBottom: 36 }}>
              From single-room domestic installs to large commercial fit-outs.
            </p>
            <div className="filter-tabs">
              {cats.map(c => (
                <button key={c} className={`filter-tab ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="section-dark" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container">
          <div className="gallery-grid">
            <AnimatePresence>
              {shown.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`gallery-item ${p.wide ? 'wide' : ''}`}
                  onClick={() => setLightbox(p)}
                >
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-cat">{p.cat}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={20} /></button>
              <img src={lightbox.img} alt={lightbox.title} />
              <div className="lightbox-info">
                <span className="gallery-cat">{lightbox.cat}</span>
                <h3>{lightbox.title}</h3>
                <p>{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-warm" style={{ padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="container" style={{ display: 'flex', gap: 40, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <motion.div {...inView()}>
            <h2 className="display" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--charcoal)', marginBottom: 10 }}>
              Want your building in here?
            </h2>
            <p style={{ color: '#6A6560' }}>Get a quote today — free site survey for all new installations.</p>
          </motion.div>
          <Link to="/contact" className="btn btn-amber">Book a survey <ArrowRight size={15} /></Link>
        </div>
      </section>

      <style>{`
        .filter-tabs { display: flex; gap: 8px; }
        .filter-tab { padding: 10px 22px; border-radius: 40px; font-size: 13px; font-weight: 600; border: 1px solid rgba(28,28,28,0.2); background: transparent; color: #6A6560; cursor: pointer; transition: all 0.2s; }
        .filter-tab.active, .filter-tab:hover { background: var(--charcoal); color: var(--warm-white); border-color: var(--charcoal); }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .gallery-item { position: relative; border-radius: 8px; overflow: hidden; cursor: pointer; aspect-ratio: 4/3; }
        .gallery-item.wide { grid-column: span 2; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .gallery-item:hover img { transform: scale(1.04); }
        .gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(20,20,20,0.9) 0%, transparent 55%);
          padding: 24px; display: flex; flex-direction: column; justify-content: flex-end;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-cat { font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--teal); margin-bottom: 6px; }
        .gallery-overlay h3 { font-family: var(--serif); font-size: 17px; color: var(--warm-white); margin-bottom: 6px; }
        .gallery-overlay p { font-size: 13px; color: rgba(245,240,235,0.7); line-height: 1.5; }
        .lightbox { position: fixed; inset: 0; background: rgba(10,10,10,0.92); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .lightbox-inner { background: var(--charcoal-soft); border-radius: 12px; overflow: hidden; max-width: 860px; width: 100%; position: relative; }
        .lightbox-inner img { width: 100%; max-height: 520px; object-fit: cover; }
        .lightbox-close { position: absolute; top: 14px; right: 14px; background: rgba(0,0,0,0.6); color: var(--warm-white); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
        .lightbox-info { padding: 24px 28px; }
        .lightbox-info h3 { font-family: var(--serif); font-size: 20px; margin: 8px 0 8px; }
        .lightbox-info p { font-size: 14px; color: var(--stone); }
        @media (max-width: 720px) { .gallery-grid { grid-template-columns: 1fr 1fr; } .gallery-item.wide { grid-column: span 2; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr; } .gallery-item.wide { grid-column: span 1; } }
      `}</style>
    </>
  );
}
