import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

export default function About() {
  const canonical = "https://www.fantasynamecreator.com/about";
  const siteName = "Fantasy Name Creator";
  const title = "About Fantasy Name Creator – who we are";
  const description =
    "Fantasy Name Creator is a free AI-powered tool for worldbuilders, GMs, and writers. Learn about the project, our mission, and the studio behind it.";

  // If you have a brand/og image, replace this path; otherwise the portrait is fine.
  const ogImage = "https://www.fantasynamecreator.com/images/jtill.png";
  const logo = "https://www.fantasynamecreator.com/favicon.ico";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          About Fantasy Name Creator
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <img
            src="/images/jtill.png"
            alt="Portrait of JTill, worldbuilder and founder of Neoantica"
            className="md:float-right md:ml-8 mb-6 md:mb-4 w-full md:w-[400px] rounded-xl shadow-2xl border border-fantasy-gold/30"
          />

          <p className="lead text-xl text-fantasy-gold-light">
            <strong>Fantasy Name Creator</strong> is a free AI-powered name generator for worldbuilders, game masters,
            writers, and storytellers.
          </p>
          <p>
            Whether you're building a world, naming a faction, or crafting a religion, our creators
            use carefully crafted prompts to deliver rich, thematic results tailored for fantasy settings.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">The Creator</h3>
          <p>
            This project was born out of love for board games, worldbuilding, and TTRPGs. My name is <strong>JTill</strong>, and I've founded{' '}
            <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-fantasy-gold hover:text-white transition underline decoration-dotted">
              Neoantica
            </a>{' '}
            — a small Czech creative studio focused on storytelling, myth, and fantasy content.
          </p>

          <p>
            I’ve used many name generators over the years, and while some were helpful, most felt generic or limited. That’s why I built
            Fantasy Name Creator: to provide a fresh, customizable experience using modern AI that adapts to different fantasy themes and
            creative needs.
          </p>



          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">Our Mission</h3>
          <p>
            Whether you're writing a Slavic-inspired dark fantasy saga, designing a faction for your D&amp;D world, or inventing relics of
            ancient religions, this tool is here to support your creativity and imagination. This is just the beginning. New features,
            categories, and inspiration tools are already in the works.
          </p>

          <div className="bg-fantasy-dark-secondary/50 p-6 rounded-lg border-l-4 border-fantasy-gold my-8 italic">
            "Fantasy Name Creator is a tool for creators, shaped by creators."
          </div>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">Need More?</h3>
          <p>
            Want us to build you a custom side quest, faction, or a whole world? We can help you with that. Just visit{' '}
            <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-fantasy-gold hover:text-white transition underline decoration-dotted">
              Neoantica.com
            </a>{' '}
            and explore how we can bring your fantasy vision to life.
          </p>
        </div>


      </main>

      <Footer />
    </div>
  );
}
