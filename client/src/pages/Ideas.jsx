import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import RelatedGenerators from '../components/RelatedGenerators';

export default function Ideas() {
    const scrollToTop = () => window.scrollTo(0, 0);

    const title = "Fantasy Ideas & Name Generators | Fantasy Name Creator";
    const description = "Explore our collection of fantasy name generators and ideas for your worldbuilding, RPG campaigns, and stories. In progress.";
    const canonical = "https://www.fantasynamecreator.com/ideas";

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="min-h-screen flex flex-col items-center">
                <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
                    <Link to="/" onClick={scrollToTop} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
                        Fantasy Ideas & Generators
                    </h1>
                </header>

                <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
                    <div className="text-center mb-12">
                        <p className="text-xl text-gray-300">
                            In progress...
                        </p>
                    </div>

                    <RelatedGenerators current="/ideas" />

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-fantasy-gold/10 to-fantasy-gold/5 p-8 rounded-xl border border-fantasy-gold/30 text-center w-full">
                        <h3 className="text-2xl font-fantasy text-fantasy-gold mb-4">
                            Need More Inspiration?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Check out our blog for tips on worldbuilding, naming, and lore creation.
                        </p>
                        <Link
                            to="/blog"
                            onClick={scrollToTop}
                            className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg inline-block"
                        >
                            Visit Blog
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
