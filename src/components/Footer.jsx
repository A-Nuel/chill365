import { Link } from 'react-router-dom';
import { Snowflake, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Snowflake size={16} color="var(--teal)" />
              Chill<em>365</em>
            </div>
            <p>Manchester's trusted air conditioning specialists. Installation, repair and maintenance — done right, first time.</p>
            <div className="footer-contact-list">
              <a href="tel:07841666401"><Phone size={14} /> 07841 666401</a>
              <a href="mailto:info@chill365.co.uk"><Mail size={14} /> info@chill365.co.uk</a>
              <span><MapPin size={14} /> Chorlton-cum-Hardy, M21</span>
            </div>
          </div>
          <div className="footer-links-col">
            <div className="footer-col-title">Services</div>
            <Link to="/services#install">New Installations</Link>
            <Link to="/services#repair">Repairs</Link>
            <Link to="/services#servicing">Maintenance</Link>
            <Link to="/services#commercial">Commercial</Link>
          </div>
          <div className="footer-links-col">
            <div className="footer-col-title">Company</div>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://wa.me/447841666401" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Chill365 Ltd. All rights reserved.</span>
          <span>Registered in England & Wales</span>
        </div>
      </div>
      <style>{`
        .footer {
          background: #141414;
          padding: 80px 0 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 28px;
        }
        .footer-brand {
          font-family: var(--serif); font-size: 22px; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 16px;
        }
        .footer-brand em { font-style: normal; color: var(--teal); }
        .footer-brand-col p { font-size: 14px; color: var(--stone); line-height: 1.7; max-width: 300px; margin-bottom: 24px; }
        .footer-contact-list { display: flex; flex-direction: column; gap: 10px; }
        .footer-contact-list a, .footer-contact-list span {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--stone);
          transition: color 0.2s;
        }
        .footer-contact-list a:hover { color: var(--warm-white); }
        .footer-col-title {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--teal);
          margin-bottom: 20px;
        }
        .footer-links-col { display: flex; flex-direction: column; gap: 12px; }
        .footer-links-col a {
          font-size: 14px; color: var(--stone); transition: color 0.2s;
        }
        .footer-links-col a:hover { color: var(--warm-white); }
        .footer-bottom {
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;
          font-size: 12px; color: rgba(154,149,144,0.6);
        }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand-col { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
