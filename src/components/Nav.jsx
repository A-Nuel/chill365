import { Snowflake } from 'lucide-react';

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-brand">
          <Snowflake size={20} color="var(--cyan)" />
          Chill365
        </div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#quote">Get a quote</a>
          <a href="tel:07841666401">07841 666401</a>
        </nav>
      </div>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(13, 27, 42, 0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 68px;
        }
        .nav-brand {
          font-family: var(--display);
          font-weight: 700;
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-links { display: flex; gap: 28px; font-size: 14px; }
        .nav-links a { text-decoration: none; color: var(--frost-dim); transition: color 0.2s; }
        .nav-links a:hover { color: var(--cyan); }
        @media (max-width: 560px) {
          .nav-links { gap: 16px; font-size: 13px; }
        }
      `}</style>
    </header>
  );
}
