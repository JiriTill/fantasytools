import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-fantasy-dark border-t border-white/10 text-sm mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Top area: brand • Ko-fi • links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand (logo + name + tagline) */}
          <div className="flex items-start gap-4">
            <Link
              to="/"
              onClick={scrollToTop}
              aria-label="Fantasy Name Creator — Home"
              className="inline-flex shrink-0 rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-fantasy-gold/50 transition-all"
            >
              <img
                src="/images/logo512.png"
                alt="Fantasy Name Creator logo"
                className="h-14 w-14 rounded-xl object-contain bg-black/50"
                loading="lazy"
                width="56"
                height="56"
              />
            </Link>
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="font-fantasy font-bold text-lg text-fantasy-gold hover:text-white transition tracking-wide"
              >
                Fantasy Name Creator
              </Link>
              <p className="text-gray-400 leading-relaxed mt-1">
                Crafted for worldbuilders, storytellers, and creators of all realms.
              </p>
            </div>
          </div>

          {/* Middle Spacer */}
          <div className="hidden md:block"></div>

          {/* Quick links (right) */}
          <nav className="flex md:justify-end" aria-label="Footer navigation">
            <ul className="flex flex-col md:items-end gap-2 text-gray-400">
              {/* Line 1 */}
              <li className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                <Link to="/about" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  About
                </Link>
                <Link to="/blog" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  Blog
                </Link>
                <Link to="/ideas" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  Ideas
                </Link>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  FAQ - Help & Guide
                </Link>
              </li>

              {/* Line 2 */}
              <li className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                <Link to="/terms" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  Terms of Service
                </Link>
                <Link to="/privacy" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  Privacy Policy
                </Link>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-fantasy-gold transition duration-200">
                  Contact & Feedback
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-gray-500 border-t border-white/5 pt-6">
          <p>
            © {year} Fantasy Name Creator • Powered by{' '}
            <a
              href="https://neoantica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fantasy-gold/80 hover:text-fantasy-gold transition font-medium"
            >
              Neoantica
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
