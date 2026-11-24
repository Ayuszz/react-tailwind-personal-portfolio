import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { socials, contactLinks } from "../portfolio.config";
import { CallPanel } from "./CallPanel";

// "Contact Me" button that opens a small menu: Email / WhatsApp / Call
export const ContactMenu = () => {
  const [open, setOpen] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const items = [
    { icon: Mail, label: "Email me", sub: socials.email, href: contactLinks.gmail(), target: "_blank" },
    { icon: MessageCircle, label: "WhatsApp", sub: socials.phone, href: contactLinks.whatsapp, target: "_blank" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setShowCall(false); }}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium transition-all duration-200 text-base cursor-pointer"
      >
        Contact Me <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div role="menu" className="absolute left-0 top-full mt-3 w-72 bg-card border border-border rounded-2xl p-2 z-30 shadow-2xl shadow-black/60">
          {items.map((it) => (
            <a
              key={it.label}
              role="menuitem"
              href={it.href}
              target={it.target}
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/15 transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/30">
                <it.icon className="w-5 h-5 text-primary" />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{it.label}</span>
                <span className="block text-xs text-muted-foreground truncate">{it.sub}</span>
              </span>
            </a>
          ))}
          <button
            type="button"
            role="menuitem"
            onClick={() => setShowCall((v) => !v)}
            aria-expanded={showCall}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-primary/15 transition-colors group text-left cursor-pointer"
          >
            <span className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/30">
              <Phone className="w-5 h-5 text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block font-medium">Call me</span>
              <span className="block text-xs text-muted-foreground truncate">Tap to call · {socials.phone}</span>
            </span>
          </button>
          {showCall && (
            <div className="m-1 mt-2 p-4 rounded-xl bg-surface/60 border border-border">
              <CallPanel compact />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
