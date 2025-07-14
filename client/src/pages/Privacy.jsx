import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

          <p className="text-lg">
            At <strong>Fantasy Name Creator</strong>, we respect your privacy. This page explains what information we (don’t) collect and how we use it to ensure a safe and transparent experience.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">1. No Personal Data Collection</h2>
          <p className="text-lg">
            Fantasy Name Creator does not ask for or collect any personal information. You can use our name generator without creating an account, logging in, or submitting any identifiable data such as your name or email address.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">2. Usage Analytics</h2>
          <p className="text-lg">
            We may use anonymized analytics (e.g., page visits, button clicks, country of access) to help us understand how the site is used and to improve user experience. These analytics do not identify you personally.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">3. Third-Party Services</h2>
          <p className="text-lg">
            We host Fantasy Name Creator on Vercel, and we may optionally use tools like Google Analytics. These services may process basic technical data like your browser type, device type, and approximate location based on IP address. This information remains anonymous and is used solely for performance monitoring and improvement.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">4. Cookies</h2>
          <p className="text-lg">
            Our site may use minimal, non-intrusive cookies for essential functionality (such as remembering your last selected options). We do not use any tracking, advertising, or third-party marketing cookies.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">5. AI-Generated Content</h2>
          <p className="text-lg">
            All names and lore are generated using AI tools. Your input is processed in real-time and not stored on our servers. Outputs are not linked to any specific user, session, or IP address.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
          <p className="text-lg">
            As no personal data is collected or stored, there is no personal information to access, delete, or correct. If you have any concerns, we’re happy to clarify.
          </p>
        
          <h2 className="text-2xl font-semibold mt-6">7. Contact</h2>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, feel free to{' '}
            <Link to="/contact" className="text-blue-400 underline">contact us</Link> or visit{' '}
            <a
              href="https://neoantica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Neoantica.com
            </a>.
          </p>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ← Back to Fantasy Name Creator
      </Link>
        </main>
      <Footer />
    </div>
  );
}
