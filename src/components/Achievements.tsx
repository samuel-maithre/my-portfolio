import { motion } from "motion/react";
import {
  Award,
  CheckCircle2,
  Trophy,
  BookOpen,
  Code,
  Star,
} from "lucide-react";

const achievements = [
  {
    title: "Microsoft Azure AZ-900 Certified",
    icon: <Award className="text-blue-400" size={24} />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Patent Filed in Fraud Detection",
    icon: <Star className="text-yellow-400" size={24} />,
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Research Publication in Network Security",
    icon: <BookOpen className="text-purple-400" size={24} />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "200+ LeetCode Problems Solved",
    icon: <Code className="text-green-400" size={24} />,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "NPTEL Top 5% Rank",
    icon: <Trophy className="text-cyan-400" size={24} />,
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Trophy className="text-cyan-400" /> Certifications & Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 glass-card-hover group cursor-default relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              <div className="p-3 bg-white/5 rounded-xl shrink-0">
                {achievement.icon}
              </div>

              <h3 className="text-white font-medium leading-snug">
                {achievement.title}
              </h3>

              <CheckCircle2
                className="absolute top-4 right-4 text-white/10 group-hover:text-cyan-400/50 transition-colors"
                size={48}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
