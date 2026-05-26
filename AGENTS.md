# Agent Guide

Static HTML/CSS/JS website for **Chuyi Hu Therapy** — a website design project by [mimiloom.studio](https://mimiloom.studio). Production domain: `https://chuyihu.com`.

## Stack

- Plain HTML pages at the repo root and in subfolders (`about/`, `specialties/`, `practical-info/`)
- CSS in `css/styles.css`
- Minimal JavaScript in `js/main.js` (booking modal only)

## Commands

Local preview:

```bash
python3 -m http.server 8080
```

There is no build step, no npm install, and no framework.

## Notes

- Do not reintroduce Next.js, React, Tailwind, or other build tooling unless the project requirements change.
- Keep pages as static HTML files. Shared layout (sidebar, bottom nav, modal) is duplicated across pages.
- Images live at the repo root: `chuyi-hu-headshot.jpeg`, `minimal-therapy-plant.png`.
- Cloudflare Pages: empty build command, output directory `/`.
