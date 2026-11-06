This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is exported as a static site (`output: 'export'`) and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

The site is served from a **project page**, so `basePath` is set to
`/portfolio-website` during the GitHub Actions build.

One-time setup:

1. Make the repository public (Pages on the free plan requires a public repo).
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`.

The site will be available at `https://polfc21.github.io/portfolio-website/`.

Notes:

- Locales live in the URL: `/ca/`, `/en/`, `/es/`. `/` redirects to `/ca/`.
- For local development use `http://localhost:3000/ca` (or `/en`, `/es`).
- The app must stay fully static: no API routes, middleware, server actions,
  `cookies()`, or `headers()`.
- If you rename the repository, update `repo` in `next.config.ts`.
