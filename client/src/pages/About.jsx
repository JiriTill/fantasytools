import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-white">About Fantasy Tools</h1>

        <p className="text-lg">
          <strong>Fantasy Tools</strong> is a free AI-powered name generator designed for worldbuilders, game masters, writers, and storytellers. Whether you're building a world, naming a faction, or crafting a religion, our generator uses carefully crafted prompts to deliver rich, thematic results tailored for fantasy settings.
        </p>

        <p className="text-lg">
          This project was born out of love for board games, worldbuilding, and TTRPGs. Behind Fantasy Tools is <strong>JTill</strong>, founder of <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Neoantica</a> — a Czech creative studio focused on storytelling, myth, and immersive fantasy content.
        </p>

        <p className="text-lg">
          Rooted in mythology, folklore, and history, Neoantica creates thematic tabletop games and fantasy worlds for RPGs, novels, and creative projects. Every mechanic, quest, and narrative is designed to pull players deep into believable, emotionally resonant settings.
        </p>

        <p className="text-lg">
          We also provide professional <strong>English-to-Czech translation</strong> services, especially for games and lore-heavy materials. Whether you’re a developer, publisher, or storyteller, we help your creations resonate across languages.
        </p>

        <p className="text-lg">
          Want us to build you a custom side quest, faction, or a whole world? We do that too. Just visit <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Neoantica.com</a> and explore how we can bring your fantasy vision to life.
        </p>

        <p className="italic text-gray-300">
          “Learn from the past, live in the present, think about the future.” – JTill
        </p>

        <img src="/jtill.png" alt="JTill" className="rounded-lg w-48 mt-6" />
      </div>
    </div>
  );
}
