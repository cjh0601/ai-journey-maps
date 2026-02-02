import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
  {
    title: "春节活动",
    url: "https://chat-global-ai.lovable.app",
  },
  {
    title: "配置与支持",
    url: "https://cross-shop-ai.lovable.app",
  },
  {
    title: "全流程演示",
    url: "https://cross-border-chat-ai.lovable.app",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-16"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-foreground tracking-tight">
          跨境聚聊<span className="text-primary">AI</span>
        </span>
      </motion.div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="group flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300"
          >
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              {link.title}
            </span>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-sm text-muted-foreground"
      >
        专为跨境电商打造的智能客服系统
      </motion.p>
    </div>
  );
};

export default Index;
