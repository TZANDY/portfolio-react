import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages =[
  { lang: "English", code: "en" },
  { lang: "Español", code: "es" },
]

export default function LanguageToggle() {
  const {i18n} = useTranslation();

  const handleLanguageChange = (lang: string) => {
    // Logic to change the language goes here
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang; // Update the HTML lang attribute
  }

  return (
    <div className={cn(
        "fixed flex gap-1 items-center max-sm:hidden top-4 right-15 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}>
      <Globe className="h-5 w-5" />
      <select
        title="Select Language"
        className={cn(
          "bg-background text-foreground border border-foreground/20 rounded-md text-sm capitalize",
          "focus:outline-none focus:ring-2 focus:ring-primary"
        )}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className={
            lang.code === i18n.language ? "bg-primary/20 text-secondary-foreground" : "text-foreground"
          }>
            {lang.lang}
          </option>
        ))}
      </select>
    </div>
      
  );
}