import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Item() {
  const [form, setForm] = useState({
    itemType: 'Weapon',
    rarity: 'Rare',
    material: 'Steel',
    magicEffect: 'Fire',
    tone: 'Epic'
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
        mode: 'item-lore',
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
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">Fantasy Item Name Generator and Creator</h2>
              <p className="text-xl text-gray-200 mb-4 font-semibold">The ultimate fantasy item name generator</p>

              <p className="mb-4">
                A legendary item deserves a name that carries weight. Whether it’s a blade that ended a dynasty, an amulet feared by sailors, or a tome sealed in a monastery for a reason, the name should feel like it belongs in your world’s history. This fantasy item name generator helps you create lore-friendly names for swords, axes, bows, staves, amulets, rings, tomes, potions, relics, artifacts, and cursed treasures—the kind of names your players remember and your readers circle on the page.
              </p>

              <p className="mb-4">
                Instead of generic “Flaming Sword +1” style titles, you’ll get names that sound like they were forged, discovered, stolen, worshipped, or buried. Use the results as final names, or as seeds you can twist into something even more personal.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Create magic weapon and artifact names that fit your setting</h2>

              <p className="mb-4">
                Items feel more believable when the name reflects what the object is made of, how rare it is, and what it does. With this generator, you can guide the results using simple inputs:
              </p>

              <ul className="list-disc list-inside mb-4 ml-4 space-y-2 text-gray-300">
                <li><strong>Item Type</strong> (weapon, armor, jewelry, book, potion, relic, tool, etc.)</li>
                <li><strong>Rarity</strong> (common, rare, legendary… or however your world defines it)</li>
                <li><strong>Material</strong> (iron, obsidian, bone, silverwood, glass, dragon scale…)</li>
                <li><strong>Magic Effect</strong> (fire, shadow, healing, time, storms, illusions, binding…)</li>
                <li><strong>Tone</strong> (noble, ominous, brutal, mystical, elegant, ancient, playful…)</li>
              </ul>

              <p className="mb-4">
                Each click returns 10 new options, so you can compare, shortlist, and regenerate until one truly fits. Need something holy for a paladin? Go noble and radiant. Need a weapon for a warlord? Push brutal and heavy. Naming a forbidden relic? Choose ominous and ancient. The results shift with your choices, helping you keep the style consistent across your world.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">The Lore button: turn an item name into a quest hook</h2>

              <p className="mb-4">
                Found a name you like? Click Lore to generate a short lore snippet tied to that specific item. You might get an origin story, a previous owner, a rumor, a curse, a hidden ability, or the reason the item was sealed away. In a single moment, the object stops being “loot” and becomes a story engine.
              </p>

              <p className="mb-4">
                For DMs, this is perfect for instant side quests: a stolen relic, a rival claimant, a missing key, a prophecy, or a temple that wants the artifact back. For writers and designers, Lore gives you quick flavor that makes items feel ancient and meaningful—like they existed before the story began.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Name the object, click Lore, and let the item earn its legend</h2>
            </div>

            {/* Related Generators Block */}
            <RelatedGenerators current="/item" />

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
