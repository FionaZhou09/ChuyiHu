# Chuyi Hu Therapy

Website design and development for **Chuyi Hu, LMHC, LPC** — a multilingual mental health counselor. Built by **[mimiloom.studio](https://mimiloom.studio)**, a personal design studio. This project is one of the studio's selected works.

**Live site:** [chuyihu.com](https://chuyihu.com)

## About this project

| | |
|---|---|
| **Studio** | [mimiloom.studio](https://mimiloom.studio) |
| **Client** | Chuyi Hu — LMHC, LPC |
| **Domain** | [chuyihu.com](https://chuyihu.com) |
| **Scope** | Personal brand website — design, build, and deployment |

The site gives Chuyi a calm, professional online presence for her private practice. It introduces her background, specialties, and practical information, with clear paths to book through Alma, Headway, and Psychology Today.

### What we built

- Custom domain and static hosting setup on Cloudflare Pages
- Warm, minimal visual design suited to a therapy practice
- Pages for Home, About, Specialties, and Practical Info
- Responsive layout with subtle motion
- Fast static export — no server or database required

## Tech stack

- Next.js App Router (static export)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

Production builds use `output: "export"` and `trailingSlash: true`, generating static HTML in `out/`.

## Deployment

Hosted on **Cloudflare Pages** with custom domain **chuyihu.com**.

```bash
npm install
npm run build
```

Set in Cloudflare for correct metadata and Open Graph URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://chuyihu.com
```

## Repository

[github.com/FionaZhou09/ChuyiHu](https://github.com/FionaZhou09/ChuyiHu)

---

Designed and built by [mimiloom.studio](https://mimiloom.studio)
