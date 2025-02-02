import { NavigationBar } from "@/components/NavigationBar";
import { screenshots } from "@/lib/screenshots";
import PhoneFrame from "@/components/PhoneFrame";
import { CtaSection } from "@/components/CtaSection";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      <div className="container mx-auto px-4 py-16 mt-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galeria
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça todas as funcionalidades do Lumi através de nossa interface
            intuitiva e moderna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lumi-red/20 to-pink-500/20 transform rotate-3 scale-105 blur-xl transition-all duration-300 group-hover:scale-110" />
              <PhoneFrame className="transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={screenshot}
                  alt={`Screenshot do App ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </PhoneFrame>
            </div>
          ))}
        </div>
        <CtaSection />
      </div>
    </div>
  );
};

export default Gallery;
