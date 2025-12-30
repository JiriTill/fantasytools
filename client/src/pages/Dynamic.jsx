import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';

export default function Dynamic() {
  const [form, setForm] = useState({
    context: '',
    culture: '',
    tone: ''
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      setTimer(0);
      interval = setInterval(() => {
        setTimer(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

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

      <div className="min-h-screen flex flex-col items-center">
        <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
          <Link to="/" className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Custom Fantasy Name Generator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10 text-gray-300">
            <p className="text-lg">
              Sometimes a standard generator isn’t enough. Our <strong>Custom Fantasy Name Generator</strong> is your all-purpose tool.
              Describe the <strong>context, culture and tone</strong>, and our AI crafts unique names tailored to your vision.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Context (What is being named?)</span>
              <textarea name="context" value={form.context} onChange={handleChange} rows="3" className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" required placeholder="e.g. A cursed sword wielded by a fallen paladin..." />
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Cultural Influence (Optional)</span>
              <input name="culture" value={form.culture} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone (Optional)</span>
              <input name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
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
                  Waving the Wand...
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Custom Names</h2>
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

          {/* SEO content block + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">The Ultimate Custom Fantasy Name Generator</h2>
              <p>
                Our dynamic generator shines when you need a name that doesn’t fit a predefined box—unique races, arcane artifacts, legendary
                weapons or mysterious spells. Input a custom context, cultural influence and tone to craft truly original names.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">How to Generate Unique Fantasy Names with Custom Inputs</h2>
              <p>
                For best results, be descriptive in the <strong>Context</strong> field (e.g., “a cursed greatsword once wielded by a shadow knight”).
                In <strong>Cultural Influence</strong>, try “Old Norse,” “Japanese folklore,” or “Ancient Egyptian.” For <strong>Tone</strong>, use words like
                “foreboding,” “heroic,” “serene,” or “chaotic.” Use this as your go-to <strong>custom name creator</strong> to bring unique ideas to life.
              </p>

              <p className="mt-6">
                Explore more generators:
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link className="text-fantasy-gold hover:underline" to="/character">Character</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/world">World</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/faction">Faction</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/item">Item</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/religion">Religion</Link>
                </div>
              </p>
            </div>


            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">Custom Name Generator – FAQ</h2>

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

          {/* Amazon Affiliate Recommendations */}
          {names.length > 0 && <AmazonAffiliate />}
        </main>
        <Footer />
      </div>
    </>
  );
}

