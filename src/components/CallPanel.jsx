import { useState } from "react";
import { Phone, Copy, Check, MessageCircle } from "lucide-react";
import { profile, socials, contactLinks } from "../portfolio.config";

// Shows the number with Call / Copy / WhatsApp actions.
// "Call now" opens the phone dialer (works on the live site);
// Copy and WhatsApp work everywhere, including sandboxed previews.
export const CallPanel = ({ compact = false }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(socials.phone.replace(/\s/g, ""));
    } catch {
      // fallback for browsers that block the clipboard API
      const ta = document.createElement("textarea");
      ta.value = socials.phone.replace(/\s/g, "");
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* ignore */ }
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btn = `inline-flex items-center justify-center rounded-full font-medium transition-all ${compact ? "gap-1 px-2 py-2.5 text-xs" : "gap-2 px-4 py-2.5 text-sm"}`;

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <a href={contactLinks.tel} target="_top" className="block text-center">
        <span className="block text-xs text-muted-foreground">{profile.firstName}'s number</span>
        <span className={`block font-bold tracking-wide text-foreground hover:text-primary ${compact ? "text-xl" : "text-2xl"}`}>
          {socials.phone}
        </span>
      </a>
      <div className="grid grid-cols-3 gap-2">
        <a href={contactLinks.tel} target="_top" className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
          <Phone className="w-4 h-4" /> Call
        </a>
        <button type="button" onClick={copy} className={`${btn} bg-surface border border-border hover:bg-primary/20 cursor-pointer`}>
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
        <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={`${btn} bg-surface border border-border hover:bg-green-500/20`}>
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
};
