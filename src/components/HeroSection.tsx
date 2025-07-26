import { ArrowDown } from "lucide-react";
import { motion } from "motion/react"
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const {t} = useTranslation();
    return (
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> {t("greeting")}</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Andi
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Infante
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 opacity-0 animate-fade-in-delay-3">
              {t("heroDescription")}
            </p>
            
            <div>
              <motion.a
                href="#projects"
                className="cosmic-button opacity-0 animate-fade-in-delay-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("heroButton")}
              </motion.a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    );
}