import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // <- your firebase.js export

export default function ShareGeneratedName({ form }) {
  const [sharedName, setSharedName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitNameToGallery = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    try {
      await addDoc(collection(db, 'sharedNames'), {
        name: sharedName,
        attributes: form,
        timestamp: serverTimestamp(),
        upvotes: 0,
        downvotes: 0,
      });
      setSubmitted(true);
      setSharedName('');
    } catch (err) {
      console.error('Error submitting name:', err);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="mt-10 w-full max-w-lg bg-card-gradient p-8 rounded-xl border border-white/5 shadow-lg backdrop-blur-sm">
      <h3 className="text-xl font-fantasy text-fantasy-gold mb-4 text-center">Like your name? Share it with the Realm!</h3>
      <form onSubmit={handleSubmitNameToGallery} className="space-y-4">
        <input
          type="text"
          placeholder="Paste your legendary name here..."
          value={sharedName}
          onChange={(e) => setSharedName(e.target.value)}
          className="w-full p-4 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-fantasy-gold focus:ring-1 focus:ring-fantasy-gold focus:outline-none transition"
          required
        />
        <button
          type="submit"
          className="w-full bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-fantasy-gold/30 uppercase tracking-widest text-sm"
        >
          Submit to Hall of Fame
        </button>
        {submitted && <p className="text-green-400 mt-2 text-center font-medium">✨ Huzzah! Your name has been inscribed in the archives.</p>}
        {error && <p className="text-red-400 mt-2 text-center font-medium">{error}</p>}
      </form>
    </div>
  );
}
