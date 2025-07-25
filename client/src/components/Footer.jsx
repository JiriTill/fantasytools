import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 border-t border-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-white mb-2">FantasyNameCreator.com</p>
            <p>Crafted for worldbuilders, storytellers, and creators of all realms.</p>
          </div>

          <div className="flex flex-col md:items-end">
            <Link to="/About" className="hover:text-white transition">About Fantasy Name Creator</Link>
            <Link to="/Why-names-matter" className="hover:text-white mt-1 transition">Why names matter?</Link>
            <Link to="/Terms" className="hover:text-white mt-1 transition">Terms of Use</Link>
            <Link to="/Privacy" className="hover:text-white mt-1 transition">Privacy Policy</Link>
            <Link to="/Contact" className="hover:text-white mt-1 transition">Contact & Feedback</Link>
          </div>
        </div>

        <div className="text-center text-gray-400 border-t border-gray-700 pt-4">
          <p>
            © 2025 Fantasy Name Creator • Powered by{' '}
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
