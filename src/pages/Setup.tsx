import { useEffect } from "react";

const Setup = () => {
  useEffect(() => {
    window.location.href = "https://cross-shop-ai.lovable.app";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">正在跳转到配置与支持页面...</p>
    </div>
  );
};

export default Setup;
