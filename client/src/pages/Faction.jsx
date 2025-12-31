import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Faction() {
  const [form, setForm] = useState({
    type: 'Guild',
    alignment: 'Neutral',
    culture: 'Eastern-inspired',
    tone: 'Mysterious'
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
    setLoading(true);
    setError(null);

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
        mode: 'faction-lore',
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
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy Faction Name Generator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          {/* Single Affiliate Box before form */}
          <SingleAffiliateBox />
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
                  Forging Alliance... {timer.toFixed(1)}s
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Faction Names</h2>
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

          {/* SEO content + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Fantasy Faction Name Generator</h2>
              <p className="text-xl text-gray-200 mb-4 font-semibold">Craft epic faction names that feel real</p>

              <p className="mb-4">
                A faction name should do more than sound cool. The best ones hint at history, purpose, and reputation—the kind of name people whisper in taverns, paint on banners, or carve into stone. Whether you’re building a holy order, a criminal syndicate, a rebel alliance, or a royal bloodline, a strong name instantly tells your players or readers what they’re dealing with.
              </p>

              <p className="mb-4">
                This faction name generator helps DMs, writers, and game designers create memorable faction names that fit the tone of their world. Use it to name the groups that shape your setting: the ones that start wars, control trade, guard forbidden knowledge, or hunt monsters for coin.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">From guilds and clans to houses and cults</h2>

              <p className="mb-4">
                Not every faction works the same—and they shouldn’t all sound the same either. That’s why the generator supports many styles, including:
              </p>

              <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-300">
                <li><strong>Guilds</strong> (merchant guilds, thieves’ guilds, mage circles)</li>
                <li><strong>Clans and tribal groups</strong></li>
                <li><strong>Noble Houses and dynasties</strong></li>
                <li><strong>Orders and brotherhoods</strong></li>
                <li><strong>Legions, companies, and mercenary bands</strong></li>
                <li><strong>Cults, sects, and secret societies</strong></li>
                <li><strong>Rebel movements and underground networks</strong></li>
              </ul>

              <p className="mb-4">
                If you’re specifically looking for a guild name generator, you can narrow the type and get results that sound organized, established, and believable—perfect for cities, trade hubs, and political intrigue.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Guide the results with alignment, culture, and tone</h2>

              <p className="mb-4">
                Quick names are useful. Accurate names are better. With this fantasy faction name generator, you can shape the output so it matches your world instead of fighting against it.
              </p>

              <p className="mb-4">
                Choose a faction type (Guild, Clan, House, Order, Cult…), then set an alignment to establish the moral direction: honorable, neutral, ruthless, fanatical, or outright evil. Add a cultural influence to shift the naming style, and pick a tone for emotional weight—noble, grim, mystical, brutal, elegant, or rebellious. These small choices help the names feel consistent across your setting, like they share a real origin.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Use the Lore button to turn a name into a story</h2>

              <p className="mb-4">
                Found a name you like? Click Lore to get a short lore snippet tied to that specific faction. It might reveal a founding legend, a code of rules, a secret goal, a notorious leader, or the rumor that makes common folk cross the street. It’s an easy way to turn a cool name into something playable and plot-ready—especially when you need instant hooks for quests, alliances, betrayals, and rivalries.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Build a world shaped by groups, not just places</h2>

              <p className="mb-4">
                Factions create conflict, politics, and identity. Generate a few, pick your favorites, and watch your world come alive: alliances form, enemies rise, borders shift, and legends spread. Start with a name—then click Lore and let the faction write itself.
              </p>
            </div>

            {/* Related Generators Block */}
            <RelatedGenerators current="/faction" />

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
