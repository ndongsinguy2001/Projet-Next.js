
// Page Projets - Liste de mes réalisations

export default function Projects() {
  // Tableau contenant les informations de chaque projet
  const projects = [
    {
      id: 1,
      title: "Site E-commerce",
      description: "Une plateforme de vente en ligne complète avec panier, paiement et gestion des commandes.",
      technologies: "React, Node.js, MongoDB",
      link: "#"
    },
    {
      id: 2,
      title: "Application Todo",
      description: "Application de gestion de tâches avec authentification et stockage en temps réel.",
      technologies: "Next.js, Firebase",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Site portfolio moderne et responsive présentant mes compétences et projets.",
      technologies: "Next.js, Tailwind CSS",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Titre de la page */}
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Mes Projets
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez quelques-uns des projets sur lesquels j'ai travaillé
        </p>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Boucle pour afficher chaque projet */}
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* Titre du projet */}
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies utilisées */}
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies :</strong> {project.technologies}
              </p>
              
              {/* Bouton Voir le projet */}
              <a 
                href={project.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}