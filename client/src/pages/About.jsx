import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-8 flex flex-col items-center">
      
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">About Fantasy Tools</h1>

        <img
          src="/images/jtill.png"
          alt="Portrait of JTill, Worldbuilder and founder of Neoantica"
          className="float-right ml-6 mb-4 w-[400px] h-[400px] rounded-xl shadow-lg border border-indigo-700"
        />

        <p className="text-lg">
          <strong>Fantasy Tools</strong> is a free AI-powered name generator designed for worldbuilders, game masters, writers, and storytellers. Whether you're building a world, naming a faction, or crafting a religion, our generator uses carefully crafted prompts to deliver rich, thematic results tailored for fantasy settings.
        </p>

        <p className="text-lg">
          This project was born out of love for board games, worldbuilding, and TTRPGs. Behind Fantasy Tools is <strong>JTill</strong>, founder of{' '}
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
        ← Back to Fantasy Tools
      </Link>

      <footer className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6 px-4 space-y-2 w-full">
        <div className="space-x-4">
          <a href="/about" className="hover:underline text-white">
            About Fantasy Tools
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:underline">
            Contact & Feedback
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Powered by{' '}
          <a
            href="https://neoantica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            Neoantica
          </a>{' '}
          – a place for worldbuilding and quests creation.
        </p>
      </footer>
    </div>
  );
}
