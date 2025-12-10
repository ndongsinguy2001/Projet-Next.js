import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Section Hero - Présentation principale */}
        <section className="text-center mb-12 md:mb-16 py-8 md:py-12">
          {/* Image de profil */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600">
              
              <Image
                src="/images/profile.jpg"
                alt="Photo de profil"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 px-4">
            Bienvenue sur mon <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            NDONG Mr STRATEGE Développeur Web passionné par la création d'expériences numériques
          </p>
        </section>

        {/* Section Compétences */}
        <section className="mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Mes Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Card Frontend */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">Frontend</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                React, Next.js, HTML, CSS, JavaScript
              </p>
            </div>

            {/* Card Backend */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">Backend</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Node.js, Express, MongoDB
              </p>
            </div>

            {/* Card Outils */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3 md:mb-4">Outils</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Git, VS Code
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}