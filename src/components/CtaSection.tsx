import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CtaSection = () => (
  <section
    id="download"
    className="mt-32 text-center bg-gradient-to-br from-lumi-red/10 to-pink-500/10 py-16 rounded-3xl"
  >
    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500">
      Comece agora sua jornada
    </h2>
    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
      Disponível gratuitamente para iOS e Android. Sua saúde merece o melhor
      cuidado.
    </p>
    <div className="flex justify-center gap-4">
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
        Baixar para iOS
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);
