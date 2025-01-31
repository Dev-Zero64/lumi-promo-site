export const NavigationBar = () => (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img
            src="/images/lumilogo.png"
            alt="Lumi Logo"
            className="h-10 w-auto"
          />
          <div className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-lumi-red transition-colors duration-200 font-sans"
            >
              Funções
            </a>
            <a
              href="#screenshots"
              className="text-gray-600 hover:text-lumi-red transition-colors duration-200 font-sans"
            >
              Galeria
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-lumi-red transition-colors duration-200 font-sans"
            >
              Baixar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );