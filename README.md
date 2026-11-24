# Ayush Mohanty — Portfolio

Personal developer portfolio built with React 19, Vite and Tailwind CSS v4. Live at
[react-tailwind-personal-portfolio-u.vercel.app](https://react-tailwind-personal-portfolio-u.vercel.app/).

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Editing content
**All text, links, stats, experience, projects (with case studies), skills and education live in
`src/portfolio.config.js`.** Components only read from it, so updating after a new CV is a one-file edit.

- Photo: `public/ayush.jpg` (set `photo` in the config)
- CV: `public/Ayush_Mohanty_CV.pdf` (set `resume` / `resumeFileName`)
- Hero background: `public/hero-bg.jpg`
- Project screenshots: `public/*.jpg`, referenced by each project's `image`

## Features
- Contact Me menu: Email (Gmail compose), WhatsApp, and Call with a copy-number fallback
- One-click CV download
- "Tools I work with" marquee that expands into a vertical list
- Clickable project cards that open a full case study (problem, data, build steps, metrics, findings, use cases)
- Contact form: sends via EmailJS when keys are set, otherwise hands off to Gmail / the visitor's email app

### Contact form (optional)
Add these in Vercel → Project → Settings → Environment Variables (or a local `.env`):
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Deploy
Connected to Vercel — every push to `main` redeploys automatically.
