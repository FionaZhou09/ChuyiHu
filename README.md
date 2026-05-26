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

### Cloudflare Pages settings

| Setting | Value |
|---|---|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | `22` (or `20.9+`) |

Environment variable for metadata and Open Graph URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://chuyihu.com
```

### If the build fails on `lightningcss.linux-x64-gnu`

This repo pins the Linux native binary as an optional dependency in `package.json`. After pushing fixes, confirm Cloudflare is building the **latest commit on `main`**, not an older deployment.

In the build log, check the clone step:

```text
HEAD is now at <commit> ...
```

That commit should match the latest on GitHub (`main`), not an older hash like `fda822d`.

If Cloudflare keeps retrying an old failed deployment, open **Deployments → Create deployment** and select the latest `main` commit, or push a new commit to trigger a fresh build.

Local build:

```bash
npm install
npm run build
```

## Repository

[github.com/FionaZhou09/ChuyiHu](https://github.com/FionaZhou09/ChuyiHu)

---

Designed and built by [mimiloom.studio](https://mimiloom.studio)
