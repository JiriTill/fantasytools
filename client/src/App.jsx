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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.path}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-800 transition p-2 flex flex-col items-center"
          >
            <img src={cat.image} alt={cat.name} className="h-32 object-contain mb-2" />
            <span className="text-lg font-semibold">{cat.name}</span>
          </a>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-400 mt-auto">
        Powered by <span className="text-white font-semibold">Neoantica</span> – a place for worldbuilding and quests creation.
      </footer>
    </div>
  )
}
