import { useState, useRef, useEffect } from 'react';
import { Snowflake, Send, X, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '447841666401'; // Chill365 public WhatsApp/contact number

export default function ComfortAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm Frost — Chill365's comfort assistant. I can answer questions, give you a ballpark quote, or get you booked in. What's on your mind?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [handoff, setHandoff] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply }]);
      if (data.handoff) setHandoff(true);
    } catch (e) {
      setMessages([
        ...next,
        { role: 'assistant', content: "Sorry, I'm having trouble connecting right now — try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function whatsappLink() {
    const transcript = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.content)
      .join(' | ');
    const msg = encodeURIComponent(
      `Hi Chill365, I've been chatting with Frost on your website and I'd like to continue here. Summary: ${transcript.slice(0, 300)}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  }

  return (
    <>
      <button
        className="assistant-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close comfort assistant' : 'Open comfort assistant'}
      >
        {open ? <X size={22} /> : <Snowflake size={22} />}
        {!open && <span className="pulse-ring" />}
      </button>

      {open && (
        <div className="assistant-panel" role="dialog" aria-label="Comfort assistant chat">
          <div className="assistant-header">
            <div className="assistant-avatar">
              <Snowflake size={16} />
            </div>
            <div>
              <div className="assistant-name">Frost</div>
              <div className="assistant-status">Chill365 comfort assistant</div>
            </div>
          </div>

          <div className="assistant-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bubble assistant typing">
                <span /> <span /> <span />
              </div>
            )}
            {handoff && (
              <a className="whatsapp-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Continue on WhatsApp
              </a>
            )}
          </div>

          <div className="assistant-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about a quote, booking, or service..."
              aria-label="Message Frost"
            />
            <button onClick={send} aria-label="Send message" disabled={loading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .assistant-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--cyan);
          color: var(--ink);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(94, 234, 212, 0.35);
          z-index: 1000;
        }
        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid var(--cyan);
          animation: pulse 2.4s ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .assistant-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: min(380px, calc(100vw - 32px));
          height: min(560px, calc(100vh - 140px));
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 60px rgba(0,0,0,0.45);
          z-index: 1000;
          overflow: hidden;
        }
        .assistant-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          border-bottom: 1px solid var(--line);
          background: var(--panel-2);
        }
        .assistant-avatar {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: var(--cyan-dim);
          color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
        }
        .assistant-name { font-family: var(--display); font-weight: 600; font-size: 14px; }
        .assistant-status { font-size: 12px; color: var(--frost-dim); }
        .assistant-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bubble {
          max-width: 84%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
        }
        .bubble.assistant {
          background: var(--panel-2);
          color: var(--frost);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .bubble.user {
          background: var(--cyan);
          color: var(--ink);
          align-self: flex-end;
          border-bottom-right-radius: 4px;
          font-weight: 500;
        }
        .bubble.typing { display: flex; gap: 4px; align-items: center; }
        .bubble.typing span {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--frost-dim);
          animation: bounce 1.2s infinite ease-in-out;
        }
        .bubble.typing span:nth-child(2) { animation-delay: 0.15s; }
        .bubble.typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes bounce { 0%,60%,100%{ transform: translateY(0);} 30%{ transform: translateY(-4px);} }
        .whatsapp-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          background: #25D366;
          color: #06210F;
          font-weight: 700;
          padding: 12px;
          border-radius: 10px;
          text-decoration: none;
          margin-top: 4px;
          align-self: stretch;
        }
        .assistant-input-row {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid var(--line);
          background: var(--panel-2);
        }
        .assistant-input-row input {
          flex: 1;
          background: var(--deep);
          border: 1px solid var(--line);
          color: var(--frost);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          font-family: var(--body);
        }
        .assistant-input-row button {
          background: var(--cyan);
          color: var(--ink);
          border: none;
          border-radius: 8px;
          width: 40px;
          display: flex; align-items: center; justify-content: center;
        }
        .assistant-input-row button:disabled { opacity: 0.5; }
        @media (max-width: 480px) {
          .assistant-panel { right: 16px; bottom: 88px; }
          .assistant-toggle { right: 16px; }
        }
      `}</style>
    </>
  );
}
