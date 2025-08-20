import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';
import KoFiButton from "../components/KoFiButton";

export default function HowToCreateLoreRichNames() {
  // useEffect hook to push Google Ads to the adsbygoogle array
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">

      <Helmet>
        <title>How to Create Lore-Rich Names for Your Characters</title>
        <meta
          name="description"
          content="Go beyond simple labels and learn how to create lore-rich fantasy names that reflect your character's culture, history, and destiny. A guide for writers and worldbuilders."
        />
        <meta
          name="keywords"
          content="lore-rich names, character names, fantasy names, worldbuilding, storytelling, writing tips, naming conventions, fantasy name generator"
        />
        <meta property="og:title" content="How to Create Lore-Rich Names for Your Characters" />
        <meta
          property="og:description"
          content="A guide on how to create meaningful and immersive names for characters and places in your fantasy world."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fantasynamecreator.com/blog/lore-rich-names" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-lore-rich-names-image.jpg" />
      </Helmet>

      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          How to Create Lore-Rich Names for Your Characters
        </h1>
        <p className="italic text-sm text-gray-500">Published: August, 2025 | Read Time: 4 Minutes</p>
        <p className="text-lg text-gray-300">
          A truly great fantasy name doesn’t just sound good; it tells a story. Lore-rich names are those that carry the weight of a culture, the whisper of an ancestral past, or a hint of a character’s destiny. For writers and worldbuilders, crafting these names is a powerful way to add depth and immersion to your projects.
        </p>

        {/* Tip 1 */}
        <h3 className="text-2xl font-bold text-white mt-8">1. Reflect Culture and History</h3>
        <p className="text-lg text-gray-300">
          The best names are products of their environment. Consider the history, geography, and values of a culture. Does a society live in harsh mountains? Their names might sound hard and guttural. Are they an ancient, seafaring people? Their names might have flowing, vowel-heavy tones. Using a fantasy name generator can help you explore different linguistic styles to find what fits.
        </p>

        <KoFiButton id="T6T31JW6G3" />

        {/* Tip 2 */}
        <h3 className="text-2xl font-bold text-white mt-8">2. Use Linguistic Building Blocks</h3>
        <p className="text-lg text-gray-300">
          Break down a name into its components: a base name, a surname, and maybe even a title. For example, a dwarf's name might be a combination of a personal name and a clan name (e.g., "Grom" of the "Stonehand Clan"). This approach creates a sense of lineage and social structure, making your characters feel more connected to their world.
        </p>

        {/* Tip 3 */}
        <h3 className="text-2xl font-bold text-white mt-8">3. Incorporate Meaning and Symbolism</h3>
        <p className="text-lg text-gray-300">
          A name can be a metaphor. Think of names that are derived from words in your fictional language. A warrior named "Kael" might mean "Strength," while a scholar's name, "Elara," might mean "Knowledge." Even if the meaning is not immediately obvious to the reader, knowing it as the creator adds a layer of intentionality and foreshadowing.
        </p>
        
        {/* Tip 4 */}
        <h3 className="text-2xl font-bold text-white mt-8">4. Play with Sound and Alliteration</h3>
        <p className="text-lg text-gray-300">
          The way a name sounds can evoke a certain feeling. Sharp, hard consonants (K, T, D) can suggest aggression or toughness, while soft, flowing vowels (A, E, O) can imply grace or wisdom. Alliteration, like "Seraphina Silverwing," can make a name memorable and give it a poetic quality.
        </p>

        {/* Tip 5 */}
        <h3 className="text-2xl font-bold text-white mt-8">5. Let the Story Dictate the Name</h3>
        <p className="text-lg text-gray-300">
          A name can be a powerful storytelling device. A character with a simple, common name who rises to greatness feels different from one with a grand, prophetic name. The tension between a name and a character's actions can be a source of narrative conflict. Don't be afraid to let a character "grow into" their name or, conversely, defy it completely.
        </p>
        
        <GoogleAd slot="4105556455" />
        
        {/* Related articles section */}
        <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/why-names-matter" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/tips-for-worldbuilding" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → 5 Tips for Worldbuilding and Creating a Cohesive World
              </Link>
              <Link to="/blog/gender-specific-names" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → Fantasy Female vs. Male Names: Crafting Distinctive Identities
              </Link>
            </div>
        </div>
        
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Back to Fantasy Name Creator
        </Link>
      </div>

      <MultiplexAd />
        
      </main>
      <Footer />
    </div>
  );
}
