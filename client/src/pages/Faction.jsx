// src/pages/Faction.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';

export default function Faction() {
  const [form, setForm] = useState({
    type: 'Guild',
    alignment: 'Neutral',
    culture: 'Eastern-inspired',
    tone: 'Mysterious'
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

Generate 10 unique and original fantasy faction names for a ${form.type} with a ${form.alignment} alignment, inspired by a ${form.culture} cultural aesthetic, and evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, fitting guilds, orders, clans, secret societies, or cults.
- Use phonetic and stylistic elements that reflect the ${form.culture}, ${form.alignment}, and ${form.tone}, ensuring cultural sensitivity and relevance.
- Avoid overused cliché terms like "Blood," "Shadow," or "Dark" unless they are directly relevant to the ${form.culture} or ${form.tone}.
- Names should be concise, typically one to two words (e.g., "Starveil Order," "Koa’thra Clan"), with a maximum of three words for complex cultural influences.
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Grey Wardens" or "Thieves’ Guild").
- If ${form.culture} is empty or vague, use a neutral but evocative fantasy style.
- Return the names as a simple numbered list (1-10), with no additional text or commentary.
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
        <title>Fantasy Faction Name Generator | FantasyTools</title>
        <meta name="description" content="Generate powerful and mysterious fantasy faction names for guilds, cults, or clans. Customizable by alignment, tone, and culture." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Faction Name Generator</h1>
          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Create names for powerful guilds, cults, or noble houses. Tune the cultural influence, tone, and alignment to shape your ideal fantasy faction.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Faction Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Guild', 'Order', 'Clan', 'Tribe', 'Cult', 'Brotherhood', 'House', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Alignment:
              <select name="alignment" value={form.alignment} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Good', 'Neutral', 'Evil', 'Chaotic', 'Lawful'].map(a => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Cultural Influence:
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Tone or Style:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Mysterious', 'Militant', 'Noble', 'Ancient', 'Dark', 'Righteous', 'Other'].map(t => (
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
              <h2 className="text-xl font-semibold mb-4">Faction Name Suggestions:</h2>
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

