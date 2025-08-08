import React from 'react';
import { Helmet } from 'react-helmet';
import NameGallery from '../components/NameGallery';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
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
      useEffect(() => {
        const ads = document.getElementsByClassName("adsbygoogle");
        for (let i = 0; i < ads.length; i++) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("Adsbygoogle error:", e);
          }
        }
      }, []);

  return (
    <>
      <Helmet>
        <title>Fantasy Name Generator - Free AI Name Creator for Fantasy Worlds, Characters & More</title>
        <meta
          name="description"
          content="Use our free AI-powered fantasy name generator to craft unique names for your characters, worlds, and factions. The perfect tool for writers, game masters, and worldbuilders."
        />
        <meta
          name="keywords"
          content="fantasy name generator, fantasy name creator, AI fantasy name generator, character names, world name generator, RPG tools, DnD name creator, faction names, worldbuilding tools"
        />
        <meta property="og:title" content="Fantasy Name Generator - Free AI Name Creator for Fantasy Worlds" />
        <meta
          property="og:description"
          content="Use our AI-powered fantasy name creator to craft names for characters, worlds, factions, and more. Designed for fantasy writers, RPG players, and worldbuilders."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-home.jpg" />
        <meta name="robots" content="index, follow" />
        {/* Load Google Ads script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7735418117469222"
          crossOrigin="anonymous"
        ></script>
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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-4 flex flex-col items-center">
        {/* Updated Title to focus on the keyphrase */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Fantasy Name Generator</h1>

        {/* Updated description with a more direct focus */}
        <p className="text-center text-lg md:text-xl mb-6 max-w-xl">
          Create unique fantasy names for your worlds, characters, factions, religions, and legendary items.
        </p>

        {/* Corrected bold tag syntax */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Our <strong>fantasy name generator</strong> is the perfect tool for writers, worldbuilders, and game masters. Simply choose a category and let our AI craft 10 unique, lore-rich names just for you.
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
              <div className="aspect-square w-full overflow-hidden rounded-lg border-2 border-transparent group-hover:border-white transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-lg font-medium text-white group-hover:underline">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
        
        <GoogleAd /> 
        
        <div className="mt-12 w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6">
          <NameGallery />
        </div>
        
        {/* New SEO content at the bottom of the page with corrected bold tags and bottom margin */}
        <div className="w-full max-w-2xl text-left mt-10 mb-10">
          <h2 className="text-2xl font-bold mb-4">Crafting Your World with the Fantasy Name Generator</h2>
          <p className="mb-4">Welcome to FantasyNameCreator.com, your ultimate resource for crafting unique and immersive fantasy names. For every worldbuilder, writer, or game master, a great name is the first step toward a great story. Our advanced <strong>AI name generator</strong> is designed to provide you with a constant stream of inspiration for your characters, places, and lore.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why our Fantasy Name Generator is Different</h2>
          <p>Unlike other simple name generators that randomly combine words, our tool is built on a sophisticated AI model. This allows us to create names that are not only unique but also cohesive and culturally inspired. Whether you need a name for a mystical elf, a fearsome orc faction, or a sprawling city in a new realm, our generator offers a wide range of categories to suit your needs. We believe in giving creators the control they need. That’s why you can adjust various settings—such as culture, tone, and alignment—to fine-tune the results and get the perfect name every time. Explore our diverse categories and start creating the lore-rich names that will bring your fantasy world to life.</p>
        </div>

        <Footer />
        <Analytics />
      </div>
    </>
  );
}
