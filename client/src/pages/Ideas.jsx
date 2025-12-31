import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const ideas = [
    {
        title: "15 Fantasy Religions (Free to Use) + Lore Seeds",
        slug: "/ideas/15-fantasy-religions",
        excerpt: "A collection of 15 unique fantasy religions with lore seeds to spark conflicts, quests, and character motivations in your world.",
        date: "2025",
        category: "Religion"
    },
    {
        title: "10 Fantasy Quest Hooks with Twists (Free to Use)",
        slug: "/ideas/10-fantasy-quest-hooks",
        excerpt: "Ten original fantasy quest hooks with unexpected twists to challenge your players. Perfect for D&D and RPG campaigns.",
        date: "2025",
        category: "Quests Hooks"
    }
    // Future ideas will be added here
];

const categories = ["All", "Quests Hooks", "Lore Seeds", "Names", "Religion", "Faction", "Places"];

export default function Ideas() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredIdeas = selectedCategory === "All"
        ? ideas
        : ideas.filter(idea => idea.category === selectedCategory);

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Fantasy Ideas Hub | Quests, Lore, & Worldbuilding Seeds</title>
                <meta name="description" content="A curated collection of fantasy ideas, quest hooks, lore seeds, and free-to-use concepts for your D&D campaigns, novels, and worldbuilding projects." />
                <link rel="canonical" href="https://www.fantasynamecreator.com/ideas" />
            </Helmet>

            <header className="w-full text-center pt-16 pb-12 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5 relative">
                <Link to="/" onClick={scrollToTop} className="absolute left-4 top-8 text-fantasy-gold hover:text-white transition font-fantasy text-lg z-50">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm">
                    Fantasy Ideas Hub
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Free-to-use lore seeds, quest hooks, and creative sparks for your next campaign.
                </p>
            </header>

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full border transition-all text-sm font-semibold tracking-wide ${selectedCategory === cat
                                ? 'bg-fantasy-gold text-fantasy-dark border-fantasy-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-fantasy-gold/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {filteredIdeas.map((idea, index) => (
                        <article key={index} className="group flex flex-col bg-fantasy-dark-secondary/40 border border-white/5 rounded-xl overflow-hidden hover:border-fantasy-gold/30 hover:shadow-2xl hover:shadow-fantasy-gold/5 transition-all duration-300">
                            <div className="p-6 flex-grow flex flex-col items-start">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-fantasy-gold uppercase border border-fantasy-gold/20 rounded-full bg-fantasy-gold/5">
                                    {idea.category}
                                </span>
                                <Link to={idea.slug} onClick={scrollToTop} className="block group-hover:text-fantasy-gold transition-colors duration-200">
                                    <h2 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">{idea.title}</h2>
                                </Link>
                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {idea.excerpt}
                                </p>
                                <div className="mt-auto w-full pt-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                                    <span>{idea.date}</span>
                                    <Link to={idea.slug} onClick={scrollToTop} className="text-fantasy-gold hover:underline decoration-dotted underline-offset-4">
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredIdeas.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-400 mb-4">No ideas found in this category yet.</p>
                        <p className="text-gray-500">Check back soon for new quests, lore, and seeds!</p>
                        <button
                            onClick={() => setSelectedCategory("All")}
                            className="mt-6 text-fantasy-gold hover:text-white underline decoration-dotted"
                        >
                            View all ideas
                        </button>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}
