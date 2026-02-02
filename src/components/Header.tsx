import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "首页" },
    { path: "/spring-festival", label: "春节活动" },
    { path: "/setup", label: "配置支持" },
    { path: "/demo", label: "功能演示" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            跨境聚聊<span className="text-primary">AI</span>版
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button variant="default" size="sm" className="gap-2" asChild>
          <a href="tel:17359196071">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">立即咨询</span>
          </a>
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
