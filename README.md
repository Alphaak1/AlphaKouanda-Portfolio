# AlphaKouanda Portfolio

Alpha Kouanda's portfolio, built with HTML and CSS.

## Build

Use Node.js 22 or newer and run `npm run build`. No dependencies need to be installed.
The build checks local HTML links and asset sizes, then copies website files into `dist/`.
Open `index.html` locally to preview the site.

## Cloudflare Pages

- Production branch: `main`
- Framework preset: None
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

Keep the existing deployment available until the new site is verified. Confirm whether
the existing domain is attached to Pages, Workers, or another host before changing it.
If deploying to an existing Pages project with Wrangler, use
`npx wrangler pages deploy dist --project-name <existing-project-name> --branch main`.
The project name must be confirmed from the Cloudflare account.

Suggested GitHub repository name: `AlphaKouanda-Portfolio`.
Preserve the previous site's repository separately as `oldportfolio-website`.

The contact form uses `mailto:` and requires the visitor's configured email app;
there is no server-side form delivery.
