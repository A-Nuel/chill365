import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const jobTypes = ['New installation', 'Repair', 'Servicing / maintenance', 'Commercial project', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', jobType: '', message: '' });
  const [sent, setSent] = useState(false);

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function handleSubmit(e) {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = encodeURIComponent(
      `Hi Chill365 — new enquiry from the website:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nJob type: ${form.jobType}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/447841666401?text=${msg}`, '_blank');
    setSent(true);
  }

  return (
    <>
      {/* HEADER */}
      <section className="section-warm" style={{ paddingTop: 'clamp(110px,15vw,160px)', paddingBottom: 'clamp(60px,8vw,90px)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="eyebrow eyebrow-dark">Get in touch</div>
            <div className="gold-rule" />
            <h1 className="display" style={{ fontSize: 'clamp(2.4rem,5.5vw,4rem)', maxWidth: 560, color: 'var(--charcoal)', marginBottom: 16 }}>
              Let's talk about your project.
            </h1>
            <p style={{ fontSize: 17, color: '#6A6560', maxWidth: 440, lineHeight: 1.8 }}>
              Fill in the form and we'll pick it up on WhatsApp. Or call us directly if it's urgent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-dark" style={{ padding: 'var(--section-pad) 0' }}>
        <div className="container contact-grid">
          {/* LEFT — DETAILS */}
          <motion.div {...inView()} className="contact-details">
            <h2 className="display" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: 32 }}>
              Ways to reach us.
            </h2>
            <div className="contact-info-list">
              <a href="tel:07841666401" className="contact-info-item">
                <div className="ci-icon"><Phone size={18} /></div>
                <div>
                  <div className="ci-label">Phone</div>
                  <div className="ci-value">07841 666401</div>
                </div>
              </a>
              <a href="mailto:info@chill365.co.uk" className="contact-info-item">
                <div className="ci-icon"><Mail size={18} /></div>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">info@chill365.co.uk</div>
                </div>
              </a>
              <a href="https://wa.me/447841666401" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="ci-icon whatsapp"><MessageCircle size={18} /></div>
                <div>
                  <div className="ci-label">WhatsApp</div>
                  <div className="ci-value">Message us directly</div>
                </div>
              </a>
              <div className="contact-info-item">
                <div className="ci-icon"><MapPin size={18} /></div>
                <div>
                  <div className="ci-label">Based in</div>
                  <div className="ci-value">Chorlton-cum-Hardy, M21<br /><span style={{fontSize:13,color:'var(--stone)'}}>Covering Greater Manchester</span></div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="ci-icon"><Clock size={18} /></div>
                <div>
                  <div className="ci-label">Hours</div>
                  <div className="ci-value">Mon–Fri 8am–6pm<br /><span style={{fontSize:13,color:'var(--stone)'}}>Sat by appointment · AI assistant 24/7</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div {...inView(0.1)} className="contact-form-wrap">
            {sent ? (
              <div className="sent-state">
                <CheckCircle size={44} color="var(--teal)" />
                <h3 className="display" style={{ fontSize: '1.8rem', marginTop: 20, marginBottom: 12 }}>Sent to WhatsApp.</h3>
                <p style={{ color: 'var(--stone)' }}>Your message has been sent. The team will come back to you shortly to confirm.</p>
                <button className="btn btn-outline-light" style={{ marginTop: 28 }} onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2 className="display" style={{ fontSize: '1.7rem', marginBottom: 28 }}>Quick enquiry</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your name *</label>
                    <input required value={form.name} onChange={e => set('name', e.target.value)} placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label>Phone number *</label>
                    <input required value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="07700 000000" type="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input value={form.email} onChange={e => set('email', e.target.value)} placeholder="john@example.com" type="email" />
                </div>
                <div className="form-group">
                  <label>Type of job *</label>
                  <select required value={form.jobType} onChange={e => set('jobType', e.target.value)}>
                    <option value="">Select one…</option>
                    {jobTypes.map(j => <option key={j} value={j}>{j}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell us more (optional)</label>
                  <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="e.g. 3-bed semi in Didsbury, want to cool 2 rooms, existing unit needs a service too…" rows={4} />
                </div>
                <button type="submit" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                  <MessageCircle size={17} /> Send via WhatsApp
                </button>
                <p style={{ fontSize: 12, color: 'var(--stone)', textAlign: 'center', marginTop: 12 }}>
                  Your enquiry opens in WhatsApp so the team can pick it up instantly.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 60px; align-items: flex-start; }
        .contact-info-list { display: flex; flex-direction: column; gap: 6px; }
        .contact-info-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px; border-radius: 8px; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06); color: inherit;
          transition: border-color 0.2s;
        }
        .contact-info-item:hover { border-color: rgba(74,191,173,0.3); }
        .ci-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(74,191,173,0.12); color: var(--teal); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ci-icon.whatsapp { background: rgba(37,211,102,0.12); color: #25D366; }
        .ci-label { font-size: 11px; color: var(--stone); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; font-family: var(--mono); }
        .ci-value { font-size: 15px; color: var(--warm-white); font-weight: 500; line-height: 1.5; }
        .contact-form-wrap { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: clamp(24px,4vw,44px); }
        .contact-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 7px; }
        .form-group label { font-size: 12px; color: var(--stone); letter-spacing: 0.08em; text-transform: uppercase; font-family: var(--mono); }
        .form-group input, .form-group select, .form-group textarea {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: var(--warm-white); border-radius: 6px; padding: 12px 14px;
          font-family: var(--sans); font-size: 15px;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--teal); }
        .form-group select option { background: var(--charcoal); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .sent-state { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 40px 20px; }
        @media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
