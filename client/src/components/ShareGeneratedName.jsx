import React, { useState } from 'react';
import axios from 'axios';

export default function ShareGeneratedName({ form }) {
  const [sharedName, setSharedName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitNameToGallery = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    try {
      await axios.post('/api/submit-name', {
        name: sharedName,
        attributes: form,
        timestamp: new Date().toISOString(),
        upvotes: 0,
        downvotes: 0,
      });
      setSubmitted(true);
      setSharedName('');
    } catch (err) {
      console.error(err);
      setError('Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="mt-10 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Like your name? Share it with others!</h3>
      <form onSubmit={handleSubmitNameToGallery}>
        <input
          type="text"
          name="sharedName"
          placeholder="Paste your favorite name"
          value={sharedName}
          onChange={(e) => setSharedName(e.target.value)}
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded font-semibold"
        >
          Submit to Gallery
        </button>
        {submitted && <p className="text-green-400 mt-2">Thanks! Your name was shared.</p>}
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </form>
    </div>
  );
}
