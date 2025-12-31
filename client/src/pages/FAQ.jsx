import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function FAQ() {
    const faqData = [
        {
            category: "General Questions",
            questions: [
                {
                    q: "What is a fantasy name generator?",
                    a: "A fantasy name generator is a tool that creates unique fantasy names for characters, worlds, factions, religions, and items. Our fantasy name generators help writers, D&D players, and worldbuilders generate creative names instantly."
                },
                {
                    q: "Is this fantasy name generator free?",
                    a: "Yes! All our fantasy name generators are completely free. No signup, no payment, no limitations. Generate unlimited fantasy names for your characters, worlds, and more."
                },
                {
                    q: "What types of fantasy names can I generate?",
                    a: "You can generate fantasy character names, fantasy world names, faction names, religion names, and item names. Each name generator has customizable options for race, tone, culture, and more."
                },
                {
                    q: "Can I use these fantasy names commercially?",
                    a: "Yes. All generated fantasy names are free to use in your books, games, D&D campaigns, or any commercial projects. No attribution required."
                }
            ]
        },
        {
            category: "Character Name Generator",
            questions: [
                {
                    q: "How does the fantasy character name generator work?",
                    a: "Select your character's gender, race (Human, Elf, Dwarf, etc.), profession, social class, and tone. Click Generate Names and receive 10 unique fantasy character names instantly."
                },
                {
                    q: "Can I generate random fantasy names?",
                    a: "Yes! Our random fantasy name generator creates unique names based on your selected parameters. Each generation gives you fresh, random fantasy names."
                },
                {
                    q: "What fantasy races are supported?",
                    a: "Our fantasy name generator supports Human, Elf, Dwarf, Orc, Halfling, Tiefling, Dragonborn, and more. Each race generates culturally appropriate fantasy names."
                },
                {
                    q: "Can I generate both male and female fantasy names?",
                    a: "Yes. Choose Male, Female, or Not Specified for gender-neutral fantasy names. The name generator fantasy tool adapts to your selection."
                }
            ]
        },
        {
            category: "World Name Generator",
            questions: [
                {
                    q: "How do I create fantasy world names?",
                    a: "Use our fantasy world name generator! Select the type (world, city, kingdom, continent), climate, geography, and tone. Generate 10 unique fantasy world names with one click."
                },
                {
                    q: "Can I generate names for cities and kingdoms?",
                    a: "Yes. Our world name generator creates names for worlds, cities, kingdoms, continents, regions, and villages. Perfect for worldbuilding projects."
                },
                {
                    q: "What makes a good fantasy world name?",
                    a: "A good fantasy world name is memorable, pronounceable, and fits your world's culture. Our fantasy world name generator considers climate, geography, and tone to create fitting names."
                }
            ]
        },
        {
            category: "Using Generated Names",
            questions: [
                {
                    q: "How many names are generated at once?",
                    a: "Each generation creates 10 unique fantasy names. Click Generate again for 10 more names. Generate unlimited fantasy names until you find the perfect one."
                },
                {
                    q: "Can I save or favorite names?",
                    a: "Yes! Click the heart icon next to any generated name to save it to your favorites. Access your saved fantasy names anytime during your session."
                },
                {
                    q: "Can I generate lore or backstories?",
                    a: "Yes! After generating character names, click \"View Lore\" on any name to create a custom backstory based on your character's parameters."
                },
                {
                    q: "How long does name generation take?",
                    a: "Most fantasy names generate in 2-5 seconds. You'll see a timer showing real-time progress during generation."
                }
            ]
        },
        {
            category: "For D&D and RPGs",
            questions: [
                {
                    q: "Is this fantasy name generator good for D&D?",
                    a: "Absolutely! Our fantasy name generators are perfect for Dungeons & Dragons characters, NPCs, locations, and items. Customize by race, class, and alignment."
                },
                {
                    q: "Can I generate names for D&D factions and guilds?",
                    a: "Yes. Use our faction name generator to create names for guilds, orders, clans, and organizations. Perfect for D&D campaign worldbuilding."
                },
                {
                    q: "Does this work for other RPGs besides D&D?",
                    a: "Yes! Our fantasy name generators work for any tabletop RPG or fantasy setting - Pathfinder, Warhammer, homebrew games, novels, and more."
                }
            ]
        },
        {
            category: "Technical Questions",
            questions: [
                {
                    q: "Do I need to create an account?",
                    a: "No account needed. Our fantasy name generator tools are completely free and require no signup. Start generating fantasy names immediately."
                },
                {
                    q: "Does it work on mobile?",
                    a: "Yes. All our fantasy name generators work on mobile phones, tablets, and desktops. Generate fantasy names anywhere."
                },
                {
                    q: "Do you store my generated names?",
                    a: "Generated names are only saved locally in your browser if you favorite them. We don't store or collect your generated fantasy names."
                }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQ - Fantasy Name Generator | Common Questions About Fantasy Names</title>
                <meta name="description" content="Frequently asked questions about our fantasy name generator. Learn how to generate fantasy character names, world names, and more for D&D and worldbuilding." />
                <meta name="keywords" content="fantasy name generator FAQ, how to generate fantasy names, fantasy name generator guide, name generator fantasy help" />
                <link rel="canonical" href="https://www.fantasynamecreator.com/faq" />

                {/* Schema.org FAQPage */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.flatMap(category =>
                            category.questions.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
                        )
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen flex flex-col">
                {/* Hero Section */}
                <header className="w-full text-center pt-16 pb-12 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gold-gradient">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Everything you need to know about our fantasy name generators
                    </p>
                </header>

                <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
                    {/* Quick Links */}
                    <div className="mb-12 p-6 bg-fantasy-dark-secondary/50 rounded-xl border border-fantasy-gold/20">
                        <h2 className="text-xl font-bold text-fantasy-gold mb-4">Quick Navigation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {faqData.map((category, idx) => (
                                <a
                                    key={idx}
                                    href={`#${category.category.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-gray-300 hover:text-fantasy-gold transition"
                                >
                                    →{category.category}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Categories */}
                    {faqData.map((category, catIdx) => (
                        <section
                            key={catIdx}
                            id={category.category.toLowerCase().replace(/ /g, '-')}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-bold text-fantasy-gold mb-6 pb-2 border-b border-fantasy-gold/30">
                                {category.category}
                            </h2>

                            <div className="space-y-6">
                                {category.questions.map((faq, qIdx) => (
                                    <div
                                        key={qIdx}
                                        className="bg-fantasy-dark-secondary/30 p-6 rounded-lg border border-white/5 hover:border-fantasy-gold/30 transition"
                                    >
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <div className="mt-16 p-8 bg-gradient-to-r from-fantasy-gold/10 to-fantasy-gold/5 rounded-xl border border-fantasy-gold/30 text-center">
                        <h2 className="text-2xl font-bold text-fantasy-gold mb-4">
                            Ready to Generate Fantasy Names?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Choose a name generator and start creating unique fantasy names for your world!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/character" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg">
                                Character Names
                            </Link>
                            <Link to="/world" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg">
                                World Names
                            </Link>
                            <Link to="/faction" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg">
                                Faction Names
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
