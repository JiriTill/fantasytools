// src/pages/Item.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';

export default function Item() {
  const [form, setForm] = useState({
    itemType: 'Weapon',
    rarity: 'Rare',
    material: 'Steel',
    magicEffect: 'Fire',
    tone: 'Epic'
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
You are a legendary item-namer in a fantasy world, crafting names for powerful artifacts, weapons, relics, and magical gear.

Generate 10 unique and original fantasy item names for a ${form.itemType} made of ${form.material}, with a ${form.rarity} rarity and a ${form.magicEffect} magic effect. The tone should be ${form.tone}.

Rules:
- Names should sound like they belong in a fantasy RPG, novel, or D&D game.
- Use evocative, lore-rich language, but avoid clichés unless relevant to the magic effect or tone.
- Keep names concise (1–3 words), e.g., “Ashrend”, “Oath of Cinders”, “Blightglass”.
- Reflect the item’s type, rarity, material, effect, and tone in the naming style.
- Avoid copying names from existing games or franchises.
- Return only a simple numbered list (1–10) of item names, no extra text.
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
        <title>Fantasy Item Name Generator | FantasyTools</title>
        <meta name="description" content="Generate legendary names for fantasy weapons, relics, potions, and magical artifacts. Perfect for D&D, RPGs, and worldbuilding." />
        <meta name="keywords" content="fantasy item name generator, RPG item names, magic weapon name, artifact generator, Dungeons & Dragons item name tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Item Name Generator</h1>

          <p className="text-lg text-center max-w-2xl text-gray-300 mb-6">
            Create legendary names for swords, potions, tomes, and magical relics. Choose item type, rarity, material, and magical effect to generate 10 original names.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Item Type:
              <select name="itemType" value={form.itemType} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Weapon', 'Armor', 'Potion', 'Relic', 'Tome', 'Jewelry', 'Tool', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Rarity:
              <select name="rarity" value={form.rarity} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'].map(r => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Material:
              <input name="material" value={form.material} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Magic Effect:
              <input name="magicEffect" value={form.magicEffect} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Tone:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Dark', 'Heroic', 'Epic', 'Mystical', 'Whimsical', 'Ancient'].map(t => (
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
              <h2 className="text-xl font-semibold mb-4">Item Name Suggestions:</h2>
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

