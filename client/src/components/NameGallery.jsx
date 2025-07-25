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

    // Check if vote was already cast today
    if (lastVoteTime && now - parseInt(lastVoteTime) < 24 * 60 * 60 * 1000) {
      alert("You can only vote for this name once per day.");
      return;
    }

    try {
      const docRef = doc(db, 'sharedNames', id);
      await updateDoc(docRef, {
        [type]: increment(1),
      });
      localStorage.setItem(voteKey, now.toString());
    } catch (error) {
      console.error("Vote failed:", error.message);
    }
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
function NameCard({ name, vote }) {
  const [hasVotedUp, setHasVotedUp] = useState(false);
  const [hasVotedDown, setHasVotedDown] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const up = localStorage.getItem(`voted-${name.id}-upvotes`);
    const down = localStorage.getItem(`voted-${name.id}-downvotes`);
    if (up && now - parseInt(up) < 24 * 60 * 60 * 1000) setHasVotedUp(true);
    if (down && now - parseInt(down) < 24 * 60 * 60 * 1000) setHasVotedDown(true);
  }, [name.id]);

  return (
    <div className="bg-gray-800 p-4 rounded shadow mb-4">
      <p className="text-2xl font-bold mb-1">{name.name}</p>
      <p className="text-sm text-gray-400 mb-2">
        {Object.entries(name.attributes).map(([k, v]) => `${k}: ${v}`).join(' | ')}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => vote(name.id, 'upvotes')}
          disabled={hasVotedUp}
          className={`hover:text-green-400 ${hasVotedUp ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          👍 {name.upvotes}
        </button>

        <button
          onClick={() => vote(name.id, 'downvotes')}
          disabled={hasVotedDown}
          className={`hover:text-red-400 ${hasVotedDown ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          👎 {name.downvotes}
        </button>
      </div>
    </div>
  );
}
