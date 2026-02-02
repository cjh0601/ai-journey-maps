import { useEffect } from "react";

const SpringFestival = () => {
  useEffect(() => {
    window.location.href = "https://chat-global-ai.lovable.app";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">正在跳转到春节活动页面...</p>
    </div>
  );
};

export default SpringFestival;
