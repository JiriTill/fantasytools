import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          Privacy, Cookie & Advertising Policy
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <p className="text-gray-400 italic">Effective Date: July 2025, EU</p>

          <p>
            At <strong>Fantasy Name Creator</strong>, we respect your privacy. This page explains what information we collect and how we use it to ensure a safe and transparent experience.
          </p>

          <h2 className="text-fantasy-gold font-fantasy">1. Information We Do and Don't Collect</h2>
          <p>
            Fantasy Name Creator does not ask for or collect any personal information. You can use our tool without creating an account, logging in, or submitting any identifiable data.
            We may collect anonymous technical data through analytics and advertising tools, such as:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Device and operating system</li>
            <li>Referring site</li>
            <li>Pages visited and time spent</li>
          </ul>

          <h2 className="text-fantasy-gold font-fantasy">2. Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul>
            <li>Understand how users interact with the site</li>
            <li>Improve performance and user experience</li>
            <li>Deliver personalized content or ads</li>
          </ul>
          <p>You can disable cookies in your browser settings at any time.</p>

          <h2 className="text-fantasy-gold font-fantasy">3. Google AdSense</h2>
          <p>
            We use Google AdSense to show relevant ads. Google may use cookies and similar technologies to serve ads based on your visit to this and other websites.
            For more details, see{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-fantasy-gold hover:text-white transition underline decoration-dotted">
              How Google uses data when you use our partners’ sites or apps
            </a>.
          </p>

          <h2 className="text-fantasy-gold font-fantasy">4. Hosting & Analytics</h2>
          <p>
            This site is hosted on Vercel. We may also use tools like Google Analytics to measure anonymous visitor behavior. No personal data is tracked or stored by us.
          </p>

          <h2 className="text-fantasy-gold font-fantasy">5. AI-Generated Content & Gemini API</h2>
          <p>
            All names and text outputs are generated using AI technology. Specifically, we use the <strong>Google Gemini API</strong> (a third-party tool) to process user prompts and return generated names.
            No personal data is sent to or stored by Google Gemini. Your prompts are processed in real-time and are not associated with any account or session.
          </p>

          <h2 className="text-fantasy-gold font-fantasy">6. Your Rights</h2>
          <p>
            Since we do not collect personal data, there is nothing to access, modify, or delete. If you have questions about how the site works or stores data, we are happy to clarify.
          </p>

          <h2 className="text-fantasy-gold font-fantasy">7. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to visit{' '}
            <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-fantasy-gold hover:text-white transition underline decoration-dotted">
              Neoantica.com
            </a>.
          </p>
          <p>Thank you for using our site!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
