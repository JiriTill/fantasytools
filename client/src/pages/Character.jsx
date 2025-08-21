import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareGeneratedName from '../components/ShareGeneratedName';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

export default function Character() {
  const [form, setForm] = useState({
    gender: 'Male',
    race: 'Human',
    profession: 'Combat oriented',
    socialClass: 'Commoner',
    tone: 'Harsh'
  });

  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
  const title = "Fantasy Character Name Generator & Creator | Fantasy Name Creator";
  const description = "Create unique fantasy character names for RPGs, novels and D&D. Tune race, gender, profession, class and tone to generate believable names.";
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
        <meta name="keywords" content="fantasy character name generator, D&D character name creator, fantasy names, character names, fantasy male name generator, fantasy female name generator" />
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

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
        <main className="p-6 flex flex-col items-center pb-20">
          <h1 className="text-3xl font-bold mb-6">Fantasy Character Name Generator</h1>
          <GoogleAd slot="4105556455" />

          {/* Intro */}
          <div className="w-full max-w-2xl text-center mb-10">
            <p>
              Welcome, adventurer! Finding the perfect name is the first step on an epic journey. Our
              <strong> Fantasy Character Name Generator</strong> creates authentic names across a wide range of fantasy settings.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-indigo-800 p-6 rounded-lg shadow-md">
            <label className="block">
              Gender:
              <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                <option>Male</option>
                <option>Female</option>
                <option>Not specified</option>
              </select>
            </label>

            <label className="block">
              Race:
              <select name="race" value={form.race} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Human','Elf','Orc','Dwarf','Halfling','Hobbit','Goblin','Gnome','Dragonborn','Half-Dragon','Aasimar','Tiefling','Undead','Beastfolk','Giant','Not specified'].map(r => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Profession:
              <select name="profession" value={form.profession} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Combat oriented','Magical','Craft and Trade','Stealth and Rogue','Nature-based','Religious','Noble','Seafaring and Exotic','Dark or Forbidden','Not specified'].map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Social Class:
              <select name="socialClass" value={form.socialClass} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Nobility','Military','Middle class (Tradefolk)','Commoner','Outcast or criminal','Mythical','Not specified'].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Tone:
              <select name="tone" value={form.tone} onChange={handleChange} className="mt-1 w-full p-2 bg-gray-800 text-white rounded">
                {['Harsh','Elegant','Short','Mysterious','Not specified'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded font-semibold flex items-center justify-center transition ${
                loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Names'
              )}
            </button>
          </form>

          {/* RESULTS */}
          {names.length > 0 && (
            <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Name Suggestions:</h2>
              <ul className="list-disc list-inside space-y-1">
                {names.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          <KoFiButton id="T6T31JW6G3" />
          <ShareGeneratedName form={form} />

          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            ← Back to Fantasy Name Creator
          </Link>

          <hr className="my-10 w-full" />

          {/* SEO content + internal links */}
          <div className="w-full max-w-2xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">The Ultimate Fantasy Character Name Generator and Creator</h2>
            <p>
              Our generator provides instant, unique names that fit your character’s race, class and backstory. A great name hints at heritage,
              personality or destiny—use this tool to jumpstart your creativity.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Discover the Perfect Fantasy Female and Male Names</h2>
            <p>
              Generate a wide variety of names for both genders—or neutral options. Whether you need a fierce warrior queen or a stoic knight,
              our AI-driven system creates original yet familiar names that resonate with players and readers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Forge Your Hero’s Identity</h2>
            <p>
              Choose race, profession, class and tone to shape the sound and feel. Explore related tools:
              {" "}
              <Link className="underline text-blue-300" to="/world">World</Link>,{" "}
              <Link className="underline text-blue-300" to="/faction">Faction</Link>,{" "}
              <Link className="underline text-blue-300" to="/religion">Religion</Link>,{" "}
              <Link className="underline text-blue-300" to="/item">Item</Link>,{" "}
              <Link className="underline text-blue-300" to="/dynamic">Dynamic</Link>.
            </p>

            {/* VISIBLE FAQ (must match JSON-LD above) */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Character Name Generator – FAQ</h2>

              <h3 className="text-xl font-semibold mt-4">{faq[0].q}</h3>
              <p>{faq[0].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[1].q}</h3>
              <p>{faq[1].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[2].q}</h3>
              <p>{faq[2].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[3].q}</h3>
              <p>{faq[3].a}</p>

              <h3 className="text-xl font-semibold mt-4">{faq[4].q}</h3>
              <p>{faq[4].a}</p>
            </section>
          </div>

          <MultiplexAd />
        </main>
        <Footer />
      </div>
    </>
  );
}
