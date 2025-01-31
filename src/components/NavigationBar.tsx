import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-lumi-red transition-colors duration-200"
            >
              {" "}
              <img
                src="/images/lumilogo.png"
                alt="Lumi Logo"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />{" "}
            </a>

            <div className="font-sans">Lumi: Caderneta da Gestante</div>
            <div className="hidden md:flex gap-8">
              {["Inicio", "Galeria", "Sobre"].map((item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase()}`}
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
            onClick={() =>
              window.open(
                "https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB",
                "_blank"
              )
            }
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
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            {["Inicio", "Galeria", "Sobre"].map((item, index) => (
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
