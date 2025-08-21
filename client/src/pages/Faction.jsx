import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

export default function Faction() {
  const [form, setForm] = useState({
    type: 'Guild',
    alignment: 'Neutral',
    culture: 'Eastern-inspired',
    tone: 'Mysterious'
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNames([]);

    const prompt = `
You are an expert in fantasy worldbuilding and naming. Generate 10 unique and original names for a fantasy ${form.type || 'faction'} that has a ${form.alignment || 'neutral'} alignment, is inspired by a ${form.culture || 'neutral'} cultural aesthetic, and evokes a ${form.tone || 'mysterious'} tone.

Rules:
- Names must be immersive, evocative, and suitable for use in fantasy RPGs, novels, or worldbuilding projects.
- These names should represent factions such as guilds, orders, clans, cults, or secret societies — not individual characters or locations.
- Use phonetic and stylistic elements that reflect the cultural influence (${form.culture}), alignment (${form.alignment}), and tone (${form.tone}).
- Avoid generic or overused terms like “Blood,” “Dark,” or “Shadow” unless justified by the culture or tone.
- Names should be concise: typically one to two words (e.g., “Starveil Order”, “Koa’thra Clan”), up to three if culturally appropriate.
- Do not copy or adapt names from existing franchises (e.g., no “Dark Brotherhood” or “Knights of the Round” clones).
- If ${form.culture} is vague or empty, default to a neutral but immersive fantasy style.
- Return the results as a simple numbered list (1–10). No commentary, no explanations — just the names.
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
  const canonical = "https://www.fantasynamecreator.com/faction";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy Faction Name Generator & Creator | Fantasy Name Creator";
  const description = "Generate powerful fantasy faction names for guilds, orders, clans and cults. Customize by alignment, tone and culture. Perfect for D&D and other RPGs.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace with your OG image if available

  // ---- FAQ (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Faction Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use these names commercially?", a: "Yes. You can use the generated names in books, games and projects. Attribution is appreciated but not required." },
    { q: "What faction types can I generate?", a: "You can generate names for Guilds, Orders, Clans, Tribes, Cults, Brotherhoods and Houses." },
    { q: "How do I steer the style or theme of names?", a: "Use Faction Type, Alignment, Cultural Influence and Tone to guide phonetics and theme." },
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
        <meta name="keywords" content="fantasy faction name generator, guild name generator, clan name creator, D&D factions, cult names, fantasy names" />
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
              { "@type": "ListItem", position: 2, name: "Faction Generator", item: canonical }
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
          <h1 className="text-3xl font-bold mb-6">Fantasy Faction Name Generator</h1>

          <GoogleAd slot="4105556455" />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              Factions—noble houses, secretive cults, powerful guilds—drive stories and shape nations. Our <strong>Fantasy Faction Name Generator</strong> helps you create memorable names tuned by type, alignment, culture and tone.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Faction Type:
              <select name="type" value={form.type} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Guild','Order','Clan','Tribe','Cult','Brotherhood','House','Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Alignment:
              <select name="alignment" value={form.alignment} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Good','Neutral','Evil','Chaotic','Lawful'].map(a => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Cultural Influence:
              <input name="culture" value={form.culture} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded" />
            </label>

            <label className="block">
              Tone or Style:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Mysterious','Militant','Noble','Ancient','Dark','Righteous','Other'].map(t => (
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

          {/* RESULTS */}
          {names.length > 0 && (
            <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Faction Name Suggestions:</h2>
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
            <h2 className="text-2xl font-bold mt-8 mb-4">Crafting Epic Faction Names for Your Fantasy World</h2>
            <p>
              A well-named faction can suggest a rich history, hidden purpose or fearsome reputation. Our <strong>fantasy faction name generator</strong> helps DMs, writers and designers create names that resonate with the setting.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Guild Name Generator and More</h2>
            <p>
              Choose a <strong>faction type</strong> like "Guild," "Clan" or "House," then select an <strong>alignment</strong> to set the moral tone.
              Add a <strong>cultural influence</strong> for unique flavor, and pick a <strong>tone</strong> for emotional weight. This customization keeps results authentic to your world.
            </p>

            <p className="mt-6">
              Explore more generators:{" "}
              <Link className="underline text-blue-300" to="/character">Character</Link>,{" "}
              <Link className="underline text-blue-300" to="/world">World</Link>,{" "}
              <Link className="underline text-blue-300" to="/religion">Religion</Link>,{" "}
              <Link className="underline text-blue-300" to="/item">Item</Link>,{" "}
              <Link className="underline text-blue-300" to="/dynamic">Dynamic</Link>.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Faction Name Generator – FAQ</h2>

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
