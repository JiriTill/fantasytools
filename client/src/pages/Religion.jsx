import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';

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

      <div className="min-h-screen flex flex-col items-center">
        <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
          <Link to="/" className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy Religion Name Creator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">

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
                  Communing with Gods...
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Religion Names</h2>
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
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Crafting Divine and Mysterious Religion Names</h2>
              <p>
                A well-named religion can hint at origins, tenets and the nature of its deity. Use the fields above to steer phonetics and tone—perfect for churches, secret cults, holy orders and ancient pantheons.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">How to Use the Cult & Faith Name Generator</h2>
              <p>
                Select a <strong>Religion Type</strong>, set <strong>Deity Alignment</strong>, provide a <strong>Cultural Influence</strong>, and choose a <strong>Tone</strong>. Each generation produces 10 fresh ideas you can refine or regenerate.
              </p>

              <p className="mt-6">
                Explore more generators:
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link className="text-fantasy-gold hover:underline" to="/character">Character</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/world">World</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/faction">Faction</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/item">Item</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/dynamic">Dynamic</Link>
                </div>
              </p>
            </div>

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

          {/* Amazon Affiliate Recommendations */}
          {names.length > 0 && <AmazonAffiliate />}
        </main>
        <Footer />
      </div>
    </>
  );
}
