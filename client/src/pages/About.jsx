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
          This project was born out of love for board games, worldbuilding, and TTRPGs. My name is <strong>JTill</strong>, and I've founded {' '}
          <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Neoantica
          </a>{' '}
          — a small Czech creative studio focused on storytelling, myth, and fantasy content.
        </p>

        <p className="text-lg">
          I’ve used many name generators over the years, and while some were helpful, most felt generic or limited. That’s why I built Fantasy Name Creator: to provide a fresh, customizable experience using modern AI that adapts to different fantasy themes and creative needs.
        </p>

        <p className="text-lg">
          Whether you're writing a Slavic-inspired dark fantasy saga, designing a faction for your D&D world, or inventing relics of ancient religions, this tool is here to support your creativity and imagination. This is just the beginning. New features, categories, and inspiration tools are already in the works. If you have ideas or feedback, feel free to share them—Fantasy Name Creator is a tool for creators, shaped by creators.
        </p>

        <p className="text-lg">
          Want us to build you a custom side quest, faction, or a whole world? We can help you with that. Just visit{' '}
          <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Neoantica.com
          </a>{' '}
          and explore how we can bring your fantasy vision to life.
        </p>
      </div>

        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Back to Fantasy Name Creator
        </Link>
        </main>
      <Footer />
    </div>
  );
}
