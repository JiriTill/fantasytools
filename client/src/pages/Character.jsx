import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';

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
You are a world-class fantasy name crafter for novels, games, and immersive worldbuilding. Generate a unique, believable fantasy name based on the following character attributes. The name must match the race, culture, and tone of the character, while reflecting their background, status, and role in the world.

Rules:
- Prioritize phonetic consistency with the race and cultural tone (e.g., elves sound melodic, dwarves sound rugged, orcs sound guttural).
- Include only the name(s) unless told otherwise.
- Do not copy names from known franchises (no Tolkien, D&D, or Elder Scrolls names).
- Never be silly or random—names must feel natural in a fantasy world, not made-up nonsense.
- Use linguistic intuition: names can be inspired by real-world language roots (e.g., Old Norse, Gaelic, Arabic) depending on the culture.
- If the user requests a full name, consider including a clan name, house, or title if culturally appropriate.
- Avoid generic name templates. Instead, craft names that reflect the character’s story and world.

User Inputs:
- Gender: ${form.gender}
- Race: ${form.race}
- Social Class: ${form.socialClass}
- Profession: ${form.profession}
- Naming Style or Tone: ${form.tone} (e.g., elegant, fierce, noble, ancient)

Output:
Generate 10 names matching this character, with variations if fitting (e.g., formal name, common alias, or tribal name). Each name must be original and fitting to the fantasy setting. Briefly describe the meaning or origin only if the format requests it.
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
      <title>Fantasy Character Name Generator | FantasyTools</title>
      <meta name="description" content="Generate unique, fantasy-themed character names with our AI-powered tool. Choose race, gender, tone, and more to create the perfect name for your RPG or story." />
      <meta name="keywords" content="fantasy character name generator, RPG name maker, AI fantasy names, elf name, dwarf name, orc name, tabletop RPG, worldbuilding, character creation tool" />
      <meta property="og:title" content="Fantasy Character Name Generator | FantasyTools" />
      <meta property="og:description" content="Use detailed attributes to craft believable fantasy names for characters in your world. Free and AI-powered." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fantasytools.com/character" /> // TODO:je třeba změnit při ostrém provozu
      <meta property="og:image" content="https://fantasytools.com/images/og-image.jpg" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Fantasy Character Name Generator</h1>
      
      <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
        Choose from the attributes below and let our AI generate 10 unique fantasy name suggestions tailored to your character concept. Perfect for RPGs, novels, worldbuilding, or creative writing!
      </p>
      
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

        <button type="submit" disabled={loading} className="bg-indigo-600 hover:bg-indigo-500 w-full py-2 rounded font-semibold">
          {loading ? 'Generating...' : 'Generate Names'}
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

      {/* Ads Placeholder */}
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
      <div className="mt-12 mb-24 text-center">
      <Footer />
      
    </div>
  </>
  );
}
