# Intex Drywall Site – Content Guide

This guide explains how to edit site content using the CSV and regenerate the JSON snapshot for the app.

## Structure
- Content CSV: `content/content.csv`
- Generated JSON (output): `content/generated.json`
- Export script: `scripts/content-to-json.js`
- NPM script: `npm run content:build`

## Editing Content (non-technical workflow)
1) Open `content/content.csv` in Excel or Google Sheets.
2) Edit only the `Value` column. Keep `Section`, `Item`, and `Field` as-is.
   - Bullets use fields like `bullet1`, `bullet2`; leave unused bullet rows blank.
   - Add rows by copying an existing row in the same Section/Item and adjusting the Field/Value.
3) Save as CSV (overwriting `content/content.csv`).

## Regenerating JSON
Run from the project root:
```sh
npm run content:build
```
This reads `content/content.csv` and writes `content/generated.json`.

## Notes
- The site currently reads hardcoded content in `lib/` files. The CSV/JSON pipeline is manual and not wired into the app yet.
- If you add new sections or fields, keep the naming consistent so the export script can pick them up.

## Invite to Bid form email setup
- The Invite to Bid form posts to `/api/invite` and sends an email via Cloudflare’s built-in MailChannels endpoint to `intexranch@gmail.com` (configurable).
- Configure environment variables (see `.env.example`):
  - `INVITE_TO_ADDRESS` — where to deliver submissions.
  - `MAILCHANNELS_FROM_ADDRESS` — a verified/authorized sender on your domain (SPF/DKIM aligned).
- On failure (e.g., network or MailChannels rejection), the form falls back to opening the user’s email client with a prefilled message so the lead is not lost.
