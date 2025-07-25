import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';

export default function World() {
  const [form, setForm] = useState({
    type: 'Continent',
    climate: 'Temperate',
    culture: 'Western-European inspired',
    magicLevel: 'Moderate',
    tone: 'Epic'
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNames([]);

    try {
const prompt = `
You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

Generate 10 unique and original names for places that sound like they belong on a fantasy map for a ${form.type} with a ${form.climate} climate, inspired by a ${form.culture} cultural aesthetic, featuring a ${form.magicLevel} level of magic, and evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel worldbuilding.
- Focus on names for regions, planets, kingdoms, islands, or realms, not characters or objects.
- Avoid overused generic terms like "Storm", "Blood", or "Shadow" unless they are culturally relevant to the ${form.culture}.
- Names should be concise, typically one to two words (e.g., "Vaerys Coral", "Tiaru’s Veil"), with a maximum of three words for complex cultural influences.
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Middle-earth" or "Westeros").
- Reflect the ${form.climate}, ${form.culture}, ${form.magicLevel}, and ${form.tone} in the phonetic and stylistic choices of the names.
- If ${form.culture} is empty or vague, use a neutral but evocative fantasy style.

Return the names as a simple numbered list (1-10), with no additional text or commentary.
`;

      const response = await axios.post('/api/generate', { prompt });
      setNames(response.data.names);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Fantasy World and Place Name Generator | Fantasy Name Generator</title>
        <meta name="description" content="Craft immersive world names for continents, kingdoms, realms, and more. Choose the style, tone, and magic level to get unique names." />
        <meta name="keywords" content="fantasy world name generator, realm names, fantasy place name, continent name generator, worldbuilding tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy World and Place Name Creator</h1>

          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Choose world or place attributes and create 10 original fantasy names. Perfect for continents, realms, kingdoms, or mysterious lands.
          </p>
          
          <GoogleAd slot="4105556455" />

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Continent', 'Realm', 'Kingdom', 'Island', 'Planet', 'Dimension', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Climate:
              <select name="climate" value={form.climate} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Temperate', 'Tropical', 'Arid', 'Frozen', 'Mixed', 'Magical', 'Other'].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Culture Influence:
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Magic Level:
              <select name="magicLevel" value={form.magicLevel} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['None', 'Low', 'Moderate', 'High', 'Mythic'].map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Tone:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Epic', 'Dark', 'Mystical', 'Ancient', 'Whimsical', 'Heroic', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded font-semibold flex items-center justify-center transition ${
                loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Names'
              )}
            </button>

          </form>

          {names.length > 0 && (
            <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">World Name Suggestions:</h2>
              <ul className="list-disc list-inside space-y-1">
                {names.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          <ShareGeneratedName form={form} />

          <Link
            to="/"
            className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            ← Back to Fantasy Name Creator
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
