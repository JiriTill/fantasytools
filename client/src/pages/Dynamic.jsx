import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

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
        <meta name="description" content="Create truly unique fantasy names based on your custom inputs. Describe your world, culture, and tone to generate evocative names for characters, places, and more." />
        <meta name="keywords" content="custom fantasy name generator, AI fantasy naming, worldbuilding, RPG names, generate unique fantasy names, custom name creator" />
        <meta property="og:title" content="Custom Fantasy Name Generator | Fantasy Name Creator" />
        <meta property="og:description" content="Describe your context, culture, and tone to generate personalized fantasy names for your RPGs, novels, or games." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com/dynamic" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Custom Fantasy Name Generator</h1>

          <GoogleAd slot="4105556455" />

          {/* NEW: Replaced the old intro paragraph with a new, centered one */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>Sometimes, a standard generator just isn't enough. Our <strong>Custom Fantasy Name Generator</strong> is your all-purpose tool for any creative need. Whether you need a name for a mystical artifact, a hidden city, a powerful spell, or an ancient prophecy, this tool puts the power in your hands. Simply describe the <strong>context, culture, and tone</strong>, and our AI will craft unique names tailored specifically to your vision.</p>
          </div>
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
          
          {/* NEW: Bottom SEO text section with proper styling. */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Custom Fantasy Name Generator</h2>
            <p>Our dynamic generator is designed for those moments when you need a name that doesn't fit into a predefined category. Whether you're working on a unique fantasy race, an arcane artifact, a legendary weapon, or a mysterious spell, this tool provides the flexibility you need. By allowing you to input a custom context, cultural influence, and tone, you can create truly unique and original names that will stand out in any fantasy world.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Generate Unique Fantasy Names with Custom Inputs</h2>
            <p>To get the best results from our tool, be as descriptive as possible in the **Context** field. For example, instead of just "weapon," try "a cursed greatsword that once belonged to a shadow knight." In the **Cultural Influence** field, you can specify an aesthetic like "Old Norse," "Japanese folklore," or "ancient Egyptian." For **Tone**, you can use words like "foreboding," "heroic," "serene," or "chaotic." Our powerful AI-driven system uses these inputs to craft names that are not only creative but also perfectly suited to your specific needs. Use this tool as your go-to **custom name creator** to bring your most unique ideas to life.</p>
          </div>
          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
