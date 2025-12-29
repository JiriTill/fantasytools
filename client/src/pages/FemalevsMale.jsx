// client/src/pages/FemalevsMale.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

export default function GenderSpecificNames() {
  // push Google Ads
  useEffect(() => {
    const ads = document.getElementsByClassName("adsbygoogle");
    for (let i = 0; i < ads.length; i++) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { console.error("Adsbygoogle error:", e); }
    }
  }, []);

  // --- SEO constants for this post ---
  const canonical = "https://www.fantasynamecreator.com/blog/gender-specific-names";
  const siteName = "Fantasy Name Creator";
  const title = "Fantasy Female vs Male Names: Crafting Distinctive Identities";
  const description = "Explore the art of naming male and female characters in fantasy. Learn how to use phonetic differences, cultural roles, and storytelling to create unique, gender-specific names.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-gender-names-image.jpg";
  // Full ISO-8601 datetimes with timezone (Europe/Prague ~ +02:00 in Aug)
  const datePublished = "2025-08-21T09:00:00+02:00";
  const dateModified = "2025-08-21T12:00:00+02:00";
  const authorName = "Fantasy Name Creator Team"; // or "JTill"
  const authorUrl = "https://www.fantasynamecreator.com/about";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          Fantasy Female vs Male Names
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <Helmet>
          {/* Same SEO tags as before */}
          <html lang="en" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={description} />
          <meta name="keywords" content="fantasy female names, fantasy male names, character names, gender-specific names, naming conventions, worldbuilding, storytelling tips" />
          <meta name="robots" content="index,follow" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content="A guide on how to create compelling male and female names for your fantasy characters, reflecting their culture and personality." />
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
                { "@type": "ListItem", "position": 3, "name": "Fantasy Female vs Male Names", "item": canonical }
              ]
            })}
          </script>
        </Helmet>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">Fantasy Female vs Male Names: Crafting Distinctive Identities</h1>
          <p className="italic text-sm text-gray-500 text-center mb-8">Published: August, 2025 | Read Time: 4 Minutes</p>

          <p>
            In fantasy worldbuilding, a name does more than just identify a character; it defines them. When creating a fantasy world, one of the most effective ways to build a sense of a distinct culture is by creating noticeable, yet believable, differences between male and female names. This not only makes your characters more memorable but also reinforces the underlying lore of your world.
          </p>



          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">The Power of Phonetics and Rhythm</h3>
          <p>
            The sound of a name is its first impression. Typically, fantasy female names often lean towards softer, more melodic sounds with flowing vowels and gentle consonants (e.g., Elara, Seraphina, Lyra). They might have more syllables and an elegant rhythm. In contrast, fantasy male names often use harder, more guttural consonants and a staccato rhythm (e.g., Kael, Grom, Drax). They tend to be shorter, more direct, and impactful.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">Cultural Context and Naming Conventions</h3>
          <p>
            Naming differences are deeply rooted in culture. In a patriarchal society, male names might be passed down through generations with great importance, while female names are more descriptive or tied to nature. Conversely, a matriarchal society might have the opposite convention. Consider if surnames exist and how they are used. Are they tied to a clan, a father, a mother, or a trade? The choice reveals much about your world’s social structure.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">Symbolism and Meaning</h3>
          <p>
            Beyond sound, the meaning behind a name can create a powerful distinction. Female names might be derived from elements of nature, grace, or divine inspiration (e.g., a name meaning "starflower" or "whisperwind"). Male names might draw from themes of strength, combat, or lineage (e.g., a name meaning "iron-fist" or "dragon-slayer"). These hidden meanings add a layer of rich lore that your most dedicated fans will love to discover.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">A Note on Subverting Conventions</h3>
          <p>
            While these conventions are a great starting point, a truly memorable name can come from subverting them. A female warrior with a harsh, traditionally male name can hint at her unique backstory. A male scholar with a soft, melodic name can suggest a peaceful disposition or a different cultural background. These choices can be a great tool for character development and plot.
          </p>

          <div className="my-8">
            <GoogleAd slot="4105556455" />
          </div>

          <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
            <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/blog/why-names-matter" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/tips-for-worldbuilding" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → 5 Tips for Worldbuilding and Creating a Cohesive World
              </Link>
              <Link to="/blog/lore-rich-names" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → How to Create Lore-Rich Names for Your Characters
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

        <MultiplexAd />
      </main>
      <Footer />
    </div>
  );
}
