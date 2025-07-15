import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

export default function NameGallery() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'sharedNames'), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNames(data);
    });

    return () => unsubscribe();
  }, []);

  const vote = async (id, type) => {
    const voteKey = `voted-${id}-${type}`;
    const lastVoteTime = localStorage.getItem(voteKey);
    const now = Date.now();

    if (lastVoteTime && now - parseInt(lastVoteTime) < 24 * 60 * 60 * 1000) {
      alert("You can only vote for this name once per day.");
      return;
    }

    const docRef = doc(db, 'sharedNames', id);
    await updateDoc(docRef, {
      [type]: increment(1),
    });

    localStorage.setItem(voteKey, now.toString());
  };

  const top10 = [...names].sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)).slice(0, 10);
  const newest = [...names].sort((a, b) => {
    const timeA = a.timestamp?.toDate?.() || new Date(0);
    const timeB = b.timestamp?.toDate?.() || new Date(0);
    return timeB - timeA;
  });

  return (
    <div className="w-full max-w-5xl px-4 py-12 mx-auto text-white">
      <h2 className="text-3xl font-bold text-center mb-8">🔥 Community Name Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">🏆 Top 10 Names</h3>
          {top10.slice(0, 5).map(n => (
            <NameCard key={n.id} name={n} vote={vote} />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">🆕 Newest Names</h3>
          {newest.slice(0, 5).map(n => (
            <NameCard key={n.id} name={n} vote={vote} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/leaderboard"
            className="inline-block bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            🧭 See the Hall of Legends
          </a>
        </div>
      </div>
    </div>
  );
}
