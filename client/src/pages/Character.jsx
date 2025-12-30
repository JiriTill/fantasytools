import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Character() {
  const [form, setForm] = useState({
    gender: 'Male',
    race: 'Human',
    profession: 'Combat oriented',
    socialClass: 'Commoner',
    tone: 'Harsh',
    culturalInfluence: ''
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lore, setLore] = useState({});
  const [loadingLore, setLoadingLore] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('fantasyFavorites');
    return saved ? JSON.parse(saved) : [];
  });
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

  const toggleFavorite = (name) => {
    let newFavs;
    if (favorites.includes(name)) {
      newFavs = favorites.filter(n => n !== name);
    } else {
      newFavs = [...favorites, name];
    }
    setFavorites(newFavs);
    localStorage.setItem('fantasyFavorites', JSON.stringify(newFavs));
  };

  const generateLore = async (name) => {
    if (lore[name]) return; // Already generated
    setLoadingLore(name);
    try {
      const response = await axios.post('/api/generate', {
        mode: 'lore',
        params: { ...form, name }
      });
      setLore(prev => ({ ...prev, [name]: response.data.lore }));
    } catch (err) {
      console.error("Lore generation failed", err);
    } finally {
      setLoadingLore(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNames([]);

    try {
      const prompt = `
You are an expert in fantasy worldbuilding and naming, crafting evocative and immersive names for RPGs, Dungeons & Dragons, and fantasy novels.

Generate 10 unique and original fantasy character names for a character with the following attributes:
- Gender: ${form.gender}
- Race: ${form.race}
- Social Class: ${form.socialClass}
- Profession: ${form.profession}
- Naming Style or Tone: ${form.tone}
${form.culturalInfluence ? `- Cultural Influence: ${form.culturalInfluence}` : ''}

Rules:
- Names must be immersive, believable, and suitable for a fantasy RPG, Dungeons & Dragons, or novel, reflecting the character’s race, culture, background, status, and role.
- Ensure phonetic and stylistic consistency with the ${form.race} and ${form.tone}.
- Use linguistic inspiration from real-world language roots when appropriate, ensuring cultural sensitivity.
- Names should be concise, typically one to two words (e.g., "Eldrin Valthorne," "Krag Ironfist"), with a maximum of three words for complex cultural or high-status names.
- Avoid generic or overused terms unless culturally or tonally relevant.
- Ensure names are original and do not mimic or copy names from existing fantasy franchises.
- If ${form.race} or ${form.tone} is vague or unspecified, use a neutral but evocative fantasy style.
- Return the names as a simple numbered list (1–10), with no additional commentary.
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
  const canonical = "https://www.fantasynamecreator.com/character";
  const siteName = "Fantasy Name Creator";
  const title = "Character Name Generator | Fantasy Names for D&D, RPGs & Stories";
  const description = "Generate unique fantasy character names by race, profession & personality. Perfect for D&D, RPGs, novels & worldbuilding. Free character name generator.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-default.png"; // replace with your brand OG if available

  // ---- FAQ (must match JSON-LD exactly) ----
  const faq = [
    { q: "Is the Character Name Generator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use the generated names commercially?", a: "Yes. You can use them in books, games and projects. Attribution is appreciated but not required." },
    { q: "What options can I customize?", a: "Gender, race, profession, social class and tone. Adjusting these steers the style and phonetics of names." },
    { q: "Do you support male and female names?", a: "Yes. Pick a gender or choose Not specified for neutral options." },
    { q: "How many names are generated per click?", a: "Each generation returns 10 unique names. Click again for new ideas." }
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
        <meta name="keywords" content="fantasy name generator, character name generator, fantasy character names, name generator fantasy, random fantasy name generator, D&D character names, fantasy names, RPG name generator" />
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
              { "@type": "ListItem", position: 2, name: "Character Generator", item: canonical }
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
            Fantasy Character Name Generator
          </h1>
        </header>

        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center flex-grow">


          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-8 text-gray-300">
            <p className="text-lg">
              Welcome, adventurer! Finding the perfect name is the first step on an epic journey. Our
              <strong> Fantasy Character Name Generator</strong> creates authentic names across a wide range of fantasy settings.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Gender</span>
                <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Not specified</option>
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Race</span>
                <select name="race" value={form.race} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Human', 'Elf', 'Orc', 'Dwarf', 'Halfling', 'Hobbit', 'Goblin', 'Gnome', 'Dragonborn', 'Half-Dragon', 'Aasimar', 'Tiefling', 'Undead', 'Beastfolk', 'Giant', 'Not specified'].map(r => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Profession</span>
                <select name="profession" value={form.profession} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Combat oriented', 'Magical', 'Craft and Trade', 'Stealth and Rogue', 'Nature-based', 'Religious', 'Noble', 'Seafaring and Exotic', 'Dark or Forbidden', 'Not specified'].map(p => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-fantasy-gold font-semibold mb-2 block">Social Class</span>
                <select name="socialClass" value={form.socialClass} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                  {['Nobility', 'Military', 'Middle class (Tradefolk)', 'Commoner', 'Outcast or criminal', 'Mythical', 'Not specified'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">Tone</span>
              <select name="tone" value={form.tone} onChange={handleChange} className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 focus:border-fantasy-gold focus:outline-none transition">
                {['Harsh', 'Elegant', 'Short', 'Mysterious', 'Not specified'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-fantasy-gold font-semibold mb-2 block">
                Cultural Influence <span className="text-gray-500 text-sm font-normal">(Optional)</span>
              </span>
              <input
                type="text"
                name="culturalInfluence"
                value={form.culturalInfluence}
                onChange={handleChange}
                placeholder="e.g., Norse, Celtic, Japanese, Arabian, Slavic..."
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-gray-200 placeholder-gray-600 focus:border-fantasy-gold focus:outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-1">Specify a cultural style to influence name generation</p>
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
                  Consulting the Oracle... {timer.toFixed(1)}s
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
                <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 text-center">Your Names</h2>
                <ul className="space-y-4">
                  {names.map((name, index) => (
                    <li key={index} className="flex flex-col gap-2 border-b border-white/5 pb-4 last:border-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-lg hover:text-fantasy-gold-light transition cursor-default">
                          <span className="text-fantasy-gold/50 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                          <span className="font-semibold text-gray-100">{name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleFavorite(name)}
                            className={`p-2 rounded-full hover:bg-white/10 transition ${favorites.includes(name) ? 'text-red-500' : 'text-gray-500 hover:text-red-400'}`}
                            title="Save to Favorites"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button
                            onClick={() => generateLore(name)}
                            className="text-xs bg-fantasy-gold/10 text-fantasy-gold hover:bg-fantasy-gold hover:text-black px-3 py-1 rounded-full border border-fantasy-gold/30 transition-all flex items-center gap-1"
                          >
                            <span>✨ Lore</span>
                          </button>
                        </div>
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

          {/* Amazon Affiliate Recommendations - Placed right after results */}
          {names.length > 0 && <AmazonAffiliate />}

          <div className="flex flex-col items-center gap-6 mt-12 w-full">
            <ShareGeneratedName form={form} />
          </div>

          <hr className="my-16 w-full max-w-2xl border-white/10" />

          {/* SEO content + internal links */}
          <div className="w-full max-w-3xl text-left space-y-8 text-gray-400">

            <div className="prose prose-invert max-w-none">
              <h2 className="text-fantasy-gold text-2xl font-bold mb-4">The Ultimate Fantasy Character Name Generator and Creator</h2>
              <p>
                Our generator provides instant, unique names that fit your character’s race, class and backstory. A great name hints at heritage,
                personality or destiny—use this tool to jumpstart your creativity.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Discover the Perfect Fantasy Female and Male Names</h2>
              <p>
                Generate a wide variety of names for both genders—or neutral options. Whether you need a fierce warrior queen or a stoic knight,
                our AI-driven system creates original yet familiar names that resonate with players and readers.
              </p>

              <h2 className="text-fantasy-gold text-2xl font-bold mt-8 mb-4">Forge Your Hero’s Identity</h2>
              <p>
                Choose race, profession, class and tone to shape the sound and feel. Explore related tools:
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link className="text-fantasy-gold hover:underline" to="/world">World</Link> •
                <Link className="text-fantasy-gold hover:underline" to="/faction">Faction</Link> •
                <Link className="text-fantasy-gold hover:underline" to="/religion">Religion</Link> •
                <Link className="text-fantasy-gold hover:underline" to="/item">Item</Link> •
                <Link className="text-fantasy-gold hover:underline" to="/dynamic">Dynamic</Link>
              </div>
            </div>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6 border-b border-white/10 pb-2">Character Name Generator – FAQ</h2>

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

        {/* Related Generators - Internal Linking */}
        <RelatedGenerators current="/character" />

        <Footer />
      </div>
    </>
  );
}
