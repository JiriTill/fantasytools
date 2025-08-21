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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

  // ---- SEO constants ----
  const canonical = "https://www.fantasynamecreator.com/item";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy Item Name Generator & Creator | Fantasy Name Creator";
  const description = "Generate legendary names for fantasy weapons, relics, potions and magical artifacts. Perfect for D&D, RPGs and worldbuilding.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace if you have a brand OG image

  // ---- FAQ (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Item Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use these names commercially?", a: "Yes. You can use the generated names in books, games and projects. Attribution is appreciated but not required." },
    { q: "What item types can I generate?", a: "You can generate names for Weapons, Armor, Potions, Relics, Tomes, Jewelry, Tools and more." },
    { q: "How do I steer the style of names?", a: "Set Item Type and use Material, Magic Effect, Rarity and Tone to guide phonetics and theme." },
    { q: "How many names are generated per click?", a: "Each generation produces 10 unique names. Click again for new ideas." }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Basic meta */}
        <meta name="description" content={description} />
        <meta name="keywords" content="fantasy item name generator, RPG item names, magic weapon name, artifact generator, Dungeons & Dragons item names, legendary weapon names" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD: Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fantasynamecreator.com/" },
              { "@type": "ListItem", position: 2, name: "Item Generator", item: canonical }
            ]
          })}
        </script>

        {/* JSON-LD: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Item Name Creator</h1>

          <GoogleAd slot="4105556455" />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              Every legendary hero needs a legendary item. Our <strong>Fantasy Item Name Generator</strong> gives evocative names
              for weapons, relics, potions and artifacts—tuned by type, rarity, material, magic effect and tone.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Item Type:
              <select name="itemType" value={form.itemType} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Weapon','Armor','Potion','Relic','Tome','Jewelry','Tool','Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Rarity:
              <select name="rarity" value={form.rarity} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Common','Uncommon','Rare','Epic','Legendary','Mythic'].map(r => (
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
                {['Dark','Heroic','Epic','Mystical','Whimsical','Ancient'].map(t => (
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
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Names'
              )}
            </button>
          </form>

          {/* RESULTS */}
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

          {/* SEO content + internal links */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Fantasy Item Name Generator</h2>
            <p>
              Name swords, amulets, tomes, potions and relics with lore-friendly titles. Combine rarity, materials and magic effects to
              produce names that feel tailored to your setting.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Finding the Perfect Magic Weapon or Artifact Name</h2>
            <p>
              Choose <strong>Item Type</strong>, set <strong>Rarity</strong>, describe <strong>Material</strong> and <strong>Magic Effect</strong>,
              then pick a <strong>Tone</strong>. Each click returns 10 new options—regenerate until one sings.
            </p>

            <p className="mt-6">
              Explore more generators:{" "}
              <Link className="underline text-blue-300" to="/character">Character</Link>,{" "}
              <Link className="underline text-blue-300" to="/world">World</Link>,{" "}
              <Link className="underline text-blue-300" to="/faction">Faction</Link>,{" "}
              <Link className="underline text-blue-300" to="/religion">Religion</Link>,{" "}
              <Link className="underline text-blue-300" to="/dynamic">Dynamic</Link>.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Item Name Generator – FAQ</h2>

              <h3 className="text-xl font-semibold mt-4">{faq[0].q}</h3>
              <p>{faq[0].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[1].q}</h3>
              <p>{faq[1].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[2].q}</h3>
              <p>{faq[2].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[3].q}</h3>
              <p>{faq[3].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[4].q}</h3>
              <p>{faq[4].a}</p>
            </section>
          </div>

          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
