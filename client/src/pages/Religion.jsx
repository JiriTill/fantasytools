import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Religion() {
  const [form, setForm] = useState({
    type: 'Church', // was 'Faith' (not in <option> list)
    alignment: 'Neutral',
    culture: 'Ancient Mesopotamian inspired',
    tone: 'Mystical'
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
        mode: 'religion-lore',
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

      <div className="min-h-screen flex flex-col items-center">
        <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy Religion Name Creator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          {/* Single Affiliate Box before form */}
          <SingleAffiliateBox />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10 text-gray-300">
            <p className="text-lg">
              The pantheon of gods, the whispers of an ancient cult, or the righteous faith of a divine order—religion shapes the soul of a setting.
              Our <strong>Fantasy Religion Name Generator</strong> helps you craft names that convey history, power and mystery.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Religion Type</span>
                <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Church', 'Cult', 'Order', 'Pantheon', 'Sect', 'Covenant', 'Not specified'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Deity Alignment</span>
                <select name="alignment" value={form.alignment} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Good', 'Neutral', 'Evil'].map(a => (
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
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone</span>
              <select name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                {['Mystical', 'Dark', 'Zealous', 'Ancient', 'Peaceful', 'Heroic', 'Not specified'].map(t => (
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
                  Communing with Gods... {timer.toFixed(1)}s
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Religion Names</h2>
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
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Fantasy Religion Name Generator</h2>
              <p className="text-xl text-gray-200 mb-4 font-semibold">Craft divine and mysterious religion names</p>

              <p className="mb-4">
                Religions are the heartbeat of many fantasy worlds. They shape laws, wars, festivals, taboos, and the way people explain the unknown. A strong religion name can instantly suggest origins, sacred beliefs, rituals, and the nature of the deity behind it—whether that deity is real, silent, dead, or hiding in plain sight.
              </p>

              <p className="mb-4">
                This religion name generator helps you create names that feel fitting for your setting, not generic filler. Use it for grand public faiths, strange regional beliefs, forbidden cults, saintly orders, or ancient pantheons carved into the foundations of ruined temples. If you’re looking for a fantasy religion generator or fantasy religion name generator that delivers names with tone and identity, you’re in the right place.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Perfect for churches, cults, orders, and pantheons</h2>

              <p className="mb-4">
                Not every belief system should sound the same. Some religions are proud and official. Others are whispered about in alleyways. Some are philosophical and calm, while others are violent, ecstatic, or terrifying. This generator is built to handle that range, including names for:
              </p>

              <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-300">
                <li><strong>Churches and state religions</strong></li>
                <li><strong>Secret cults and forbidden sects</strong></li>
                <li><strong>Holy orders and temple organizations</strong></li>
                <li><strong>Pantheons and multi-deity traditions</strong></li>
                <li><strong>Heresies, splinter faiths, and reform movements</strong></li>
              </ul>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Guide the results with simple controls</h2>

              <p className="mb-4">
                To keep names consistent with your world, you can steer the generator before you create results. Choose a Religion Type (church, cult, order, pantheon, etc.), set Deity Alignment to define the moral direction of the faith, add a Cultural Influence to shape the naming style, and pick a Tone—noble, ominous, mystical, austere, brutal, or serene. Each generation gives you 10 fresh ideas, so you can refine, compare, and regenerate until something fits.
              </p>

              <p className="mb-4">
                This is especially useful when you’re building multiple faiths. You can create one official “sunlit” religion for the capital, then generate darker underground cults with a different tone—without breaking the internal logic of your setting.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Unlock story hooks with the Lore button</h2>

              <p className="mb-4">
                Found a religion name you like? Click Lore to reveal a short lore snippet tied to that specific result. It might hint at the faith’s core doctrine, a sacred rule, an origin myth, a controversial practice, a holy symbol, or a secret the clergy doesn’t want revealed. In seconds, you can turn “a cool name” into something you can actually use in play or in a chapter.
              </p>

              <p className="mb-4">
                For DMs, Lore is perfect for quick world detail and quest seeds: forbidden rites, lost saints, rival temples, heretic hunters, and political control. For writers and designers, it helps you create belief systems that feel lived-in—like they existed before the story began.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Create a name, click Lore, and let your world’s faith take shape</h2>
            </div>

            {/* Related Generators Block */}
            <RelatedGenerators current="/religion" />

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">Religion Name Generator – FAQ</h2>

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
