import React from 'react';
import { Link } from 'react-router-dom';
import KoFiButton from './KoFiButton';

export default function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Top area: brand • Ko-fi • links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand (logo + name + tagline) */}
          <div className="flex items-start gap-3">
            <Link
              to="/"
              onClick={scrollToTop}
              aria-label="Fantasy Name Creator — Home"
              className="inline-flex shrink-0 rounded-lg ring-1 ring-indigo-600/40 hover:ring-indigo-400 transition"
            >
              <img
                src="/images/logo512.png"
                alt="Fantasy Name Creator logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-contain"
                loading="lazy"
                width="56"
                height="56"
              />
            </Link>
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="font-semibold text-white hover:underline transition"
              >
                Fantasy Name Creator
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Crafted for worldbuilders, storytellers, and creators of all realms.
              </p>
            </div>
          </div>

          {/* Ko-fi (center, top-aligned) */}
          <div className="flex flex-col items-center text-center gap-3 md:self-start">
            <KoFiButton id="T6T31JW6G3" />
          </div>

          {/* Quick links (right) */}
          <nav className="flex md:justify-end" aria-label="Footer navigation">
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/About" onClick={scrollToTop} className="hover:text-white transition">
                  About Fantasy Name Creator
                </Link>
              </li>
              <li>
                <Link to="/Why-names-matter" onClick={scrollToTop} className="hover:text-white transition">
                  Why names matter?
                </Link>
              </li>
              <li>
                <Link to="/Terms" onClick={scrollToTop} className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/Privacy" onClick={scrollToTop} className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={scrollToTop} className="hover:text-white transition">
                  Contact &amp; Feedback
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-gray-400 border-t border-gray-800 pt-4">
          <p>
            © {year} Fantasy Name Creator • Powered by{' '}
            <a
              href="https://neoantica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Neoantica
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
