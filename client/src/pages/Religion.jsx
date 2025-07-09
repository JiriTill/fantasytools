import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';

export default function Religion() {
  const [form, setForm] = useState({
    type: 'Faith',
    alignment: 'Neutral',
    culture: 'Ancient Mesopotamian inspired',
    tone: 'Mystical'
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

    const prompt = `
You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

Generate 10 unique and original fantasy religion names for a ${form.type} centered around a ${form.alignment} deity or belief system, influenced by a ${form.culture} cultural aesthetic, and evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, D&D campaign, or worldbuilding.
- Reflect the religion’s values, origin, and followers through the style and structure of the name.
- Avoid common clichés like "Blood," "Shadow," or "Holy" unless culturally relevant.
- Names should typically be 1–3 words long (e.g., "Children of the Flame", "Order of the Veil", "Zephyrite Faith").
- Avoid copying known religions or franchises.
- If ${form.culture} is empty or vague, use a neutral but immersive fantasy style.

Return a simple numbered list (1-10), with no extra text.
`;

    try {
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
        <title>Fantasy Religion Name Generator | FantasyTools</title>
        <meta name="description" content="Generate immersive fantasy religion names for your worldbuilding. Use tone, culture, and alignment to craft divine or cultic names." />
        <meta name="keywords" content="fantasy religion name generator, cult name, divine order, pantheon name, D&D, RPG, worldbuilding tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Religion Name Generator</h1>

          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Craft 10 original religion names tailored to your world’s tone, culture, and divine alignment. Ideal for pantheons, faiths, cults, and mystical orders.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Religion Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Faith', 'Cult', 'Order', 'Pantheon', 'Sect', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Deity Alignment:
              <select name="alignment" value={form.alignment} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Good', 'Neutral', 'Evil'].map(a => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Cultural Influence:
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Tone:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Mystical', 'Dark', 'Zealous', 'Ancient', 'Peaceful', 'Heroic', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 w-full py-2 rounded font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              {loading ? (
                <span className="animate-pulse">Generating...</span>
              ) : (
                'Generate Names'
              )}
            </button>
          </form>

          {names.length > 0 && (
            <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Religion Name Suggestions:</h2>
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

