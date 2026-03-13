import { Mail, MapPin, Phone, Send,CheckCircle,AlertCircle} from "lucide-react"
// import { Button } from "@/components/Button"
import { useState } from "react"
import emailJs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "ayushmohanty5800@gmail.com",
        href: "mailto:ayushmohanty5800@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9337044872",
        href: "tel:+919337044872"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Bangalore, India",
        href: "https://maps.google.com/?q=Kormangala"
    },
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({type: null, message: ""})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setSubmitStatus({type: null, message: ""})
        
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if(!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables"
                )
            }
            
            await emailJs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({type: 'success', message: 'Message sent successfully!'})
            setFormData({name: "", email: "", message: ""})
        } catch(err) {
            console.log("EmailJs error:",error);
            setSubmitStatus({type: 'error', message: 'Failed to send message. Please try again.'})
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="Contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Get in touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground">
                        Lets build{" "}
                        <span className="font-serif italic font-normal text-white">
                            something great
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-400 max-w-2xl mx-auto">
                        Have a project in mind? I would love to hear about it. Send me a message and we can discuss how we can work together
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                                    Name
                                </label>
                                <input 
                                    id="name"
                                    type="text" 
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-vertical" 
                                />
                            </div>
                            <button className="w-full liquid-glass h-12 text-sm italic text-muted-foreground hover:text-foreground hover:shadow-lg rounded-full font-medium px-6 py-3" type="submit" disabled={isLoading}>
                                Send message
                                <Send className="w-4 h-4 ml-1"/>
                            </button>
                            {submitStatus.message && (
                                <div className={`p-3 rounded-xl ${
                                    submitStatus.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 
                                    'bg-destructive/10 border border-destructive/30 text-destructive'
                                }`}>
                                    {SubmitEvent.type ==="sucess" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0"/>
                                    ):(
                                        <AlertCircle className="w-5 h-5 flex-shrink-0"/>
                                    )}
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </div>
                    
                    <div className="space-y-6 animate-fade-in animation-delay-500 lg:pl-12">
                        {contactInfo.map((contact, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 glass hover:bg-surface hover:shadow-lg rounded-2xl transition-all duration-300 cursor-pointer group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-all">
                                    <contact.icon className="w-6 h-6 text-primary group-hover:-rotate-12 transition-transform duration-300" />
                                </div>
                                <div className="grow">
                                    <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                                    <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors block text-sm group-hover:underline">
                                        {contact.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}