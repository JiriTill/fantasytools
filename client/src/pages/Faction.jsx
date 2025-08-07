import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

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
        <title>Fantasy Faction Name Generator & Creator | Fantasy Name Creator</title>
        <meta name="description" content="Generate powerful fantasy faction names for guilds, cults, or clans. Customizable by alignment, tone, and culture. Perfect for D&D and other RPGs." />
        <meta name="keywords" content="fantasy faction name generator, guild name generator, clan name creator, D&D factions, cult names, fantasy names" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Faction Name Generator</h1>
          
          <GoogleAd slot="4105556455" />

          {/* Updated Intro Text Section */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>Every great fantasy world is defined by the factions that inhabit it. These groups—be they noble houses, secretive cults, or powerful guilds—drive the story and shape the fate of nations. Our <strong>Fantasy Faction Name Generator</strong> is a powerful tool designed to help you create memorable and evocative names for any group you can imagine. With options to customize by type, alignment, and cultural influence, you can easily find a name that perfectly fits your world.</p>
          </div>

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
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                  >
                    ← Back to Fantasy Name Creator
                  </Link>

          <hr className="my-10 w-full" />

          {/* NEW: Bottom SEO text section with proper styling. */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">Crafting Epic Faction Names for Your Fantasy World</h2>
            <p>A well-named faction can bring a world to life, suggesting a rich history, a hidden purpose, or a fearsome reputation. Our <strong>fantasy faction name generator</strong> is designed to do just that, giving you the power to create a name that resonates with your audience. Whether you're a Dungeon Master in need of a name for a sinister cult, a writer searching for the perfect name for a knightly order, or a game designer needing to name a powerful guild, our tool provides the inspiration you need.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Guild Name Generator and More</h2>
            <p>Our tool makes it simple to generate names that fit your specific needs. Choose a **faction type** like "Guild," "Clan," or "House," then select an alignment to set the moral tone. Add a cultural influence for a unique flavor, and finally, select a tone to give the name its emotional weight. This detailed customization ensures you'll get names that feel authentic to your world. From a righteous **knight order name generator** to a secretive **cult name creator**, our system covers all the bases. Stop struggling with naming and start building your world’s political landscape with ease.</p>
          </div>

          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
