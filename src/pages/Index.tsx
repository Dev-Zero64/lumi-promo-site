import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lumi-pink to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <nav className="mb-16">
          <img
            src="/lovable-uploads/1d198ff5-2748-4c6c-84b9-a1baa9766254.png"
            alt="Lumi Logo"
            className="h-12 w-auto"
          />
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Sua caderneta de
              <span className="text-lumi-red"> pré-natal </span>
              agora é digital
            </h1>
            <p className="text-xl text-gray-600">
              Acompanhe sua gestação de forma prática e organizada. Tenha todas as suas informações
              gestacionais na palma da mão, disponíveis sempre que precisar.
            </p>
            <Button
              size="lg"
              className="bg-lumi-red hover:bg-lumi-red/90 text-white rounded-full"
              onClick={() => window.open("https://apps.apple.com/store", "_blank")}
            >
              Baixar na App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative animate-float">
            <PhoneFrame>
              <img
                src="/lovable-uploads/ad557e09-102f-402d-947b-1b2bf43bdf85.png"
                alt="App Screenshot"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-16">Principais Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-lumi-red">Praticidade</h3>
              <p className="text-gray-600">
                Todas as suas informações médicas organizadas em um só lugar
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-lumi-red">Organização</h3>
              <p className="text-gray-600">
                Acompanhamento detalhado de consultas e exames
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-lumi-red">Conforto</h3>
              <p className="text-gray-600">
                Acesse suas informações a qualquer momento, onde estiver
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;