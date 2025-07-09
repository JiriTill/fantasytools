import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12 border-t border-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-semibold text-white mb-2">FantasyTools.com</p>
          <p>Crafted for worldbuilders, storytellers, and creators of all realms.</p>
        </div>

        <div className="flex flex-col md:items-end">
          <Link to="/About" className="hover:text-white">About Fantasy Tools</Link>
          <Link to="/Why-names-matter" className="hover:text-white">Why names matter?</Link>
          <Link to="/Terms" className="hover:text-white mt-1">Terms of Use</Link>
          <Link to="/Privacy" className="hover:text-white mt-1">Privacy Policy</Link>
          <Link to="/Contact" className="hover:text-white mt-1">Contact & Feedback</Link>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-600">
        <p>Powered by <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Neoantica</a></p>
      </div>
    </footer>
  );
}
