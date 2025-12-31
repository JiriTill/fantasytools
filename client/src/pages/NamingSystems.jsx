import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function NamingSystems() {
    const scrollToTop = () => window.scrollTo(0, 0);

    // --- SEO constants ---
    const canonical = "https://www.fantasynamecreator.com/blog/naming-systems-writers-use";
    const siteName = "Fantasy Name Creator";
    const title = "7 Naming Systems Writers Use (and How to Copy Them) | Fantasy Name Creator";
    const description = "Discover the 7 naming systems fantasy writers use to create consistent, realistic names. Learn how making names for clans, guilds, and places can deepen your worldbuilding.";
    const ogImage = "https://www.fantasynamecreator.com/images/og-naming-systems.jpg";
    const datePublished = "2025-08-28T09:00:00+02:00";
    const dateModified = "2025-08-28T12:00:00+02:00";
    const authorName = "Fantasy Name Creator Team";

    return (
        <div className="min-h-screen flex flex-col items-center">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={description} />
                <meta name="keywords" content="fantasy naming systems, character naming, worldbuilding names, naming conventions, fantasy names, clan names, guild names" />
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
                    7 Naming Systems Writers Use
                </h1>
            </header>

            <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">7 Naming Systems Writers Use (and How to Copy Them)</h1>
                    <p className="italic text-sm text-gray-500 text-center mb-8">Published: August, 2025 | Read Time: 8 Minutes</p>

                    <p>
                        If you’ve ever named one character “Eldarion” and then named the next town “Stone Town,” you’ve already met the enemy: inconsistency. Great fantasy worlds don’t have “random names.” They have systems—patterns that make names feel like they come from the same culture, history, and geography.
                    </p>
                    <p>
                        Below are 7 naming systems writers use again and again (often without explaining them on the page). You can copy any of these without inventing a full language. Use them for characters, places, faction names, religions, and legendary items. If you’re using a name generator fantasy tool or fantasy name maker, these systems also help you guide the output so everything feels connected.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1) House / Clan Names (lineage-first naming)</h3>
                    <p><strong>What it is:</strong> Identity is tied to bloodline, clan, or house. People introduce themselves with family identity as the “real” name.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Given + House:</strong> Elara Valthorne</li>
                        <li><strong>Clan + Given:</strong> Stonehand Grom</li>
                        <li><strong>Of House ___:</strong> Ser Kael of House Riven</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: politics, inheritance, feuds, noble pride, honor, family curses.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Create 10 house/clan roots (Riven-, Stone-, Ash-, Vale-, Thorn-, Iron-, Dawn-)</li>
                        <li>Add consistent endings per culture (-borne, -hall, -crest, -hand, -mark)</li>
                        <li>Use the system for everyone, not only nobles (commoners can have “small houses” too)</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Generator tip:</strong> Use your faction name generator to create noble houses and clans like real institutions, then use them as surnames.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2) Patronymics / Matronymics (parent-based naming)</h3>
                    <p><strong>What it is:</strong> The “surname” shows who your parent is. This instantly creates family connection without a family tree.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Son/daughter of:</strong> Aelin, daughter of Maren</li>
                        <li><strong>-son / -dottir patterns</strong></li>
                        <li><strong>“of ____” used as a living patronymic:</strong> Tarin of Jor</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: strong family identity, oral history, tribal structure, social status.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Pick one parent-based marker per culture (prefix or suffix)</li>
                        <li>Decide whether lineage is father-based, mother-based, or mixed</li>
                        <li>Add social rules (illegitimate children? adoptive names? marriage names?)</li>
                    </ul>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3) Occupation / Guild Names (trade-based identity)</h3>
                    <p><strong>What it is:</strong> People are known by what they do, especially in cities.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Given + Trade:</strong> Mira Weaver, Joran Smith, Selka Glassmaker</li>
                        <li><strong>“Of the ____ Guild”:</strong> Perrin of the Lanternwrights</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: bustling economy, social classes, unions, corruption, rival guilds.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Make 12–20 trades unique to your world (storm-sailor, rune-cutter, ash-baker)</li>
                        <li>Let some trades become surnames over generations</li>
                        <li>Create guilds as factions: this is where faction names shine</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Generator tip:</strong> Use a faction name generator to create guild names that sound official, then shorten them for street use (e.g., “The Gilded Ledger” → “Ledger-Men”).
                    </p>

                    {/* Amazon Affiliate Box in the middle */}
                    <div className="my-12">
                        <AmazonAffiliate />
                    </div>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4) Religious Names (saints, vows, and “new names”)</h3>
                    <p><strong>What it is:</strong> Faith reshapes identity. People take names when ordained, initiated, redeemed, or cursed.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Given + Saint title:</strong> Seraphine of Saint Lumen</li>
                        <li><strong>Vow-name:</strong> Brother Ash, Sister Mercy</li>
                        <li><strong>“Chosen name”</strong> at adulthood or initiation</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: strong institutions, ritual, moral conflict, heresy.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Define naming events: baptism, initiation, confession, pilgrimage</li>
                        <li>Create a list of saint/virtue words (Mercy, Dawn, Silence, Iron, Flame)</li>
                        <li>Decide if the old name becomes taboo</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Generator tip:</strong> Use a fantasy religion generator / religion name generator to name the faith, then name the order with a faction name generator. Click Lore on results to get instant doctrine hooks.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5) Geographic Names (place-based identity)</h3>
                    <p><strong>What it is:</strong> You are tied to land. Names tell where someone is from.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>Of ____:</strong> Lysa of Frostmere</li>
                        <li><strong>____-born:</strong> Thornborn, Riverborn</li>
                        <li><strong>Place as surname:</strong> Harrow, Vale, Blackwater</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: regional pride, migration, borders, conquered lands.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <p className="mb-2">Build 5–10 place-name endings per biome:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li><strong>coastal:</strong> -harbor, -bay, -quay</li>
                        <li><strong>mountain:</strong> -peak, -crag, -hold</li>
                        <li><strong>forest:</strong> -wood, -grove, -shade</li>
                    </ul>
                    <p>Apply consistently to both locations and surnames.</p>
                    <p className="mt-4">
                        <strong>DnD angle:</strong> This works perfectly with a kingdom name generator DnD approach—biome + culture + tone → consistent place names.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">6) Title + Epithet (earned names, public reputation)</h3>
                    <p><strong>What it is:</strong> A character’s “real” name becomes less important than what people call them.</p>
                    <p className="font-semibold text-white mt-2">Common formats:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>The Pale Warden, The Oathbreaker, The Storm-Eyed</li>
                        <li>Captain Redknife, Archivist of the Seventh Vault</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: legends, propaganda, fear, fame, myth-making.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Title comes from role (Warden, Seer, Captain, Inquisitor)</li>
                        <li>Epithet comes from one vivid detail (color, weapon, deed, curse)</li>
                        <li>Give different epithets depending on who is speaking (friends vs enemies)</li>
                    </ul>
                    <p className="mt-4">
                        <strong>Generator tip:</strong> Generate a base name, then click Lore to get a rumor or deed. Turn that into an epithet immediately.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">7) “Root + Morphology” Systems (fake language, real consistency)</h3>
                    <p><strong>What it is:</strong> You don’t create a full language—you create reusable name pieces that behave like one.</p>
                    <p className="mt-2 text-sm italic text-gray-400">Implies: deep culture, ancient history, linguistic realism—without the work.</p>

                    <p className="font-semibold text-white mt-4">How to copy it fast:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                        <li>Make 12 roots for each culture (ael, mor, syl, var, dur, kael)</li>
                        <li>Make 8 suffixes for each culture (-ion, -ara, -eth, -grim, -dor, -wyn)</li>
                        <li>Create 3 rules (e.g., “no double consonants,” “names end in vowels,” “two syllables max”)</li>
                    </ul>
                    <p className="mt-4">
                        Reuse those parts everywhere: characters, cities, factions, artifacts. This is how you make names feel like they share ancestry across your world.
                    </p>

                    <hr className="my-10 border-white/10" />

                    <p className="font-bold text-white text-lg">A simple workflow that always works</p>
                    <ol className="list-decimal pl-5 mt-4 space-y-2 text-gray-400">
                        <li>Pick one naming system per culture (or combine two)</li>
                        <li>Write 3–5 rules</li>
                        <li>Generate names (or brainstorm)</li>
                        <li>Shortlist what “sounds right”</li>
                        <li>Use Lore to attach story hooks</li>
                        <li>Apply the system to characters, places, faction names, and religions</li>
                    </ol>
                    <p className="mt-4">
                        Once you choose a system, naming stops being a struggle. It becomes worldbuilding—because every name quietly tells the reader how your world works.
                    </p>

                    {/* Single Affiliate Box at the end (book link) */}
                    <div className="my-12">
                        <SingleAffiliateBox />
                    </div>

                    <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
                        <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
                        <div className="flex flex-col space-y-3">
                            <Link to="/blog/create-faiths-cults-orders" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → Create Faiths, Cults & Pantheons That Feel Real
                            </Link>
                            <Link to="/blog/lore-rich-names" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → How to Create Lore-Rich Names for Your Characters
                            </Link>
                            <Link to="/blog/tips-for-worldbuilding" className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted" onClick={scrollToTop}>
                                → 5 Tips for Worldbuilding
                            </Link>
                        </div>
                    </div>

                    {/* Related Generators Block (like other pages) */}
                    <RelatedGenerators current="/blog/naming-systems-writers-use" />

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
