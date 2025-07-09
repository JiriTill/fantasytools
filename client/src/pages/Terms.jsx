import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <main className="p-6 flex flex-col items-center pb-20">

      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6">Terms of Use</h1>

        <p className="text-lg">
          Welcome to <strong>Fantasy Tools</strong>, a free fantasy name generator provided by Neoantica. By using this website, you agree to the following terms and conditions. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Use of the Service</h2>
        <p className="text-lg">
          Fantasy Tools is intended for creative purposes such as worldbuilding, storytelling, TTRPG design, and personal or non-commercial projects. You may use the names generated freely. For commercial projects, attribution to Fantasy Tools or Neoantica is appreciated but not required.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. No Guarantee</h2>
        <p className="text-lg">
          We do our best to provide unique and interesting names, but we make no guarantee that generated names are original or not used elsewhere. Always do your own research before using any name commercially.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. AI-Generated Content</h2>
        <p className="text-lg">
          All names and descriptions are generated using AI based on crafted prompts. The creators of Fantasy Tools are not responsible for any offensive, inaccurate, or unintended content produced by the generator.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Privacy</h2>
        <p className="text-lg">
          We do not collect personal information. Usage data may be anonymized for improvement purposes. For more details, please see our{' '}
          <Link to="/privacy" className="text-blue-400 underline">
            Privacy Policy
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Updates</h2>
        <p className="text-lg">
          We may update these terms from time to time. Continued use of Fantasy Tools means you accept any changes made.
        </p>

        <p className="text-lg">
          If you have questions or concerns, feel free to{' '}
          <Link to="/contact" className="text-blue-400 underline">
            contact us
          </Link>.
        </p>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ← Back to Fantasy Tools
      </Link>
        </main>
       <Footer />
     </div>
  );
}
