import { Snowflake, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Snowflake size={18} color="var(--cyan)" />
          <span>Chill365 Ltd</span>
        </div>
        <div className="footer-contact">
          <span><Phone size={14} /> 07841 666401</span>
          <span><MapPin size={14} /> 9 Grange Rd, Chorlton-cum-Hardy, Manchester M21 9NZ</span>
        </div>
      </div>
      <style>{`
        .site-footer {
          border-top: 1px solid var(--line);
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-brand { display: flex; align-items: center; gap: 8px; font-family: var(--display); font-weight: 600; }
        .footer-contact { display: flex; gap: 24px; flex-wrap: wrap; font-size: 13px; color: var(--frost-dim); }
        .footer-contact span { display: flex; align-items: center; gap: 6px; }
      `}</style>
    </footer>
  );
}
