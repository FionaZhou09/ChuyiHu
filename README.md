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

Plain static site: HTML, CSS, and a small amount of JavaScript. No build step, no npm dependencies.

## Site structure

```
index.html              Home
about/index.html        About
specialties/index.html  Specialties
practical-info/index.html  Booking & practice info
css/styles.css          Styles
js/main.js              Booking modal
```

## Local preview

From the project root:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deployment

Hosted on **Cloudflare Pages** with custom domain **chuyihu.com**.

| Setting | Value |
|---|---|
| **Production branch** | `main` |
| **Build command** | *(leave empty — static site)* |
| **Build output directory** | `/` |

No `npm install` or build step required. Cloudflare serves the HTML, CSS, JS, and images directly from the repository root.

## Repository

[github.com/FionaZhou09/ChuyiHu](https://github.com/FionaZhou09/ChuyiHu)

---

Designed and built by [mimiloom.studio](https://mimiloom.studio)
