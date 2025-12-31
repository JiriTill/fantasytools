import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';
import SingleAffiliateBox from '../components/SingleAffiliateBox';
import RelatedGenerators from '../components/RelatedGenerators';

export default function FifteenFantasyReligions() {
    const scrollToTop = () => window.scrollTo(0, 0);

    // --- SEO constants ---
    // Note: Adjust dates/images as needed
    const canonical = "https://www.fantasynamecreator.com/ideas/15-fantasy-religions";
    const siteName = "Fantasy Name Creator";
    const title = "15 Fantasy Religions (Free to Use) + Lore Seeds | Fantasy Name Creator";
    const description = "Explore 15 unique fantasy religions with free-to-use lore seeds. Perfect for D&D campaigns, novels, and worldbuilding conflicts.";
    const ogImage = "https://www.fantasynamecreator.com/images/og-fantasy-religions.jpg";
    const datePublished = "2025-09-08T09:00:00+02:00";
    const dateModified = "2025-09-08T12:00:00+02:00";
    const authorName = "Fantasy Name Creator Team";

    return (
        <div className="min-h-screen flex flex-col items-center">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={description} />
                <meta name="keywords" content="fantasy religions, rpg religion ideas, dnd pantheons, cult names, worldbuilding seeds, fantasy lore, campaign ideas" />
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
                <Link to="/ideas" onClick={scrollToTop} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
                    ← Back to Ideas
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
                    15 Fantasy Religions (Free to Use)
                </h1>
            </header>

            <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">15 Fantasy Religions (Free to Use) + Lore Seeds</h1>
                    <p className="italic text-sm text-gray-500 text-center mb-8">Published: September, 2025 | Read Time: 8 Minutes</p>

                    <p>
                        Below are 15 fantasy religion ideas you can use freely in your campaign, novel, board game, or worldbuilding project. Each includes a short lore seed (2–3 sentences) designed to spark conflicts, quests, and character motivations.
                    </p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1) The Church of the Unblinking Sun</h3>
                    <p>They believe the Sun is a living judge that sees every lie, every theft, every hidden sin—nothing escapes its gaze. Confessions are done in open plazas at noon, and the worst criminals are sentenced to “shadow exile,” forbidden from standing under any roof.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2) The Tidebound Covenant</h3>
                    <p>A coastal faith that teaches all lives are loans from the sea, and every debt must be repaid. Followers carry tide-knots on their wrists to track oaths; when someone breaks a vow, the knot is cut and thrown into deep water to “call the current’s punishment.”</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3) The Ashen Mercy</h3>
                    <p>Born after a great plague, this religion treats fire as both purifier and comforter. Their healers burn fragrant ash in small bowls during funerals, claiming it carries the dead’s pain away—yet rumors say the ash also stores memories, and the clergy keeps a secret archive of grief.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4) The Hollow Saint Tradition</h3>
                    <p>They worship saints who are “empty vessels” chosen by the divine, believing true holiness requires surrendering identity. Initiates erase their birth names, and the most revered saints are known only by titles like The Quiet One or The Kind Knife.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5) The Lantern Path</h3>
                    <p>This faith teaches that the dead linger near the living until properly guided, and every household must keep a lantern lit on certain nights. Their priests are welcome everywhere—until someone’s lantern goes dark, which is taken as proof of a hidden crime in the family.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">6) The Iron Catechism</h3>
                    <p>A strict temple doctrine built around discipline, labor, and endurance. Followers tattoo short commandments onto their hands, and breaking a vow requires “forging penance”: crafting a tool or weapon for the community while fasting in silence.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">7) The Court of Seven Fires</h3>
                    <p>A pantheon religion where each “Fire” represents a domain—war, harvest, love, storms, death, secrets, and judgment. The gods are said to argue constantly, so cities often pick one Fire as patron, creating alliances and rivalries that feel like holy politics.</p>

                    {/* Amazon Affiliate Box in the middle */}
                    <div className="my-12">
                        <AmazonAffiliate />
                    </div>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">8) The Veiled Choir</h3>
                    <p>A whispered cult that believes spoken words attract hungry spirits, so their rituals are performed entirely in humming and hand signs. Their temples are windowless and soft-lit, and people say the Choir can steal a name from your mouth—leaving you unable to introduce yourself ever again.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">9) The Pilgrims of the Last Gate</h3>
                    <p>They teach that the world is moving toward a final “closing,” and only those who walk the pilgrim routes will recognize the Gate when it appears. Their maps are sacred objects, updated like scripture, and heretics are those who claim the Gate has already been found.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">10) The River-Mother Communion</h3>
                    <p>A gentle faith centered on rivers as living spirits that carry stories from every land they touch. Their monks travel downstream collecting “water-tales,” and a common belief is that a person’s true self can be seen in their reflection at dawn—when the river is honest.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">11) The Thorn Oath</h3>
                    <p>A warrior religion that binds vows in blood and briar, teaching that pain makes promises real. Champions wear thorn crowns in battle, and the most feared punishment is “the blooming,” where traitors are left in sacred bramble groves until the thorns “decide.”</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">12) The Silent Ledger</h3>
                    <p>A merchant faith that worships balance: every favor, every theft, every kindness must be accounted for. Their temples resemble banks, and priests act as oath-witnesses—yet the Ledger’s secret sect is known to “correct” the books by assassinating those who tip the scales too far.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">13) The Star-Watchers of Kal Serai</h3>
                    <p>They believe constellations are living scripts written by distant gods, and that fate can be read like a calendar. Star-Watchers are respected as advisors, but feared as well—because they sometimes declare a child “born under a broken line,” marking them for exile or sacrifice.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">14) The Bone Orchard Rite</h3>
                    <p>A funerary religion that plants bones beneath white trees, claiming the dead nourish the roots and return as blessings. Their graveyards look like orchards, and people leave offerings of fruit—though travelers whisper that some trees produce “black apples” that grant visions at a terrible cost.</p>

                    <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">15) The Mirror Creed</h3>
                    <p>A strange faith that teaches every person has a second self living in reflections, and the two must remain in harmony. Mirrors are treated like sacred doors; breaking one is considered spiritual violence, and inquisitors hunt “shatterers” who use cracked glass for forbidden magic.</p>


                    {/* Need more - CTA */}
                    <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg text-center">
                        <h2 className="text-2xl font-fantasy text-fantasy-gold mb-4">Need More Religions?</h2>
                        <p className="text-gray-300 mb-6">Create infinite custom pantheons, cults, and faiths with our free generator.</p>
                        <Link to="/religion" className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg inline-block" onClick={scrollToTop}>
                            Launch Religion Name Generator
                        </Link>
                    </div>

                    <div className="my-12">
                        <SingleAffiliateBox />
                    </div>

                    {/* Related Generators Block (like other pages) */}
                    <RelatedGenerators current="/ideas/15-fantasy-religions" />

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/ideas" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition text-center">← Back to Ideas</Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-fantasy-gold hover:text-white transition font-fantasy text-lg">← Home</Link>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
