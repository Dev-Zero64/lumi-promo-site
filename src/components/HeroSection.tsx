import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
import { ArrowRight, ChevronLeft, ChevronRight, Apple } from "lucide-react";

export const HeroSection = ({
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
            onClick={() =>
              window.open(
                "https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB",
                "_blank"
              )
            }
          >
            <Apple className="h-6 w-6" />
            Baixar para iOS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="relative group animate-fade-in">
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lumi-red/30 via-pink-500/20 to-transparent transform rotate-3 scale-105 blur-xl transition-all duration-300 group-hover:scale-110" />
        <PhoneFrame className="transform transition-all duration-300 group-hover:scale-105">
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
