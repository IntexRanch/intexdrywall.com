# Deploying the Invite Email Worker (Cloudflare Dashboard)

These steps create and bind the email-forwarding Worker using the Cloudflare dashboard (no CLI required).

## Prerequisites
- Domain `intexdrywall.com` managed in Cloudflare.
- Email Routing enabled and destination `intexranch@gmail.com` VERIFIED.
- The Worker code from `workers/invite-email-worker` (uses `cloudflare:email` + `mimetext`).

## 1) Create the Worker
1. Log in to Cloudflare Dashboard → “Workers & Pages” → “Create”.
2. Choose “Create Worker”.
3. Name it `intexdrywall-invite-email` (or your preferred name).
4. Replace the default code with the contents of `workers/invite-email-worker/src/index.js` from the repo.
5. Save and deploy.

## 2) Add the send_email binding
1. In the Worker view, go to “Settings” → “Bindings” → “Email”.
2. Add a new binding:
   - **Binding name**: `FORM_EMAIL`
   - **Destination address**: `intexranch@gmail.com` (must be VERIFIED in Email Routing)
3. Save changes.

## 3) Configure routes
1. In the Worker view, open “Triggers” → “Routes”.
2. Add routes so the Worker handles the site endpoint:
   - `intexdrywall.com/api/invite`
   - `www.intexdrywall.com/api/invite`
3. Save.

## 4) CORS and origin check
- The Worker already allows origins: `https://intexdrywall.com`, `https://www.intexdrywall.com`, and `http://localhost:3000`. If you need another origin, add it to the `allowed` set in `corsHeaders`.

## 5) Frontend config
- The form posts to `/api/invite` by default. If you want to point to a different Worker URL, set `NEXT_PUBLIC_INVITE_ENDPOINT` to that URL in your Next.js env.

## 6) Optional: Deploy/iterate via Wrangler
- From `workers/invite-email-worker`:
  ```sh
  npm install
  npm run dev      # local dev (default 8787)
  npm run deploy   # deploy via wrangler
  ```
- Ensure your Cloudflare account and API token are configured locally (`wrangler login`).
