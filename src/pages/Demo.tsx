import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Globe, Clock, ArrowLeft, Package, Truck, CreditCard, RefreshCw, HeartHandshake, Store } from "lucide-react";
import logo from "@/assets/logo.png";
import heroAiChat from "@/assets/hero-ai-chat.png";
import casePresale from "@/assets/case-presale.png";
import caseDuringsale from "@/assets/case-duringsale.png";
import caseAftersale from "@/assets/case-aftersale.png";

const Demo = () => {
  const highlights = [
    { icon: MessageSquare, label: "多店铺消息聚合" },
    { icon: Globe, label: "129+语言实时翻译" },
    { icon: Clock, label: "7×24小时自动接待" },
  ];

  const presaleCases = [
    {
      title: "商品咨询自动回复",
      scene: "法国客户用法语询问产品尺寸、材质和运费",
      response: "AI秒速识别法语，自动匹配商品库信息，用法语精准回复尺寸规格、材质详情和运费计算",
      effect: "响应时间缩短至3秒，咨询转化率提升40%",
    },
    {
      title: "多语言智能翻译",
      scene: "俄罗斯客户用俄语咨询，店铺客服只懂中英文",
      response: "AI实时将俄语翻译为中文展示给客服，客服回复后自动翻译成俄语发送",
      effect: "打破语言障碍，俄语区订单增长65%",
    },
  ];

  const duringsaleCases = [
    {
      title: "物流自动跟单",
      scene: "客户下单后频繁询问物流状态，占用大量客服时间",
      response: "AI自动对接物流系统，主动推送发货、清关、派送等关键节点通知",
      effect: "物流咨询量减少80%，客户满意度提升35%",
    },
    {
      title: "智能催付提醒",
      scene: "大量订单处于待付款状态，人工催付效率低",
      response: "AI识别待付款订单，根据客户偏好语言和时区，自动发送个性化催付消息",
      effect: "待付款转化率提升28%，每月挽回流失订单500+",
    },
  ];

  const aftersaleCases = [
    {
      title: "退货退款自动处理",
      scene: "客户申请退货，需要核实订单、计算退款金额",
      response: "AI自动核验订单信息，识别退货原因，按平台规则计算退款金额并提交处理",
      effect: "售后处理时效从24小时缩短至10分钟",
    },
    {
      title: "情绪识别转人工",
      scene: "客户因物流延迟情绪激动，使用负面词汇",
      response: "AI实时检测客户情绪，识别到愤怒情绪后立即转接人工客服，并提供完整对话上下文",
      effect: "差评率降低45%，客户投诉升级减少60%",
    },
  ];

  const platforms = [
    {
      name: "DHgate",
      desc: "敦煌网官方合作",
      features: ["消息聚合", "自动回复", "订单同步"],
    },
    {
      name: "Shopee",
      desc: "东南亚电商首选",
      features: ["多语言支持", "智能催付", "物流跟踪"],
    },
    {
      name: "Lazada",
      desc: "阿里系跨境平台",
      features: ["店铺群管", "评价管理", "活动提醒"],
    },
    {
      name: "Ozon",
      desc: "俄罗斯最大电商",
      features: ["俄语翻译", "时区适配", "本地化服务"],
    },
    {
      name: "Daraz",
      desc: "南亚市场领军者",
      features: ["多站点管理", "促销支持", "客诉处理"],
    },
  ];

  const CaseCard = ({ title, scene, response, effect }: { title: string; scene: string; response: string; effect: string }) => (
    <div className="p-6 rounded-2xl bg-white border border-cyan-100 shadow-sm">
      <h4 className="text-lg font-bold text-foreground mb-4">{title}</h4>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="text-lg">📍</span>
          <div>
            <p className="text-sm text-muted-foreground font-medium">场景</p>
            <p className="text-sm text-foreground">{scene}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-lg">🤖</span>
          <div>
            <p className="text-sm text-muted-foreground font-medium">AI响应</p>
            <p className="text-sm text-foreground">{response}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-lg">✨</span>
          <div>
            <p className="text-sm text-muted-foreground font-medium">效果</p>
            <p className="text-sm text-cyan-600 font-medium">{effect}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100">
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
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              AI智能客服 · 7×24小时全球响应
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
              看跨境聚聊AI
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                如何全流程回复客户
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-2">
              多店铺聚合 · 多语言支持 · 智能自动接待
            </p>
            <p className="text-muted-foreground mb-8">
              告别跨时区无人响应，让每一位客户都能得到即时服务
            </p>
            
            <a
              href="tel:17359196071"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              立即咨询：17359196071
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-cyan-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <img 
              src={heroAiChat} 
              alt="跨境聚聊AI智能客服界面展示"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <p className="text-cyan-600 font-medium mb-2">真实场景案例</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              全流程AI智能服务
            </h2>
            <p className="text-muted-foreground">
              从售前咨询到售后服务，跨境聚聊AI覆盖客服全链路
            </p>
          </motion.div>

          {/* Pre-sale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">售前 · 智能接待</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <img 
                  src={casePresale} 
                  alt="售前智能接待场景"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                {presaleCases.map((item, index) => (
                  <CaseCard key={index} {...item} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* During-sale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Truck className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">售中 · 订单跟进</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-4 order-2 lg:order-1">
                {duringsaleCases.map((item, index) => (
                  <CaseCard key={index} {...item} />
                ))}
              </div>
              <div className="lg:col-span-1 order-1 lg:order-2">
                <img 
                  src={caseDuringsale} 
                  alt="售中订单跟进场景"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* After-sale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">售后 · 问题解决</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <img 
                  src={caseAftersale} 
                  alt="售后问题解决场景"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                {aftersaleCases.map((item, index) => (
                  <CaseCard key={index} {...item} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-600 font-medium mb-2">多平台支持</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              一个后台，管理所有店铺
            </h2>
            <p className="text-muted-foreground">
              无缝对接主流跨境电商平台，消息统一接收，高效处理
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-cyan-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{platform.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{platform.desc}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              准备好提升您的客服效率了吗？
            </h2>
            <p className="text-muted-foreground mb-8">
              立即咨询，获取专属跨境AI客服解决方案<br />
              让您的店铺7×24小时不打烊
            </p>
            <a
              href="tel:17359196071"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              立即咨询：17359196071
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-100">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 跨境聚聊AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Demo;
