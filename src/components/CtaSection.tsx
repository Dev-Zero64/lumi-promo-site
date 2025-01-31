import { ArrowRight, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CtaSection = () => (
  <section
    id="download"
    className="mt-24 md:mt-32 text-center bg-gradient-to-br from-lumi-red/10 to-pink-500/10 py-20 px-4 rounded-3xl shadow-xl transition-all hover:shadow-2xl"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500 animate-fade-in-up mb-10">
        Sua caderneta pré-natal agora é digital!
      </h2>
      <p className="text-gray-700 md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Disponivel gratuitamente para iOS. Cuide da sua saúde com a ferramenta
        mais completa de acompanhamento gestacional.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-lumi-red to-pink-500 hover:from-lumi-red/90 hover:to-pink-500/90 text-white rounded-2xl px-10 py-7 transition-transform duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl gap-3"
          onClick={() =>
            window.open(
              "https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB",
              "_blank"
            )
          }
        >
          <Apple className="h-6 w-6" />
          <span>Baixar para iOS</span>
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <p className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
          Totalmente gratuito
        </span>
        <span className="hidden md:inline">•</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          Não requer cadastro
        </span>
      </p>
    </div>
  </section>
);
