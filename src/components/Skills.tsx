import { motion } from "motion/react";
import { Code2, Cpu, Cloud, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-cyan-400" size={24} />,
    skills: ["Python", "C++", "SQL"],
  },
  {
    title: "Computer Science",
    icon: <Cpu className="text-blue-400" size={24} />,
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "OS",
      "Computer Networks",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-cyan-400" size={24} />,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Azure DevOps",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "Software Engineering",
    icon: <Wrench className="text-blue-400" size={24} />,
    skills: ["REST APIs", "Agile/Scrum"],
  },
  {
    title: "Tools & Databases",
    icon: <Database className="text-cyan-400" size={24} />,
    skills: ["MySQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 glass-card-hover group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-medium group-hover:border-cyan-500/30 transition-colors"
                  >
                    {skill}
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
