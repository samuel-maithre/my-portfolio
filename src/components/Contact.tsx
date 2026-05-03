import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="mailto:maithresamuel@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-cyan-500/20 w-full sm:w-auto justify-center"
          >
            <Send size={20} /> Say Hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <a
            href="mailto:maithresamuel@gmail.com"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-4 glass-card group-hover:border-cyan-500/30 transition-colors">
              <Mail size={24} />
            </div>
            <span className="text-sm font-mono">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/samuel-maithre-b05154229"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-4 glass-card group-hover:border-cyan-500/30 transition-colors">
              <Linkedin size={24} />
            </div>
            <span className="text-sm font-mono">LinkedIn</span>
          </a>
          <a
            href="https://github.com/samuel-maithre"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-4 glass-card group-hover:border-cyan-500/30 transition-colors">
              <Github size={24} />
            </div>
            <span className="text-sm font-mono">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
