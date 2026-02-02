import { useEffect } from "react";

const Demo = () => {
  useEffect(() => {
    window.location.href = "https://cross-border-chat-ai.lovable.app";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">正在跳转到全流程演示页面...</p>
    </div>
  );
};

export default Demo;
