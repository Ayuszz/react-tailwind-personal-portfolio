import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Linkedin, Github, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailJs from "@emailjs/browser";
import { SectionHeader } from "../components/SectionHeader";
import { profile, socials, contactLinks } from "../portfolio.config";
import { CallPanel } from "../components/CallPanel";

const contactInfo = [
  { icon: Mail, label: "Email", value: socials.email, href: contactLinks.gmail(), target: "_blank" },
  { icon: MessageCircle, label: "WhatsApp", value: socials.phone, href: contactLinks.whatsapp, target: "_blank" },
  { icon: Linkedin, label: "LinkedIn", value: socials.linkedinHandle, href: socials.linkedin, target: "_blank" },
  { icon: Github, label: "GitHub", value: socials.githubHandle, href: socials.github, target: "_blank" },
  { icon: MapPin, label: "Location", value: profile.location, href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`, target: "_blank" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // No EmailJS keys yet → hand off to Gmail / the visitor's email app, pre-filled
      if (!serviceId || !templateId || !publicKey) {
        const subject = `Portfolio enquiry from ${formData.name}`;
        const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
        const a = document.createElement("a");
        a.href = contactLinks.gmail(subject, body);
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setSubmitStatus({
          type: "handoff",
          message: "Your message is ready — send it from Gmail or your email app:",
          gmail: contactLinks.gmail(subject, body),
          mailto: contactLinks.mailto(subject, body),
        });
        return;
      }

      await emailJs.send(
        serviceId,
        templateId,
        { name: formData.name, email: formData.email, message: formData.message },
        publicKey
      );
      setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({ type: "error", message: "Failed to send message. Please email me directly." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something"
          italic="together"
          subtitle="Hiring for a backend or AI engineering role, or have a project in mind? Send a message — I'd love to hear about it."
          center
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input id="name" type="text" required placeholder="Your name…" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input id="email" type="email" required placeholder="your@email.com" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={5} required placeholder="Your message…" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputCls} resize-y`} />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 h-12 rounded-full font-medium transition-all"
              >
                {isLoading ? "Sending…" : "Send message"}
                <Send className="w-4 h-4" />
              </button>
              {submitStatus.type === "handoff" && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-sm space-y-3">
                  <p>{submitStatus.message}</p>
                  <div className="flex flex-wrap gap-2">
                    <a href={submitStatus.gmail} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Mail className="w-4 h-4" /> Open in Gmail
                    </a>
                    <a href={submitStatus.mailto} target="_top"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface hover:bg-primary/20">
                      Other email app
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground">Or write directly to {socials.email}</p>
                </div>
              )}
              {submitStatus.message && submitStatus.type !== "handoff" && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 content-start">
            <div className="sm:col-span-2 p-5 glass rounded-2xl border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call · tap to ring</h3>
                  <p className="text-xs text-muted-foreground">Opens your phone's dialer with the number ready</p>
                </div>
              </div>
              <CallPanel />
            </div>
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.target}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass hover:bg-surface rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                  <c.icon className="w-6 h-6 text-primary group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">{c.label}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
