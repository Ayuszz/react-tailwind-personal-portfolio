import { Download } from "lucide-react";

export const AnimatedBorderButton = ({ href, fileName = true, label = "Download CV" }) => {
  return (
    <a
      href={href}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex bg-transparent shadow-[0_0_25px_rgba(169,112,255,0.45)]
       text-foreground hover:text-primary transition-all duration-300
       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
       px-8 py-3 text-base font-medium rounded-full overflow-visible"
    >
      {/* Animated svg border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 5,1 L 195,1 A 4,4 0 0 1 199,5 L 199,55 A 4,4 0 0 1 195,59 L 5,59 A 4,4 0 0 1 1,55 L 1,5 A 4,4 0 0 1 5,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="600 400"
          strokeLinecap="round"
          className="animation-border-path"
        />
      </svg>
      <span className="flex items-center gap-2 relative z-10">
        <Download className="w-5 h-5" />
        {label}
      </span>
    </a>
  );
};
