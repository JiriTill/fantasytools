import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

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

      <div className="min-h-screen flex flex-col items-center">
        <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
          <Link to="/" className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy Faction Name Generator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          <GoogleAd slot="4105556455" />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10 text-gray-300">
            <p className="text-lg">
              Factions—noble houses, secretive cults, powerful guilds—drive stories and shape nations. Our <strong>Fantasy Faction Name Generator</strong> helps you create memorable names tuned by type, alignment, culture and tone.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Faction Type</span>
                <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Guild', 'Order', 'Clan', 'Tribe', 'Cult', 'Brotherhood', 'House', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Alignment</span>
                <select name="alignment" value={form.alignment} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Good', 'Neutral', 'Evil', 'Chaotic', 'Lawful'].map(a => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Cultural Influence</span>
              <input name="culture" value={form.culture} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone or Style</span>
              <select name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                {['Mysterious', 'Militant', 'Noble', 'Ancient', 'Dark', 'Righteous', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-lg font-bold text-lg uppercase tracking-wider flex items-center justify-center transition-all shadow-lg ${loading ? 'bg-gray-600 cursor-not-allowed opacity-70' : 'bg-fantasy-gold hover:bg-white text-fantasy-dark hover:shadow-fantasy-gold/50'
                }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Forging Alliance...
                </>
              ) : (
                'Generate Names'
              )}
            </button>
          </form>

          {/* RESULTS */}
          {names.length > 0 && (
            <div className="mt-10 w-full max-w-lg animate-fade-in">
              <div className="bg-fantasy-dark-secondary/80 p-8 rounded-xl border border-fantasy-gold/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Faction Names</h2>
                <ul className="space-y-3">
                  {names.map((name, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg border-b border-white/5 pb-2 last:border-0 hover:text-fantasy-gold-light transition cursor-default">
                      <span className="text-fantasy-gold/50 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-6 mt-12 w-full">
            <ShareGeneratedName form={form} />
          </div>

          <hr className="my-16 w-full max-w-2xl border-white/10" />

          {/* SEO content + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Crafting Epic Faction Names for Your Fantasy World</h2>
              <p>
                A well-named faction can suggest a rich history, hidden purpose or fearsome reputation. Our <strong>fantasy faction name generator</strong> helps DMs, writers and designers create names that resonate with the setting.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">How to Use the Guild Name Generator and More</h2>
              <p>
                Choose a <strong>faction type</strong> like "Guild," "Clan" or "House," then select an <strong>alignment</strong> to set the moral tone.
                Add a <strong>cultural influence</strong> for unique flavor, and pick a <strong>tone</strong> for emotional weight. This customization keeps results authentic to your world.
              </p>

              <p className="mt-6">
                Explore more generators:
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link className="text-fantasy-gold hover:underline" to="/character">Character</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/world">World</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/religion">Religion</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/item">Item</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/dynamic">Dynamic</Link>
                </div>
              </p>
            </div>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">Faction Name Generator – FAQ</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{faq[0].q}</h3>
                  <p className="mt-1">{faq[0].a}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{faq[1].q}</h3>
                  <p className="mt-1">{faq[1].a}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{faq[2].q}</h3>
                  <p className="mt-1">{faq[2].a}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{faq[3].q}</h3>
                  <p className="mt-1">{faq[3].a}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{faq[4].q}</h3>
                  <p className="mt-1">{faq[4].a}</p>
                </div>
              </div>
            </section>
          </div>

          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
