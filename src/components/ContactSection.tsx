import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const { t } = useTranslation();
  const contact = t("contact").split(" ");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceid = import.meta.env.VITE_SERVICE_ID;
    const templateid = import.meta.env.VITE_TEMPLATE_ID ;
    const publickey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    console.log(`Service ID: ${serviceid}`);
    console.log(`Template ID: ${templateid}`);
    console.log(`Public Key: ${publickey}`);

    // Handle form submission logic here
    emailjs
      .sendForm(
        serviceid,
        templateid,
        e.currentTarget,
        publickey
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: t("toastSuccessTitle"),
            description: t("toastSuccessDescription"),
            duration: 4000,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: t("toastErrorTitle"),
            description: t("toastErrorDescription"),
            duration: 4000,
          });
        }
      ).finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {contact[0]}{" "}
          <span className="text-primary">
            {contact[1]} {contact[2]}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-12 max-w-2xl mx-auto">
          {t("contactDescription")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contactSubtitle1")}
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start space-x-4">
                  <h4 className="font-medium">{t("contactEmail")}</h4>
                  <a
                    href="mailto:andiinfantes@gmail.com"
                    className="text-muted-forground hover:text-primary transition-colors"
                  >
                    andiinfantes@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start space-x-4">
                  <h4 className="font-medium">{t("contactPhone")}</h4>
                  <a
                    href="tel:+51484-8197"
                    className="text-muted-forground hover:text-primary transition-colors"
                  >
                    +51 484-8197
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start space-x-4">
                  <h4 className="font-medium">{t("contactLocation")}</h4>
                  <a
                    href="https://maps.app.goo.gl/RjG2ES9wJDG2mRT59"
                    className="text-muted-forground hover:text-primary transition-colors"
                  >
                    Lima, Perú
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4>{t("contactConnectWithMe")}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/andi-is/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/andi.infante/?igsh=bmpnYWozemF5MGZr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contactSubtitle2")}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contactName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contactMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your message here"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
                aria-label="Send Message"
              >
                {isSubmitting ? "Sending..." : <>{t("contactButtonSend")}</>}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}