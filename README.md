# AlphaKouanda Portfolio

Alpha Kouanda's portfolio, built with HTML and CSS.

## Build

Use Node.js 22.18 or newer. Run `npm ci`, then `npm run build`.
The build checks local HTML links and asset sizes, then copies website files into `dist/`.
Open `index.html` locally to preview the site.

## Cloudflare Workers

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx cf deploy`
- Worker: `alphakouanda-portfolio`
- Domain: https://alphakouanda.com
- Static assets directory: `dist`
- Root directory: repository root

Run `npm run deploy` to build and deploy locally after `npx cf auth login`.
`cloudflare.config.ts` defines the existing Worker; `wrangler.config.ts` configures
its static assets build. Cloudflare's CLI delegates the build to Wrangler.
Only files in `dist/` are published.

Source: https://github.com/Alphaak1/AlphaKouanda-Portfolio
Previous site: https://github.com/Alphaak1/oldportfolio-website

The contact form uses `mailto:` and requires the visitor's configured email app;
there is no server-side form delivery.
