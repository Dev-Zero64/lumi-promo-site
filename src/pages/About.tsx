import { Calendar, Heart, Shield, Users } from "lucide-react";
import { NavigationBar } from "@/components/NavigationBar";
import { CtaSection } from "@/components/CtaSection";

const About = () => {
  const teamValues = [
    {
      icon: <Heart className="w-8 h-8 text-lumi-red" />,
      title: "Nossa Missão",
      description:
        "Transformar o acompanhamento pré-natal no Brasil, tornando-o mais acessível e eficiente através da tecnologia.",
    },
    {
      icon: <Users className="w-8 h-8 text-lumi-red" />,
      title: "Nossa Equipe",
      description:
        "Somos um time multidisciplinar de profissionais da saúde e tecnologia comprometidos com o cuidado materno.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-lumi-red" />,
      title: "Nossa História",
      description:
        "Fundada em 2023, a Lumi nasceu da necessidade de modernizar e facilitar o acompanhamento da gestação.",
    },
    {
      icon: <Shield className="w-8 h-8 text-lumi-red" />,
      title: "Nosso Compromisso",
      description:
        "Garantir a segurança e privacidade dos dados, oferecendo uma experiência confiável para gestantes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      <div className="mt-20 container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a Lumi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A primeira caderneta de pré-natal totalmente digital do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        <CtaSection />
      </div>
    </div>
  );
};

export default About;
