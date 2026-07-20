export default function RefrigerantLine({ flip = false }) {
  return (
    <div className={`refrigerant-line ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path
          className="line-path"
          d="M0,40 C150,10 250,70 400,40 C550,10 650,70 800,40 C950,10 1050,70 1200,40"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#F5A623" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        .refrigerant-line { width: 100%; height: 40px; opacity: 0.55; }
        .refrigerant-line.flip svg { transform: scaleY(-1); }
        .line-path {
          stroke-dasharray: 6 10;
          animation: flow 14s linear infinite;
        }
        @keyframes flow {
          to { stroke-dashoffset: -320; }
        }
        @media (prefers-reduced-motion: reduce) {
          .line-path { animation: none; }
        }
      `}</style>
    </div>
  );
}
