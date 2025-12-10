export default function About() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Titre de la page */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
          À propos de moi
        </h1>

        {/* Section principale */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
            Qui suis-je ?
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Bonjour ! Je suis NDONG Mr STARTEGE, je suis un développeur web full-stack passionné avec une forte motivation 
            pour créer des applications web modernes et performantes.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            J'ai acquis des compétences solides en développement frontend et backend au cour de ma formation à GOMYCODE Sénégal en développement web full-stack, 
            et je continue d'apprendre de nouvelles technologies chaque jour.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Mon objectif est de créer des expériences numériques qui font la différence 
            et apportent de la valeur aux utilisateurs.
          </p>
        </div>

        {/* Section Expérience */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
            Mon parcours
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Formation</h3>
              <p className="text-sm md:text-base text-gray-600">Développement Web Full Stack à GOMYCODE Sénégal</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Compétences principales</h3>
              <p className="text-sm md:text-base text-gray-600">React, Next.js, Node.js, MongoDB, Express, Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Section Hobbies */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
            Centres d'intérêt
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
            <li>Développement web et nouvelles technologies</li>
            <li>Open source et contribution à la communauté</li>
            <li>Veille technologique</li>
            <li>Résolution de problèmes complexes</li>
            <li>Voyage</li>
            <li>Sport</li>
          </ul>
        </div>
      </main>
    </div>
  );
}