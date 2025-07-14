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
  <title>Fantasy Name Creator for Characters, Worlds, Factions & More | FantasyTools</title>
  <meta
    name="description"
    content="Create amazing fantasy names with our free AI-powered creator. Create names for characters, worlds, factions, religions, items, and more with detailed options."
  />
  <meta
    name="keywords"
    content="fantasy name creator, AI name creator, character name generator, world name maker, DnD name tool, faction name creator, RPG tools, worldbuilding"
  />
  <meta property="og:title" content="Fantasy Name Creator | Create Epic Names for Your World" />
  <meta
    property="og:description"
    content="Explore our free fantasy name creator for characters, worlds, factions, and more. Perfect for RPGs, books, and worldbuilding."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fantasynamecreator.com" />
  <meta property="og:image" content="https://fantasynamecreator.com/images/og-home.jpg" />
  <meta name="robots" content="index, follow" />
</Helmet>
    
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Fantasy Name Creator</h1>
      <p className="text-center text-lg md:text-xl mb-8 max-w-xl">
        Create unique fantasy names for your worlds, characters, factions, religions, or legendary items.
      </p>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-8">
        Pick a category, choose from tailored options, and let our AI create 10 unique, lore-friendly names instantly. Designed for writers, worldbuilders, game masters, and fantasy lovers.
      </p>
      
      <div className="mt-12 w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6">
        <p className="text-sm text-gray-400">[Google Ads or affiliate banner here]</p>
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
        <p className="text-sm text-gray-400">[Google Ads or affiliate banner here]</p>
      </div>

      <div className="mt-12 w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6">
        <NameGallery />
      </div>
      <Footer />
    </div>
</>
  )
}
