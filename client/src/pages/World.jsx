import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';

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
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState(null);
  const resultsRef = React.useRef(null);

  // Auto-scroll to results when names are generated
  React.useEffect(() => {
    if (names.length > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [names]);

  // Timer for generation
  React.useEffect(() => {
    let interval;
    if (loading) {
      setTimer(0);
      interval = setInterval(() => {
        setTimer(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      if (err.response && err.response.status === 429) {
        setError("We are sorry, but there are too many requests at the moment. Please try again tomorrow.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
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

      <div className="min-h-screen flex flex-col items-center">
        <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy World Name Creator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          {/* Single Affiliate Box before form */}
          <SingleAffiliateBox />


          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10 text-gray-300">
            <p className="text-lg">
              Every great story begins with a great world, and every great world needs a great name. Our <strong>Fantasy World Name Generator</strong> helps writers, GMs and game designers create evocative names for continents, kingdoms, realms, planets and more.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Type</span>
                <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Continent', 'Realm', 'Kingdom', 'Island', 'Planet', 'Dimension', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Climate</span>
                <select name="climate" value={form.climate} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Temperate', 'Tropical', 'Arid', 'Frozen', 'Mixed', 'Magical', 'Other'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Culture Influence</span>
                <input name="culture" value={form.culture} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Magic Level</span>
                <select name="magicLevel" value={form.magicLevel} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['None', 'Low', 'Moderate', 'High', 'Mythic'].map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone</span>
              <select name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                {['Epic', 'Dark', 'Mystical', 'Ancient', 'Whimsical', 'Heroic', 'Other'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            {error && (
              <div className="w-full p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm text-center animate-fade-in font-medium">
                {error}
              </div>
            )}

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
                  Mapping the Realm... {timer.toFixed(1)}s
                </>
              ) : (
                'Generate Names'
              )}
            </button>
          </form>

          {/* RESULTS */}
          {names.length > 0 && (
            <div ref={resultsRef} className="mt-10 w-full max-w-lg animate-fade-in">
              <div className="bg-fantasy-dark-secondary/80 p-8 rounded-xl border border-fantasy-gold/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">World Names</h2>
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

          {/* Amazon Affiliate Recommendations - Right after results */}
          {names.length > 0 && <AmazonAffiliate />}

          <div className="flex flex-col items-center gap-6 mt-12 w-full">
            <ShareGeneratedName form={form} />
          </div>

          <hr className="my-16 w-full max-w-2xl border-white/10" />

          {/* SEO content block */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Why Your World Needs a Great Name</h2>
              <p>We combine phonetics, geography cues and genre tropes to generate thousands of original names. Whether you need a name for a sprawling continent, a single kingdom, a mythical city or a hidden realm, the generator provides on-theme ideas that sound like they belong on a fantasy map.</p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Build a Believable Setting</h2>
              <p>Pick a climate, cultural influence, magic level and tone to nudge the results toward your vision. Use these names as seeds for your lore, history and cartography.</p>

              <p className="mt-6">
                Looking for more? Try our
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link className="text-fantasy-gold hover:underline" to="/character">Character</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/faction">Faction</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/religion">Religion</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/item">Item</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/dynamic">Dynamic</Link>
                </div>
              </p>
            </div>


            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">World Name Generator – FAQ</h2>

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


        </main>

        {/* Back to Home link at bottom */}
        <div className="w-full text-center py-8 border-t border-white/5">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-fantasy-gold hover:text-white transition font-fantasy text-lg">
            ← Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
