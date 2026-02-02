import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                跨境聚聊<span className="text-primary">AI</span>版
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              专为跨境电商卖家打造的智能客服系统
              <br />
              7×24小时全球响应，129+语言实时翻译
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://chat-global-ai.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  春节活动
                </a>
              </li>
              <li>
                <a href="https://cross-shop-ai.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  配置与支持
                </a>
              </li>
              <li>
                <a href="https://cross-border-chat-ai.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  功能演示
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:17359196071" className="hover:text-primary transition-colors">
                  17359196071
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>专业团队1对1支持</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 跨境聚聊AI版. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
