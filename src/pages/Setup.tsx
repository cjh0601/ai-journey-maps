import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Clock, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", title: "绑定店铺", desc: "一键授权连接您的跨境电商店铺", time: "约5分钟" },
  { number: "02", title: "配置AI客服", desc: "可视化操作界面，自定义话术", time: "约8分钟" },
  { number: "03", title: "启用自动接待", desc: "一键开启7×24小时智能接待", time: "约2分钟" },
];

const Setup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal-light text-brand-teal text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              可视化配置后台
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">15</span>分钟极速配置
            </h1>
            <p className="text-lg text-muted-foreground">
              专业团队全程支持，免费1对1人工接入指导
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-primary">
                  <Clock className="w-3 h-3" />
                  <span>{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://cross-shop-ai.lovable.app" target="_blank" rel="noopener noreferrer">
                查看完整配置指南
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Setup;
