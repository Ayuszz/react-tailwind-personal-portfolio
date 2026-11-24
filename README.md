# Ayush Mohanty — Portfolio

A personal developer portfolio with a **cinematic intro trailer**: falling cards, a cracking glass pane that shatters to reveal the site, and a purple spider-lily **frosted-glass** theme. It's built with React 19, Vite and Tailwind CSS v4, and deployed on Vercel.

**Live:** [react-tailwind-personal-portfolio-u.vercel.app](https://react-tailwind-personal-portfolio-u.vercel.app/)

---

## Contents

- [Highlights](#highlights)
- [The intro trailer, scene by scene](#the-intro-trailer-scene-by-scene)
- [Site sections](#site-sections)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Editing content](#editing-content)
- [Customising the intro](#customising-the-intro)
- [Theme & styling](#theme--styling)
- [Contact form (EmailJS)](#contact-form-emailjs)
- [Deployment](#deployment)
- [Accessibility & performance](#accessibility--performance)
- [Troubleshooting](#troubleshooting)

---

## Highlights

- 🎬 **Movie-trailer intro.** About 17 seconds, full-screen on phones, tablets, laptops and wide monitors. It plays on every load or refresh. You can skip it with a button or with Esc, Enter or Space, and replay it from the footer.
- 🧩 **Falling-card build.** All 24 cards from the site (About, strengths, experience, projects, skills, education, contact, CV) drop from the top in random order and land with a bounce.
- 🪟 **Glass pane that cracks, then shatters.** Each landing card adds cracks to the glass. When the board is complete, the pane breaks into 48 shards that tumble away in 3D to reveal the portfolio.
- 💜 **Purple frosted-glass theme.** A fixed spider-lily backdrop sits behind the whole site, with blurred-glass cards, a lavender accent and glowing highlights.
- 📂 **Project case studies.** Every project card opens a popup with the problem, the data, the build steps, key numbers, findings, use cases and learnings, written from each repo's README.
- 📞 **Contact that works everywhere.** The Contact Me menu offers Email (Gmail compose), WhatsApp, and Call, with a dialer link plus a copy-number fallback.
- 📄 **One-click CV download.** It saves the PDF directly.
- 🧰 **Expandable tools list.** A scrolling marquee that turns into a vertical list on tap.
- ⚙️ **One config file.** Every word, link, stat and project lives in `src/portfolio.config.js`.

---

## The intro trailer, scene by scene

| # | Scene | What happens | Length |
|---|---|---|---|
| 1 | Tagline 1 | "Every product needs a backend." blurs into focus | 1.7s |
| 2 | Tagline 2 | "Every AI needs guardrails." | 1.7s |
| 3 | Name reveal | The photo opens from a circle, "Introducing" appears, and the name collapses in from wide letter-spacing, then the role | 2.8s |
| 4 | Stack flash | Rapid cuts: Node.js · PostgreSQL · Redis · LLM APIs · MCP · Tool Calling · React | 2.0s |
| 5 | Stats | The impact numbers count up from zero | 2.3s |
| 6 | Title card | "Now showing", then **Ayush.** and the tagline | 1.9s |
| 7 | Building the portfolio | 24 cards fall from the top in random order, each tilted, bouncing on landing with a glow, while new cracks spread across the glass | ~4.9s |
| 8 | Shatter | A flash, then the glass breaks into 48 shards that fly outward and fall, revealing the site | 1.7s |

How it works:

- **Crack pattern.** `src/components/glass.js` generates a radial "starburst" of 12 rays and 4 rings, with a little randomness, so every play looks different.
- **Cracks and shards share one geometry.** The crack lines (`CrackLines.jsx`, SVG) and the shards (CSS `clip-path` polygons) are built from the same points, so the glass breaks exactly along its cracks.
- **Cracks grow with the cards.** Inner cracks appear first, synced to each card's landing time.
- **The site is already rendered underneath.** When the glass shatters, the site is just revealed; nothing re-renders.

---

## Site sections

1. **Hero:** headline, intro, Contact Me menu, Download CV, socials, profile photo card and the tools marquee/list
2. **Impact strip:** four headline numbers
3. **About:** bio, quote, four strength cards and working style
4. **Experience:** a timeline of roles, with bullet points and tech tags
5. **Projects:** clickable cards that open full case studies
6. **Skills:** six grouped skill cards
7. **Education & certifications**
8. **Contact:** a call panel (Call / Copy / WhatsApp), contact cards and a contact form
9. **Footer:** socials, **▶ Replay intro** and back-to-top

---

## Tech stack

| Area | Tools |
|---|---|
| UI | React 19, Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), custom CSS keyframes |
| Icons | lucide-react |
| Email | @emailjs/browser (optional) |
| Hosting | Vercel |

No animation library is used. Every effect is plain CSS keyframes plus a few lines of React state.

---

## Project structure

```
public/
  ayush.jpg              profile photo (hero card)
  ayush-face.jpg         close-up used in the intro circle
  hero-bg.jpg            purple spider-lily background (site + intro + glass)
  Ayush_Mohanty_CV.pdf   CV served by "Download CV"
  hotel-assistant.jpg    project screenshot
  spotify.jpg            project screenshot
  favicon.svg

src/
  portfolio.config.js    ← ALL content: profile, socials, stats, about, experience,
                           projects (+ case studies), skills, education, trailer text
  App.jsx                page layout, fixed background, intro on/off + replay
  index.css              theme tokens, glass styles, all animations (incl. trailer)
  main.jsx

  components/
    IntroTrailer.jsx     the trailer: scenes, timings, falling cards, shatter
    glass.js             crack/shard geometry for the glass pane
    CrackLines.jsx       SVG crack lines
    ProjectModal.jsx     project case-study popup
    ContactMenu.jsx      "Contact Me" dropdown (Email / WhatsApp / Call)
    CallPanel.jsx        number + Call / Copy / WhatsApp buttons
    AnimatedBoarderButton.jsx  "Download CV" button
    SectionHeader.jsx, Icon.jsx, Button.jsx

  layout/                Navbar.jsx, Footer.jsx
  sections/              Hero, Impact, About, Experience, Projects, Skills, Education, Contact
```

---

## Getting started

Requires **Node.js 20+**.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint
```

---

## Editing content

Open **`src/portfolio.config.js`**. Components only read from this file, so a new CV usually means editing just this one file.

| Export | What it controls |
|---|---|
| `profile` | Name, role, headline, intro, photo paths, CV path, location, experience badge |
| `socials` | Email, phone, LinkedIn, GitHub |
| `impactStats` | The four numbers (also animated in the intro) |
| `heroSkills` | The tools marquee/list |
| `about` | Bio paragraphs, quote, strength cards, working-style chips |
| `experience` | Roles, dates, bullet points, tech tags |
| `projects` | Cards and full case studies (`details`: problem, dataset, steps, metrics, findings, use cases, learnings) |
| `skillGroups` | Skill cards |
| `education` | Degrees, courses, certifications |
| `trailer` | Intro text: taglines, "Introducing", flashed words, final line, and `enabled` |

**Common updates:**

- **New photo:** replace `public/ayush.jpg` (4:5 portrait) and `public/ayush-face.jpg` (square face close-up).
- **New CV:** replace `public/Ayush_Mohanty_CV.pdf`, or change `profile.resume` and `profile.resumeFileName`.
- **New project:** add an object to `projects`. Put a screenshot in `public/` and set `image: "./file.jpg"`, or use `null` to show an icon. Icons are lucide names registered in `components/Icon.jsx`.
- **Background:** replace `public/hero-bg.jpg`.

---

## Customising the intro

- **Turn it off:** set `trailer.enabled = false` in the config.
- **Change the text:** edit `trailer.taglines`, `trailer.flash` and `trailer.finalLine`.
- **Change scene timing:** edit the `SCENES` array at the top of `components/IntroTrailer.jsx`.
- **Change the falling speed:** edit `DROP_STEP` (milliseconds between cards) in `IntroTrailer.jsx`.
- **Change the glass:** in `components/glass.js`, `RAYS` and `RADII` control the crack pattern and the number of shards.
- **Change the shatter look:** the `.tr-shard`, `.tr-crack` and `.tr-burst` styles are in `index.css`.

The intro plays on every page load. Users can skip it any time, and the footer has **▶ Replay intro**.

---

## Theme & styling

- **Colours** are Tailwind v4 tokens in the `@theme` block at the top of `src/index.css`: `--color-primary` (lavender `#a970ff`), background, surface, border, and so on. Change them there and the whole site follows.
- **Glass** comes from the `.glass` and `.glass-strong` utilities: a translucent fill, `backdrop-filter: blur()`, and a soft border and highlight.
- **The background** is the `.site-bg` class: a fixed image with a darkening gradient for readability.
- **Animations** are all in `index.css`. Trailer styles are prefixed `tr-`.

---

## Contact form (EmailJS)

The form works without any setup. It opens Gmail, or the visitor's email app, with the message pre-filled.

To send messages directly from the site, create a free [EmailJS](https://www.emailjs.com/) account and add these variables locally in `.env` and in **Vercel → Project → Settings → Environment Variables**:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Never commit `.env`.

---

## Deployment

The repo is connected to **Vercel**, so every push to `main` builds and deploys automatically.

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20+ |

To deploy a fork: go to vercel.com → **Add New → Project** → import the repo → **Deploy**.

---

## Accessibility & performance

- **Reduced motion:** visitors whose device has *Reduce motion* turned on skip the intro automatically, and other animations are disabled.
- **Keyboard:** Esc, Enter or Space skips the intro. Popups close with Esc, and buttons have visible focus.
- **No heavy libraries:** the animations are CSS transforms and opacity only, so they run on the GPU.
- **Phones:** the intro uses `100dvh` and safe-area padding, so it fills the screen on phones with browser bars and notches.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Old photo or old version still showing | Hard refresh: Ctrl+Shift+R, or pull to refresh on a phone |
| Download CV or Call don't work in a preview tool | Sandboxed previews block downloads and `tel:` links. They work on the real Vercel site. |
| Intro feels too long | Lower the `SCENES` timings or `DROP_STEP`, or set `trailer.enabled = false` |
| Contact form only opens Gmail | Add the EmailJS environment variables in Vercel and redeploy |

---

© Ayush Mohanty · [LinkedIn](https://linkedin.com/in/ayush-mohanty-129k) · [GitHub](https://github.com/Ayuszz)
