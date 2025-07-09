import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

        <p className="text-lg">
          At <strong>Fantasy Tools</strong>, we respect your privacy. This page explains what information we (don’t) collect and how we use it.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. No Personal Data Collection</h2>
        <p className="text-lg">
          Fantasy Tools does not ask for or collect any personal information. You can use our name generator without creating an account, signing in, or submitting any identifiable data.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Usage Analytics</h2>
        <p className="text-lg">
          We may use basic anonymized analytics (e.g., page visits, click counts) to understand how the site is used and to improve the experience. These analytics do not identify individual users.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Third-Party Tools</h2>
        <p className="text-lg">
          We do not use ads or trackers. Some hosting or analytics providers (like Vercel or Google Analytics) may process anonymized technical data such as browser type, device type, or visit timestamps.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Cookies</h2>
        <p className="text-lg">
          We may use simple, non-intrusive cookies for basic site functionality. No tracking or advertising cookies are used.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. AI Content</h2>
        <p className="text-lg">
          All names and descriptions are generated using AI tools. Inputs are not stored, and outputs are not linked to any specific users.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Contact</h2>
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
        ← Back to Fantasy Tools
      </Link>

      <Footer />
    </div>
  );
}
