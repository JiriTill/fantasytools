import React from 'react'
import { Helmet } from 'react-helmet';
import NameGallery from '../components/NameGallery';
import Footer from '../components/Footer';

const categories = [
  { name: 'Worlds and places', path: '/world', image: '/images/world.png' },
  { name: 'Character', path: '/character', image: '/images/character.png' },
  { name: 'Faction', path: '/faction', image: '/images/faction.png' },
  { name: 'Religion', path: '/religion', image: '/images/religion.png' },
  { name: 'Item', path: '/item', image: '/images/item.png' },
  { name: 'Dynamic', path: '/dynamic', image: '/images/dynamic.png' }
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Fantasy Name Creator – Generate Names for Characters, Worlds, Factions & More</title>
        <meta
          name="description"
          content="Generate unique fantasy names with our free AI-powered name creator. Perfect for characters, worlds, factions, religions, items, and more. Ideal for writers, game designers, and worldbuilders."
        />
        <meta
          name="keywords"
          content="fantasy name creator, AI fantasy name generator, character names, world name generator, RPG tools, DnD name creator, faction names, worldbuilding tools, Slavic fantasy names, Norse names"
        />
        <meta property="og:title" content="Fantasy Name Creator – Free AI Name Generator for Fantasy Worlds" />
        <meta
          property="og:description"
          content="Use our AI-powered fantasy name creator to craft names for characters, worlds, factions, and more. Designed for fantasy writers, RPG players, and worldbuilders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-home.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fantasy Name Creator",
              "url": "https://www.fantasynamecreator.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.fantasynamecreator.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
            `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Fantasy Name Creator</h1>

        <p className="text-center text-lg md:text-xl mb-6 max-w-xl">
          Create unique fantasy names for your worlds, characters, factions, religions, and legendary items.
        </p>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Choose a category, fine-tune your settings, and let our AI generate 10 unique, lore-rich names. Built for writers, worldbuilders, game masters, and fantasy enthusiasts.
        </p>

        {/* Ads or Affiliate Banner */}
        <div className="w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6 mb-10">
          {/* Replace with actual ad component or embed */}
          <div className="text-sm text-gray-400 italic">
            [Google Ads or affiliate banner]
          </div>
        </div>

        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          What do you want to create?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.path}
              className="group flex flex-col items-center text-center transition"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg border-2 border-transparent group-hover:border-white transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-lg font-medium text-white group-hover:underline">
                {cat.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6">
          <NameGallery />
        </div>

        <Footer />
      </div>
    </>
  );
}
