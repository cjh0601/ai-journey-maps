import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PageCards from "@/components/PageCards";
import PlatformSection from "@/components/PlatformSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PageCards />
        <PlatformSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
