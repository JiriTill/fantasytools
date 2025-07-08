import React from 'react'
import './styles.css'

const categories = [
  { name: 'World', path: '/world', image: '/images/world.png' },
  { name: 'Character', path: '/character', image: '/images/character.png' },
  { name: 'Faction', path: '/faction', image: '/images/faction.png' },
  { name: 'Religion', path: '/religion', image: '/images/religion.png' },
  { name: 'Item', path: '/item', image: '/images/item.png' },
  { name: 'Dynamic', path: '/dynamic', image: '/images/dynamic.png' }
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Fantasy Name Generator</h1>
      <p className="text-center text-lg md:text-xl mb-8 max-w-xl">
        Create unique fantasy names for your worlds, characters, factions, religions, or legendary items.
        Pick a category below to begin your journey.
      </p>
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
      <img
        src={cat.image}
        alt={cat.name}
        className="h-32 w-full object-cover rounded-lg border-2 border-transparent group-hover:border-white transition"
      />
      <span className="mt-2 text-lg font-medium text-white group-hover:underline">
        {cat.name}
      </span>
      </a>
      ))}
    </div>

      <footer className="text-center text-sm text-gray-400 mt-auto">
        Powered by <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Neoantica</a> – a place for worldbuilding and quests creation.
      </footer>
    </div>
  )
}
