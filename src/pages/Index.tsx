import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
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

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img
              src="/images/lumilogo.png"
              alt="Lumi Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden md:flex gap-8">
              {['Funções', 'Galeria', 'Baixar'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-lumi-red transition-colors duration-200 font-medium group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lumi-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          
          <Button
            className="hidden md:flex bg-gradient-to-r from-lumi-red to-pink-500 hover:from-lumi-red/90 hover:to-pink-500/90 text-white rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB", "_blank")}
          >
            Baixar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <button
            className="md:hidden text-gray-700 hover:text-lumi-red transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {['Funções', 'Galeria', 'Baixar'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-lumi-red transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = ({
  currentScreenshot,
  screenshots,
  nextScreenshot,
  prevScreenshot,
}) => {
  useEffect(() => {
    const interval = setInterval(nextScreenshot, 5000);
    return () => clearInterval(interval);
  }, [nextScreenshot]);

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center mb-24 pt-24">
      <div className="text-left space-y-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Transforme sua experiência
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500 block mt-3">
            pré-natal
          </span>
        </h1>
        <p className="text-xl text-gray-600 animate-fade-in">
          A primeira caderneta de pré-natal totalmente digital do Brasil.
          Desenvolvida por especialistas em saúde materna e tecnologia.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-lumi-red to-pink-500 hover:from-lumi-red/90 hover:to-pink-500/90 text-white rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open("https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB", "_blank")}
          >
            Baixar para iOS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="relative group animate-fade-in">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lumi-red/20 to-pink-500/20 transform rotate-3 scale-105 blur-xl transition-all duration-300 group-hover:scale-110" />
        <PhoneFrame className="transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
          <img
            src={screenshots[currentScreenshot]}
            alt={`App Screenshot ${currentScreenshot + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        </PhoneFrame>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentScreenshot
                  ? "bg-gradient-to-r from-lumi-red to-pink-500 scale-125"
                  : "bg-gray-300"
              }`}
              aria-label={`Ir para a imagem ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={prevScreenshot}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-6 h-6 text-lumi-red" />
        </button>
        <button
          onClick={nextScreenshot}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-6 h-6 text-lumi-red" />
        </button>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }) => (
  <section id="features" className="mt-32">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500">
        Tudo o que você precisa em um só lugar
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Desenvolvemos ferramentas específicas para cada fase da sua gestação
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <div className="text-lumi-red mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const ScreenshotGallery = ({ screenshots }) => (
  <section id="screenshots" className="mt-32">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500">
        Conheça o aplicativo
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Interface intuitiva desenvolvida para gestantes de todas as idades
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {screenshots.map((screenshot, index) => (
        <div key={index} className="relative group">
          <PhoneFrame className="transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
            <img
              src={screenshot}
              alt={`App Screenshot ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      ))}
    </div>
  </section>
);

const CtaSection = () => (
  <section
    id="download"
    className="mt-32 text-center bg-gradient-to-br from-lumi-red/10 to-pink-500/10 py-16 rounded-3xl"
  >
    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500">
      Comece agora sua jornada
    </h2>
    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
      Disponível gratuitamente para iOS e Android. Sua saúde merece o melhor cuidado.
    </p>
    <div className="flex justify-center gap-4">
      <Button
        size="lg"
        className="bg-gradient-to-r from-lumi-red to-pink-500 hover:from-lumi-red/90 hover:to-pink-500/90 text-white rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={() => window.open("https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB", "_blank")}
      >
        Baixar para iOS
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

const Index = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };
  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
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

// Data remains the same
const screenshots = [
  "/images/lumi1.png",
  "/images/lumi8.png",
  "/images/lumi7.png",
  "/images/lumi5.png",
];

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