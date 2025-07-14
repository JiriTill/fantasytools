import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">
      
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">About Fantasy Name Creator</h1>

        <img
          src="/images/jtill.png"
          alt="Portrait of JTill, Worldbuilder and founder of Neoantica"
          className="float-right ml-6 mb-4 w-[400px] h-[400px] rounded-xl shadow-lg border border-indigo-700"
        />

        <p className="text-lg">
          <strong>Fantasy Name Creator</strong> is a free AI-powered name generator designed for worldbuilders, game masters, writers, and storytellers. Whether you're building a world, naming a faction, or crafting a religion, our creators uses carefully crafted prompts to deliver rich, thematic results tailored for fantasy settings.
        </p>

        <p className="text-lg">
          This project was born out of love for board games, worldbuilding, and TTRPGs. Behind Fantasy Name Creator is <strong>JTill</strong>, founder of{' '}
          <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Neoantica
          </a>{' '}
          — a Czech creative studio focused on storytelling, myth, and immersive fantasy content.
        </p>

        <p className="text-lg">
          Rooted in mythology, folklore, and history, Neoantica creates thematic tabletop games and fantasy worlds for RPGs, novels, and creative projects. Every mechanic, quest, and narrative is designed to pull players deep into believable, emotionally resonant settings.
        </p>

        <p className="text-lg">
          We also provide professional <strong>English-to-Czech translation</strong> services, especially for games and lore-heavy materials. Whether you’re a developer, publisher, or storyteller, we help your creations resonate across languages.
        </p>

        <p className="text-lg">
          Want us to build you a custom side quest, faction, or a whole world? We do that too. Just visit{' '}
          <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Neoantica.com
          </a>{' '}
          and explore how we can bring your fantasy vision to life.
        </p>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ← Back to Fantasy Name Creator
      </Link>
        </main>
      <Footer />
    </div>
  );
}
