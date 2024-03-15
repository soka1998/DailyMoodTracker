import React, { useState } from 'react';

export default function MoodSelector() {
  const [mood, setMood] = useState('');

  const handleSubmit = () => {
    console.log(`Humeur soumise: ${mood}`);
    alert(`Merci pour votre soumission. Votre humeur actuelle est: ${mood}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-50 to-blue-100">
      <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-lg font-bold text-center text-gray-800">Votre humeur aujourd'hui</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Happy Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Happy'
                ? 'bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50'
                : 'bg-yellow-400 bg-opacity-50 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Happy')}
          >
            Heureux
          </button>
          {/* Sad Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Sad'
                ? 'bg-blue-400 text-white focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50'
                : 'bg-blue-400 bg-opacity-50 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Triste')}
          >
            Triste
          </button>
          {/* Angry Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Angry'
                ? 'bg-red-500 text-white focus:ring-4 focus:ring-red-500 focus:ring-opacity-50'
                : 'bg-red-500 bg-opacity-50 focus:ring-4 focus:ring-red-500 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Angry')}
          >
            En colère
          </button>
          {/* Surprised Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Surprised'
                ? 'bg-purple-400 text-white focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50'
                : 'bg-purple-400 bg-opacity-50 focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Surprised')}
          >
            Surpris
          </button>
          {/* Calm Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Calm'
                ? 'bg-green-400 text-white focus:ring-4 focus:ring-green-400 focus:ring-opacity-50'
                : 'bg-green-400 bg-opacity-50 focus:ring-4 focus:ring-green-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Calm')}
          >
            Calme
          </button>
          {/* Excited Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Excited'
                ? 'bg-orange-400 text-white focus:ring-4 focus:ring-orange-400 focus:ring-opacity-50'
                : 'bg-orange-400 bg-opacity-50 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Excited')}
          >
            Excité
          </button>
          {/* Neutral Button */}
          <button
            className={`mx-1 my-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none text-gray-700 ${
              mood === 'Neutral'
                ? 'bg-gray-400 text-white focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50'
                : 'bg-gray-400 bg-opacity-50 focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50'
            }`}
            onClick={() => setMood('Neutral')}
          >
            Neutre
          </button>
        </div>
        <p className="mt-4 text-center" data-testid="mood-display">Humeur : <span className="font-semibold">{mood || 'Non sélectionnée'}</span></p>
        {/* Bouton de soumission ajouté ici */}
        <div className="flex justify-center mt-4">
          <button 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
}
