// client/src/pages/HowToCreateLoreRichNames.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';


export default function HowToCreateLoreRichNames() {
  // push Google Ads


  // --- SEO constants for this post ---
  const canonical = "https://www.fantasynamecreator.com/blog/lore-rich-names";
  const siteName = "Fantasy Name Creator";
  const title = "How to Create Lore-Rich Names for Your Characters";
  const description = "Go beyond simple labels and learn how to create lore-rich fantasy names that reflect your character's culture, history, and destiny. A guide for writers and worldbuilders.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-lore-rich-names-image.jpg";
  // Full ISO-8601 datetimes with timezone (+02:00 for CEST)
  const datePublished = "2025-08-21T09:00:00+02:00";
  const dateModified = "2025-08-21T12:00:00+02:00";
  const authorName = "Fantasy Name Creator Team"; // or "JTill"
  const authorUrl = "https://www.fantasynamecreator.com/about";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          How to Create Lore-Rich Names
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <Helmet>
          {/* Same SEO tags as before */}
          <html lang="en" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={description} />
          <meta name="keywords" content="lore-rich names, character names, fantasy names, worldbuilding, storytelling, writing tips, naming conventions, fantasy name generator" />
          <meta name="robots" content="index,follow" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content="How to Create Lore-Rich Names for Your Characters" />
          <meta property="og:description" content="A guide on how to create meaningful and immersive names for characters and places in your fantasy world." />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={ogImage} />
          <meta property="article:published_time" content={datePublished} />
          <meta property="article:modified_time" content={dateModified} />
          <meta property="article:author" content={authorName} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": title,
              "description": description,
              "image": [ogImage],
              "inLanguage": "en",
              "author": { "@type": "Person", "name": authorName, "url": authorUrl },
              "publisher": {
                "@type": "Organization",
                "name": siteName,
                "logo": { "@type": "ImageObject", "url": "https://www.fantasynamecreator.com/favicon.ico" }
              },
              "datePublished": datePublished,
              "dateModified": dateModified,
              "mainEntityOfPage": { "@type": "WebPage", "@id": canonical },
              "url": canonical
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fantasynamecreator.com/" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fantasynamecreator.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How to Create Lore-Rich Names", "item": canonical }
              ]
            })}
          </script>
        </Helmet>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">How to Create Lore-Rich Names for Your Characters</h1>
          <p className="italic text-sm text-gray-500 text-center mb-8">Published: August, 2025 | Read Time: 4 Minutes</p>

          <p>
            A truly great fantasy name doesn’t just sound good; it tells a story. Lore-rich names are those that carry the weight of a culture, the whisper of an ancestral past, or a hint of a character’s destiny. For writers and worldbuilders, crafting these names is a powerful way to add depth and immersion to your projects.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1. Reflect Culture and History</h3>
          <p>
            The best names are products of their environment. Consider the history, geography, and values of a culture. Does a society live in harsh mountains? Their names might sound hard and guttural. Are they an ancient, seafaring people? Their names might have flowing, vowel-heavy tones. Using a fantasy name generator can help you explore different linguistic styles to find what fits.
          </p>



          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2. Use Linguistic Building Blocks</h3>
          <p>
            Break down a name into its components: a base name, a surname, and maybe even a title. For example, a dwarf's name might be a combination of a personal name and a clan name (e.g., "Grom" of the "Stonehand Clan"). This approach creates a sense of lineage and social structure, making your characters feel more connected to their world.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3. Incorporate Meaning and Symbolism</h3>
          <p>
            A name can be a metaphor. Think of names that are derived from words in your fictional language. A warrior named "Kael" might mean "Strength," while a scholar's name, "Elara," might mean "Knowledge." Even if the meaning is not immediately obvious to the reader, knowing it as the creator adds a layer of intentionality and foreshadowing.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4. Play with Sound and Alliteration</h3>
          <p>
            The way a name sounds can evoke a certain feeling. Sharp, hard consonants (K, T, D) can suggest aggression or toughness, while soft, flowing vowels (A, E, O) can imply grace or wisdom. Alliteration, like "Seraphina Silverwing," can make a name memorable and give it a poetic quality.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5. Let the Story Dictate the Name</h3>
          <p>
            A name can be a powerful storytelling device. A character with a simple, common name who rises to greatness feels different from one with a grand, prophetic name. The tension between a name and a character's actions can be a source of narrative conflict. Don't be afraid to let a character "grow into" their name or, conversely, defy it completely.
          </p>



          <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
            <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/blog/why-names-matter" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/tips-for-worldbuilding" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → 5 Tips for Worldbuilding and Creating a Cohesive World
              </Link>
              <Link to="/blog/gender-specific-names" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → Fantasy Female vs. Male Names: Crafting Distinctive Identities
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              ← Back to Fantasy Name Creator
            </Link>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
