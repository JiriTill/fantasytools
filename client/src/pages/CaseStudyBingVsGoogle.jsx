import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

export default function CaseStudyBingVsGoogle() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block relative z-50">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide leading-tight">
                    Case Study: Google sent me 18 visitors. Bing sent 600+.
                </h1>
                <p className="text-lg text-gray-400 mt-4">Here is the data.</p>
            </header>

            <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
                <Helmet>
                    <title>Case Study: Google sent me 18 visitors. Bing sent 600+ | Fantasy Name Creator</title>
                    <meta name="description" content="A real case study showing how Bing and DuckDuckGo outperformed Google for a new dynamic content website. Data from Vercel Analytics." />
                    <meta name="keywords" content="SEO case study, Bing vs Google, search engine traffic, indie hacker, startup traffic" />
                    <meta property="og:title" content="Case Study: Google sent me 18 visitors. Bing sent 600+" />
                    <meta property="og:description" content="A real case study showing how Bing and DuckDuckGo outperformed Google for a new dynamic content website." />
                    <meta property="og:type" content="article" />
                    <meta name="robots" content="noindex" />
                </Helmet>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="italic text-sm text-gray-500 text-center mb-8">Published: January 2026 | Read Time: 3 Minutes</p>

                    {/* Vercel Analytics Screenshot */}
                    <div className="flex justify-center my-8">
                        <img
                            src="/images/Vercel Analytics.png"
                            alt="Vercel Analytics showing traffic breakdown by search engine"
                            className="w-full max-w-2xl rounded-xl shadow-2xl border border-fantasy-gold/30"
                        />
                    </div>

                    <p className="text-lg leading-relaxed">
                        We are all told the same story: <em>"Focus on Google. Optimize for Core Web Vitals. Wait for the SEO to kick in."</em>
                    </p>

                    <p className="text-lg leading-relaxed">
                        I launched my new project recently—a lore and worldbuilding generator for writers and GMs. Like everyone else, I set up Google Search Console and waited. And waited.
                    </p>

                    <p className="text-lg leading-relaxed font-semibold text-fantasy-gold">
                        If I had relied solely on Google analytics to judge my product's viability, I would have shut it down by now.
                    </p>

                    {/* Reality Check Section */}
                    <h2 className="text-2xl font-fantasy text-fantasy-gold mt-12 mb-6">The Reality Check (Last 30 Days)</h2>

                    <p className="text-lg leading-relaxed">
                        I looked at my Vercel analytics, and the discrepancy is insane. While Google has seemingly "sandboxed" my site, the alternative search engines are driving real users who are actually engaging with the tool.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Here is the breakdown of my <strong className="text-white">1,513 unique visitors</strong>:
                    </p>

                    <div className="bg-fantasy-dark-secondary/50 rounded-xl p-6 border border-white/10 my-8">
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">🔷</span>
                                <span><strong className="text-blue-400">Bing:</strong> <span className="text-white font-bold">646 visitors</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">🦆</span>
                                <span><strong className="text-orange-400">DuckDuckGo:</strong> <span className="text-white font-bold">285 visitors</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">🔮</span>
                                <span><strong className="text-purple-400">Yahoo & Ecosia:</strong> <span className="text-white font-bold">~100 visitors</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">🔍</span>
                                <span><strong className="text-gray-400">Google:</strong> <span className="text-white font-bold">... 18 visitors.</span></span>
                            </li>
                        </ul>
                        <p className="text-fantasy-gold mt-4 italic">Yes, eighteen.</p>
                    </div>

                    {/* Why Section */}
                    <h2 className="text-2xl font-fantasy text-fantasy-gold mt-12 mb-6">Why is this happening?</h2>

                    <p className="text-lg leading-relaxed">
                        My project is heavily based on dynamic content. I have programmatic pages for specific entities like <code className="bg-fantasy-dark-secondary px-2 py-1 rounded">/character</code>, <code className="bg-fantasy-dark-secondary px-2 py-1 rounded">/faction</code>, and <code className="bg-fantasy-dark-secondary px-2 py-1 rounded">/world</code>.
                    </p>

                    <p className="text-lg leading-relaxed">
                        It appears that right now, <strong className="text-white">Bing and DuckDuckGo are significantly faster at crawling and indexing dynamic/programmatic sites than Google</strong>. While Google is cautious with new domains, Bing seems to be rewarding the structured data and specific long-tail keywords immediately.
                    </p>

                    {/* Quality Section */}
                    <h2 className="text-2xl font-fantasy text-fantasy-gold mt-12 mb-6">The Quality of Traffic</h2>

                    <p className="text-lg leading-relaxed">
                        You might think Bing traffic is low quality, but the engagement tells a different story. My bounce rate is holding steady at <strong className="text-white">72%</strong>, which for a single-page generator tool is quite healthy. People aren't just bouncing; they are generating lore.
                    </p>

                    {/* Takeaways Section */}
                    <h2 className="text-2xl font-fantasy text-fantasy-gold mt-12 mb-6">My Takeaway for other Indie Hackers:</h2>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-6 rounded-xl border border-blue-500/30">
                            <h3 className="text-lg font-bold text-blue-400 mb-2">🔷 Don't ignore Bing Webmaster Tools</h3>
                            <p className="text-gray-300">Submit your sitemap there immediately. It's clearly the low-hanging fruit right now.</p>
                        </div>

                        <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-6 rounded-xl border border-orange-500/30">
                            <h3 className="text-lg font-bold text-orange-400 mb-2">🦆 Privacy-focused users exist</h3>
                            <p className="text-gray-300">The 285 visitors from DuckDuckGo suggest that the "tech-savvy" or privacy-conscious crowd is looking for tools like this.</p>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-6 rounded-xl border border-green-500/30">
                            <h3 className="text-lg font-bold text-green-400 mb-2">🌱 Don't panic if Google ignores you</h3>
                            <p className="text-gray-300">If I only looked at Google, I'd think I have zero traction. The demand is there, even if the biggest player hasn't noticed yet.</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed mt-8">
                        I'm going to double down on generating more entity-specific pages and let Google catch up when it's ready.
                    </p>

                    {/* CTA Section */}
                    <div className="my-12 bg-gradient-to-r from-fantasy-gold/10 to-fantasy-gold/5 p-8 rounded-xl border border-fantasy-gold/30 text-center">
                        <h3 className="text-2xl font-fantasy text-fantasy-gold mb-4">Curious about the project?</h3>
                        <p className="text-gray-300 mb-6">You can try the generator yourself and see how the dynamic pages work.</p>
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-block px-8 py-4 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg text-lg"
                        >
                            👉 Launch the World Generator
                        </Link>
                    </div>

                    {/* Generator Links Box */}
                    <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
                        <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Try Our Generators</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                to="/character"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">⚔️</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">Character Names</span>
                            </Link>
                            <Link
                                to="/world"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">🌍</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">World Names</span>
                            </Link>
                            <Link
                                to="/faction"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">🏰</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">Faction Names</span>
                            </Link>
                            <Link
                                to="/religion"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">🙏</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">Religion Names</span>
                            </Link>
                            <Link
                                to="/item"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">💎</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">Item Names</span>
                            </Link>
                            <Link
                                to="/dynamic"
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex items-center gap-3 p-4 bg-fantasy-dark-secondary/50 rounded-lg border border-white/10 hover:border-fantasy-gold/50 transition group"
                            >
                                <span className="text-2xl">✨</span>
                                <span className="text-lg text-gray-300 group-hover:text-fantasy-gold transition">Dynamic Lore</span>
                            </Link>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 flex justify-center">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-fantasy-gold hover:text-white transition font-fantasy text-lg">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
