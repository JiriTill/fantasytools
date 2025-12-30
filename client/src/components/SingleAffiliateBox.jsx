export default function SingleAffiliateBox() {
    return (
        <div className="w-full max-w-4xl mx-auto my-4">
            {/* Compact Single CTA Card */}
            <a
                href="https://amzn.to/4q14kio"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="group flex flex-col md:flex-row items-center bg-gradient-to-r from-fantasy-dark-secondary to-fantasy-dark border border-fantasy-gold/20 rounded-lg p-4 md:p-5 hover:border-fantasy-gold/60 transition-all duration-300 hover:shadow-xl hover:shadow-fantasy-gold/20 hover:-translate-y-0.5 relative overflow-hidden"
            >
                {/* Accent gradient overlay - Thinner */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gold-gradient opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon/Badge - Smaller */}
                <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-fantasy-gold/10 border border-fantasy-gold/30 flex items-center justify-center group-hover:bg-fantasy-gold/20 transition-all">
                        <span className="text-3xl md:text-3xl">📚</span>
                    </div>
                </div>

                {/* Content - Smaller text */}
                <div className="flex-grow text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-1 group-hover:text-fantasy-gold transition-colors leading-tight">
                        The Game Master's Book of Random Encounters
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-2">
                        500+ customizable maps, tables and story hooks for 5th edition adventures
                    </p>
                    <p className="text-xs text-gray-500 italic">
                        As an Amazon Associate I earn from qualifying purchases.
                    </p>
                </div>

                {/* CTA Button - Smaller */}
                <div className="mt-3 md:mt-0 md:ml-5 flex-shrink-0">
                    <div className="flex items-center justify-center gap-2 bg-fantasy-gold/10 group-hover:bg-fantasy-gold text-fantasy-gold group-hover:text-black px-4 py-2 rounded-lg font-semibold text-xs transition-all border border-fantasy-gold/30 group-hover:border-fantasy-gold whitespace-nowrap">
                        <span>View on Amazon</span>
                        <svg
                            className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
}
