import { useCallback, useEffect, useRef, useState } from "react";
import { profile, trailer, impactStats, about, experience, projects, skillGroups, education } from "../portfolio.config";
import { Icon } from "./Icon";
import { shards, cracks } from "./glass";
import { CrackLines } from "./CrackLines";

// Scene timings (ms). The site is revealed after the last scene.
const SCENES = [
  { id: "tag1", ms: 1700 },
  { id: "tag2", ms: 1700 },
  { id: "name", ms: 2800 },
  { id: "flash", ms: 2000 },
  { id: "stats", ms: 2300 },
  { id: "title", ms: 1900 },
  { id: "assemble", ms: 0 }, // set below from the number of cards
];
const REVEAL_MS = 1700;

// "7 mo" → { n: 7, suffix: " mo" }
const parseStat = (v) => {
  const m = String(v).match(/^([^\d]*)(\d+)(.*)$/);
  return m ? { prefix: m[1], n: Number(m[2]), suffix: m[3] } : { prefix: "", n: 0, suffix: String(v) };
};

const Counter = ({ value, delay }) => {
  const { prefix, n, suffix } = parseStat(value);
  const [cur, setCur] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now() + delay;
    const tick = (t) => {
      const p = Math.min(1, Math.max(0, (t - start) / 900));
      setCur(Math.round(n * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [n, delay]);
  return <>{prefix}{cur}{suffix}</>;
};

const Scene = ({ id }) => {
  switch (id) {
    case "tag1":
    case "tag2":
      return (
        <p className="tr-text-in text-2xl md:text-5xl font-serif italic text-foreground/90 text-center px-6">
          {trailer.taglines[id === "tag1" ? 0 : 1]}
        </p>
      );
    case "name":
      return (
        <div className="flex flex-col items-center gap-6 px-6">
          {profile.photo && (
            <div className="tr-photo w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_60px_rgba(169,112,255,0.6)]">
              <img src={profile.introPhoto || profile.photo} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <span className="tr-fade text-xs md:text-sm uppercase tracking-[0.5em] text-primary">{trailer.introducing}</span>
          <h1 className="tr-name text-4xl md:text-7xl font-bold uppercase text-center leading-none">{profile.name}</h1>
          <span className="tr-fade-late text-sm md:text-lg text-muted-foreground text-center">{profile.role}</span>
        </div>
      );
    case "flash":
      return (
        <div className="relative w-full h-40 flex items-center justify-center">
          {trailer.flash.map((w, i) => (
            <span
              key={w}
              className="tr-flash absolute text-4xl md:text-7xl font-bold text-primary whitespace-nowrap"
              style={{ animationDelay: `${i * (1800 / trailer.flash.length)}ms`, animationDuration: `${1800 / trailer.flash.length - 20}ms` }}
            >
              {w}
            </span>
          ))}
        </div>
      );
    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 px-6">
          {impactStats.map((s, i) => (
            <div key={s.label} className="tr-stat text-center" style={{ animationDelay: `${i * 180}ms` }}>
              <div className="text-4xl md:text-6xl font-bold text-primary glow-text">
                <Counter value={s.value} delay={i * 180} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "title":
      return (
        <div className="flex flex-col items-center gap-5 px-6 text-center">
          <span className="tr-chip px-4 py-1.5 rounded-full border border-primary/50 text-primary text-xs uppercase tracking-[0.4em]">
            {trailer.finalLine}
          </span>
          <h1 className="tr-title text-5xl md:text-8xl font-bold leading-none">
            {profile.firstName}
            <span className="text-primary">.</span>
          </h1>
          <p className="tr-fade-late font-serif italic text-xl md:text-3xl text-foreground/80">
            {profile.headline.before} {profile.headline.highlight} {profile.headline.middle} {profile.headline.italic}
          </p>
        </div>
      );
    case "assemble":
      return <Assemble />;
    default:
      return null;
  }
};

// Every card on the site, dropped from the sky one by one in random order
const PANELS = [
  { icon: "Sparkles", kicker: "About", title: profile.name },
  ...about.highlights.map((h) => ({ icon: h.icon, kicker: "Strength", title: h.title })),
  ...experience.map((e) => ({ icon: "Briefcase", kicker: e.role, title: e.company })),
  ...projects.map((p) => ({ icon: p.icon, kicker: "Project", title: p.title })),
  ...skillGroups.map((g) => ({ icon: g.icon, kicker: "Skills", title: g.title })),
  ...education.map((e) => ({ icon: e.icon, kicker: "Education", title: e.title.split("—")[0].split("·")[0].trim() })),
  { icon: "Target", kicker: "Contact", title: "Let's talk" },
  { icon: "Award", kicker: "Résumé", title: "Download CV" },
];
const DROP_STEP = 140; // ms between drops
const DROP_SCENE_MS = PANELS.length * DROP_STEP + 1500;
SCENES.find((x) => x.id === "assemble").ms = DROP_SCENE_MS;
const TOTAL = SCENES.reduce((a, x) => a + x.ms, 0);

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Assemble = () => {
  const [cols] = useState(() => (typeof window !== "undefined" && window.innerWidth < 640 ? 4 : 6));
  // random landing order + random tilt for each card, fixed for this play
  const [plan] = useState(() => {
    const order = shuffle(PANELS.map((_, i) => i));
    return PANELS.map((_, i) => ({
      delay: order.indexOf(i) * DROP_STEP,
      rot: `${Math.round(Math.random() * 50 - 25)}deg`,
      drift: `${Math.round(Math.random() * 80 - 40)}px`,
    }));
  });

  // each landing cracks the glass a little more (inner cracks first)
  const crackTime = (k) => Math.floor((k * PANELS.length) / cracks.length) * DROP_STEP + 620;

  return (
    <div className="w-full max-w-6xl px-3 md:px-10">
      <CrackLines times={crackTime} className="z-0" />
      <p className="tr-fade relative z-10 text-center text-xs md:text-sm uppercase tracking-[0.5em] text-primary mb-4 md:mb-8">
        Building the portfolio
      </p>
      <div
        className="tr-drop-grid relative z-10 grid gap-1.5 md:gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, animationDelay: `${PANELS.length * DROP_STEP + 500}ms` }}
      >
        {PANELS.map((c, i) => (
          <div
            key={i}
            className="tr-drop-card rounded-lg md:rounded-xl border border-primary/30 bg-card p-1.5 md:p-3 min-h-[50px] md:min-h-[76px]"
            style={{ "--rot": plan[i].rot, "--drift": plan[i].drift, animationDelay: `${plan[i].delay}ms` }}
          >
            <span className="w-5 h-5 md:w-8 md:h-8 rounded-md md:rounded-lg bg-primary/15 flex items-center justify-center mb-1 md:mb-1.5">
              <Icon name={c.icon} className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-wider text-primary/80 truncate">{c.kicker}</span>
            <span className="block text-[10px] md:text-[13px] font-semibold leading-tight line-clamp-2">{c.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const IntroTrailer = ({ onDone }) => {
  const [idx, setIdx] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setRevealing(true);
    setTimeout(onDone, REVEAL_MS);
  }, [onDone]);

  // advance scenes
  useEffect(() => {
    if (revealing) return;
    const t = setTimeout(() => {
      if (idx < SCENES.length - 1) setIdx(idx + 1);
      else finish();
    }, SCENES[idx].ms);
    return () => clearTimeout(t);
  }, [idx, revealing, finish]);

  // lock page scroll; Esc / Enter / Space skips
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => ["Escape", "Enter", " "].includes(e.key) && finish();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [finish]);

  const elapsed = SCENES.slice(0, idx).reduce((a, s) => a + s.ms, 0);

  return (
    <div className={`fixed inset-0 z-[200] h-[100dvh] w-screen ${revealing ? "pointer-events-none" : ""}`} aria-label="Intro" role="presentation">
      {/* the glass pane: seamless until it shatters at the end, revealing the site */}
      <div className="absolute inset-0" style={{ perspective: "1200px" }}>
        {shards.map((sh, i) => (
          <div
            key={i}
            className={`absolute inset-0 tr-glass ${revealing ? "tr-shard" : ""}`}
            style={{
              clipPath: sh.clip,
              "--tx": sh.tx,
              "--ty": sh.ty,
              "--rx": sh.rx,
              "--ry": sh.ry,
              "--rz": sh.rz,
              animationDelay: `${250 + sh.delay}ms`,
            }}
          />
        ))}
        {revealing && <CrackLines className="tr-crack-fade" />}
      </div>
      {revealing && <div className="absolute inset-0 tr-burst pointer-events-none" />}

      <div className={`absolute inset-0 overflow-hidden ${revealing ? "tr-stage-out" : ""}`}>
        {/* ambient light + grain */}
        <div className="absolute inset-0 hero-bg opacity-[0.35] tr-kenburns" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(9,5,16,0.45) 0%, rgba(9,5,16,0.88) 70%, #07040c 100%)" }} />
        <div className="absolute inset-0 tr-grain" />


        {/* current scene */}
        <div key={SCENES[idx].id} className="absolute inset-0 flex items-center justify-center">
          <Scene id={SCENES[idx].id} />
        </div>

        {/* progress + skip */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 md:px-10 pt-4" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}>
          <div className="w-32 md:w-48 h-[2px] bg-white/10 rounded overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{
                width: `${Math.min(100, ((elapsed + SCENES[idx].ms) / TOTAL) * 100)}%`,
                transition: `width ${SCENES[idx].ms}ms linear`,
              }}
            />
          </div>
          <button
            type="button"
            onClick={finish}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 hover:text-primary px-4 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 cursor-pointer"
          >
            Skip intro ›
          </button>
        </div>
      </div>
    </div>
  );
};
