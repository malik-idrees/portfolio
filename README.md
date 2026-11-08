# Muhammad Idrees Majid · Portfolio (Next.js)

One-page portfolio built with Next.js (App Router).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Screenshots

Each project card shows a full-page screenshot that scrolls top to bottom on hover.
Clicking a card opens the live project in a new tab.

**Out of the box:** screenshots are generated live from each project's URL (Microlink).
The first load of each one can take a few seconds; after that they are cached.
If a live screenshot fails, the placeholder in `public/projects/` is shown.

**Recommended before deploying (permanent, faster):** save real screenshot files once:

```bash
npm run screenshots:setup   # one time: installs Playwright + Chromium
npm run screenshots         # captures all 18 projects
```

This saves `public/projects/<slug>.jpg` for every project and lists them in
`data/screenshots.json`. The site then uses those files instead of live screenshots.

- Re-capture just one project: `npm run screenshots -- loftbox`
- GHL preview links sometimes need a moment to render. If a capture looks blank, re-run it for that slug.
- To use your own image for a project, add `image: "/projects/my-file.png"` to it in `data/portfolio.js`.

## Edit content

Everything (name, skills, experience, projects, links) lives in **`data/portfolio.js`**.

## Deploy

Push to GitHub and import the repo on https://vercel.com (zero config).
