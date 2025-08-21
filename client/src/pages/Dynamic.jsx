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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

  // ---- SEO constants ----
  const canonical = "https://www.fantasynamecreator.com/dynamic";
  const siteName = "Fantasy Name Creator";
  const title = "Custom Fantasy Name Generator | Fantasy Name Creator";
  const description = "Create truly unique fantasy names from your custom inputs. Describe context, culture and tone to generate evocative names for characters, places and more.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace with your OG image if available

  // ---- FAQ (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Custom Fantasy Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "What can I generate with the Dynamic tool?", a: "Anything—characters, places, factions, items, spells, cities, artifacts and more." },
    { q: "How do I steer the style of names?", a: "Describe the context in detail and set Cultural Influence and Tone to guide phonetics and theme." },
    { q: "Can I use the generated names commercially?", a: "Yes. You can use them in books, games and projects. Attribution is appreciated but not required." },
    { q: "How many names are generated per click?", a: "Each generation returns 10 unique names. Click again for a fresh list." }
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
        <meta name="keywords" content="custom fantasy name generator, AI fantasy naming, worldbuilding, RPG names, generate unique fantasy names, custom name creator" />
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
              { "@type": "ListItem", position: 2, name: "Custom Generator", item: canonical }
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
          <h1 className="text-3xl font-bold mb-6">Custom Fantasy Name Generator</h1>

          <GoogleAd slot="4105556455" />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              Sometimes a standard generator isn’t enough. Our <strong>Custom Fantasy Name Generator</strong> is your all-purpose tool.
              Describe the <strong>context, culture and tone</strong>, and our AI crafts unique names tailored to your vision.
            </p>
          </div>

          {/* FORM */}
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

          {/* SEO content + internal links */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Custom Fantasy Name Generator</h2>
            <p>
              Our dynamic generator shines when you need a name that doesn’t fit a predefined box—unique races, arcane artifacts, legendary
              weapons or mysterious spells. Input a custom context, cultural influence and tone to craft truly original names.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Generate Unique Fantasy Names with Custom Inputs</h2>
            <p>
              For best results, be descriptive in the <strong>Context</strong> field (e.g., “a cursed greatsword once wielded by a shadow knight”).
              In <strong>Cultural Influence</strong>, try “Old Norse,” “Japanese folklore,” or “Ancient Egyptian.” For <strong>Tone</strong>, use words like
              “foreboding,” “heroic,” “serene,” or “chaotic.” Use this as your go-to <strong>custom name creator</strong> to bring unique ideas to life.
            </p>

            <p className="mt-6">
              Explore more generators:{" "}
              <Link className="underline text-blue-300" to="/character">Character</Link>,{" "}
              <Link className="underline text-blue-300" to="/world">World</Link>,{" "}
              <Link className="underline text-blue-300" to="/faction">Faction</Link>,{" "}
              <Link className="underline text-blue-300" to="/religion">Religion</Link>,{" "}
              <Link className="underline text-blue-300" to="/item">Item</Link>.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Custom Name Generator – FAQ</h2>

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

