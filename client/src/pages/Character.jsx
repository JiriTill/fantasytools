import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Character() {
  const [race, setRace] = useState('');
  const [culture, setCulture] = useState('');
  const [keywords, setKeywords] = useState('');
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateNames = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'character',
          race,
          culture,
          keywords,
        }),
      });
      const data = await response.json();
      setNames(data.names || []);
    } catch (error) {
      console.error('Generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">Character Name Generator</h1>
      <p className="text-center mb-6 max-w-2xl text-lg">
        Describe your fantasy character’s race, culture, or story. Our AI will generate ten creative name ideas tailored to your world.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl mb-6 space-y-4">
        <input
          type="text"
          placeholder="Race (e.g., Elf, Orc, Human)"
          value={race}
          onChange={(e) => setRace(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Culture/Region (e.g., Nordic, Desert, Gothic)"
          value={culture}
          onChange={(e) => setCulture(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Keywords (e.g., warrior, noble, shadowy)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button
          onClick={generateNames}
          className="bg-indigo-700 hover:bg-indigo-600 w-full py-2 rounded text-white font-semibold"
        >
          {loading ? 'Generating...' : 'Generate Names'}
        </button>
      </div>

      {names.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Names</h2>
          <ul className="space-y-2">
            {names.map((name, index) => (
              <li key={index} className="bg-gray-700 p-2 rounded text-white">{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Placeholder for Google Ad or Affiliate Block */}
      <div className="w-full max-w-xl h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 mb-8">
        [Your Ad Here]
      </div>

      <Link
        to="/"
        className="inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ← Back to Fantasy Tools
      </Link>
    </div>
  );
}
