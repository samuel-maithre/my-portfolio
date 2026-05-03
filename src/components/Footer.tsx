import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          <Code2 size={20} className="text-cyan-400" />
          <span className="font-mono text-sm">
            Designed & Built by Samuel Maithre
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
          <span>Made with</span>
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>and React</span>
        </div>
      </div>
    </footer>
  );
}
