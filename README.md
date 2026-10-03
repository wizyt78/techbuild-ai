# TechBuild AI — production-ready foundation

This project is a serious SaaS foundation for an AI website builder. It is intentionally structured so paid AI, payments, database, deployment, and domain services can be connected later without redesigning the UI.

## Current foundation
- Premium responsive landing page
- User dashboard / AI builder workspace
- Website preview workspace
- Credits UI and package pricing
- Publishing/custom-domain UX
- Admin console
- User/project/credit/payment/template/provider management screens
- GitHub/Vercel-ready Next.js application
- Environment-variable placeholders for AI, KoraPay, database and Cloudflare
- No fake AI generation: the builder clearly shows provider/deployment connections as pending until configured

## Run
1. Install Node.js 20+.
2. `npm install`
3. `npm run dev`
4. Open the local URL shown by Next.js.

## Deploy
Push this folder to GitHub and import the repository into Vercel.

## Production integrations to add next
1. Authentication + database (e.g. Supabase/Postgres).
2. AI provider adapter (server-side only; never expose secret keys in the browser).
3. Project sandbox/code execution service.
4. Real project storage/versioning.
5. KoraPay checkout + server-side transaction verification.
6. Credit ledger with atomic deductions.
7. Cloudflare deployment/custom-domain automation.
8. Domain registrar integration.
9. Abuse/rate limits, logs, monitoring, backups and customer support workflows.

The UI and routes are designed to survive those integrations without needing a visual rebuild.
