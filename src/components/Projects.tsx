import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Microservices Platform",
    description:
      "A scalable microservices architecture for an AI chatbot platform, ensuring high API reliability and uptime.",
    tech: ["FastAPI", "Docker", "Kubernetes", "Python", "REST APIs"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Distributed Task Management System",
    description:
      "A full-stack task management application with secure authentication and optimized performance for distributed teams.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FolderGit2 className="text-cyan-400" /> Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 glass-card-hover group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <FolderGit2 size={28} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm font-mono text-cyan-400/80 bg-cyan-500/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
