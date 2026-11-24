// ─────────────────────────────────────────────────────────────
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Edit this file to update the site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ayush Mohanty",
  firstName: "Ayush",
  initials: "AM",
  role: "Software Engineer · AI & LLM Applications · Backend",
  photo: "./ayush.jpg", // set to null to show an initials avatar
  resume: "./Ayush_Mohanty_CV.pdf",
  resumeFileName: "Ayush_Mohanty_CV.pdf",
  location: "Bangalore, India",
  availability: "Open to opportunities",
  experienceBadge: { value: "1+ yr", label: "Building backend & AI" },
  headline: {
    before: "Building",
    highlight: "AI‑powered",
    middle: "products,",
    italic: "end to end",
  },
  intro:
    "Hi, I'm Ayush Mohanty — a software engineer building backend APIs, workflow automation and LLM-powered applications with Node.js, Python, PostgreSQL and Redis. I integrate OpenAI, Claude and Gemini APIs, design tool-calling workflows and test AI output for accuracy.",
  metaDescription:
    "Ayush Mohanty — Software Engineer building backend APIs, workflow automation and AI/LLM applications with Node.js, Python, PostgreSQL, Redis and MCP.",
};

export const socials = {
  email: "ayushmohanty5800@gmail.com",
  phone: "+91 9337044872",
  linkedin: "https://linkedin.com/in/ayush-mohanty-129k",
  linkedinHandle: "ayush-mohanty-129k",
  github: "https://github.com/Ayuszz",
  githubHandle: "Ayuszz",
};

// Headline numbers shown in the strip under the hero
export const impactStats = [
  { value: "1+ yr", label: "Production backend", detail: "Node.js, PostgreSQL & Redis APIs at Zino" },
  { value: "3", label: "LLM providers integrated", detail: "OpenAI, Anthropic Claude & Google Gemini" },
  { value: "2", label: "MCP servers shipped", detail: "semantic search & live startup map" },
  { value: "26", label: "Automated tests", detail: "real, un-mocked MCP end-to-end suite" },
];

export const heroSkills = [
  "Node.js", "Express.js", "TypeScript", "Python", "PostgreSQL", "Redis", "MongoDB",
  "React", "Tailwind CSS", "LLM APIs", "MCP", "Prompt Engineering", "Claude", "Cursor", "Git & GitHub", "Vercel",
];

export const about = {
  title: "Backend engineer who",
  titleItalic: "ships with AI",
  paragraphs: [
    "I'm a software engineer with 1+ year of experience building backend APIs, workflow automation and ETL pipelines using Node.js, PostgreSQL and Redis — currently an Associate SDE at Zino Technology, working on a low-code workflow and API engine.",
    "On the AI side I work with LLM APIs (OpenAI, Anthropic Claude, Google Gemini): prompt and system-prompt design, tool/function calling, structured JSON outputs, and — just as important — writing test cases that check AI output for accuracy and cut hallucinations.",
    "I use Claude, ChatGPT and Cursor every day, and I'm looking to build and ship AI-powered products end to end — from the API and the database to the model call and the UI.",
  ],
  quote:
    "I care about the boring parts that make AI reliable — validation, retries, logging, caching and tests — not just the demo.",
  highlights: [
    { icon: "Server", title: "Backend & APIs", description: "Node.js/Express services, REST APIs, JWT auth, webhooks, rate limiting and scheduled jobs." },
    { icon: "Bot", title: "LLM Applications", description: "Tool-calling workflows, structured outputs, RAG basics and evaluation to reduce hallucinations." },
    { icon: "Database", title: "Data & Performance", description: "PostgreSQL query optimisation, data modelling, Redis caching and ETL pipelines." },
    { icon: "Bug", title: "Production Debugging", description: "Log analysis and database-level troubleshooting that improve stability and cut downtime." },
  ],
  softSkills: [
    "Problem Solving", "Debugging", "Ownership", "Clear Documentation",
    "Agile / SDLC", "Collaboration", "Fast Learner", "Testing Mindset",
  ],
};

