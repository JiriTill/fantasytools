import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

export default function FiveTipsForWorldbuilding() {
  // Ads push
  useEffect(() => {
    const ads = document.getElementsByClassName("adsbygoogle");
    for (let i = 0; i < ads.length; i++) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { console.error("Adsbygoogle error:", e); }
    }
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  // --- SEO constants for this post ---
  const canonical = "https://www.fantasynamecreator.com/blog/tips-for-worldbuilding";
  const siteName = "Fantasy Name Creator";
  const title = "5 Essential Tips for Worldbuilding: Create a Cohesive Fantasy World";
  const description = "Master the art of fantasy worldbuilding with our top 5 tips. Learn how to create a rich, cohesive world with consistent lore, magic systems, and naming conventions. Perfect for writers, DMs, and storytellers.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-worldbuilding-image.jpg"; // swap if you have a better image
  // Full ISO-8601 datetimes with timezone (Europe/Prague is +02:00 in August)
  const datePublished = "2025-08-21T09:00:00+02:00";
  const dateModified = "2025-08-21T12:00:00+02:00";
  const authorName = "Fantasy Name Creator Team"; // or "JTill" if you prefer

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          5 Tips for Worldbuilding
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <Helmet>
          {/* Same SEO tags as before */}
          <html lang="en" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={description} />
          <meta name="keywords" content="worldbuilding tips, fantasy world, lore creation, writing guide, naming conventions, cohesive world, storytelling, RPG worldbuilding, fantasy name generator" />
          <meta name="robots" content="index,follow" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
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
              "author": { "@type": "Person", "name": authorName },
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
                { "@type": "ListItem", "position": 3, "name": "5 Essential Tips for Worldbuilding", "item": canonical }
              ]
            })}
          </script>
        </Helmet>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">5 Tips for Worldbuilding: How to Create a Cohesive Fantasy World</h1>
          <p className="italic text-sm text-gray-500 text-center mb-8">Published: August, 2025 | Read Time: 3 Minutes</p>

          <p>
            Creating a believable fantasy world is an art form in itself. It’s a delicate balance of epic history, magical systems, and cultural nuances that make the world feel lived-in and real. Here are five essential tips to help you build a world that will captivate your audience and stand the test of time.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1. Establish Consistent Naming Conventions</h3>
          <p>
            One of the quickest ways to break a reader's immersion is with inconsistent names. A naming convention should be a thread that runs through your entire world, linking people, places, and cultures. Decide on a linguistic style for each race or region and stick to it. This is where a great fantasy name generator can be invaluable, providing a foundation for your naming schemes.
          </p>



          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2. Create a Clear Magic System</h3>
          <p>
            Whether magic is a rare, mystical force or an everyday occurrence, its rules must be clear to both you and your audience. Hard magic systems have defined rules and limitations (e.g., Brandon Sanderson's Allomancy), while soft magic systems are more mysterious (e.g., Gandalf's powers in Middle-earth). Both are valid, but consistency is key to making magic feel like a natural part of your world, not just a convenient plot device.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3. Develop a Rich History and Lore</h3>
          <p>
            A great world feels ancient, with a history that stretches back beyond the current story. Think about major historical events, forgotten kingdoms, and epic battles that have shaped the current world. You don't need to write a full encyclopedia, but having a general understanding of the past will add depth to your locations, characters, and conflicts.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4. Focus on the Small Details</h3>
          <p>
            The big picture is important, but small details are what truly make a world believable. Think about the daily lives of your inhabitants. What do they eat? What are their common superstitions? What is their most popular form of entertainment? These small, tangible elements connect your audience to your world and make it feel authentic.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5. Let Your World Evolve with the Story</h3>
          <p>
            Your world is not a static backdrop; it's a living, breathing entity. As your story unfolds, let the events have real consequences on the world itself. A major battle might leave a lasting scar on the landscape, a new king might change the laws, or the discovery of a new magical artifact might alter the balance of power. This dynamic nature keeps the world engaging and makes your story's impact feel real.
          </p>

          <div className="my-8">
            <GoogleAd slot="4105556455" />
          </div>

          <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
            <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/blog/why-names-matter" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/lore-rich-names" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                → How to Create Lore-Rich Names for Your Characters
              </Link>
              <Link to="/blog/gender-specific-names" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
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

        <MultiplexAd />
      </main>
      <Footer />
    </div>
  );
}
