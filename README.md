# Chill365 — website + AI comfort assistant

A site for Chill365 Ltd (AC installation/repair/servicing, Manchester) with an
AI assistant ("Frost") that answers questions, gives ballpark quotes, books
callbacks, and hands off to WhatsApp.

## Deploy to Vercel (no code changes needed)

1. Push this folder to a GitHub repo, or run `npx vercel` from inside it.
2. Import the repo in Vercel.
3. In the Vercel project → **Settings → Environment Variables**, add ONE of:
   - `ANTHROPIC_API_KEY`
   - `OPENAI_API_KEY`
4. Deploy. The `/api/agent` serverless function auto-detects whichever key
   is present — no other setup.

## Before going live

- Update `WHATSAPP_NUMBER` in `src/components/ComfortAssistant.jsx` if the
  number leads should land on differs from the one currently set (pulled
  from Chill365's public listing).
- Review placeholder copy in `Hero.jsx`, `Services.jsx`, `WhyUs.jsx` —
  drafted from public listings, not yet confirmed by the business owner
  (exact years in business, full service list, pricing ranges in
  `api/agent.js`, etc.)

## Local development

```
npm install
npm run dev
```

Note: `/api/agent` only runs on Vercel (or via `vercel dev`) — plain
`npm run dev` serves the front end but assistant calls will 404 until
deployed or run through the Vercel CLI.
