import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Dynamic() {
  const [form, setForm] = useState({
    context: '',
    culture: '',
    tone: ''
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState(null);
  const [lore, setLore] = useState({});
  const [loadingLore, setLoadingLore] = useState(null);
  const resultsRef = React.useRef(null);

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

  // Auto-scroll to results when names are generated
  React.useEffect(() => {
    if (names.length > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [names]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

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
      if (err.response && err.response.status === 429) {
        setError("We are sorry, but there are too many requests at the moment. Please try again tomorrow.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const generateLore = async (name) => {
    if (lore[name]) return;
    setLoadingLore(name);
    setError(null);
    try {
      const response = await axios.post('/api/generate', {
        mode: 'dynamic-lore',
        params: { ...form, name }
      });
      setLore(prev => ({ ...prev, [name]: response.data.lore }));
    } catch (err) {
      console.error("Lore generation failed", err);
      if (err.response && err.response.status === 429) {
        setError("We are sorry, but there are too many requests at the moment. Please try again tomorrow.");
      } else {
        setError("Lore generation failed. Please try again.");
      }
    } finally {
      setLoadingLore(null);
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
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Custom Fantasy Name Generator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          {/* Single Affiliate Box before form */}
          <SingleAffiliateBox />

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
                  Waving the Wand... {timer.toFixed(1)}s
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Custom Names</h2>
                <ul className="space-y-4">
                  {names.map((name, index) => (
                    <li key={index} className="flex flex-col gap-2 border-b border-white/5 pb-4 last:border-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-lg hover:text-fantasy-gold-light transition cursor-default">
                          <span className="text-fantasy-gold/50 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                          <span className="font-semibold text-gray-100">{name}</span>
                        </div>
                        <button
                          onClick={() => generateLore(name)}
                          className="text-xs bg-fantasy-gold/10 text-fantasy-gold hover:bg-fantasy-gold hover:text-black px-3 py-1 rounded-full border border-fantasy-gold/30 transition-all flex items-center gap-1"
                        >
                          <span>✨ Lore</span>
                        </button>
                      </div>
                      {lore[name] && (
                        <div className="text-sm text-gray-400 italic bg-black/40 p-3 rounded border-l-2 border-fantasy-gold/50 ml-8 animate-fade-in">
                          {lore[name]}
                        </div>
                      )}
                      {loadingLore === name && (
                        <div className="text-xs text-fantasy-gold ml-8 animate-pulse">
                          Divining destiny...
                        </div>
                      )}
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

          {/* SEO content block + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Dynamic Fantasy Name Generator and Creator</h2>
              <p className="text-xl text-gray-200 mb-4 font-semibold">The ultimate custom fantasy name generator</p>

              <p className="mb-4">
                Sometimes you don’t need “character” or “city.” You need something weird and specific that doesn’t fit a neat category: a new race, a lost spell, a secret organization, a legendary weapon, an arcane artifact, a planet, a realm beyond the clouds, or a title spoken only in prophecy. That’s exactly what the Dynamic Generator is for.
              </p>

              <p className="mb-4">
                This is your flexible, open-ended custom name creator. Instead of picking from predefined boxes, you describe what you want—and the generator gives you names that match your idea. It’s perfect for creators who build unusual worlds, mix genres, or want names that feel truly original.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">How to generate unique fantasy names with custom inputs</h2>

              <p className="mb-4">
                The Dynamic Generator works best when you give it a clear “anchor” in the Context field. You don’t have to write a novel—just a strong one-liner that explains what the thing is and why it matters.
              </p>

              <p className="mb-4 font-semibold text-fantasy-gold">Examples of good context:</p>
              <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-300">
                <li>“A cursed greatsword once wielded by a shadow knight”</li>
                <li>“A floating city powered by storm crystals”</li>
                <li>“A desert clan that worships a silent sun”</li>
                <li>“A forbidden spell that trades memories for power”</li>
                <li>“A pirate republic built inside a colossal whale skeleton”</li>
              </ul>

              <p className="mb-4">
                Then add:
              </p>

              <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-300">
                <li><strong>Cultural Influence</strong> — this shapes the feel of the names. Try ideas like Old Norse, Japanese folklore, Ancient Egyptian, Celtic, Latin, Slavic, or even “mixed frontier dialect.”</li>
                <li><strong>Tone</strong> — this controls the emotional weight. Use words like foreboding, heroic, serene, grim, regal, chaotic, mystical, or playful.</li>
              </ul>

              <p className="mb-4">
                Each click returns 10 new options, so you can explore variations quickly. If the results are close but not perfect, tweak a few words in your context (change “cursed” to “holy,” “shadow” to “storm,” “ancient” to “new”) and try again. Small changes often produce dramatically better fits.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">The Lore button: instant meaning, not just a name</h2>

              <p className="mb-4">
                The Dynamic Generator also includes the Lore feature. When a name stands out, click Lore to get a short lore snippet tied to that specific result—an origin hint, rumor, secret purpose, title, taboo, or twist. It’s a fast way to turn a name into something you can actually use: a plot hook, a quest seed, a backstory detail, or a worldbuilding note you didn’t know you needed.
              </p>

              <p className="mb-4">
                For game masters, this is gold for improvisation. For writers, it’s a great “unlock” when you have a concept but no story angle yet. For designers, it adds flavor fast—without slowing your workflow.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">When to use Dynamic</h2>
              <p className="mb-4">
                Use it when your idea is too custom for a standard generator, or when you want the generator to meet your imagination halfway. Describe it, generate names, click Lore, and watch the concept become part of your world.
              </p>
            </div>

            {/* Related Generators Block */}
            <RelatedGenerators current="/dynamic" />


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

