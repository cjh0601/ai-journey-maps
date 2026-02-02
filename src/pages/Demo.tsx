import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Play, ShoppingCart, Package, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    icon: ShoppingCart,
    title: "售前 · 智能接待",
    desc: "商品咨询自动回复，多语言智能翻译",
    effect: "响应时间缩短至3秒，咨询转化率提升40%",
  },
  {
    icon: Package,
    title: "售中 · 订单跟进",
    desc: "物流自动跟单，主动推送关键节点通知",
    effect: "物流咨询减少80%，客服效率大幅提升",
  },
  {
    icon: Headphones,
    title: "售后 · 问题处理",
    desc: "智能识别问题类型，自动匹配解决方案",
    effect: "售后问题解决率提升65%，客户满意度提升",
  },
];

const Demo = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-light text-brand-blue text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              真实场景案例
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              全流程<span className="text-brand-blue">AI</span>智能服务
            </h1>
            <p className="text-lg text-muted-foreground">
              从售前咨询到售后服务，看跨境聚聊AI如何覆盖客服全链路
            </p>
          </motion.div>

          {/* Cases */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <div className="text-xs text-primary font-medium px-3 py-2 bg-secondary rounded-lg">
                  ✨ {item.effect}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://cross-border-chat-ai.lovable.app" target="_blank" rel="noopener noreferrer">
                查看完整演示
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

export default Demo;
