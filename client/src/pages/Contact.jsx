import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center mb-4">Contact & Feedback</h1>

        <p className="text-lg text-center">
          Fantasy Tools is crafted for worldbuilders, storytellers, game masters, and creators of all kinds. If you have feedback, suggestions, or you'd like to collaborate — we’d love to hear from you!
        </p>

        <p className="text-lg text-center text-gray-300">
          We’re always open to partnerships and feedback from fellow fantasy lovers. Your input helps us grow and improve.
        </p>

        <form className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message or feedback..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ← Back to Fantasy Tools
      </Link>

      <footer className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6 px-4 space-y-2 w-full">
        <div className="space-x-4">
          <a href="/about" className="hover:underline text-white">About Fantasy Tools</a>
          <a href="/terms" className="hover:underline">Terms of Use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact & Feedback</a>
        </div>
        <p className="text-xs text-gray-500">
          Powered by{' '}
          <a
            href="https://neoantica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            Neoantica
          </a>{' '}
          – a place for worldbuilding and quests creation.
        </p>
      </footer>
    </div>
  );
}
