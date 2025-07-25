import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';

export default function Dynamic() {
  const [form, setForm] = useState({
    context: '',
    culture: '',
    tone: ''
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

    const prompt = `You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

            Generate 10 unique and original fantasy names for a ${form.context}, inspired by a ${form.culture || 'neutral fantasy'} cultural aesthetic, evoking a ${form.tone || 'evocative'} tone.
            
            Rules:
            - Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, reflecting the described context, cultural aesthetic, and tone.
            - Use phonetic and stylistic elements that align with the ${form.context}, ${form.culture || 'neutral fantasy'}, and ${form.tone || 'evocative'}, ensuring cultural sensitivity when a specific culture is provided.
            - Avoid overused clichés like "Blood," "Shadow," or "Star" unless directly relevant to the ${form.context} or ${form.tone}.
            - Names should be concise, typically one to three words (e.g., "Ashrend Spire," "Oath of Cinders," "Blightglass Veil").
            - Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Mordor," "Stormwind," or "Excalibur").
            - If ${form.context} is empty or vague, generate names for a generic fantasy concept (e.g., a mystical place, organization, or artifact) inspired by the ${form.tone} and ${form.culture}.
            - Return the names as a simple numbered list (1-10), with no additional text or commentary.`;

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
        <title>Custom Fantasy Name Generator | Fantasy Name Creator</title>
        <meta name="description" content="Create truly unique fantasy names based on your custom inputs. Describe your world, culture, and tone to generate evocative names." />
        <meta name="keywords" content="custom fantasy name generator, AI fantasy naming, worldbuilding, RPG names, generate unique fantasy names" />
        <meta property="og:title" content="Custom Fantasy Name Generator | Fantasy Name Creator" />
        <meta property="og:description" content="Describe your context, culture, and tone to generate personalized fantasy names for your RPGs, novels, or games." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com/dynamic" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Custom Fantasy Name Generator</h1>

          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Describe your name’s purpose, cultural inspiration, and tone to let our AI craft 10 original, context-driven names.
          </p>
          
            <GoogleAd slot="4105556455" />

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Context (What is being named?):
              <textarea name="context" value={form.context} onChange={handleChange} rows="3" className="mt-1 w-full p-2 bg-gray-800 text-white rounded" required />
            </label>

            <label className="block">
              Cultural Influence (Optional):
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Tone (Optional):
              <input name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
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
              <h2 className="text-xl font-semibold mb-4">Name Suggestions:</h2>
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

