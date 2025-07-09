import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';

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
You are a renowned worldbuilder's assistant. Generate original and evocative names for a fantasy world based on the following settings:

- Type: ${form.type}
- Climate: ${form.climate}
- Culture: ${form.culture}
- Magic Level: ${form.magicLevel}
- Tone: ${form.tone}

Guidelines:
- Names should be immersive, plausible, and fitting for the fantasy genre.
- Prioritize linguistic and tonal consistency with the described setting.
- Avoid clichés or overused templates.
- Do not reuse known names from fantasy media or real-world locations.

Output:
Return 10 unique and creative names for this world type.
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
        <title>Fantasy World Name Generator | FantasyTools</title>
        <meta name="description" content="Craft immersive world names for continents, kingdoms, realms, and more. Choose the style, tone, and magic level to get unique names." />
        <meta name="keywords" content="fantasy world name generator, realm names, fantasy place name, continent name generator, worldbuilding tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy World Name Generator</h1>

          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Choose world attributes and generate 10 original fantasy world names. Perfect for continents, realms, kingdoms, or mysterious lands.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              World Type:
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

            <button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-500 w-full py-2 rounded font-semibold">
              {loading ? 'Generating...' : 'Generate Names'}
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

          <div className="mt-12 w-full max-w-md text-center border-t border-indigo-700 pt-6">
            <p className="text-sm text-gray-400">[Google Ads or affiliate space here]</p>
          </div>

          <ShareGeneratedName form={form} />

          <Link
            to="/"
            className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            ← Back to Fantasy Tools
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
