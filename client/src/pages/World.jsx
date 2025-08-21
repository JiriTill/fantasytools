import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

export default function World() {
  const [form, setForm] = useState({
    type: 'Continent',
    climate: 'Temperate',
    culture: 'Western-European inspired',
    magicLevel: 'Moderate',
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

Generate 10 unique and original names for places that sound like they belong on a fantasy map for a ${form.type} with a ${form.climate} climate, inspired by a ${form.culture} cultural aesthetic, featuring a ${form.magicLevel} level of magic, and evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel worldbuilding.
- Focus on names for regions, planets, kingdoms, islands, or realms, not characters or objects.
- Avoid overused generic terms like "Storm", "Blood", or "Shadow" unless they are culturally relevant to the ${form.culture}.
- Names should be concise, typically one to two words (e.g., "Vaerys Coral", "Tiaru’s Veil"), with a maximum of three words for complex cultural influences.
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Middle-earth" or "Westeros").
- Reflect the ${form.climate}, ${form.culture}, ${form.magicLevel}, and ${form.tone} in the phonetic and stylistic choices of the names.
- If ${form.culture} is empty or vague, use a neutral but evocative fantasy style.

Return the names as a simple numbered list (1-10), with no additional text or commentary.
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
  const canonical = "https://www.fantasynamecreator.com/world";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy World and Place Name Generator | Fantasy Name Creator";
  const description = "Craft immersive world names for continents, kingdoms, realms, planets and more. Tune climate, culture, magic level and tone to get unique fantasy names.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace if you have a better OG image

  // ---- FAQ content (must match JSON-LD exactly) ----
  const faq = [
    {
      q: "Is the World Name Generator free?",
      a: "Yes—completely free, no login required."
    },
    {
      q: "Can I use these names commercially?",
      a: "Yes. You can use the generated names in books, games, and projects. Attribution is appreciated but not required."
    },
    {
      q: "How do I get names for continents, kingdoms, or planets?",
      a: "Choose the type in the form above—Continent, Realm, Kingdom, Island, Planet or Dimension—and generate."
    },
    {
      q: "How do I get cultural styles like Elven or Dwarven?",
      a: "Use the Culture Influence field to steer the style, or visit our Character, Faction and Religion generators for themed inspiration."
    },
    {
      q: "Can I copy or download the list?",
      a: "Yes. Click Copy next to any name or use Copy All. A TXT download is also available."
    }
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
        <meta name="keywords" content="fantasy world name generator, fantasy place names, realm names, continent name generator, planet name generator, worldbuilding tool" />
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
              { "@type": "ListItem", position: 2, name: "World Generator", item: canonical }
            ]
          })}
        </script>

        {/* JSON-LD: FAQPage (questions must match the visible section below) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy World and Place Name Creator</h1>
          <GoogleAd />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              Every great story begins with a great world, and every great world needs a great name. Our <strong>Fantasy World Name Generator</strong> helps writers, GMs and game designers create evocative names for continents, kingdoms, realms, planets and more. Tune the climate, culture, magic level and tone to get results that fit your setting.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Continent','Realm','Kingdom','Island','Planet','Dimension','Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block">
              Climate:
              <select name="climate" value={form.climate} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Temperate','Tropical','Arid','Frozen','Mixed','Magical','Other'].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="block">
              Culture Influence:
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>
            <label className="block">
              Magic Level:
              <select name="magicLevel" value={form.magicLevel} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['None','Low','Moderate','High','Mythic'].map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </label>
            <label className="block">
              Tone:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Epic','Dark','Mystical','Ancient','Whimsical','Heroic','Other'].map(t => (
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
              <h2 className="text-xl font-semibold mb-4">World Name Suggestions:</h2>
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

          {/* SEO content block */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Your World Needs a Great Name</h2>
            <p>We combine phonetics, geography cues and genre tropes to generate thousands of original names. Whether you need a name for a sprawling continent, a single kingdom, a mythical city or a hidden realm, the generator provides on-theme ideas that sound like they belong on a fantasy map.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Build a Believable Setting</h2>
            <p>Pick a climate, cultural influence, magic level and tone to nudge the results toward your vision. Use these names as seeds for your lore, history and cartography.</p>

            {/* Internal links help crawl & discovery */}
            <p className="mt-6">
              Looking for more? Try our{" "}
              <Link className="underline text-blue-300" to="/character">Character</Link>,{" "}
              <Link className="underline text-blue-300" to="/faction">Faction</Link>,{" "}
              <Link className="underline text-blue-300" to="/religion">Religion</Link>,{" "}
              <Link className="underline text-blue-300" to="/item">Item</Link>{" "}
              and{" "}
              <Link className="underline text-blue-300" to="/dynamic">Dynamic</Link>{" "}
              name generators.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">World Name Generator – FAQ</h2>

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
