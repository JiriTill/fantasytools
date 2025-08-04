import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';
import MultiplexAd from '../components/MultiplexAd';

export default function FiveTipsForWorldbuilding() {
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
        <title>5 Tips for Worldbuilding: Create a Cohesive Fantasy World</title>
        <meta
          name="description"
          content="Learn the top 5 tips for worldbuilding to create a cohesive, immersive fantasy world. From naming conventions to consistent lore, elevate your storytelling."
        />
        <meta
          name="keywords"
          content="worldbuilding tips, fantasy world, lore, writing guide, naming conventions, storytelling, cohesive world"
        />
        <meta property="og:title" content="5 Tips for Worldbuilding: Create a Cohesive Fantasy World" />
        <meta
          property="og:description"
          content="A guide for writers and game masters on how to build a fantasy world that feels real and lived-in."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fantasynamecreator.com/blog/tips-for-worldbuilding" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-worldbuilding-image.jpg" />
      </Helmet>

      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          5 Tips for Worldbuilding: How to Create a Cohesive Fantasy World
        </h1>
        <p className="italic text-sm text-gray-500">Published: August, 2025 | Read Time: 3 Minutes</p>
        <p className="text-lg text-gray-300">
          Creating a believable fantasy world is an art form in itself. It’s a delicate balance of epic history, magical systems, and cultural nuances that make the world feel lived-in and real. Here are five essential tips to help you build a world that will captivate your audience and stand the test of time.
        </p>

        {/* Tip 1 */}
        <h3 className="text-2xl font-bold text-white mt-8">1. Establish Consistent Naming Conventions</h3>
        <p className="text-lg text-gray-300">
          One of the quickest ways to break a reader's immersion is with inconsistent names. A naming convention should be a thread that runs through your entire world, linking people, places, and cultures. Decide on a linguistic style for each race or region and stick to it. This is where a great fantasy name generator can be invaluable, providing a foundation for your naming schemes.
        </p>

        {/* Tip 2 */}
        <h3 className="text-2xl font-bold text-white mt-8">2. Create a Clear Magic System</h3>
        <p className="text-lg text-gray-300">
          Whether magic is a rare, mystical force or an everyday occurrence, its rules must be clear to both you and your audience. Hard magic systems have defined rules and limitations (e.g., Brandon Sanderson's Allomancy), while soft magic systems are more mysterious (e.g., Gandalf's powers in Middle-earth). Both are valid, but consistency is key to making magic feel like a natural part of your world, not just a convenient plot device.
        </p>

        {/* Tip 3 */}
        <h3 className="text-2xl font-bold text-white mt-8">3. Develop a Rich History and Lore</h3>
        <p className="text-lg text-gray-300">
          A great world feels ancient, with a history that stretches back beyond the current story. Think about major historical events, forgotten kingdoms, and epic battles that have shaped the current world. You don't need to write a full encyclopedia, but having a general understanding of the past will add depth to your locations, characters, and conflicts.
        </p>

        {/* Tip 4 */}
        <h3 className="text-2xl font-bold text-white mt-8">4. Focus on the Small Details</h3>
        <p className="text-lg text-gray-300">
          The big picture is important, but small details are what truly make a world believable. Think about the daily lives of your inhabitants. What do they eat? What are their common superstitions? What is their most popular form of entertainment? These small, tangible elements connect your audience to your world and make it feel authentic.
        </p>

        {/* Tip 5 */}
        <h3 className="text-2xl font-bold text-white mt-8">5. Let Your World Evolve with the Story</h3>
        <p className="text-lg text-gray-300">
          Your world is not a static backdrop; it's a living, breathing entity. As your story unfolds, let the events have real consequences on the world itself. A major battle might leave a lasting scar on the landscape, a new king might change the laws, or the discovery of a new magical artifact might alter the balance of power. This dynamic nature keeps the world engaging and makes your story's impact feel real.
        </p>
        
        <GoogleAd slot="4105556455" />
        
        {/* Related articles section */}
        <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/why-names-matter" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/lore-rich-names" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → How to Create Lore-Rich Names for Your Characters
              </Link>
              <Link to="/blog/gender-specific-names" className="text-lg text-purple-400 hover:text-purple-300 transition-colors">
                → Fantasy Female vs. Male Names: Crafting Distinctive Identities
              </Link>
            </div>
        </div>
        
        <Link
          to="/"
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
