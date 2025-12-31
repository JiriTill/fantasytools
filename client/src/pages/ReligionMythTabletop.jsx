import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function ReligionMythTabletop() {
    const scrollToTop = () => window.scrollTo(0, 0);

    // --- SEO constants ---
    const canonical = "https://www.fantasynamecreator.com/blog/religion-myth-tabletop-games";
    const siteName = "Fantasy Name Creator";
    const title = "Religion and Myth in Tabletop Games: Naming Cults, Gods, and Pantheons | Fantasy Name Creator";
    const description = "Learn how to create mythic and playable names for religions, cults, and pantheons in tabletop games. A guide for board games and TTRPGs.";
    const ogImage = "https://www.fantasynamecreator.com/images/og-religion-tabletop.jpg";
    const datePublished = "2025-09-04T09:00:00+02:00";
    const dateModified = "2025-09-04T12:00:00+02:00";
    const authorName = "Fantasy Name Creator Team";

    return (
        <div className="min-h-screen flex flex-col items-center">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={description} />
                <meta name="keywords" content="religion names, tabletop games, board game religion, naming gods, fantasy pantheon, cult names, mythic names, RPG religion" />
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
                    Religion & Myth in Tabletop Games
                </h1>
            </header>

            <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">Religion and Myth in Tabletop Games: Naming Cults, Gods, and Pantheons</h1>
                    <p className="italic text-sm text-gray-500 text-center mb-8">Published: September, 2025 | Read Time: 6 Minutes</p>

                    <p>
                        Religion in tabletop games is powerful because it instantly adds stakes: morality, fear, miracles, forbidden knowledge, and ancient history. But in board games (and many TTRPG supplements), religion also needs to stay readable and usable. The name is often the only lore players see—so it has to carry a lot of meaning quickly.
                    </p>
                    <p>
                        This guide focuses on naming that works on components and in gameplay, while still feeling mythic. It also shows why combining a fantasy religion generator with a faction name generator is so effective: religions create temples, orders, inquisitions, cults, and heresies—those are playable factions.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1) Name the religion by structure, not vibes</h3>
                    <p>Pick what you’re naming:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>a god (single deity)</li>
                        <li>a cult (secret worship)</li>
                        <li>a faith/church (public institution)</li>
                        <li>a pantheon (collection of gods)</li>
                        <li>an order (religious faction)</li>
                    </ul>
                    <p className="mt-4 font-semibold text-white">Then choose the naming frame:</p>

                    <p className="font-semibold text-white mt-4">Church/Faith frames:</p>
                    <p className="text-gray-400">Church of…, Way of…, Temple of…, Covenant of…</p>

                    <p className="font-semibold text-white mt-4">Cult frames:</p>
                    <p className="text-gray-400">The Veiled…, The Unseen…, The Red…, The Whispering…</p>

                    <p className="font-semibold text-white mt-4">Pantheon frames:</p>
                    <p className="text-gray-400">The Nine Thrones, The Court of Stars, The Seven Fires, The Old Names</p>
                    <p className="mt-4">
                        A fantasy religion generator becomes much more useful when you decide the frame first.
                    </p>


                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2) Use domains to make gods feel real</h3>
                    <p>God names become instantly believable when tied to a clear domain: storms, harvest, oaths, graves, trade, secrets, war, mercy, fire, the sea.</p>
                    <p className="font-semibold text-white mt-4">Examples:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Vael, Keeper of Oaths</li>
                        <li>The Unblinking Sun</li>
                        <li>Mother of Ash and Mercy</li>
                        <li>The Tide-King</li>
                    </ul>
                    <p className="mt-4">Even if you only include one domain word, it signals what the god does in the world.</p>

                    {/* Amazon Affiliate Box in the middle */}
                    <div className="my-12">
                        <AmazonAffiliate />
                    </div>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3) Keep names playable (and pronounceable)</h3>
                    <p>In novels you can get away with complex apostrophe-heavy names. In tabletop games, players need to say it out loud often. Good guidelines:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>2–4 words for faiths/cults</li>
                        <li>1–3 words for gods</li>
                        <li>avoid too many similar god names inside one pantheon</li>
                    </ul>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4) Make pantheons coherent</h3>
                    <p>A pantheon should sound like a system, not a random list. Use a shared structure:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>all gods named as titles (The Forge-Father, The River-Maiden…)</li>
                        <li>all gods share a linguistic root (Ael-, Mor-, Syl-)</li>
                        <li>all gods are “The ___” style (The Silent One, The Bright One…)</li>
                    </ul>
                    <p className="mt-4">
                        Then introduce conflict inside the system: rival sibling gods, a forgotten god, a dead god, a liar god. That gives the pantheon story energy.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5) Turn religion into factions (and into mechanics)</h3>
                    <p>This is where your faction name generator comes back in. Once you have a religion name, create 2–3 religious factions:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Holy Order</strong> (public enforcers)</li>
                        <li><strong>Pilgrim Guild</strong> (travel, trade, influence)</li>
                        <li><strong>Secret Cult</strong> (heresy, forbidden rites)</li>
                    </ul>
                    <p className="mt-4 font-semibold text-white">Then attach micro-lore using the Lore feature:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>A rule they enforce</li>
                        <li>A rumor players can exploit</li>
                        <li>A relic they’re hunting</li>
                    </ul>

                    <div className="bg-black/40 p-4 rounded-lg border border-white/5 my-4 text-sm">
                        <p className="text-fantasy-gold font-bold mb-1">Example set:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-400">
                            <li><strong>Church of the Dawn Ledger</strong> (faith)</li>
                            <li><strong>Wardens of the Brass Seal</strong> (holy order — faction)</li>
                            <li><strong>The Unwritten Choir</strong> (cult — faction)</li>
                        </ul>
                    </div>

                    {/* Single Affiliate Box at the end (book link) */}
                    <div className="my-12">
                        <SingleAffiliateBox />
                    </div>

                    <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
                        <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
                        <div className="flex flex-col space-y-3">
                            <Link to="/blog/faction-names-board-games" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → Faction Names for Board Games
                            </Link>
                            <Link to="/blog/create-faiths-cults-orders" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → Create Faiths, Cults & Pantheons That Feel Real
                            </Link>
                            <Link to="/blog/naming-systems-writers-use" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → 7 Naming Systems Writers Use
                            </Link>
                        </div>
                    </div>

                    {/* Related Generators Block (like other pages) */}
                    <RelatedGenerators current="/blog/religion-myth-tabletop-games" />

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
