# MooKalaQi Portfolio

Personal portfolio of AmirArsalan Zolfaghari (MooKalaQi), frontend engineer.

A single-page site in Farsi (RTL, default) and English (LTR), with light and dark themes. Sections: home, about, contact, and buy me a coffee.

Built with Next.js 16, React 19, Tailwind CSS v4 and [VibeFarsi](https://vibefarsi.ir) components.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It redirects to `/fa`; the English version is at `/en`.

For a production build:

```bash
npm run build
npm start
```

Lint with `npm run lint`.

## Where things are

- `app/[lang]/` — the page and layout, one route per language
- `lib/dictionaries/` — all site text (`fa.ts`, `en.ts`)
- `lib/content.ts` — email, LinkedIn and payment details
- `public/profile.jpg` — the photo the site uses; the original is kept locally in `assets/`, which is git-ignored

## License

The code is MIT. The photo, bank details, contact details, written text and the names "AmirArsalan Zolfaghari" and "MooKalaQi" are **not** licensed: all rights reserved. If you reuse the code, remove or replace them. See [LICENSE](LICENSE).
