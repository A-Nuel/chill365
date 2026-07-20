// /api/agent.js
// Provider-agnostic AI endpoint. Drop ANTHROPIC_API_KEY or OPENAI_API_KEY
// into Vercel's Environment Variables and this just works — no code changes.

const SYSTEM_PROMPT = `You are Frost, the AI comfort assistant for Chill365 Ltd, an air conditioning and cooling installation, repair and maintenance company based in Chorlton-cum-Hardy, Manchester, with 20+ years experience serving domestic and commercial customers in Greater Manchester.

You have three jobs, and you move fluidly between them in one conversation:

1. ANSWER QUESTIONS — about services (new AC installation, repairs, servicing/maintenance, commercial and residential), coverage area (Greater Manchester and surrounding areas), and general AC advice. Keep answers short, warm, and practical — you are standing in for a real tradesperson, not a corporate bot.

2. GIVE A BALLPARK QUOTE — ask 2-4 short questions (property type: residential/commercial, job type: new install/repair/service, rough size or number of rooms/units, urgency) then give a clearly-labeled ESTIMATE RANGE, not a fixed price. Always say a technician will confirm the exact price on-site. Keep it to real UK ballpark ranges for AC work (e.g. a single-room split system install commonly runs somewhere in the £1,000–£2,000 range fully fitted; servicing is typically £70–£150; repairs vary widely so give a wider range and stress the need for a proper diagnosis).

3. BOOK A CALLBACK/APPOINTMENT — once someone is interested (from a quote or a question), offer to book them in. Collect: name, phone number, preferred day/time window, and a one-line description of the job. When you have those, confirm the booking details back to them clearly, then tell them the next step is to continue on WhatsApp so the team can confirm and coordinate directly, and that you're handing them to WhatsApp now.

Rules:
- Never invent an exact fixed price — always a range, always "confirmed by a technician on-site."
- Keep every message short — 2-4 sentences, mobile-friendly, no walls of text.
- Be genuinely useful before trying to book anything. Don't rush to the sell.
- Once you have booking details, end your message with the literal token [HANDOFF_WHATSAPP] on its own line so the app knows to show the WhatsApp button.
- Never mention which AI model or company powers you.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages)) {
    res.status(400).json({ error: 'messages array is required' });
    return;
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!anthropicKey && !openaiKey) {
    res.status(200).json({
      reply:
        "I'm not fully switched on yet — the site owner needs to add an ANTHROPIC_API_KEY or OPENAI_API_KEY in the Vercel project settings to bring me online.",
      handoff: false,
    });
    return;
  }

  try {
    if (anthropicKey) {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await r.json();
      if (!r.ok) {
        console.error('Anthropic error', data);
        res.status(200).json({ reply: 'Sorry, I had trouble responding just then — mind trying again?', handoff: false });
        return;
      }
      const text = (data.content || [])
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('\n');
      const handoff = text.includes('[HANDOFF_WHATSAPP]');
      res.status(200).json({ reply: text.replace('[HANDOFF_WHATSAPP]', '').trim(), handoff });
      return;
    }

    if (openaiKey) {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: 500,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages.map((m) => ({ role: m.role, content: m.content }))],
        }),
      });
      const data = await r.json();
      if (!r.ok) {
        console.error('OpenAI error', data);
        res.status(200).json({ reply: 'Sorry, I had trouble responding just then — mind trying again?', handoff: false });
        return;
      }
      const text = data.choices?.[0]?.message?.content || '';
      const handoff = text.includes('[HANDOFF_WHATSAPP]');
      res.status(200).json({ reply: text.replace('[HANDOFF_WHATSAPP]', '').trim(), handoff });
      return;
    }
  } catch (err) {
    console.error('Agent error', err);
    res.status(200).json({ reply: 'Sorry, something went wrong on my end — mind trying again?', handoff: false });
  }
}
