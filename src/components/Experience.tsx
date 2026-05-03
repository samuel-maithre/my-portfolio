import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Programmer Analyst",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Present",
    description: [
      "Automated deployments and optimized CI/CD pipelines, significantly improving uptime and MTTR.",
      "Reduced defects through rigorous testing and code quality improvements.",
      "Collaborated with Agile teams to deliver scalable cloud-native solutions.",
    ],
  },
  {
    role: "Azure DevOps Intern",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Past",
    description: [
      "Built and maintained CI/CD pipelines for automated application delivery.",
      "Worked extensively with Azure cloud services to provision and manage infrastructure.",
      "Assisted in migrating legacy applications to containerized environments.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-cyan-400" /> Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-cyan-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 glass-card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6 text-gray-400 text-sm">
                  <span className="font-medium text-gray-300">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
