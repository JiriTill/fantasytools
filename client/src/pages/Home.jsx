import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NameGallery from '../components/NameGallery';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import Footer from '../components/Footer';
import { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';

const categories = [
  { name: 'Worlds and places', path: '/world', image: '/images/world.png' },
  { name: 'Character', path: '/character', image: '/images/character.png' },
  { name: 'Faction', path: '/faction', image: '/images/faction.png' },
  { name: 'Religion', path: '/religion', image: '/images/religion.png' },
  { name: 'Item', path: '/item', image: '/images/item.png' },
  { name: 'Dynamic', path: '/dynamic', image: '/images/dynamic.png' }
];

export default function Home() {


  // FAQ content (used for visible section + JSON-LD)
  const faq = [
    { q: "Is the Fantasy Name Creator free?", a: "Yes—completely free, no login required." },
    { q: "Can I use the generated names commercially?", a: "Yes. You can use them in books, games and projects. Attribution is appreciated but not required." },
    { q: "What can I generate with this tool?", a: "Names for worlds and places, characters, factions, religions, items and fully custom contexts." },
    { q: "How many names are generated at a time?", a: "Each click produces 10 unique names. Generate again for a fresh list." },
    { q: "Do I need an account or any software?", a: "No account or installation is needed. It works in your browser on desktop, tablet and mobile." }
  ];

  return (
    <>
      <Helmet>
        <title>Fantasy Name Generator - Free Name Creator for Characters, Worlds & More</title>
        <meta
          name="description"
          content="Create unique fantasy names for characters, worlds, factions, religions & items. Perfect for writers, game masters & worldbuilders. Free, no signup required."
        />
        <meta
          name="keywords"
          content="fantasy name generator, character name generator, world name generator, RPG tools, DnD name creator, faction names, worldbuilding tools, fantasy names"
        />
        <meta property="og:title" content="Fantasy Name Generator - Free AI Name Creator for Fantasy Worlds" />
        <meta
          property="og:description"
          content="Use our AI-powered fantasy name creator to craft names for characters, worlds, factions, and more. Designed for fantasy writers, RPG players, and worldbuilders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fantasynamecreator.com/" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-home.jpg" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.fantasynamecreator.com/" />



        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fantasy Name Creator",
              "url": "https://www.fantasynamecreator.com/"
            }
          `}
        </script>

        {/* FAQ JSON-LD (matches the visible FAQ section below) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <header className="w-full text-center pt-16 pb-12 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wider">
            Fantasy Name Generator
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Create unique fantasy names for your worlds, characters, factions, religions, and legendary items.
          </p>

        </header>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">

          {/* Single Affiliate Box before category grid */}
          <SingleAffiliateBox />

          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-100 border-b border-fantasy-gold/30 pb-2">
            What do you want to create?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16 w-full max-w-5xl">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative flex flex-col items-center text-center p-4 rounded-xl bg-card-gradient border border-white/10 hover:border-fantasy-gold/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-black/50 shadow-inner group-hover:shadow-fantasy-gold/20 transition">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                  />
                </div>
                <span className="text-lg md:text-xl font-fantasy text-fantasy-gold-light group-hover:text-fantasy-gold transition-colors">
                  {cat.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-fantasy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>



          <section className="w-full max-w-4xl mx-auto bg-fantasy-dark-secondary/50 p-6 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm">
            <NameGallery />
          </section>

          {/* SEO & Content Section */}
          <div className="w-full max-w-3xl text-left mt-20 mb-10 text-gray-300 space-y-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-fantasy-gold text-3xl mb-4">Crafting Your World with the Fantasy Name Generator</h2>
              <p className="leading-readability">
                Welcome to <span className="text-fantasy-gold-light">FantasyNameCreator.com</span>, your ultimate resource for crafting unique and immersive fantasy names. For every worldbuilder, writer, or game master, a great name is the first step toward a great story. Our advanced <strong>AI name generator</strong> is designed to provide you with a constant stream of inspiration for your characters, places, and lore.
              </p>

              <h2 className="text-fantasy-gold text-2xl mt-8 mb-4">Why our Fantasy Name Generator is Different</h2>
              <p className="leading-readability">
                Unlike other simple name generators that randomly combine words, our tool is built on a sophisticated AI model. This allows us to create names that are not only unique but also cohesive and culturally inspired. Whether you need a name for a mystical elf, a fearsome orc faction, or a sprawling city in a new realm, our generator offers a wide range of categories to suit your needs. We believe in giving creators the control they need. That’s why you can adjust various settings—such as culture, tone, and alignment—to fine-tune the results and get the perfect name every time. Explore our diverse categories and start creating the lore-rich names that will bring your fantasy world to life.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="w-full max-w-3xl text-left mt-8 mb-20">
            <h2 className="text-3xl font-fantasy text-fantasy-gold mb-8 text-center border-b border-white/10 pb-4">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faq.map((item, index) => (
                <div key={index} className="bg-fantasy-dark-secondary p-6 rounded-lg border border-white/5 hover:border-white/10 transition">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>


        </main>

        <Footer />
        <Analytics />
      </div>
    </>
  );
}
