import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpringFestival = () => {
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral-light text-brand-coral text-sm font-medium mb-6">
              🧧 活动时间：2月1日 - 2月28日 🧧
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              别人过年你<span className="text-brand-coral">赚钱</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              跨境聚聊AI替你全球接单，将节假日流量转化为实实在在的订单与收入
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border mb-8">
              <p className="text-sm text-brand-coral font-medium mb-2">限时免费价值</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl text-muted-foreground line-through">¥498</span>
                <span className="text-5xl font-bold text-brand-coral">¥0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ⚠️ 活动结束后恢复正常价格 ¥498/月
              </p>
            </div>

            <Button size="lg" className="gap-2" asChild>
              <a href="https://chat-global-ai.lovable.app" target="_blank" rel="noopener noreferrer">
                查看完整活动页面
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpringFestival;
