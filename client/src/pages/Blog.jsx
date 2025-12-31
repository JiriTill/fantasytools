import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const blogPosts = [
    {
        title: "7 Naming Systems Writers Use (and How to Copy Them)",
        slug: "/blog/naming-systems-writers-use",
        excerpt: "Discover the 7 naming systems fantasy writers use instantly to create consistent, realistic names for clans, guilds, and lineages.",
        date: "2025",
        category: "Character Creation"
    },
    {
        title: "Create Faiths, Cults, Orders & Pantheons That Feel Real",
        slug: "/blog/create-faiths-cults-orders",
        excerpt: "Build believable religions, holy orders, and cults. A guide to naming, designing beliefs, and creating lore that impacts your world.",
        date: "2025",
        category: "Worldbuilding"
    },
    {
        title: "Why Names Matter in Fantasy Worlds?",
        slug: "/blog/why-names-matter",
        excerpt: "Discover how the right name can transform your characters, worlds, and factions from good to unforgettable.",
        date: "2025",
        category: "Worldbuilding"
    },
    {
        title: "5 Tips for Worldbuilding and Creating a Cohesive World",
        slug: "/blog/tips-for-worldbuilding",
        excerpt: "Learn essential worldbuilding techniques to create immersive, believable fantasy settings that captivate your audience.",
        date: "2025",
        category: "Worldbuilding"
    },
    {
        title: "How to Create Lore-Rich Names for Your Characters",
        slug: "/blog/lore-rich-names",
        excerpt: "Master the art of crafting names that carry weight, history, and meaning in your fantasy narratives.",
        date: "2025",
        category: "Character Creation"
    },
    {
        title: "Fantasy Female vs. Male Names: Crafting Distinctive Identities",
        slug: "/blog/gender-specific-names",
        excerpt: "Explore how to create culturally-sensitive, memorable names that reflect gender identity in fantasy worlds.",
        date: "2025",
        category: "Character Creation"
    }
];

const categories = ["All", "Worldbuilding", "Character Creation"];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Fantasy Worldbuilding Blog - Tips, Guides & Inspiration | Fantasy Name Creator</title>
                <meta
                    name="description"
                    content="Explore our fantasy worldbuilding blog for expert tips on creating names, building immersive worlds, and developing unforgettable characters for your RPG, D&D, or novel."
                />
                <meta name="keywords" content="fantasy worldbuilding, fantasy writing tips, character names, world creation, RPG worldbuilding, D&D tips" />
                <link rel="canonical" href="https://www.fantasynamecreator.com/blog" />
            </Helmet>

            <div className="min-h-screen flex flex-col items-center">
                <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
                        Fantasy Worldbuilding Blog
                    </h1>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        Expert tips, guides, and inspiration for fantasy writers, game masters, and worldbuilders
                    </p>
                </header>

                <main className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-4 justify-center mb-10">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full font-semibold transition-all border ${selectedCategory === category
                                    ? "bg-fantasy-gold text-fantasy-dark border-fantasy-gold"
                                    : "bg-fantasy-dark-secondary text-gray-400 border-white/10 hover:border-fantasy-gold hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {filteredPosts.map((post, index) => (
                            <Link
                                key={index}
                                to={post.slug}
                                onClick={() => window.scrollTo(0, 0)}
                                className="group flex flex-col bg-card-gradient p-8 rounded-xl border border-white/10 hover:border-fantasy-gold/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-xs font-semibold text-fantasy-gold bg-fantasy-gold/10 px-3 py-1 rounded-full border border-fantasy-gold/30">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-fantasy text-gray-100 group-hover:text-fantasy-gold transition mb-3 leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="text-fantasy-gold text-sm font-semibold group-hover:underline mt-auto">
                                    Read More →
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 w-full bg-gradient-to-r from-fantasy-gold/10 to-fantasy-gold/5 p-8 rounded-xl border border-fantasy-gold/30 text-center">
                        <h3 className="text-2xl font-fantasy text-fantasy-gold mb-4">
                            Ready to Create Your Fantasy World?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Use our generators to create unique names for characters, worlds, factions, religions, and items — then unlock instant lore to bring them to life.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/character"
                                onClick={() => window.scrollTo(0, 0)}
                                className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg"
                            >
                                Generate Character Names
                            </Link>
                            <Link
                                to="/world"
                                onClick={() => window.scrollTo(0, 0)}
                                className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg"
                            >
                                Generate World Names
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
