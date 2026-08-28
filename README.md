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

To deploy from GitHub Actions, add \`CLOUDFLARE_API_TOKEN\` and
\`CLOUDFLARE_ACCOUNT_ID\` as repository secrets before configuring the
deployment workflow.
