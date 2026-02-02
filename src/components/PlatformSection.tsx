import { motion } from "framer-motion";

const platforms = [
  { name: "DHgate", color: "#FF6B00" },
  { name: "Shopee", color: "#EE4D2D" },
  { name: "Lazada", color: "#0F146D" },
  { name: "Ozon", color: "#005BFF" },
  { name: "Daraz", color: "#F85606" },
];

const PlatformSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            已支持主流跨境电商平台
          </h2>
          <p className="text-muted-foreground">
            一键授权连接，无缝对接您的店铺
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-8 py-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <span 
                className="font-bold text-lg"
                style={{ color: platform.color }}
              >
                {platform.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
