export default function AmazonAffiliate() {
    const products = [
        {
            title: "D&D Player's Handbook",
            label: "Run a campaign",
            description: "Core rules and character options for adventures.",
            url: "https://amzn.to/3L7PEik"
        },
        {
            title: "Dice Set",
            label: "Bring it to the table",
            description: "A classic polyhedral set for every session.",
            url: "https://amzn.to/49edX5X"
        },
        {
            title: "Worldbuilding Guide",
            label: "Build deeper lore",
            description: "Tools and prompts for places, factions, and stories.",
            url: "https://amzn.to/4jn5oKX"
        }
    ];

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
