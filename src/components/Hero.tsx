import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Samuel Maithre</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-400 font-medium mb-8"
        >
          Software & Platform Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg text-gray-400 mb-12 leading-relaxed"
        >
          Building scalable applications, automating deployments, and optimizing
          cloud-native infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 text-white font-medium transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 text-white font-medium transition-colors"
          >
            <Download size={18} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          <a
            href="https://github.com/samuel-maithre"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/samuel-maithre-b05154229"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:maithresamuel@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
