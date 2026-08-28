# Selah Web

Landing page and legal/support website for **Selah**, a local-first daily
devotional companion that helps people pause, open a physical Bible, reflect,
and grow.

## Routes

- \`/\` — landing page
- \`/privacy\` — privacy policy
- \`/terms\` — terms of service
- \`/support\` — product support

## Stack

- React 19
- Next.js-compatible app router through Vinext
- Vite
- Tailwind CSS
- Cloudflare Workers

## Development

\`\`\`bash
npm ci
npm run dev
\`\`\`

## Production build

\`\`\`bash
npm run build
\`\`\`

The production Worker is emitted to \`dist/server\`, with static assets in
\`dist/client\`.

## Deploy to Cloudflare

Authenticate Wrangler, then run:

\`\`\`bash
npm run deploy
\`\`\`

### Cloudflare Workers Builds

This project uses **Vinext/Vite**, not the OpenNext adapter. In the Cloudflare
dashboard, open the Worker and set **Settings → Build** to:

- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npm run deploy:worker`
- Non-production branch deploy command: `npm run preview:worker`

Do not use `npx @opennextjs/cloudflare build`; it expects output from
`next build` in `.next`, while this project emits its Worker to `dist/server`.

To deploy from GitHub Actions, add \`CLOUDFLARE_API_TOKEN\` and
\`CLOUDFLARE_ACCOUNT_ID\` as repository secrets before configuring the
deployment workflow.
