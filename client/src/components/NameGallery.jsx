// src/components/NameGallery.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

export default function NameGallery() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const snapshot = await getDocs(collection(db, 'names'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNames(data);
    };
    fetchNames();
  }, []);

  const vote = async (id, type) => {
    const docRef = doc(db, 'names', id);
    await updateDoc(docRef, {
      [type]: increment(1),
    });
    setNames(prev =>
      prev.map(n => (n.id === id ? { ...n, [type]: n[type] + 1 } : n))
    );
  };

  const top10 = [...names].sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)).slice(0, 10);
  const newest = [...names].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <div className="w-full max-w-5xl px-4 py-12 mx-auto text-white">
      <h2 className="text-3xl font-bold text-center mb-8">🔥 Community Name Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Top 10 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🏆 Top 10 Names</h3>
          {top10.map(n => (
            <NameCard key={n.id} name={n} vote={vote} />
          ))}
        </div>

        {/* Newest */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🆕 Newest Names</h3>
          {newest.map(n => (
            <NameCard key={n.id} name={n} vote={vote} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NameCard({ name, vote }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow mb-4">
      <p className="text-2xl font-bold mb-1">{name.name}</p>
      <p className="text-sm text-gray-400 mb-2">
        {Object.entries(name.attributes).map(([k, v]) => `${k}: ${v}`).join(' | ')}
      </p>
      <div className="flex items-center gap-4">
        <button onClick={() => vote(name.id, 'upvotes')} className="hover:text-green-400">👍 {name.upvotes}</button>
        <button onClick={() => vote(name.id, 'downvotes')} className="hover:text-red-400">👎 {name.downvotes}</button>
      </div>
    </div>
  );
}
