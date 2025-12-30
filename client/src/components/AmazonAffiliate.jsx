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
        <div className="w-full max-w-4xl mx-auto my-8">
            {/* Disclosure */}
            <p className="text-xs text-gray-500 text-center mb-4">
                As an Amazon Associate I earn from qualifying purchases.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <a
                        key={index}
                        href={product.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="group flex flex-col bg-fantasy-dark-secondary/80 border border-white/10 rounded-lg p-5 hover:border-fantasy-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-fantasy-gold/10 hover:-translate-y-1"
                    >
                        {/* Label */}
                        <div className="text-xs text-fantasy-gold/70 uppercase tracking-wider mb-2 font-semibold">
                            {product.label}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-fantasy-gold transition-colors">
                            {product.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
                            {product.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-fantasy-gold-light font-medium group-hover:text-white transition-colors">
                                View on Amazon
                            </span>
                            <svg
                                className="w-4 h-4 text-fantasy-gold-light group-hover:text-white group-hover:translate-x-1 transition-all"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
