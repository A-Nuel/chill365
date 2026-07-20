import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isLight = ['/services', '/about', '/gallery'].includes(pathname);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${isLight ? 'nav-light-page' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-brand">
            <Snowflake size={18} />
            <span>Chill<em>365</em></span>
          </Link>
          <nav className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-amber nav-cta">Get a Quote</Link>
          </nav>
          <button className="nav-burger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`drawer-link ${pathname === l.to ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-amber" style={{ marginTop: 16 }}>Get a Quote</Link>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          padding: 0;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .nav-scrolled {
          background: rgba(28,28,28,0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .nav-light-page:not(.nav-scrolled) {
          background: rgba(245,240,235,0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.08);
        }
        .nav-light-page:not(.nav-scrolled) .nav-brand,
        .nav-light-page:not(.nav-scrolled) .nav-links a { color: var(--charcoal); }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
        }
        .nav-brand {
          display: flex; align-items: center; gap: 9px;
          font-family: var(--serif); font-size: 20px; font-weight: 600;
          color: var(--warm-white);
        }
        .nav-brand em { font-style: normal; color: var(--teal); }
        .nav-links {
          display: flex; align-items: center; gap: 32px;
        }
        .nav-links a {
          font-size: 14px; font-weight: 500; color: rgba(245,240,235,0.72);
          transition: color 0.2s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--warm-white); }
        .nav-cta { padding: 10px 22px; font-size: 13px; }
        .nav-burger { display: none; background: none; color: var(--warm-white); padding: 4px; }
        .nav-drawer {
          position: fixed; inset: 0; z-index: 190;
          background: var(--charcoal);
          display: flex; flex-direction: column; align-items: flex-start;
          padding: 100px 40px 40px;
          gap: 8px;
        }
        .drawer-link {
          font-family: var(--serif); font-size: 32px; font-weight: 500;
          color: rgba(245,240,235,0.7); padding: 8px 0;
          transition: color 0.2s;
        }
        .drawer-link:hover, .drawer-link.active { color: var(--warm-white); }
        @media (max-width: 820px) {
          .nav-links { display: none; }
          .nav-burger { display: flex; }
          .nav-light-page:not(.nav-scrolled) .nav-burger { color: var(--charcoal); }
        }
      `}</style>
    </>
  );
}
