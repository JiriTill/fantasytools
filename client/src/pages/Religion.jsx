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
    type: 'Church', // was 'Faith' (not in <option> list)
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

  // ---- SEO constants ----
  const canonical = "https://www.fantasynamecreator.com/religion";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy Religion Name Generator & Creator | Fantasy Name Creator";
  const description = "Generate immersive fantasy religion names for pantheons, faiths, cults and divine orders. Customize by tone, culture and alignment to fit your worldbuilding.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace with your OG image if available

  // ---- FAQ content (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Religion Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use these names commercially?", a: "Yes. You can use the generated names in books, games and projects. Attribution is appreciated but not required." },
    { q: "What religion types can I generate?", a: "You can generate names for Churches, Cults, Orders, Pantheons, Sects and Covenants." },
    { q: "How do I get a specific tone or culture?", a: "Use the Tone and Cultural Influence fields, and set Deity Alignment to Good, Neutral or Evil." },
    { q: "How many names are generated at a time?", a: "Each click generates 10 unique name ideas. Click again for a new list." }
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
        <meta name="keywords" content="fantasy religion name generator, cult name generator, divine order, pantheon name, D&D religion, RPG worldbuilding tool, custom religion names" />
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
              { "@type": "ListItem", position: 2, name: "Religion Generator", item: canonical }
            ]
          })}
        </script>

        {/* JSON-LD: FAQPage (questions must match the visible section) */}
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
          <h1 className="text-3xl font-bold mb-6">Fantasy Religion Name Creator</h1>

          <GoogleAd slot="4105556455" />

          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              The pantheon of gods, the whispers of an ancient cult, or the righteous faith of a divine order—religion shapes the soul of a setting.
              Our <strong>Fantasy Religion Name Generator</strong> helps you craft names that convey history, power and mystery. Perfect for DMs, writers and game designers.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Religion Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Church','Cult','Order','Pantheon','Sect','Covenant','Not specified'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Deity Alignment:
              <select name="alignment" value={form.alignment} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Good','Neutral','Evil'].map(a => (
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
                {['Mystical','Dark','Zealous','Ancient','Peaceful','Heroic','Not specified'].map(t => (
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

          {/* SEO content block + internal links */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">Crafting Divine and Mysterious Religion Names</h2>
            <p>
              A well-named religion can hint at origins, tenets and the nature of its deity. Use the fields above to steer phonetics and tone—perfect for churches, secret cults, holy orders and ancient pantheons.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Cult & Faith Name Generator</h2>
            <p>
              Select a <strong>Religion Type</strong>, set <strong>Deity Alignment</strong>, provide a <strong>Cultural Influence</strong>, and choose a <strong>Tone</strong>. Each generation produces 10 fresh ideas you can refine or regenerate.
            </p>

            <p className="mt-6">
              Explore more generators:{" "}
              <Link className="underline text-blue-300" to="/world">World</Link>,{" "}
              <Link className="underline text-blue-300" to="/character">Character</Link>,{" "}
              <Link className="underline text-blue-300" to="/faction">Faction</Link>,{" "}
              <Link className="underline text-blue-300" to="/item">Item</Link>,{" "}
              <Link className="underline text-blue-300" to="/dynamic">Dynamic</Link>.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Religion Name Generator – FAQ</h2>

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
