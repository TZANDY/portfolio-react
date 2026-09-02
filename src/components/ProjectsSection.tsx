import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCardSkeleton from "./skeleton/ProjectCardSkeleton";

type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  repoUrl: string;
  imageUrl: string;
  technologies: string[];
};


/* "data": [
        {
            "id": 2,
            "title": "Cotizador DDA v2.0",
            "description": "Plataforma web para la generación y gestión ágil de cotizaciones de productos médicos, permitiendo cálculos de costos precisos y flujos de trabajo optimizados.",
            "imageUrl": "https://www.andiis.dev/img/quotation_front.webp",
            "demoUrl": "",
            "url": "http://143.208.134.146:8078/",
            "repoUrl": "#",
            "createdAt": "2026-08-30T18:29:40.000Z",
            "technologies": [
                "SQL Server",
                "C#",
                "React 19"
            ]
        }
    ]*/
const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("https://portfolio-api.tzandy07.workers.dev/api/projects-technologies");
  if (!response.ok) {
    throw new Error("Could not load projects");
  }

  const data = await response.json();
  return Array.isArray(data.data) ? data.data : [];
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchProjects()
      .then((data) => {
        if (isMounted) {
          setProjects(data);
        }
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { t } = useTranslation();
  const projectsTitle = t("projects").split(" ");

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {projectsTitle[0]} <span className="text-primary">{projectsTitle[1]}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projectDescription")}
        </p>

        {isLoading ? (
          <ProjectCardSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs border font-medium bg-primary/20 text-secondary-foreground rounded-full "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.url}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.repoUrl}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/tzandy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projectButtonCheckGithub")}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}