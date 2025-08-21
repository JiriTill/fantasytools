import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

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
You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

Generate 10 unique and original fantasy item names for a ${form.itemType} made of ${form.material}, with a ${form.rarity} rarity and a ${form.magicEffect} magic effect, evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, reflecting the item’s type, material, rarity, magic effect, and tone.
- Use phonetic and stylistic elements that align with the ${form.material}, ${form.magicEffect}, and ${form.tone}, ensuring the name feels lore-rich and purposeful.
- Avoid overused clichés like "Blood," "Shadow," or "Star" unless directly relevant to the ${form.magicEffect} or ${form.tone}.
- Names should be concise, typically one to three words (e.g., "Ashrend Blade," "Oath of Cinders," "Blightglass Amulet").
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Excalibur" or "Frostmourne").
- If ${form.material}, ${form.magicEffect} or ${form.tone} is empty or vague, use a neutral but evocative fantasy style inspired by the ${form.itemType} and ${form.rarity}.
- Return the names as a simple numbered list (1-10), with no additional text or commentary.
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
        <title>Fantasy Item Name Generator & Creator | Fantasy Name Creator</title>
        <meta name="description" content="Generate legendary names for fantasy weapons, relics, potions, and magical artifacts. Our AI-powered tool is perfect for D&D, RPGs, and worldbuilding." />
        <meta name="keywords" content="fantasy item name generator, RPG item names, magic weapon name, artifact generator, Dungeons & Dragons item name tool, legendary weapon names" />
                <link rel="canonical" href="https://www.fantasynamecreator.com/item" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Item Name Creator</h1>

          <GoogleAd slot="4105556455" />

          {/* NEW: Replaced the old intro paragraph with a new, centered one */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>Every legendary hero needs a legendary weapon, every epic quest requires a powerful artifact. Our <strong>Fantasy Item Name Generator</strong> is the ultimate tool for breathing life into the magical and mundane objects of your world. Whether you need to name a cursed sword, a blessed amulet, a mysterious scroll, or a potent elixir, our AI provides unique names that capture the essence of your item's history, power, and purpose.</p>
          </div>

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
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Fantasy Item Name Generator</h2>
            <p>Every adventurer needs a legendary item. Whether it's a mighty sword, a powerful spellbook, or a mystical amulet, a great name can tell a story on its own. Our <strong>fantasy item name generator</strong> is built to help you find the perfect name for any item you can imagine. By specifying the item type, rarity, and magical properties, you can create a name that fits perfectly into your fantasy world, whether it's for a Dungeons & Dragons campaign, a novel, or a video game. Stop struggling with generic item names and start crafting legends.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Finding the Perfect Name with Our Magic Weapon Name Generator</h2>
            <p>Our tool offers the most flexible <strong>magic weapon name generator</strong> on the web. Looking for an <strong>epic sword name generator</strong>? Simply choose "Weapon" as the type, set the rarity to "Legendary," and describe its magical effect, such as "Fire" or "Shadow." The generator will produce a list of evocative names like "Blaze of the Phoenix" or "Umbral Fury." The same applies to other items, from potions and scrolls to armor and jewelry. Our tool ensures your legendary items have names that are just as memorable as their stories. Give our tool a try and see what epic names you can discover!</p>
          </div>
          
          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
