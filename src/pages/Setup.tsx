import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Clock, Globe, Zap, ArrowRight, ArrowLeft, Users, Headphones, MessageSquare, Monitor } from "lucide-react";
import logo from "@/assets/logo.png";
import platformIntegration from "@/assets/platform-integration.jpg";
import stepConnectStore from "@/assets/step-connect-store.jpg";
import stepConfigAi from "@/assets/step-config-ai.jpg";
import stepAutoService from "@/assets/step-auto-service.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Setup = () => {
  const features = [
    { icon: Clock, text: "7×24小时自动接待" },
    { icon: Globe, text: "129+语言实时翻译" },
    { icon: Zap, text: "3秒内智能响应" },
  ];

  const platforms = ["DHgate", "Shopee", "Lazada", "Ozon", "Daraz"];

  const steps = [
    {
      num: "01",
      title: "绑定店铺",
      desc: "一键授权连接您的跨境电商店铺，支持DHgate、Shopee、Lazada等主流平台",
      time: "约5分钟完成",
      image: stepConnectStore,
    },
    {
      num: "02",
      title: "配置AI客服",
      desc: "可视化操作界面，自定义欢迎语、常见问题、商品话术，无需编程经验",
      time: "约8分钟完成",
      image: stepConfigAi,
    },
    {
      num: "03",
      title: "启用自动接待",
      desc: "一键开启7×24小时智能接待，AI自动处理咨询、追单、售后，您只需坐等订单",
      time: "约2分钟完成",
      image: stepAutoService,
    },
  ];

  const supports = [
    { icon: Users, title: "1对1专属顾问", desc: "免费分配专属客服顾问，手把手指导系统配置与使用" },
    { icon: Monitor, title: "远程协助接入", desc: "技术团队远程协助，确保店铺顺利接入无障碍" },
    { icon: MessageSquare, title: "定制话术模板", desc: "根据您的行业和产品，定制专属AI话术库" },
    { icon: Headphones, title: "7×24客服响应", desc: "专业客服团队全天候在线，随时解答您的问题" },
  ];

  const testimonials = [
    {
      highlight: "转化率提升40%",
      quote: "接入跨境聚聊AI后，我的店铺询盘转化率提升了40%！以前经常因为时差错过国外客户的咨询，现在AI全天候自动回复，太方便了。",
      image: testimonial1,
      name: "李女士",
      role: "DHgate 服装卖家",
    },
    {
      highlight: "效率提升3倍",
      quote: "配置真的很简单，15分钟就搞定了。客服团队也很专业，手把手教我设置话术模板，现在客服效率提升了3倍。",
      image: testimonial2,
      name: "张先生",
      role: "Shopee 3C配件卖家",
    },
    {
      highlight: "129+语言支持",
      quote: "多语言翻译功能太实用了！以前处理东南亚客户咨询要借助翻译软件，现在AI自动识别语言实时翻译，沟通顺畅多了。",
      image: testimonial3,
      name: "王女士",
      role: "Lazada 家居用品卖家",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="跨境聚聊AI" className="h-8" />
          </Link>
          <Link 
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-8">
              <Zap className="w-4 h-4" />
              专为跨境电商卖家打造的智能客服系统
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">15分钟</span>极速配置
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              专业团队全程支持
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4">
              可视化配置后台，免费1对1人工接入指导
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              让您轻松拥有7×24小时多语言AI客服，告别订单流失
            </p>
            
            <a
              href="tel:17359196071"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="w-5 h-5" />
              立即咨询：17359196071
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border shadow-sm"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">多平台支持</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              已支持主流跨境电商平台
            </h2>
            <p className="text-muted-foreground">
              一键授权连接，无缝对接您的店铺，覆盖全球主要市场
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg mb-8"
          >
            <img 
              src={platformIntegration} 
              alt="全球电商平台连接" 
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {platforms.map((platform, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {platform}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">简单三步</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              15分钟完成全部配置
            </h2>
            <p className="text-muted-foreground">
              可视化操作界面，无需技术背景，新手也能轻松上手
            </p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                    <span className="text-6xl font-bold text-primary/20">{step.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.desc}</p>
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                    {step.time}
                  </span>
                </div>
                <div className="flex-1">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-muted-foreground mt-12"
          >
            完成以上步骤，即可开始使用
          </motion.p>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">专业支持</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              全程1对1人工指导
            </h2>
            <p className="text-muted-foreground">
              您不是一个人在战斗，我们的专业团队始终陪伴在您身边
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supports.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <support.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{support.title}</h3>
                <p className="text-muted-foreground text-sm">{support.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">客户评价</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              听听他们怎么说
            </h2>
            <p className="text-muted-foreground">
              来自真实卖家的使用反馈
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {testimonial.highlight}
                </span>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              准备好提升您的<br />
              <span className="text-primary">跨境客服效率</span>了吗？
            </h2>
            <p className="text-muted-foreground mb-10">
              立即联系我们的专属顾问，获取免费试用和配置指导
            </p>
            <a
              href="tel:17359196071"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="w-5 h-5" />
              立即咨询：17359196071
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 跨境聚聊AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Setup;
