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
    title: "Comprehensive Medical e-Commerce Platform",
    description:
      "A comprehensive e-commerce platform for medical supplies, featuring user-friendly navigation, secure payment processing, and a robust inventory management system.",
    link: "https://143.208.134.149/web2",
    github: "https://github.com/TZANDY/Alfaro-Core",
    image: "/img/e-comerce.png",
    tags: [".Net 5", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 2,
    title: "Sales Management System for Medical Representatives",
    description:
      "A sales management system designed for medical representatives, enabling efficient tracking of sales activities, client interactions, and performance analytics.",
    link: "https://143.208.134.149/pedidosWeb",
    github: "https://github.com/TZANDY/AlfaroPedidos",
    image: "/img/sellers-platform.png",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 3,
    title: "Preform Management System Pilot",
    description:
      "A pilot project for a preform management system, focusing on streamlining the production process, enhancing quality control, and improving operational efficiency.",
    link: "https://143.208.134.149/cotizadordda",
    github: "https://github.com/TZANDY/Simulator",
    image: "/img/cotizador.png", 
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A personal portfolio showcasing projects, skills, and professional achievements, designed to highlight expertise in web development and software engineering.",
    link: "https://portfolio-react-six-dun.vercel.app/",
    github: "https://github.com/TZANDY/portfolio-react",
    image: "/img/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "i18next","Vite","React Router"],
  },
  {
    id: 5,
    title: "Time Analyzer for employees",
    description:
      " A time analysis tool designed for employees, allowing them to track their work hours, analyze productivity patterns, and generate reports for performance evaluation.",
    link: "#",
    github: "https://github.com/TZANDY/TimeAnalyzerApp",
    image: "/img/time-analyzer.jpeg",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
  },
  {
    id: 6,    
    title: "Portal Administration System",
    description:
      "A portal administration system for managing user access, content moderation, and system configurations, ensuring a secure and efficient online environment.",
    link: "#",
    github: "#",
    image: "/img/medical.jpg",
    tags: [".Net 8", "C#", "jQuery", "Bootstrap", "SQL Server","REST API"],
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