export default function AmazonAffiliate({ type = 'character' }) {
    // Products organized by generator type
    const productsByType = {
        character: [
            {
                title: "The Game Master's Book of Non-Player Characters",
                label: "Build your NPCs",
                description: "Instant stats, backstories, and motives for the name you just generated.",
                url: "https://amzn.to/3YIrvb5"
            },
            {
                title: "DnD Miniatures (2D Set)",
                label: "Fill your battle map",
                description: "Fill your battle map with heroes and villains instantly.",
                url: "https://amzn.to/49DX6eh"
            },
            {
                title: "The Monsters Know What They're Doing",
                label: "Master NPC tactics",
                description: "Stop playing NPCs like idiots. Make them fight smarter.",
                url: "https://amzn.to/4sqIWWv"
            }
        ],
        item: [
            {
                title: "Vault of Magic (Kobold Press)",
                label: "Expand your loot",
                description: "900+ new magic items. The ultimate loot expansion for 5e.",
                url: "https://amzn.to/3Nundf1"
            },
            {
                title: "D&D Magic Item Cards",
                label: "Hand out the loot",
                description: "Don't just read the loot. Hand the official card to your player.",
                url: "https://amzn.to/3MWZnbR"
            },
            {
                title: "Heavy Metal Dice Set",
                label: "Loot for the DM",
                description: "Loot for the DM. High-quality heavy metal dice that feel epic.",
                url: "https://amzn.to/3LevEdW"
            }
        ],
        faction: [
            {
                title: "The Game Master's Book of Villains, Minions and Their Tactics",
                label: "Build the organization",
                description: "Build the organization behind the name. Lairs, minions, and plans.",
                url: "https://amzn.to/3MXxHDL"
            },
            {
                title: "Big Book of Battle Mats",
                label: "Instant guild halls",
                description: "Instant guild halls and dungeons. Open the book and play.",
                url: "https://amzn.to/3L0aqsR"
            },
            {
                title: "Fizban's Treasury of Dragons",
                label: "Ultimate faction leaders",
                description: "The ultimate faction leaders. Add dragons to your order.",
                url: "https://amzn.to/4poWePp"
            }
        ],
        world: [
            {
                title: "Kobold Guide to Worldbuilding",
                label: "Build a living world",
                description: "Don't just make a map. Build a living, breathing world history.",
                url: "https://amzn.to/3Lth0Q0"
            },
            {
                title: "Chessex Role Playing Play Mat (Reversible)",
                label: "The industry standard",
                description: "The industry standard. Draw your world, erase, and redraw.",
                url: "https://amzn.to/44WBQxJ"
            },
            {
                title: "Dungeon Designers Deck",
                label: "Create massive dungeons",
                description: "Create massive complex dungeons in seconds with these cards.",
                url: "https://amzn.to/49DCtPs"
            }
        ],
        religion: [
            {
                title: "The Deck of Many Things",
                label: "Divine chaos",
                description: "Inject divine chaos and fate into your campaign.",
                url: "https://amzn.to/4jmDjDs"
            },
            {
                title: "Mordenkainen Presents: Monsters of the Multiverse",
                label: "Extra-planar threats",
                description: "Demons, Angels, and extra-planar threats for your gods.",
                url: "https://amzn.to/49qXVbG"
            },
            {
                title: "Cleric & Paladin Spell Cards",
                label: "Manage divine spells",
                description: "Manage divine spells without flipping through the handbook.",
                url: "https://amzn.to/3LnlxmV"
            }
        ]
    };

    // Dynamic uses the same products as character
    const products = productsByType[type] || productsByType.character;

    return (
        <div className="w-full max-w-4xl mx-auto my-10">
            {/* Heading Section */}
            <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-fantasy text-fantasy-gold mb-2">
                    ⚔️ Bring Your Adventures to Life
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                    Essential tools for every worldbuilder and dungeon master
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {products.map((product, index) => (
                    <a
                        key={index}
                        href={product.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="group flex flex-col bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-2 border-fantasy-gold/20 rounded-xl p-6 hover:border-fantasy-gold/60 transition-all duration-300 hover:shadow-xl hover:shadow-fantasy-gold/20 hover:-translate-y-2 relative overflow-hidden"
                    >
                        {/* Accent gradient overlay */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        {/* Label */}
                        <div className="text-xs text-fantasy-gold uppercase tracking-widest mb-3 font-bold">
                            {product.label}
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-fantasy-gold transition-colors leading-tight">
                            {product.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-5 flex-grow leading-relaxed">
                            {product.description}
                        </p>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <div className="flex items-center justify-center gap-2 bg-fantasy-gold/10 group-hover:bg-fantasy-gold text-fantasy-gold group-hover:text-black px-4 py-3 rounded-lg font-semibold text-sm transition-all border border-fantasy-gold/30 group-hover:border-fantasy-gold">
                                <span>View on Amazon</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Disclosure */}
            <p className="text-xs text-gray-500 text-center mt-4">
                As an Amazon Associate I earn from qualifying purchases.
            </p>
        </div>
    );
}
