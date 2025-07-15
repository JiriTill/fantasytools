import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-center mb-6">Privacy, Cookie & Advertising Policy</h1>
          <p className="text-lg">
            Effective Date: July 2025, EU
          </p>

          <p className="text-lg">
            At <strong>Fantasy Name Creator</strong>, we respect your privacy. This page explains what information we collect and how we use it to ensure a safe and transparent experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Information We Do and Don't Collect</h2>
          <p className="text-lg">
            Fantasy Name Creator does not ask for or collect any personal information. You can use our tool without creating an account, logging in, or submitting any identifiable data.
            We may collect anonymous technical data through analytics and advertising tools, such as:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Browser type and version</li>
              <li>Device and operating system</li>
              <li>Referring site</li>
              <li>Pages visited and time spent</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Cookies</h2>
          <p className="text-lg">
            We use cookies to:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Understand how users interact with the site</li>
              <li>Improve performance and user experience</li>
              <li>Deliver personalized content or ads</li>
            </ul>
            You can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Google AdSense</h2>
          <p className="text-lg">
            We use Google AdSense to show relevant ads. Google may use cookies and similar technologies to serve ads based on your visit to this and other websites.
            For more details, see{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              How Google uses data when you use our partners’ sites or apps
            </a>.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Hosting & Analytics</h2>
          <p className="text-lg">
            This site is hosted on Vercel. We may also use tools like Google Analytics to measure anonymous visitor behavior. No personal data is tracked or stored by us.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. AI-Generated Content & OpenAI API</h2>
          <p className="text-lg">
            All names and text outputs are generated using AI technology. Specifically, we use the <strong>OpenAI API</strong> (a third-party tool) to process user prompts and return generated names.
            No personal data is sent to or stored by OpenAI. Your prompts are processed in real-time and are not associated with any account or session.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Your Rights</h2>
          <p className="text-lg">
            Since we do not collect personal data, there is nothing to access, modify, or delete. If you have questions about how the site works or stores data, we are happy to clarify.
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
          <p>Thank you for using our site!</p>
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
