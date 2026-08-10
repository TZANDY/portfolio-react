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
  // --- APLICACIONES WEB MODERNAS (Frontend Modern Stack) ---
  {
    id: 1,
    title: "Cotizador DDA v2.0",
    description:
      "Plataforma web para la generación y gestión ágil de cotizaciones de productos médicos, permitiendo cálculos de costos precisos y flujos de trabajo optimizados.",
    link: "http://143.208.134.146:8078/",
    github: "#",
    image: "/img/quotation_front.webp",
    tags: ["React 19", "TypeScript", "TanStack Query", "TanStack Form", "Zustand", "REST API","Clean Architecture"],
  },
  {
    id: 2,
    title: "Admin DDA v1.0",
    description:
      "Panel de administración centralizado para la gestión de usuarios, roles y permisos de acceso para las distintas plataformas corporativas.",
    link: "#",
    github: "#",
    image: "/img/admin_dda.webp",
    tags: ["React 19", "TypeScript", "TanStack Query", "Zustand", "REST API","Clean Architecture"],
  },

  // --- ECOSISTEMA B2B & PLATAFORMAS CORE ---
  {
    id: 3,
    title: "Warria E-Commerce v2.0",
    description:
      "Plataforma B2B de venta de productos médicos para clientes asociados, integrando catálogo, pedidos, campañas comerciales, documentación técnica y facturación.",
    link: "https://143.208.134.149/web2",
    github: "https://github.com/TZANDY/Alfaro-Core",
    image: "/img/e-comerce.png",
    tags: [".NET 5", "C#", "jQuery", "Bootstrap", "SQL Server", "REST API","Clean Architecture"],
  },
  {
    id: 4,
    title: "Portal Admin Warria v2.0",
    description:
      "Backoffice administrativo para el control operativo del e-commerce médico, facilitando la gestión centralizada de catálogos, aprobación de pedidos y facturación.",
    link: "http://143.208.134.147/web2admin",
    github: "#",
    image: "/img/portal-warria-2.png",
    tags: [".NET 8", "C#", "jQuery", "Bootstrap", "SQL Server", "REST API","Clean Architecture"],
  },
  {
    id: 5,
    title: "Sistema de Pedidos v1.0",
    description:
      "Solución web para representantes de ventas y médicos que agiliza la toma de pedidos en campo, seguimiento de clientes y análisis de resultados comerciales.",
    link: "https://143.208.134.149/pedidosWeb",
    github: "https://github.com/TZANDY/AlfaroPedidos",
    image: "/img/sellers-platform.png",
    tags: [".NET 8", "C#", "jQuery", "Bootstrap", "SQL Server", "REST API"],
  },

  // --- SERVICIOS & APIS BACKEND ---
  {
    id: 6,
    title: "AlfaMail API v1.0",
    description:
      "Microservicio para el envío masivo y transaccional de correos electrónicos automatizados mediante plantillas dinámicas Scriban.",
    link: "#",
    github: "#",
    image: "/img/api-rest.jpg",
    tags: [".NET 8", "C#", "Clean Architecture", "Scriban", "REST API"],
  },
  {
    id: 7,
    title: "API REST Proveedores v1.0",
    description:
      "Servicio de consulta e integración de datos que permite a proveedores externos acceder en tiempo real a información de inventarios y estado de productos.",
    link: "#",
    github: "#",
    image: "/img/api-rest.jpg",
    tags: [".NET 8", "C#", "SQL Server", "REST API", "Data Analysis","Clean Architecture"],
  },
  {
    id: 8,
    title: "API REST Vendedores v1.0",
    description:
      "API de analítica de datos enfocada en procesar el historial de ventas e indicadores de rendimiento comercial para la toma de decisiones.",
    link: "#",
    github: "#",
    image: "/img/api-rest.jpg",
    tags: [".NET 8", "C#", "SQL Server", "REST API", "Data Analysis","Clean Architecture"],
  },

  // --- HERRAMIENTAS INTERNAS & PILOTOS ---
  {
    id: 9,
    title: "Time Analyzer v1.0",
    description:
      "Aplicación de monitoreo de tiempo para colaboradores, diseñada para rastrear horas de trabajo, patrones de productividad y generación de reportes.",
    link: "#",
    github: "https://github.com/TZANDY/TimeAnalyzerApp",
    image: "/img/time-analyzer.jpeg",
    tags: [".NET 8", "C#", "jQuery", "Bootstrap", "SQL Server", "REST API"],
  },
  {
    id: 10,
    title: "Cotizador DDA v1.0",
    description:
      "Sistema de simulación y gestión de preformas orientado al control de costos de producción y trazabilidad de calidad.",
    link: "https://143.208.134.149/cotizadordda",
    github: "https://github.com/TZANDY/Simulator",
    image: "/img/cotizador.png",
    tags: [".NET 8", "C#", "jQuery", "Bootstrap", "SQL Server", "REST API"],
  },

  // --- PORTAFOLIO PERSONAL ---
  {
    id: 11,
    title: "Portfolio Personal",
    description:
      "Aplicación web interactiva y multiidioma diseñada para presentar proyectos, habilidades e itinerario profesional con enfoque en rendimiento.",
    link: "https://portfolio-react-six-dun.vercel.app/",
    github: "https://github.com/TZANDY/portfolio-react",
    image: "/img/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "i18next", "Vite", "React Router"],
  },
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