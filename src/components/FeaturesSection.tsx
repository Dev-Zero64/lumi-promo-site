export const FeaturesSection = ({ features }) => (
    <section id="sobre" className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lumi-red to-pink-500">
          Tudo o que você precisa em um só lugar
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Desenvolvemos ferramentas específicas para cada fase da sua gestação
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-lumi-red mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  