import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          Contact & Feedback
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <div className="w-full max-w-3xl space-y-8 text-center text-gray-300">
          <p className="text-lg">
            Fantasy Name Creator is crafted for worldbuilders, storytellers, game masters, and creators of all kinds. If you have feedback, suggestions, or you'd like to collaborate — we’d love to hear from you!
          </p>

          <p className="text-lg">
            We’re always open to partnerships and feedback from fellow fantasy lovers. Your input helps us grow and improve.
          </p>



          <form
            action="https://formspree.io/f/mjkrqwke"
            method="POST"
            className="w-full max-w-xl mx-auto bg-card-gradient p-8 rounded-xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm text-left mt-8"
          >
            <div>
              <label className="block text-fantasy-gold font-semibold mb-2 text-sm" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-fantasy-gold focus:ring-1 focus:ring-fantasy-gold focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-fantasy-gold font-semibold mb-2 text-sm" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-fantasy-gold focus:ring-1 focus:ring-fantasy-gold focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-fantasy-gold font-semibold mb-2 text-sm" htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="6"
                required
                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-fantasy-gold focus:ring-1 focus:ring-fantasy-gold focus:outline-none transition"
                placeholder="Your message or feedback..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-fantasy-gold/30 uppercase tracking-widest text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
