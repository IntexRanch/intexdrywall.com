# intexdrywall invite form email worker

Receives POST JSON at /api/invite and forwards the submission to intexranch@gmail.com using Cloudflare Email Routing + send_email.

## Prereqs (Cloudflare Dashboard)
1) Email → Email Routing: enable for intexdrywall.com
2) Add Destination address: intexranch@gmail.com and VERIFY it

## Run locally
npm install
npm run dev

## Deploy
npm run deploy

## Route
Your frontend submits to /api/invite.
Bind this Worker to:
- intexdrywall.com/api/invite
- www.intexdrywall.com/api/invite

You can bind routes either:
- in wrangler.toml (routes = [...]) OR
- Cloudflare Dashboard → Workers & Pages → your Worker → Triggers → Routes
