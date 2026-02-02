import { motion } from "framer-motion";
import { ArrowRight, Clock, Globe, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import lunaMascot from "@/assets/luna-mascot.png";

const HeroSection = () => {
  const features = [
    { icon: Clock, text: "7×24小时自动接待" },
    { icon: Globe, text: "129+语言实时翻译" },
    { icon: Zap, text: "3秒内智能响应" },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal-light rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              专为跨境电商卖家打造的智能客服系统
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              让<span className="text-primary">AI</span>帮你
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                全球接单
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              支持 DHgate、Shopee、Lazada、Ozon、Daraz 五大平台
              <br />
              自动承接全球询盘、精准推荐、智能催付
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="gap-2 shadow-glow" asChild>
                <a href="tel:17359196071">
                  立即咨询：17359196071
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">
                  查看演示
                </Link>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110" />
              <img
                src={lunaMascot}
                alt="跨境聚聊AI智能助手Luna"
                className="relative w-72 md:w-96 h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
