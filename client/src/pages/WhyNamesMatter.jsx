import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function WhyNamesMatter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white px-6 py-12 flex flex-col items-center">
      <Helmet>
        <title>Why Names Matter in Fantasy | FantasyTools</title>
        <meta
          name="description"
          content="Discover why names are crucial in fantasy storytelling, RPGs, and worldbuilding. Learn how meaningful names create immersion and bring your characters to life."
        />
        <meta
          name="keywords"
          content="fantasy names, worldbuilding, character creation, RPG naming, immersion, storytelling tips"
        />
        <meta property="og:title" content="Why Names Matter in Fantasy | FantasyTools" />
        <meta
          property="og:description"
          content="Names shape how players and readers experience your world. Learn how to make them matter."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fantasytools.com/why-names-matter" />
        <meta property="og:image" content="https://fantasytools.com/images/og-image.jpg" />
      </Helmet>

      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Why Names Matter in Fantasy
        </h1>

        <p className="text-lg text-gray-300">
          In the realms of fantasy, a name is more than a label—it’s a spark of identity that breathes life into characters, factions, and worlds. Whether you’re a Dungeons & Dragons game master, an RPG enthusiast, a novelist crafting an epic saga, or a worldbuilder shaping a mythical universe, the right name sets the tone for your creation. That’s where a fantasy name generator like Neoantica Name Generator shines, offering AI-generated names tailored for your RPG character names, fantasy worldbuilding, and storytelling needs.
        </p>

        <p className="text-lg text-gray-300">
          Why do names matter? A well-chosen name, like “Eldrin Valthorne” for an elven wizard or “Ironclaw Syndicate” for a rogue faction, instantly evokes personality, culture, and lore. It immerses players in tabletop RPGs or readers in your novel, making your world feel authentic. For D&D name generators, names must reflect races (e.g., orc, elf, tiefling), professions (e.g., warrior, mage), and tones (e.g., elegant, harsh). A generic name risks breaking immersion, while a unique one captivates.
        </p>

        <p className="text-lg text-gray-300">
          Neoantica’s AI name generator simplifies this process, delivering fantasy character names, faction names, and worldbuilding names with customizable parameters like gender, race, and tone. Whether you’re crafting a TTRPG campaign, writing a fantasy novel, or designing a game, our tool saves time while sparking creativity.
        </p>

        <p className="text-lg text-gray-300">
          Struggling to name your next hero or kingdom? Use our RPG name generator to create unforgettable names that resonate with your audience. Dive into fantasy worldbuilding with Neoantica Name Generator and make every name matter.
        </p>

        <p className="italic text-sm text-gray-500">
          “A name is not just what you're called. It's who you are when legends are told.”
        </p>

        <Link
          to="/"
          className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Back to Fantasy Tools
        </Link>
      </div>

      <footer className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6 px-4 space-y-2 w-full">
        <div className="space-x-4">
          <a href="/about" className="hover:underline text-white">About Fantasy Tools</a>
          <a href="/why-names-matter" className="hover:underline">Why Names Matter?</a>
          <a href="/terms" className="hover:underline">Terms of Use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact & Feedback</a>
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
