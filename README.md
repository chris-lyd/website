# Lightyear Data — Website

Marketing site for [lightyeardata.com](https://lightyeardata.com). Static HTML/CSS, no build step, hosted on GitHub Pages.

## Structure
- `index.html` — Homepage (hero + dashboard, pain points, verticals, workflow, trust, case studies, pricing)
- `pricing.html` — Standalone pricing page (3 tiers, FAQ, upgrade path)
- `audit.html` — Free data audit landing page (primary lead-gen form)
- `compare.html` — Honest comparison vs. alternatives
- `about.html` — Team page (first-names-only bios)
- `404.html` — Not-found page
- `assets/` — Logo, brand mark, favicons
- `CNAME` — Custom domain for GitHub Pages (lightyeardata.com)
- `.nojekyll` — Disables Jekyll processing

Pages are linked with extensionless URLs (`/pricing`, `/audit`, …) which GitHub Pages resolves to the `.html` files.

## Before launch
1. **Form backend** — `audit.html` has a `FORM_ENDPOINT` constant at the top of its script. Set it to a Formspree-style endpoint to receive submissions; until then, submissions only log to the console.
2. **DNS** — point lightyeardata.com at GitHub Pages (A records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`; `www` CNAME to `<github-account>.github.io`, using the Lightyear Data GitHub account name), then set the custom domain in repo Settings → Pages and enable Enforce HTTPS.
3. **Email** — chris@ / ryan@lightyeardata.com are referenced on the site and need mailboxes (or forwarding) set up.

## Content rules (from the project handoff)
- No tech-stack names in public copy (describe outcomes, not tools)
- No AI natural-language querying as a current feature (deferred)
- No stats without a real client source (only the two verified case studies)
- Tailored tier is custom scope but always a fixed monthly number — never hourly
- Reuse the shared design system (palette/typography in each page's `:root`)
- Bios stay first-name-only, no surnames or employer names

## Local preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy
Push to `main`. GitHub Pages serves `/` from the branch root.
