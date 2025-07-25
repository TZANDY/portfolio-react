import { Briefcase, Code, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
// Import cv from public folder
import cvEs from "@/assets/docs/cv_es.pdf";
import cvEn from "@/assets/docs/cv_en.pdf";

export default function AboutSection() {
  const { t } = useTranslation();
  const about = t("about").split(" ");

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {about[0]} <span className="text-primary">{about[1]}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("aboutSubtitle")}</h3>
            <p className="text-muted-foreground">
              {t("aboutBio")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20"
              >
                {t("aboutButtonContact")}
              </motion.a>
              <motion.a
                href={t("cvLanguage") === "en" ? cvEn : cvEs}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20"
              >
                {t("aboutButtonCV")}
              </motion.a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("aboutSubtitle1")}</h4>
                  <p className="text-muted-foreground">
                    {t("aboutSummary1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("aboutSubtitle2")}</h4>
                  <p className="text-muted-foreground">
                    {t("aboutSummary2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("aboutSubtitle4")}</h4>
                  <p className="text-muted-foreground">
                    {t("aboutSummary4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
