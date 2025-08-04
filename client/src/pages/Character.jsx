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
        <title>Fantasy Character Name Generator & Creator | Fantasy Name Creator</title>
        <meta name="description" content="Create unique fantasy character names for RPGs, novels, and D&D. Our tool offers names for various races, genders, and professions, including male and female character name generation." />
        <meta name="keywords" content="fantasy character name generator, D&D character name creator, fantasy names, character names, fantasy male name generator, fantasy female name generator" />
        <meta property="og:title" content="Fantasy Character Name Generator | FantasyTools" />
        <meta property="og:description" content="Use detailed attributes to craft believable fantasy names for characters in your world. Free and AI-powered." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com/character" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Character Name Generator</h1>
          <GoogleAd slot="4105556455" />
          
          {/* NEW: Replaced the old intro paragraph with the new, centered intro text. */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>Welcome, adventurer! Finding the perfect name for your character is the first step on an epic journey. Whether you're a Dungeon Master, a writer, a video game player, or a tabletop RPG enthusiast, our <strong>Fantasy Character Name Generator</strong> is the ultimate tool to spark your imagination. Our powerful algorithm is designed to generate names that feel authentic to a wide range of fantasy settings, from high-fantasy epics to dark, gritty worlds.</p>
          </div>
          
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
          
          <hr className="my-10 w-full" />
          
          {/* NEW: Bottom SEO text section with proper styling. */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Fantasy Character Name Generator and Creator</h2>
            <p>Forget spending hours poring over long lists of names. Our generator provides instant, unique names that fit your character's race, class, and backstory. We understand that a great name is more than just a label—it’s a piece of your character’s identity. It can hint at their heritage, their personality, or their destiny. Our tool helps you with this creative process, offering a fast and efficient way to overcome writer's block or the dreaded "blank character sheet" syndrome.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Discover the Perfect Fantasy Female and Male Names</h2>
            <p>A key feature of our tool is the ability to generate a huge variety of names, including specific options for both genders. Are you looking for a powerful <strong>fantasy female name generator</strong> to create a name for a fierce warrior queen or a mystical sorceress? Or perhaps a reliable <strong>fantasy male name generator</strong> for a stoic knight or a cunning rogue? Our tool provides a vast collection of fantasy male names and fantasy female names, ensuring you find the perfect fit for your character. We use a sophisticated AI-driven system to create original, yet familiar, names that will resonate with your players and readers.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Forge Your Hero's Identity</h2>
            <p>Building a character is an art, and a name is your first stroke on the canvas. With our tool, you’re not just generating names; you're creating a persona. We help you find names that sound strong, melodic, mysterious, or ancient, giving you the building blocks for a character that feels real and memorable. Our goal is to be the best <strong>fantasy names generator</strong> on the web, providing a free and easy-to-use resource for all your world-building needs. Give it a try and see what epic names you can forge!</p>
          </div>
          <MultiplexAd />
        </main>
      <Footer />
      
    </div>
  </>
  );
}
