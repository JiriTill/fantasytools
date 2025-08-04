import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

export default function Character() {
  const [form, setForm] = useState({
    gender: 'Male',
    race: 'Human',
    profession: 'Combat oriented',
    socialClass: 'Commoner',
    tone: 'Harsh'
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

Generate 10 unique and original fantasy character names for a character with the following attributes:
- Gender: ${form.gender}
- Race: ${form.race}
- Social Class: ${form.socialClass}
- Profession: ${form.profession}
- Naming Style or Tone: ${form.tone}

Rules:
- Names must be immersive, believable, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, reflecting the character’s race, culture, background, status, and role.
- Ensure phonetic and stylistic consistency with the ${form.race} and ${form.tone} (e.g., melodic for elves, rugged for dwarves, guttural for orcs).
- Use linguistic inspiration from real-world language roots (e.g., Old Norse, Gaelic, Arabic) when appropriate, based on the implied culture of the ${form.race} or ${form.tone}, ensuring cultural sensitivity.
- Names should be concise, typically one to two words (e.g., "Eldrin Valthorne," "Krag Ironfist"), with a maximum of three words for complex cultural or high-status names (e.g., noble titles, clan affiliations).
- Include variations where fitting, such as a formal name, common alias, or clan-based name, if appropriate for the ${form.socialClass} or ${form.profession}.
- Avoid generic or overused terms (e.g., "Storm," "Shadow") unless culturally or tonally relevant to the ${form.race} or ${form.tone}.
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Legolas," "Drizzt," or "Alduin").
- Names must feel natural and grounded in the fantasy world, avoiding silly or random combinations.
- If ${form.race} or ${form.tone} is vague or unspecified, use a neutral but evocative fantasy style.
- Return the names as a simple numbered list (1-10), with no additional text, commentary, or descriptions unless explicitly requested.

Output:
Provide 10 distinct names that match the character’s attributes and setting.
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
      <title>Fantasy Character Name Generator | Fantasy Name Creator</title>
      <meta name="description" content="Generate unique, fantasy-themed character names with our AI-powered tool. Choose race, gender, tone, and more to create the perfect name for your RPG or story." />
      <meta name="keywords" content="fantasy character name generator, RPG name maker, AI fantasy names, elf name, dwarf name, orc name, tabletop RPG, worldbuilding, character creation tool" />
      <meta property="og:title" content="Fantasy Character Name Generator | FantasyTools" />
      <meta property="og:description" content="Use detailed attributes to craft believable fantasy names for characters in your world. Free and AI-powered." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fantasynamecreator.com/character" /> // TODO:je třeba změnit při ostrém provozu
      <meta property="og:image" content="https://fantasynamecreator.com/images/og-image.jpg" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">
      <h1 className="text-3xl font-bold mb-6">Fantasy Character Name Generator</h1>
      
      <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
        Choose from the attributes below and let our AI generate 10 unique fantasy name suggestions tailored to your character concept. Perfect for RPGs, novels, worldbuilding, or creative writing!
      </p>

        <GoogleAd slot="4105556455" />
        
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
        <label className="block">
          Gender:
          <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            <option>Male</option>
            <option>Female</option>
            <option>Not specified</option>
          </select>
        </label>

        <label className="block">
          Race:
          <select name="race" value={form.race} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Human', 'Elf', 'Orc', 'Dwarf', 'Halfling', 'Hobbit', 'Goblin', 'Gnome', 'Dragonborn', 'Half-Dragon', 'Aasimar', 'Tiefling', 'Undead', 'Beastfolk', 'Giant', 'Not specified'].map(r => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Profession:
          <select name="profession" value={form.profession} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Combat oriented', 'Magical', 'Craft and Trade', 'Stealth and Rogue', 'Nature-based', 'Religious', 'Noble', 'Seafaring and Exotic', 'Dark or Forbidden', 'Not specified'].map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Social Class:
          <select name="socialClass" value={form.socialClass} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Nobility', 'Military', 'Middle class (Tradefolk)', 'Commoner', 'Outcast or criminal', 'Mythical', 'Not specified'].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="block">
          Tone:
          <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
            {['Harsh', 'Elegant', 'Short', 'Mysterious', 'Not specified'].map(t => (
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
        <MultiplexAd />
        </main>
      <Footer />
      
    </div>
  </>
  );
}
