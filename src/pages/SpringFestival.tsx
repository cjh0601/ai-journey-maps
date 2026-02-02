import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Package, Store, Globe, Link2, Bot, ArrowLeft, Clock, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import robotFirecracker from "@/assets/robot-firecracker.png";
import robotHongbao from "@/assets/robot-hongbao.png";
import ai247ServiceLuna from "@/assets/ai-24-7-service-luna.png";
import globalConnection from "@/assets/global-connection.png";
import robotLionGong from "@/assets/robot-lion-gong.png";
import avatarWang from "@/assets/avatar-wang.png";
import avatarLi from "@/assets/avatar-li.png";
import avatarZhang from "@/assets/avatar-zhang.png";

const SpringFestival = () => {
  const benefits = [
    { icon: MessageSquare, value: "2000条", label: "AI智能回复" },
    { icon: Package, value: "3000个", label: "SPU商品支持" },
    { icon: Store, value: "不限", label: "店铺数量" },
    { icon: Globe, value: "129+", label: "语言翻译" },
    { icon: Link2, value: "5大平台", label: "消息聚合" },
    { icon: Bot, value: "7×24h", label: "AI值守" },
  ];

  const features = [
    {
      image: ai247ServiceLuna,
      title: "7×24小时AI值守",
      desc: "春节期间也能自动接待全球客户",
    },
    {
      image: globalConnection,
      title: "连接全球买家",
      desc: "覆盖200+国家和地区的跨境电商网络",
    },
  ];

  const featureList = [
    { title: "AI智能值守", desc: "7×24小时自动回复，秒级响应客户咨询，节假日也不掉线" },
    { title: "129+语言支持", desc: "支持129+语言自动翻译，与全球客户无障碍沟通" },
    { title: "5大平台聚合", desc: "DHgate、Shopee、Lazada、Ozon、Daraz 消息统一管理" },
    { title: "安全可靠", desc: "企业级数据加密，店铺信息安全无忧" },
  ];

  const testimonials = [
    {
      quote: "去年春节回家7天，店铺一单没丢。AI客服比我回复得还专业，客户都不知道是机器人在聊。",
      avatar: avatarWang,
      name: "王老板",
      role: "Shopee卖家 · 深圳",
    },
    {
      quote: "以前雇两个客服都忙不过来，现在一个AI就搞定了。成本降了80%，转化率还提高了30%。",
      avatar: avatarLi,
      name: "李总",
      role: "DHgate卖家 · 杭州",
    },
    {
      quote: "德国、法国、意大利的客户都能直接用母语沟通，再也不用担心语言问题了。",
      avatar: avatarZhang,
      name: "张经理",
      role: "Lazada卖家 · 广州",
    },
  ];

  const guarantees = [
    "无需绑定信用卡",
    "活动结束自动提醒",
    "随时取消订阅",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
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
      <section className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                别人过年你赚钱
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-red-500">跨境聚聊AI</span>替你全球接单
              </h2>
              
              <p className="text-lg text-foreground font-medium mb-2">
                部署跨境聚聊AI客服
              </p>
              <p className="text-muted-foreground mb-2">
                自动承接全球询盘、精准推荐、智能催付
              </p>
              <p className="text-muted-foreground mb-4">
                将节假日流量转化为实实在在的订单与收入
              </p>
              <p className="text-red-500 font-medium">
                让跨境聚聊AI为你创造"春节利润"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <img 
                src={robotFirecracker} 
                alt="放鞭炮的Luna" 
                className="w-72 md:w-96 h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activity Time Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center px-6 mb-8"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
          <Clock className="w-5 h-5" />
          <span className="font-medium">🧧 活动时间：2月1日 - 2月28日 🧧</span>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              新春<span className="text-red-500">限时免费</span>大礼包
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl bg-gradient-to-br from-red-500 via-red-400 to-orange-400 p-8 shadow-2xl"
          >
            {/* Badge */}
            <div className="absolute -top-3 right-8 px-4 py-1 bg-amber-400 text-amber-900 rounded-full text-sm font-semibold shadow-md">
              🎁 新春特惠
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-white/80 mb-2">限时免费价值</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-white/60 line-through text-2xl">¥498</span>
                <span className="text-6xl font-bold text-white">¥0</span>
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-center justify-center gap-2 mb-8 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm mx-auto w-fit">
              <AlertTriangle className="w-4 h-4" />
              活动结束后恢复正常价格 ¥498/月
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <benefit.icon className="w-5 h-5 text-amber-300" />
                  <div>
                    <p className="text-white font-bold">{benefit.value}</p>
                    <p className="text-white/70 text-sm">{benefit.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:17359196071"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-white text-red-500 font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              立即电话咨询：17359196071
            </a>

            {/* Guarantees */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  {guarantee}
                </div>
              ))}
            </div>

            {/* Floating Image */}
            <img 
              src={robotHongbao} 
              alt="发红包的Luna" 
              className="absolute -bottom-8 -right-4 w-32 md:w-40 h-auto hidden md:block"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              跨境聚聊AI，你的全球智能客服
            </h2>
            <p className="text-muted-foreground">
              支持 DHgate、Shopee、Lazada、Ozon、Daraz 五大平台 · 129+语言实时翻译
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-lg border border-red-100"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature List */}
          <div className="grid md:grid-cols-2 gap-6">
            {featureList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-white/80 border border-red-100"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img 
                src={robotLionGong} 
                alt="舞狮敲锣Luna" 
                className="w-48 md:w-64 h-auto"
              />
            </motion.div>

            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center lg:text-left"
              >
                他们都在用跨境聚聊过春节
              </motion.h2>

              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-md border border-red-100"
                  >
                    <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              今年春节，让AI替你值班
            </h2>
            <a
              href="tel:17359196071"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              立即咨询：17359196071
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-100">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 跨境聚聊AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpringFestival;
