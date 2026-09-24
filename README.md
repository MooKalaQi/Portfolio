# MooKalaQi Portfolio

Personal portfolio of AmirArsalan Zolfaghari (MooKalaQi), frontend engineer.

A single-page site in Farsi (RTL, default) and English (LTR), with light and dark themes. Sections: home, about, contact, and buy me a coffee.

Built with Next.js 16, React 19, Tailwind CSS v4 and [VibeFarsi](https://vibefarsi.ir) components.

**Live:** [mookalaqi.github.io](https://mookalaqi.github.io)

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It forwards to `/fa`; the English version is at `/en`.

For a production build:

```bash
npm run build
```

The site is a static export, so this writes plain HTML, CSS and JS to `out/` (there is no `npm start`). To preview it, serve that folder with any static server, for example `npx serve out`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

Lint with `npm run lint`.

## Where things are

- `app/[lang]/` — the page and layout, one route per language
- `app/(root)/` — the bare `/`, which forwards to `/fa` (a static host can't redirect)
- `lib/dictionaries/` — all site text (`fa.ts`, `en.ts`)
- `lib/content.ts` — email, LinkedIn and payment details
- `public/profile.jpg` — the photo the site uses; the original is kept locally in `assets/`, which is git-ignored

## License

The code is MIT. The photo, bank details, contact details, written text and the names "AmirArsalan Zolfaghari" and "MooKalaQi" are **not** licensed: all rights reserved. If you reuse the code, remove or replace them. See [LICENSE](LICENSE).
