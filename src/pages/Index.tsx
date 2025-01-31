import { useState, useEffect } from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { CtaSection } from "@/components/CtaSection";
import { HeroSection } from "@/components/HeroSection";
import { screenshots } from "@/lib/screenshots";
import { features } from "@/lib/features";

const Index = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };
  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-lumi-pink/10 via-white to-pink-50 font-sans">
      <NavigationBar />
      <div className="container mx-auto px-4 py-12">
        <HeroSection
          currentScreenshot={currentScreenshot}
          screenshots={screenshots}
          nextScreenshot={nextScreenshot}
          prevScreenshot={prevScreenshot}
        />
        <FeaturesSection features={features} />
        <ScreenshotGallery screenshots={screenshots} />
        <CtaSection />
      </div>
    </div>
  );
};

export default Index;
