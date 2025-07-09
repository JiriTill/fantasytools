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
          In fantasy worlds, names aren’t just labels — they’re anchors of identity, culture, and story. A name can whisper a race’s heritage, hint at a tragic past, or evoke fear, awe, or beauty in a single breath.
        </p>

        <p className="text-lg text-gray-300">
          From the melodic elegance of elven names to the guttural punch of orcish ones, well-crafted names reinforce the internal logic of your world. They help players, readers, and storytellers immerse themselves deeply in a believable setting.
        </p>

        <p className="text-lg text-gray-300">
          Great names stay with us: <em>Gandalf</em>, <em>Drizzt</em>, <em>Atreyu</em>, <em>Geralt</em>. Not because they are strange — but because they *belong*. They reflect character, setting, and tone. They’re shaped by their people’s language, history, and beliefs.
        </p>

        <p className="text-lg text-gray-300">
          At FantasyTools, we believe every name is a thread in your world’s tapestry. That’s why our generators use context and cultural flavor — not randomness. Whether you're naming a noble dwarven warrior or a mischievous goblin thief, we help make the name fit like destiny.
        </p>

        <p className="italic text-sm text-gray-500">
          “A name is not just what you're called. It's who you are when legends are told.” – JTill
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
          <a href="/terms" className="hover:underline">Terms of Use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact & Feedback</a>
          <a href="/why-names-matter" className="hover:underline">Why Names Matter?</a>
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
