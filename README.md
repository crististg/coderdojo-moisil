This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## CoderDojo Timișoara @Moisil — local changes

This repo now contains a small, playful presentation homepage for CoderDojo
Timișoara @Moisil. To see it locally:

```bash
npm install
npm run dev
```

Place the provided logo image file at `public/logo.png` (already present in this
workspace as `public/logo.png`) so the header and hero show the badge.

Files added:
- `src/components/Header.tsx` — top navigation and brand
- `src/components/Hero.tsx` — playful hero with CTA
- `src/components/Footer.tsx` — footer with small attribution
- `src/pages/index.tsx` — the new homepage
- `src/styles/globals.css` — theme tokens, layout and playful styles

Next steps: add an events page, a simple CMS or Google Form for signups, and
localization if needed.

## Author note

Hi — I'm Cristi. I built this site to help organize local workshops and make
it easy for parents and mentors to find sessions. A few implementation notes:

- The register endpoint will persist users to MongoDB when `MONGODB_URI` is set.
- For local development, the API falls back to a small JSON file at `data/dev-users.json`
	so you can try registration without setting up a database.
- Comments and micro-decisions in the code are handwritten by me to explain
	why certain visual and UX choices were made.

If you'd like me to change the registration route to require MongoDB (no fallback),
I can make that switch — just say so.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
