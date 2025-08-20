import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

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

Generate 10 unique and original fantasy religion names for a ${form.type} centered around a ${form.alignment} deity or belief system, inspired by a ${form.culture} cultural aesthetic, and evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel worldbuilding, reflecting the religion’s values, deity, or followers.
- Use phonetic and stylistic elements that align with the ${form.culture}, ${form.alignment}, and ${form.tone}, ensuring cultural sensitivity and relevance.
- Avoid overused clichés like "Blood," "Shadow," or "Holy" unless directly relevant to the ${form.culture} or ${form.tone}.
- Names should be concise, typically one to three words (e.g., "Starveil Faith," "Koa’thra Covenant," "Eryndor’s Sanctum").
- Ensure names are original and do not mimic or copy existing religions or fantasy franchises (e.g., no variations of "Church of Pelor" or "Cult of Cthulhu").
- If ${form.culture} is empty or vague, use a neutral but evocative fantasy style inspired by the ${form.tone} and ${form.alignment}.
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
        <title>Fantasy Religion Name Generator & Creator | Fantasy Name Creator</title>
        <meta name="description" content="Generate immersive fantasy religion names for your worldbuilding, perfect for pantheons, faiths, cults, and mystical orders. Customizable by tone, culture, and alignment." />
        <meta name="keywords" content="fantasy religion name generator, cult name generator, divine order, pantheon name, D&D religion, RPG worldbuilding tool, custom religion names" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Religion Name Creator</h1>
          
          <GoogleAd slot="4105556455" />

          <div className="w-full max-w-2xl text-center mb-10">
            <p>The pantheon of gods, the whispers of an ancient cult, or the righteous faith of a divine order—religion is a cornerstone of any rich fantasy world. Our <strong>Fantasy Religion Name Generator</strong> is designed to help you craft names that convey a sense of history, power, and mystery. Whether you’re a Dungeon Master creating a new pantheon for your campaign or a writer building the lore for a new novel, our tool provides a wealth of inspiration.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Religion Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Church', 'Cult', 'Order', 'Pantheon', 'Sect', 'Covenant', 'Not specified'].map(t => (
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
                {['Mystical', 'Dark', 'Zealous', 'Ancient', 'Peaceful', 'Heroic', 'Not specified'].map(t => (
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
              <h2 className="text-xl font-semibold mb-4">Religion Name Suggestions:</h2>
              <ul className="list-disc list-inside space-y-1">
                {names.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          <KoFiButton id="T6T31JW6G3" />
          <ShareGeneratedName form={form} />

                    <Link
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                      ← Back to Fantasy Name Creator
                    </Link>
          
          <hr className="my-10 w-full" />
          
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">Crafting Divine and Mysterious Religion Names</h2>
            <p>A well-named religion can be a powerful storytelling element, hinting at its origins, tenets, and the very nature of its deity. Our <strong>fantasy religion name generator</strong> helps you create names that feel authentic to your world. Whether you're a Dungeon Master, a writer, or a game designer, this tool gives you the power to craft names that will resonate with your audience and add depth to your worldbuilding. From names for righteous churches to secretive cults and ancient pantheons, our generator has you covered.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Cult Name Generator and More</h2>
            <p>Our tool simplifies the process of creating impactful names. Just select a <strong>Religion Type</strong> like "Cult" or "Church," choose the <strong>Deity Alignment</strong> to set the moral compass, and provide a <strong>Cultural Influence</strong> for a unique phonetic style. Finally, select a <strong>Tone</strong> to capture the feeling of the religion, from "Mystical" to "Dark." This detailed customization allows you to create names like "The Veil of Whispers" for a mysterious sect or "The Sunstone Covenant" for a heroic faith. Our tool is your best resource for generating a rich and diverse religious landscape for your fantasy world.</p>
          </div>
          
          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
