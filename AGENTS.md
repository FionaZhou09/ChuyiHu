# Agent Guide

This repository is a static Next.js site for a therapy practice.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Notes

- The site is static: do not add API routes, database code, auth, or server-only platform SDKs unless the project requirements change.
- `next.config.ts` uses `output: "export"` and `trailingSlash: true` so routes like `/practical-info/` generate `index.html`.
- Keep pages as thin route entries under `src/app/`; feature UI lives in `src/components/`.
- Public images live in `public/`.
