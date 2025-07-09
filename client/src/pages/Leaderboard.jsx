import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'sharedNames'), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNames(data);
    });

    return () => unsubscribe();
  }, []);

  const top20 = [...names]
    .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))
    .slice(0, 20);

  const newest20 = [...names]
    .sort((a, b) => {
      const timeA = a.timestamp?.toDate?.() || new Date(0);
      const timeB = b.timestamp?.toDate?.() || new Date(0);
      return timeB - timeA;
    })
    .slice(0, 20);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">🧭 Hall of Legends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🏆 Top 20 Voted Names</h2>
          {top20.map(n => (
            <NameCard key={n.id} name={n} />
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🆕 Newest 20 Names</h2>
          {newest20.map(n => (
            <NameCard key={n.id} name={n} />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Back to Fantasy Tools
        </Link>
      </div>
    </div>
  );
}

function NameCard({ name }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow mb-4">
      <p className="text-2xl font-bold mb-1">{name.name}</p>
      <p className="text-sm text-gray-400 mb-2">
        {Object.entries(name.attributes).map(([k, v]) => `${k}: ${v}`).join(' | ')}
      </p>
      <div className="flex gap-4 text-lg">
        <span>👍 {name.upvotes}</span>
        <span>👎 {name.downvotes}</span>
      </div>
    </div>
  );
}
