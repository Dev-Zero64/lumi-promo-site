import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
import { NavigationBar } from "@/components/NavigationBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { CtaSection } from "@/components/CtaSection";
import { HeroSection } from "@/components/HeroSection";
import { screenshots } from "@/lib/screenshots";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Stethoscope,
  Calendar,
  Bell,
  HeartPulse,
  Shield,
  Menu,
  X,
} from "lucide-react";

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

const features = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Acompanhamento Completo",
    description:
      "Registro detalhado de todas as consultas, exames e medições importantes da gestação",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Conecte-se com Profissionais",
    description: "Compartilhe seus dados diretamente com sua equipe médica",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Agendamento Inteligente",
    description: "Lembretes automáticos para consultas e exames importantes",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Alertas Personalizados",
    description:
      "Notificações sobre mudanças importantes em cada fase da gestação",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Monitoramento de Saúde",
    description:
      "Controle de pressão arterial, ganho de peso e movimentos fetais",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança Máxima",
    description: "Seus dados protegidos com criptografia de última geração",
  },
];
