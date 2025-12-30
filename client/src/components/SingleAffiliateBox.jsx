export default function SingleAffiliateBox() {
    return (
        <div className="w-full max-w-4xl mx-auto my-8">
            {/* Single CTA Card */}
            <a
                href="https://amzn.to/4q14kio"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="group flex flex-col md:flex-row items-center bg-gradient-to-r from-fantasy-dark-secondary to-fantasy-dark border-2 border-fantasy-gold/30 rounded-xl p-6 md:p-8 hover:border-fantasy-gold/70 transition-all duration-300 hover:shadow-2xl hover:shadow-fantasy-gold/30 hover:-translate-y-1 relative overflow-hidden"
            >
                {/* Accent gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-60 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon/Badge */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-fantasy-gold/10 border-2 border-fantasy-gold/40 flex items-center justify-center group-hover:bg-fantasy-gold/20 transition-all">
                        <span className="text-4xl md:text-5xl">📚</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                    <div className="text-xs text-fantasy-gold uppercase tracking-widest mb-2 font-bold">
                        Perfect for Game Masters
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2 group-hover:text-fantasy-gold transition-colors leading-tight">
                        The Game Master's Book of Random Encounters
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">
                        500+ customizable maps, tables and story hooks to create 5th edition adventures on demand
                    </p>
                    <p className="text-xs text-gray-500 italic">
                        As an Amazon Associate I earn from qualifying purchases.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <div className="flex items-center justify-center gap-2 bg-fantasy-gold/10 group-hover:bg-fantasy-gold text-fantasy-gold group-hover:text-black px-6 py-3 rounded-lg font-semibold text-sm transition-all border border-fantasy-gold/30 group-hover:border-fantasy-gold whitespace-nowrap">
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
        </div>
    );
}
