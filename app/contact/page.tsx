// app/contact/page.tsx
// Page Contact - Formulaire fonctionnel

'use client'; // Important : permet d'utiliser les fonctions interactives

import { useState } from 'react';

export default function Contact() {
  // États pour gérer le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Pour afficher les messages de succès/erreur

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setStatus('sending'); // Affiche "Envoi en cours..."

    try {
      // Envoie les données à Formspree
      const response = await fetch('https://formspree.io/f/mwpgnyyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success'); // Message envoyé avec succès
        // Réinitialise le formulaire
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('error'); // Erreur lors de l'envoi
      }
    } catch (error) {
      setStatus('error'); // Erreur de connexion
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Titre de la page */}
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Contactez-moi
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter pour toute question ou collaboration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne gauche - Informations de contact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              Mes coordonnées
            </h2>
            
            {/* Email */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">ndongsinguy2001@gmail.com</p>
            </div>
            
            {/* Téléphone */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-600">+221 77 704 62 10</p>
            </div>
            
            {/* Localisation */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Localisation</h3>
              <p className="text-gray-600">Dakar, Sénégal</p>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a href="www.linkedin.com/in/singuy-ndong-97a7b32a0" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                <a href="https://github.com/ndongsinguy2001" className="text-blue-600 hover:text-blue-700">GitHub</a>
                
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire de contact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              Envoyez-moi un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Champ Nom */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Votre nom"
                />
              </div>

              {/* Champ Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Champ Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {/* Bouton Envoyer */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {/* Messages de statut */}
              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ✅ Message envoyé avec succès !
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}