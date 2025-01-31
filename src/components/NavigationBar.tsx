import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Apple } from "lucide-react";
import { Link } from "react-router-dom";

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
      className={`fixed w-full top-0 z-50 transition-all duration-300
        bg-white shadow-md md:bg-transparent md:shadow-none
        ${isScrolled ? 'md:bg-white/95 md:shadow-lg md:backdrop-blur-md' : ''}
        ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/lumilogo.png"
                alt="Lumi Logo"
                className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
              <span className="hidden md:block font-sans text-gray-800">
                Lumi: Caderneta da Gestante
              </span>
            </Link>
            
            <div className="hidden md:flex gap-6 lg:gap-8">
              {["Inicio", "Galeria", "Sobre"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-lumi-red transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-red-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex bg-gradient-to-r from-lumi-red to-pink-500 hover:from-lumi-red/90 hover:to-pink-500/90 text-white rounded-full px-6 py-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open("https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB", "_blank")}
            >
              <Apple className="h-6 w-6" />
              Baixar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <button
              className="md:hidden text-gray-700 hover:text-lumi-red p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            border-t border-gray-100`}
        >
          <div className="pt-4 pb-6 space-y-3">
            {["Inicio", "Galeria", "Sobre"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-lumi-red px-4 py-3 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button
              className="w-full mt-4 bg-gradient-to-r from-lumi-red to-pink-500 text-white rounded-lg py-3"
              onClick={() => window.open("https://apps.apple.com/br/app/lumi-caderneta-da-gestante/id6467932410?l=en-GB", "_blank")}
            >
              Baixar App
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};