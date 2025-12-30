import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';

export default function Item() {
  const [form, setForm] = useState({
    itemType: 'Weapon',
    rarity: 'Rare',
    material: 'Steel',
    magicEffect: 'Fire',
    tone: 'Epic'
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false); const [timer, setTimer] = useState(0);
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
    setNames([]);

    try {
      const prompt = `
You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

Generate 10 unique and original fantasy item names for a ${form.itemType} made of ${form.material}, with a ${form.rarity} rarity and a ${form.magicEffect} magic effect, evoking a ${form.tone} tone.

Rules:
- Names must be immersive, evocative, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, reflecting the item’s type, material, rarity, magic effect, and tone.
- Use phonetic and stylistic elements that align with the ${form.material}, ${form.magicEffect}, and ${form.tone}, ensuring the name feels lore-rich and purposeful.
- Avoid overused clichés like "Blood," "Shadow," or "Star" unless directly relevant to the ${form.magicEffect} or ${form.tone}.
- Names should be concise, typically one to three words (e.g., "Ashrend Blade," "Oath of Cinders," "Blightglass Amulet").
- Ensure names are original and do not mimic or copy names from existing fantasy franchises (e.g., no variations of "Excalibur" or "Frostmourne").
- If ${form.material}, ${form.magicEffect} or ${form.tone} is empty or vague, use a neutral but evocative fantasy style inspired by the ${form.itemType} and ${form.rarity}.
- Return the names as a simple numbered list (1-10), with no additional text or commentary.
`;
      const response = await axios.post('/api/generate', { prompt });
      setNames(response.data.names);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ---- SEO constants ----
  const canonical = "https://www.fantasynamecreator.com/item";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy Item Name Generator & Creator | Fantasy Name Creator";
  const description = "Generate legendary names for fantasy weapons, relics, potions and magical artifacts. Perfect for D&D, RPGs and worldbuilding.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace if you have a brand OG image

  // ---- FAQ (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Item Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use these names commercially?", a: "Yes. You can use the generated names in books, games and projects. Attribution is appreciated but not required." },
    { q: "What item types can I generate?", a: "You can generate names for Weapons, Armor, Potions, Relics, Tomes, Jewelry, Tools and more." },
    { q: "How do I steer the style of names?", a: "Set Item Type and use Material, Magic Effect, Rarity and Tone to guide phonetics and theme." },
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
        <meta name="keywords" content="fantasy item name generator, RPG item names, magic weapon name, artifact generator, Dungeons & Dragons item names, legendary weapon names" />
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
              { "@type": "ListItem", position: 2, name: "Item Generator", item: canonical }
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
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
            Fantasy Item Name Creator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">
          {/* Single Affiliate Box before form */}
          <SingleAffiliateBox />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10 text-gray-300">
            <p className="text-lg">
              Every legendary hero needs a legendary item. Our <strong>Fantasy Item Name Generator</strong> gives evocative names
              for weapons, relics, potions and artifacts—tuned by type, rarity, material, magic effect and tone.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Item Type</span>
                <select name="itemType" value={form.itemType} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Weapon', 'Armor', 'Potion', 'Relic', 'Tome', 'Jewelry', 'Tool', 'Other'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Rarity</span>
                <select name="rarity" value={form.rarity} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'].map(r => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Material</span>
              <input name="material" value={form.material} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Magic Effect</span>
              <input name="magicEffect" value={form.magicEffect} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition" />
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone</span>
              <select name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                {['Dark', 'Heroic', 'Epic', 'Mystical', 'Whimsical', 'Ancient'].map(t => (
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
                  Forging Artifact... {timer.toFixed(1)}s
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Item Names</h2>
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

          {/* SEO content + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">The Ultimate Fantasy Item Name Generator</h2>
              <p>
                Name swords, amulets, tomes, potions and relics with lore-friendly titles. Combine rarity, materials and magic effects to
                produce names that feel tailored to your setting.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Finding the Perfect Magic Weapon or Artifact Name</h2>
              <p>
                Choose <strong>Item Type</strong>, set <strong>Rarity</strong>, describe <strong>Material</strong> and <strong>Magic Effect</strong>,
                then pick a <strong>Tone</strong>. Each click returns 10 new options—regenerate until one sings.
              </p>

              <p className="mt-6">
                Explore more generators:
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link className="text-fantasy-gold hover:underline" to="/character">Character</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/world">World</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/faction">Faction</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/religion">Religion</Link> •
                  <Link className="text-fantasy-gold hover:underline" to="/dynamic">Dynamic</Link>
                </div>
              </p>
            </div>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">Item Name Generator – FAQ</h2>

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
