import { motion } from "framer-motion";
import { ArrowRight, Gift, Settings, Play } from "lucide-react";
import { Link } from "react-router-dom";

const pageData = [
  {
    id: "spring-festival",
    title: "春节活动",
    subtitle: "新春限时免费大礼包",
    description: "别人过年你赚钱，让AI替你全球接单。限时免费价值¥498的智能客服套餐。",
    icon: Gift,
    color: "coral",
    path: "/spring-festival",
    externalUrl: "https://chat-global-ai.lovable.app",
  },
  {
    id: "setup",
    title: "配置支持",
    subtitle: "15分钟极速配置",
    description: "可视化配置后台，免费1对1人工接入指导，新手也能轻松上手。",
    icon: Settings,
    color: "teal",
    path: "/setup",
    externalUrl: "https://cross-shop-ai.lovable.app",
  },
  {
    id: "demo",
    title: "功能演示",
    subtitle: "全流程AI智能服务",
    description: "从售前咨询到售后服务，看跨境聚聊AI如何覆盖客服全链路。",
    icon: Play,
    color: "blue",
    path: "/demo",
    externalUrl: "https://cross-border-chat-ai.lovable.app",
  },
];

const PageCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            探索我们的服务
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            从活动优惠到配置指导，从功能演示到技术支持，全方位助力您的跨境电商业务
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pageData.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <a
                href={page.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div 
                  className={`relative h-full p-6 lg:p-8 rounded-2xl border border-border bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Background accent */}
                  <div 
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${
                      page.color === "coral" ? "bg-brand-coral" :
                      page.color === "blue" ? "bg-brand-blue" : "bg-brand-teal"
                    }`} 
                  />

                  {/* Icon */}
                  <div 
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      page.color === "coral" ? "bg-brand-coral-light text-brand-coral" :
                      page.color === "blue" ? "bg-brand-blue-light text-brand-blue" : "bg-brand-teal-light text-brand-teal"
                    }`}
                  >
                    <page.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <span 
                      className={`text-sm font-medium ${
                        page.color === "coral" ? "text-brand-coral" :
                        page.color === "blue" ? "text-brand-blue" : "text-brand-teal"
                      }`}
                    >
                      {page.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                      {page.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {page.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>了解更多</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageCards;
