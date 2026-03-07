import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

type Project = {
    id: number;
  title: string;
    description: string;
    link: string;
    github: string;
    image: string;
    tags: string[];
};

const projects: Project[] = [
  {
    id : 1,
    // title: "Comprehensive Medical e-Commerce Platform",
    title: "Warria v2.0",
    description:
      "Sistema de ventas de productos médicos para clientes asociados, que centraliza la gestión de pedidos, campañas, documentación técnica y facturación.",
    link: "https://143.208.134.149/web2",
    github: "https://github.com/TZANDY/Alfaro-Core",
    image: "/img/e-comerce.png",
    tags: [".Net 5", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 2,
    title: "Sistema de Pedidos v1.0",
    description:
      "Solución para representantes médicos y vendedores que optimiza la gestión de pedidos, el seguimiento de clientes y el análisis de resultados de ventas.",
    link: "https://143.208.134.149/pedidosWeb",
    github: "https://github.com/TZANDY/AlfaroPedidos",
    image: "/img/sellers-platform.png",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 3,
    title: "Cotizador DDA",
    description:
      "Un proyecto piloto para un sistema de gestión de preformas, enfocado en optimizar el proceso de producción, mejorar el control de calidad y aumentar la eficiencia operativa.",
    link: "https://143.208.134.149/cotizadordda",
    github: "https://github.com/TZANDY/Simulator",
    image: "/img/cotizador.png", 
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "Un portafolio personal que muestra proyectos, habilidades y logros profesionales, diseñado para resaltar la experiencia en desarrollo web e ingeniería de software.",
    link: "https://portfolio-react-six-dun.vercel.app/",
    github: "https://github.com/TZANDY/portfolio-react",
    image: "/img/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "i18next","Vite","React Router"],
  },
  {
    id: 5,
    title: "Time Analyzer v1.0",
    description:
      "Una herramienta de análisis de tiempo diseñada para empleados, que les permite rastrear sus horas de trabajo, analizar patrones de productividad y generar informes para la evaluación del rendimiento.",  
    link: "#",
    github: "https://github.com/TZANDY/TimeAnalyzerApp",
    image: "/img/time-analyzer.jpeg",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 6,    
    title: "Portal Warria v2.0",
    description:
      "Un portal de administración para el sistema de ventas de productos médicos, que centraliza la gestión de pedidos, campañas, documentación técnica y facturación, optimizando la eficiencia operativa y mejorando la experiencia del usuario.",
    link: "http://143.208.134.147/web2admin",
    github: "#",
    image: "/img/portal-warria-2.png",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 7,
    title: "API REST Proveedores v1.0",
    description:
      "Una API REST de consulta de datos diseñada para proveedores, que les permite acceder a información relevante sobre sus productos e inventarios, facilitando la integración con sistemas de gestión y mejorando la eficiencia operativa.",
    link: "#",
    github: "#",
    image: "/img/api-rest.jpg",
    tags: ["API", "Data Analysis", "REST API", "JSON", ".Net 8", "SQL Server"],
  },
  {
    id: 8,
    title: "API REST Vendedores v1.0",
    description:
      "Una API REST de consulta de datos diseñada para analizar información de ventas y rendimiento de los vendedores, facilitando la toma de decisiones y mejorando la eficiencia operativa.",
    link: "#",
    github: "#",
    image: "/img/api-rest.jpg",
    tags: ["API", "Data Analysis", "REST API", "JSON", ".Net 8", "SQL Server"],
  }
];

export default function ProjectsSection() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
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
                        href={project.link}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github}
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