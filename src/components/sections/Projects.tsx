import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "HiveNet",
    description: "Professional networking platform featuring user profiles, connections, and community features. Dockerized backend, DB, and email services.",
    tech: ["Spring Boot", "React", "MySQL", "Docker", "Spring Security/JWT"],
    github: "https://github.com/chahak-28/HiveNet",
    features: ["RESTful APIs tested with Postman", "Secure JWT Authentication", "Dockerized services"]
  },
  {
    title: "GoalGrid",
    description: "Task tracking system with interactive dashboards, task categorization, and progress visualization for enhanced productivity.",
    tech: ["Spring Boot Microservices", "React", "MySQL", "JWT Auth"],
    github: "https://github.com/chahak-28", // Assuming main profile link if specific isn't provided
    features: ["Microservice Architecture", "Progress Visualization", "Task Categorization"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white">
            Featured <span className="glowing-text">Projects</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-pink-primary to-transparent opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-32 h-32 text-pink-primary -mr-8 -mt-8" />
              </div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-primary dark:text-gray-400 dark:hover:text-pink-primary transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-primary dark:text-gray-400 dark:hover:text-pink-primary transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow relative z-10">
                {project.description}
              </p>

              <div className="mb-6 relative z-10">
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-primary shadow-[0_0_5px_rgba(255,79,163,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-pink-primary/10 text-pink-primary border border-pink-primary/20">
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
};

export default Projects;
