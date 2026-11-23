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

## JavaScript features

`script.js` is loaded with `defer` on all four pages, so the HTML exists before the code runs. Each section checks for its page elements before using them.

1. **Clock:** `updateClock()` formats a new `Date`; `setInterval` repeats the function every 1,000 milliseconds.
2. **Theme:** clicking the theme button toggles the body's `dark-mode` class. CSS supplies the alternate colors. The theme resets on navigation to keep this version simple.
3. **Project cards:** mouse-enter adds `card-active`; mouse-leave removes it. CSS changes the border and size. Keyboard focus has the same visual effect.
4. **Gallery:** an array holds the three existing image paths and descriptions. A numeric index chooses an image. The remainder operator (`%`) wraps Next/Previous around the array.
5. **Contact validation:** the submit listener checks trimmed field values and displays individual errors. `preventDefault()` blocks an invalid form. A valid form keeps the existing `mailto:` action; the website does not send email itself.
6. **Back to Top:** a scroll listener hides the button above 200 pixels and shows it below that point. Clicking requests a smooth scroll to zero.

The optional Show More Projects feature is omitted because there are only three real project entries; no additional projects were invented. Dark mode is included as an optional enhancement. No libraries were added.

Run `npm run build` to verify asset links and prepare `dist/`, including JavaScript. No deployment or coursework submission is implied by building.
