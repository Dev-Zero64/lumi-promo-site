import PhoneFrame from "@/components/PhoneFrame";

export const ScreenshotGallery = ({ screenshots }) => (
    <section id="galeria" className="mt-32">
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
            <PhoneFrame className="transition-all duration-300 group-hover:scale-105">
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
  