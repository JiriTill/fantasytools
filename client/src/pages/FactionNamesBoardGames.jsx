import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function FactionNamesBoardGames() {
    const scrollToTop = () => window.scrollTo(0, 0);

    // --- SEO constants ---
    // Note: Adjust dates/images as needed
    const canonical = "https://www.fantasynamecreator.com/blog/faction-names-board-games";
    const siteName = "Fantasy Name Creator";
    const title = "Faction Names for Board Games: Guilds, Houses, Clans, and Empires | Fantasy Name Creator";
    const description = "Learn how to create memorable, readable faction names for board games. Use these rules and templates for guilds, houses, clans, and empires.";
    const ogImage = "https://www.fantasynamecreator.com/images/og-faction-board-games.jpg";
    const datePublished = "2025-09-02T09:00:00+02:00";
    const dateModified = "2025-09-02T12:00:00+02:00";
    const authorName = "Fantasy Name Creator Team";

    return (
        <div className="min-h-screen flex flex-col items-center">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={description} />
                <meta name="keywords" content="faction names, board games, tabletop games, naming guilds, clan names, empire names, faction name generator, game design naming" />
                <meta name="robots" content="index,follow" />

                <meta property="og:type" content="article" />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={ogImage} />
                <meta property="article:published_time" content={datePublished} />
                <meta property="article:modified_time" content={dateModified} />
                <meta property="article:author" content={authorName} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": title,
                        "description": description,
                        "image": [ogImage],
                        "inLanguage": "en",
                        "author": { "@type": "Person", "name": authorName },
                        "publisher": {
                            "@type": "Organization",
                            "name": siteName,
                            "logo": { "@type": "ImageObject", "url": "https://www.fantasynamecreator.com/favicon.ico" }
                        },
                        "datePublished": datePublished,
                        "dateModified": dateModified,
                        "mainEntityOfPage": { "@type": "WebPage", "@id": canonical },
                        "url": canonical
                    })}
                </script>
            </Helmet>

            <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
                <Link to="/" onClick={scrollToTop} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
                    Faction Names for Board Games
                </h1>
            </header>

            <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">Faction Names for Board Games: Guilds, Houses, Clans, and Empires</h1>
                    <p className="italic text-sm text-gray-500 text-center mb-8">Published: September, 2025 | Read Time: 6 Minutes</p>

                    <p>
                        Faction names in board games have a job that’s a little different than in DnD or fantasy novels. In a novel, you can take your time explaining culture and history. In DnD, a DM can improvise and adjust names on the fly. In board games, the name has to work immediately—on a card, a token, a player board, and in table talk. If the name is confusing, too long, or too similar to another faction, players will shorten it (or mix it up), and you lose clarity and theme.
                    </p>
                    <p>
                        That’s why the best board-game faction naming sits at the intersection of readability + vibe + gameplay identity. This guide gives you practical naming rules and templates you can use with a faction name generator (or fantasy faction name generator) to create memorable faction names for guilds, houses, clans, empires, rebels, and secret societies.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1) What makes a great board game faction name?</h3>
                    <p>A faction name should be:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Easy to say</strong> (players repeat it constantly)</li>
                        <li><strong>Easy to remember</strong> (distinct first sound helps a lot)</li>
                        <li><strong>Short enough for components</strong> (cards, player aids, icons)</li>
                        <li><strong>Thematically loaded</strong> (suggests culture and motivation fast)</li>
                        <li><strong>Gameplay-readable</strong> (signals playstyle: aggression, economy, stealth, magic)</li>
                    </ul>
                    <p className="mt-4">
                        If your faction is a trade-heavy engine builder, a name like <em>The Gilded Ledger</em> feels right. If it’s a brute-force military faction, <em>Ironwolf Legion</em> communicates strength instantly. That’s naming doing gameplay work.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2) Pick a faction type first: Guild, House, Clan, or Empire</h3>
                    <p>Faction types carry built-in expectations, which is great for players.</p>

                    <p className="font-semibold text-white mt-4">Guild names imply organization, commerce, specialization:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Guild of…, The… Consortium, The… Syndicate, The… Circle</li>
                        <li><em>Examples:</em> The Lanternwrights, Salt & Steel Consortium, Ironclaw Syndicate</li>
                    </ul>

                    <p className="font-semibold text-white mt-4">House names imply nobility, politics, lineage:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>House…, The… Dynasty, The… Court</li>
                        <li><em>Examples:</em> House Valthorne, The Ashen Court, The Thorncrest Dynasty</li>
                    </ul>

                    <p className="font-semibold text-white mt-4">Clan names imply blood, tradition, territory:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Clan…, The… Kin, The… Tribes</li>
                        <li><em>Examples:</em> Clan Stonehand, Frostmane Kin, The Red Marsh Tribes</li>
                    </ul>

                    <p className="font-semibold text-white mt-4">Empire names imply power, bureaucracy, expansion:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Empire of…, Dominion of…, The… Imperium</li>
                        <li><em>Examples:</em> The Ember Dominion, Empire of Sable Shores, The Dawn Imperium</li>
                    </ul>
                    <p className="mt-4">
                        A faction name generator works best when you decide the type first, because the structure changes the “feel” of the name instantly.
                    </p>


                    {/* Amazon Affiliate Box in the middle */}
                    <div className="my-12">
                        <AmazonAffiliate />
                    </div>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3) Use a 2–4 word “board game format”</h3>
                    <p>For board games, shorter is usually better. A great pattern is:</p>
                    <p className="font-semibold text-white mt-2">Descriptor + Symbol/Place + Group Noun</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Gilded + Ledger + Consortium</li>
                        <li>Ashen + Crown + Court</li>
                        <li>Storm + Banner + Legion</li>
                    </ul>

                    <p className="font-semibold text-white mt-4">Or even cleaner: Descriptor + Group</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Silent Order</li>
                        <li>Iron Syndicate</li>
                        <li>Crimson House</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">This format fits on cards, can be abbreviated naturally, and still feels fantasy.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4) Make factions distinct at a glance</h3>
                    <p>In board games, confusion kills flow. Avoid:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Two factions starting with the same letter/syllable (e.g., “Valen…” and “Valth…”)</li>
                        <li>Two factions using the same core noun (too many “Orders” or “Legions”)</li>
                        <li>Similar rhythm (all names are two syllables + two syllables)</li>
                    </ul>
                    <p className="mt-4">
                        <strong>A practical trick:</strong> give each faction a unique “signature word” that no other faction uses (Ledger, Thorncrest, Frostmane, Sable, Kestrel, Obsidian).
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5) Add micro-lore (without writing a novel)</h3>
                    <p>Board games thrive on micro-lore: one line that makes the faction feel alive. If your naming tool has a Lore feature, use it.</p>

                    <p className="font-semibold text-white mt-4">Workflow:</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Generate 10 faction names with a fantasy faction name generator</li>
                        <li>Pick 2–3 that fit your game’s tone</li>
                        <li>Click Lore to get a quick hook</li>
                        <li>Turn that hook into a one-liner on the faction board or in the rulebook</li>
                    </ol>
                    <div className="bg-black/40 p-4 rounded-lg border border-white/5 my-4 text-sm">
                        <p className="text-fantasy-gold font-bold mb-1">Example micro-lore:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                            <li>The Ashen Court — “They rule by treaty, poison, and marriage.”</li>
                            <li>Frostmane Kin — “Their oaths are older than your kingdom.”</li>
                        </ul>
                    </div>
                    <p>That’s enough to spark imagination and reinforce playstyle.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">Quick naming templates you can steal</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>The [Material] [Animal] [Group] → The Iron Wolf Legion</li>
                        <li>House [Root] + [Feature] → House Thorncrest</li>
                        <li>Clan [Root] + [Tool/Stone] → Clan Stonehand</li>
                        <li>The [Color] [Abstract Noun] → The Crimson Accord</li>
                        <li>[Place] + [Group] → Kestrel Quay Syndicate</li>
                    </ul>
                    <p className="mt-4">
                        If you’re building a map-based strategy game, you can also pair this with a kingdom name generator dnd approach for regions—biome + culture + tone—so the faction names match the world.
                    </p>

                    {/* Single Affiliate Box at the end (book link) */}
                    <div className="my-12">
                        <SingleAffiliateBox />
                    </div>

                    <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
                        <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
                        <div className="flex flex-col space-y-3">
                            <Link to="/blog/naming-systems-writers-use" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → 7 Naming Systems Writers Use (and How to Copy Them)
                            </Link>
                            <Link to="/blog/create-faiths-cults-orders" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → Create Faiths, Cults & Pantheons That Feel Real
                            </Link>
                            <Link to="/blog/tips-for-worldbuilding" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → 5 Tips for Worldbuilding
                            </Link>
                        </div>
                    </div>

                    {/* Related Generators Block (like other pages) */}
                    <RelatedGenerators current="/blog/faction-names-board-games" />

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition text-center">← Back to Blog</Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-fantasy-gold hover:text-white transition font-fantasy text-lg">← Home</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