export const experience = [
  {
    period: "June 2025 – Present",
    role: "Associate SDE",
    company: "Zino Technology",
    location: "Bangalore, India",
    current: true,
    summary: "Low-Code Workflow & API Engine — building the backend that powers configurable enterprise workflows.",
    points: [
      "Developed Node.js/Express.js backend APIs and reusable service modules supporting configurable low-code workflows, CRUD operations and automated business processes across multiple enterprise use cases.",
      "Built Node.js services for REST API integration, JSON payload processing and data transformation, with JWT-based authentication, retry mechanisms and centralised execution logging.",
      "Automated data synchronisation between internal databases and external enterprise systems via scheduled jobs (node-cron); wrote and optimised complex PostgreSQL queries for customer, sales and master data.",
      "Debugged and resolved production issues through application logging, API log analysis and database-level troubleshooting, improving stability and reducing downtime.",
      "Implemented rate limiting and request throttling with Redis to prevent API abuse, ensure fair usage across clients and stay stable during peak traffic.",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs", "JWT", "node-cron", "JSON"],
  },
  {
    period: "May 2024 – 2025",
    role: "Web Developer Intern",
    company: "Exposys Data Labs",
    location: "Remote",
    summary: "Mass Mail Dispatcher — a bulk email tool with recipient management and a template editor.",
    points: [
      "Designed SQL schemas and Java modules for bulk email recipient data.",
      "Integrated email-marketing REST APIs for sending at scale.",
      "Built an HTML/CSS/JavaScript template editor for composing campaign emails.",
    ],
    technologies: ["Java", "SQL", "REST APIs", "HTML", "CSS", "JavaScript"],
  },
];

export const projects = [
  {
    title: "MCP Knowledge Base Server",
    context: "AI tooling · Model Context Protocol",
    icon: "Brain",
    image: null,
    description:
      "An MCP server that gives Claude Desktop, Cursor or any MCP client a personal knowledge base with real semantic search — local embeddings, Redis caching, dual stdio/HTTP transports and a Postgres-backed store.",
    result: "26 real, un-mocked tests · zero API keys needed",
    tags: ["Node.js", "MCP SDK", "Embeddings", "Redis", "PostgreSQL", "pgvector", "Zod"],
    github: "https://github.com/Ayuszz/mcp-knowledge-base",
    live: null,
    details: {
      problem:
        "Most demo MCP servers wrap one trivial API call. The goal here was an MCP server built to real-system standards: store notes, then ask questions and get back notes that mean the same thing — not just ones that share keywords — with zero infrastructure to run locally.",
      dataset:
        "Exposes 4 tools (add_note, search_notes, list_notes, delete_note) and 1 resource (note://{id}). Notes are embedded with a local all-MiniLM-L6-v2 model (384 dimensions) and stored in a local JSON file, or in Postgres + pgvector for the deployed version.",
      steps: [
        { title: "Shared server core", text: "Defined every tool and resource once in createServer.js, so two transports — stdio for Claude Desktop/Cursor and Streamable HTTP for Vercel — share the same logic." },
        { title: "Local semantic search", text: "Used @xenova/transformers to generate embeddings locally (no API key) and ranked notes by cosine similarity, so “somewhere to swim” finds the pool note." },
        { title: "Swappable storage", text: "Wrote a JSON-file store for local use and a Postgres/pgvector store (HNSW index) with the identical interface — switching needs zero changes to any tool." },
        { title: "Fail-open Redis cache", text: "Cached search results in Redis, designed so an unset or unreachable Redis never breaks search — it just runs uncached, with a short connect timeout." },
        { title: "Input validation", text: "Every tool's input schema is a Zod schema, so bad calls return a clear isError result instead of crashing." },
        { title: "Real end-to-end tests", text: "Spawned the real server and drove it through the official MCP client over stdio, plus a real HTTP server + client — 26 tests, none mocked." },
        { title: "Serverless deployment", text: "Built a stateless api/mcp.js for Vercel (fresh server per request) backed by Supabase Postgres, with secrets kept in Vercel env variables." },
      ],
      metrics: [
        { value: "26", label: "Automated tests" },
        { value: "4 + 1", label: "Tools + resource" },
        { value: "384-d", label: "Local embeddings" },
        { value: "2", label: "Transports (stdio & HTTP)" },
      ],
      findings: [
        "Brute-force cosine search over a few hundred notes takes milliseconds — a vector DB only earns its cost at larger scale or on serverless, which is exactly where the pgvector store is used.",
        "Fixed a silent Windows-only bug: an entrypoint check compared file:// URLs with the wrong number of slashes, so the server loaded and exited with no error.",
        "Fixed a Windows native-dependency failure (sharp via @xenova/transformers) — a reminder that “it doesn't work” and “it isn't installed correctly” are different bugs.",
        "Documented trade-offs honestly: cold-start latency on serverless, and the Postgres store not yet covered by the test suite.",
      ],
      useCases: [
        "Personal or team knowledge base searchable from Claude Desktop or Cursor",
        "Meaning-based search over notes, docs or FAQs",
        "A reference design for production-quality MCP servers",
        "Starter for RAG features inside AI assistants",
      ],
      learnings:
        "Designing MCP tools and resources, embeddings and vector search, cache design that fails safely, serverless constraints, and testing AI tooling end to end with the real protocol.",
    },
  },
  {
    title: "MCP-Powered Pune Startups Map",
    context: "AI tooling · MCP server + client",
    icon: "Map",
    image: null,
    description:
      "An interactive map of Pune's tech hubs backed by an MCP server. Search or filter and pins for 15 real, sourced startups plot live on the map — the same server can also be used directly by Claude Desktop.",
    result: "15 real startups across 9 Pune areas, live on a Leaflet map",
    tags: ["Node.js", "MCP SDK", "Express.js", "Leaflet.js", "JSON-RPC"],
    github: "https://github.com/Ayuszz/mcp-pune-startups",
    live: null,
    details: {
      problem:
        "Show why MCP matters by decoupling the “brain” (data + business logic) from whoever calls it. The same MCP server powers a plain web map with no AI involved, and can be plugged straight into Claude Desktop as a tool source.",
      dataset:
        "15 real Pune startups gathered via web search, with sources, across 9 real Pune areas with lat/lng. Each record carries a location-confidence flag (✓ verified address or ≈ approximate area), shown honestly in the UI.",
      steps: [
        { title: "MCP server", text: "Registered 3 tools — search_startups, list_areas, get_startup — and a startup://{id} resource in createServer.js, served over the stdio transport." },
        { title: "Structured results", text: "Every tool returns both a readable text summary (for an LLM) and structuredContent JSON (for code) — so the web app never re-parses text." },
        { title: "Express as an MCP client", text: "webapp.js spawns the MCP server as a child process on boot, keeps one stdio connection open, and turns each REST request into an MCP tool call." },
        { title: "Interactive map", text: "Built the frontend with Leaflet.js: colour-coded pins by sector, popups with a confidence badge, a results side panel and auto-zoom to fit matches." },
        { title: "Debugging the map", text: "Traced blank tiles to Leaflet measuring its flex container before layout settled; fixed with invalidateSize() on the next tick and on resize." },
        { title: "Deployment-ready", text: "Runs as one long-lived Node process reading PORT from the environment, suited to a web service host such as Render." },
      ],
      metrics: [
        { value: "15", label: "Real startups" },
        { value: "9", label: "Pune areas mapped" },
        { value: "3 + 1", label: "Tools + resource" },
      ],
      findings: [
        "The full round trip (browser → Express → MCP stdio → tool → back) is deterministic and works offline once installed.",
        "Reading structuredContent directly is the correct MCP pattern when the caller needs data, not a description of it.",
        "Being upfront about data confidence (verified vs approximate locations) builds more trust than presenting everything as exact.",
      ],
      useCases: [
        "Exploring a city's startup ecosystem by sector, stage or area",
        "Letting an AI assistant answer questions over a curated dataset via MCP",
        "A template for putting any location dataset behind MCP and a map UI",
        "Teaching how MCP servers, clients and transports fit together",
      ],
      learnings:
        "MCP client/server architecture, child-process stdio transports, structured tool results, and real front-end debugging with browser tools.",
    },
  },
  {
    title: "AI Hotel Guest Assistant",
    context: "Full-stack LLM application",
    icon: "Hotel",
    image: "./hotel-assistant.jpg",
    description:
      "A chat assistant where signed-in hotel guests ask about the property, check room availability and book (simulated payment). The LLM is grounded in a JSON knowledge base with a hallucination guard and a multi-provider fallback chain.",
    result: "Grounded answers · 3-provider LLM fallback · deployed on Vercel",
    tags: ["TypeScript", "Next.js", "React", "Supabase", "LLM APIs", "Zod", "Vitest", "Playwright"],
    github: "https://github.com/Ayuszz/hotel-guest-assistant",
    live: null,
    details: {
      problem:
        "Guests ask the same questions — breakfast, rooms, policies, availability. The assistant should answer only from the hotel's own data, never invent facts or prices, check real availability, and still work when an LLM provider is slow or down.",
      dataset:
        "A hotel knowledge base (hotel.json: rooms, amenities, policies, FAQs) and an inventory file (inventory.json: stock and bookings). Users, conversations, messages and bookings are stored in Supabase Postgres.",
      steps: [
        { title: "Auth & login wall", text: "Email/password sign-up with Supabase Auth; middleware refreshes the session and protects every route except login and signup." },
        { title: "One structured LLM call", text: "Each message makes a single JSON-schema call that returns intent, any extracted dates/guest count, and — for questions — an answer written only from retrieved sections." },
        { title: "Hallucination guard", text: "Retrieval is keyword-based in code; any number in the answer that isn't in the retrieved text rejects the answer and falls back to the front-desk contact." },
        { title: "Deterministic availability tool", text: "Availability never goes to the model: checkAvailability() runs in code over the inventory and the reply is templated, with an in-chat date/guest form." },
        { title: "Provider fallback chain", text: "Cerebras → Groq → Gemini, each with its own model chain and timeouts; if all fail, deterministic routing still answers safely." },
        { title: "Threads & bookings", text: "Conversations persist server-side with auto-titles in a sidebar; guests can book from the availability card with a simulated payment." },
        { title: "Testing & deployment", text: "Vitest unit/integration tests with a mock LLM, Playwright end-to-end tests on desktop and mobile, deployed to Vercel." },
      ],
      metrics: [
        { value: "3", label: "LLM providers in fallback" },
        { value: "0", label: "AI in pricing/availability" },
        { value: "2", label: "Test suites (Vitest + Playwright)" },
      ],
      findings: [
        "Using AI only where it helps (understanding, extraction, phrasing) and code for everything else (pricing, availability, auth, payments) keeps answers trustworthy.",
        "A typed response envelope (text, availability, clarification, fallback, error) keeps the UI simple and predictable.",
        "A mock LLM lets the whole test suite run without any API key.",
      ],
      useCases: [
        "24/7 guest support for hotels and serviced apartments",
        "Any customer-support bot that must answer only from company data",
        "Booking or reservation assistants with real inventory checks",
        "A reference for grounded, testable LLM features in production",
      ],
      learnings:
        "Grounding and guarding LLM output, tool-style deterministic logic, multi-provider resilience, auth and persistence with Supabase, and testing AI apps end to end.",
    },
  },
  {
    title: "Spotify Clone",
    context: "Frontend · React",
    icon: "Music",
    image: "./spotify.jpg",
    description:
      "A Spotify-style music player with albums, a now-playing bar and full playback controls — play/pause, previous/next, shuffle, loop, seek and volume — all driven by global state via the Context API.",
    result: "Full player controls with global state",
    tags: ["React.js", "Tailwind CSS", "Vite", "Context API"],
    github: "https://github.com/Ayuszz/React-spotify",
    live: null,
    details: {
      problem:
        "Recreate the core Spotify listening experience in React — browsing albums and controlling playback from anywhere in the app — without prop-drilling player state through every component.",
      dataset:
        "Local album and song data (cover art, titles, audio) defined in an assets module.",
      steps: [
        { title: "Layout", text: "Built the sidebar, album grid, album pages and a persistent player bar with Tailwind CSS." },
        { title: "Global player state", text: "Created a PlayerContext provider holding the audio element, current track and play state, available to every component." },
        { title: "Playback controls", text: "Implemented play/pause, previous/next, shuffle, loop and volume controls." },
        { title: "Seek bar", text: "Synced a progress bar with the audio's current time and let users click to seek within a song." },
        { title: "Album navigation", text: "Routed between the home view and individual album pages listing their songs." },
      ],
      metrics: [
        { value: "6+", label: "Player controls" },
        { value: "1", label: "Global Context store" },
      ],
      findings: [
        "Context API cleanly removed prop-drilling for shared player state.",
        "Keeping one audio element in context avoids multiple tracks playing at once.",
      ],
      useCases: [
        "Media player UIs for music or podcast apps",
        "A pattern for app-wide state with React Context",
        "Practice project for component architecture and Tailwind styling",
      ],
      learnings:
        "React component design, global state with Context, working with HTML audio, and responsive UI with Tailwind.",
    },
  },
  {
    title: "Personal Portfolio",
    context: "Frontend · this website",
    icon: "Layout",
    image: null,
    description:
      "This portfolio — built with React and Tailwind CSS, deployed on Vercel. All content lives in a single config file, with project case studies, a contact menu and a one-click CV download.",
    result: "Config-driven, responsive, deployed on Vercel",
    tags: ["React.js", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/Ayuszz/react-tailwind-personal-portfolio",
    live: "https://react-tailwind-personal-portfolio-u.vercel.app/",
    details: {
      problem:
        "A fast, good-looking portfolio that is easy to keep up to date — updating it after a new CV should be a single-file edit.",
      dataset: "All text, links, projects and skills are kept in src/portfolio.config.js.",
      steps: [
        { title: "Design system", text: "Dark glassmorphism theme with Tailwind CSS v4 tokens, animated borders and subtle motion that respects reduced-motion settings." },
        { title: "Config-driven content", text: "Every section reads from one config file, so content changes never touch components." },
        { title: "Interactions", text: "Contact menu (email, WhatsApp, call with copy fallback), CV download, expandable tools list and project case-study popups." },
        { title: "Deploy", text: "Built with Vite and deployed on Vercel, redeploying automatically on every push to GitHub." },
      ],
      metrics: [
        { value: "1", label: "Config file for all content" },
        { value: "100%", label: "Responsive" },
      ],
      findings: [
        "Separating content from components makes updates quick and low-risk.",
      ],
      useCases: [
        "Personal developer portfolio",
        "A reusable template for friends and colleagues",
      ],
      learnings: "React architecture, Tailwind CSS v4, accessibility basics and Vercel deployment.",
    },
  },
];

export const skillGroups = [
  { icon: "Bot", title: "AI & LLM", items: ["LLM API Integration (OpenAI, Claude, Gemini)", "Prompt Engineering", "System Prompts", "Context Management", "Tool / Function Calling", "AI Agent Workflows", "Structured JSON Outputs", "LLM Evaluation & Test Cases", "Hallucination Reduction", "RAG & Embeddings", "MCP", "Daily: Claude · ChatGPT · Cursor"] },
  { icon: "Code2", title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Java (basic)"] },
  { icon: "Server", title: "Backend & APIs", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Microservices", "OpenAPI / Swagger", "MVC", "Webhooks", "Rate Limiting", "ETL & Batch Processing", "node-cron", "Data Validation"] },
  { icon: "Database", title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "Query Optimization", "Data Modelling"] },
  { icon: "Cloud", title: "Cloud, DevOps & Tools", items: ["AWS (foundational)", "Linux", "Git & GitHub", "CI/CD (GitHub Actions)", "Postman", "DBeaver", "Render", "Vercel"] },
  { icon: "Layout", title: "Frontend & Fundamentals", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "DSA", "OOP", "HTTP", "SDLC", "Agile", "Debugging"] },
];

export const education = [
  {
    period: "2021 – 2025",
    title: "B.Tech — Chemical Engineering",
    institution: "Veer Surendra Sai University of Technology",
    icon: "GraduationCap",
  },
  {
    period: "2025 – 26",
    title: "MERN Stack Development",
    institution: "JS Spider",
    icon: "Award",
  },
  {
    period: "Mar – Jun 2026",
    title: "Python with AI",
    institution: "Course",
    icon: "Award",
  },
  {
    period: "Certifications",
    title: "Responsive Web Design · JS Algorithms & Data Structures · Front End Libraries",
    institution: "freeCodeCamp",
    icon: "Award",
  },
];

// ── Contact links (web links work everywhere, incl. sandboxed previews) ──
const digits = socials.phone.replace(/\D/g, "");
export const contactLinks = {
  gmail: (subject = `Hello ${profile.firstName}`, body = "") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${socials.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  mailto: (subject = `Hello ${profile.firstName}`, body = "") =>
    `mailto:${socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  whatsapp: `https://wa.me/${digits}?text=${encodeURIComponent(`Hi ${profile.firstName}, I came across your portfolio and would like to connect.`)}`,
  tel: `tel:+${digits}`,
};

// Absolute URL of the CV so it opens correctly from any host
export const resumeUrl = () => {
  try { return new URL(profile.resume, window.location.href).href; } catch { return profile.resume; }
};
