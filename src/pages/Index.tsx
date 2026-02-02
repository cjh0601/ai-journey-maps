import { motion } from "framer-motion";
import { ArrowUpRight, Gift, Settings, Play } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const links = [
  {
    title: "春节活动",
    url: "/spring-festival",
    icon: Gift,
    color: "coral",
  },
  {
    title: "配置与支持",
    url: "/setup",
    icon: Settings,
    color: "teal",
  },
  {
    title: "全流程演示",
    url: "/demo",
    icon: Play,
    color: "blue",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="跨境聚聊AI版"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-12 md:h-14 w-auto mb-8"
      />

      {/* Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          欢迎使用 跨境聚聊AI
        </h1>
        <p className="text-muted-foreground">
          选择您需要的服务，开启智能化管理之旅
        </p>
      </motion.div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-4">
        {links.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <Link
              to={link.url}
              className={`group flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-card border shadow-soft hover:shadow-medium transition-all duration-300 ${
                link.color === "coral" 
                  ? "border-brand-coral/20 hover:border-brand-coral/40" 
                  : link.color === "blue" 
                  ? "border-brand-blue/20 hover:border-brand-blue/40" 
                  : "border-brand-teal/20 hover:border-brand-teal/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  link.color === "coral"
                    ? "bg-brand-coral-light text-brand-coral"
                    : link.color === "blue"
                    ? "bg-brand-blue-light text-brand-blue"
                    : "bg-brand-teal-light text-brand-teal"
                }`}
              >
                <link.icon className="w-5 h-5" />
              </div>
              <span className="flex-1 text-lg font-medium text-foreground">
                {link.title}
              </span>
              <ArrowUpRight 
                className={`w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                  link.color === "coral"
                    ? "text-brand-coral"
                    : link.color === "blue"
                    ? "text-brand-blue"
                    : "text-brand-teal"
                }`} 
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-sm text-muted-foreground"
      >
        更多功能正在开发中，敬请期待
      </motion.p>
    </div>
  );
};

export default Index;
