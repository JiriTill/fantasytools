import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';

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
You are an expert in fantasy worldbuilding and naming. Generate 10 unique and original names for a fantasy ${form.type || 'faction'} that has a ${form.alignment || 'neutral'} alignment, is inspired by a ${form.culture || 'neutral'} cultural aesthetic, and evokes a ${form.tone || 'mysterious'} tone.

Rules:
- Names must be immersive, evocative, and suitable for use in fantasy RPGs, novels, or worldbuilding projects.
- These names should represent factions such as guilds, orders, clans, cults, or secret societies — not individual characters or locations.
- Use phonetic and stylistic elements that reflect the cultural influence (${form.culture}), alignment (${form.alignment}), and tone (${form.tone}).
- Avoid generic or overused terms like “Blood,” “Dark,” or “Shadow” unless justified by the culture or tone.
- Names should be concise: typically one to two words (e.g., “Starveil Order”, “Koa’thra Clan”), up to three if culturally appropriate.
- Do not copy or adapt names from existing franchises (e.g., no “Dark Brotherhood” or “Knights of the Round” clones).
- If ${form.culture} is vague or empty, default to a neutral but immersive fantasy style.
- Return the results as a simple numbered list (1–10). No commentary, no explanations — just the names.
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
        <title>Fantasy Faction Name Generator | Fantasy Name Creator</title>
        <meta name="description" content="Generate powerful and mysterious fantasy faction names for guilds, cults, or clans. Customizable by alignment, tone, and culture." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Faction Name Generator</h1>
          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Create names for powerful guilds, cults, or noble houses. Tune the cultural influence, tone, and alignment to shape your ideal fantasy faction.
          </p>

          <GoogleAd slot="4105556455" />

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
              <h2 className="text-xl font-semibold mb-4">Faction Name Suggestions:</h2>
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

