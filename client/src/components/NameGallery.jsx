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


  const newest = [...names].sort((a, b) => {
    const timeA = a.timestamp?.toDate?.() || new Date(0);
    const timeB = b.timestamp?.toDate?.() || new Date(0);
    return timeB - timeA;
  });

  return (
    <div className="w-full text-gray-100">
      <h2 className="text-3xl font-fantasy text-fantasy-gold text-center mb-8">🔥 Community Name Gallery</h2>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-fantasy-gold-light border-b border-white/10 pb-2 text-center">🆕 Newest Names</h3>
        <div className="space-y-4">
          {newest.slice(0, 5).map(n => (
            <NameCard key={n.id} name={n} vote={vote} />
          ))}
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
    <div className="bg-black/40 backdrop-blur-md p-5 rounded-lg border border-white/5 hover:border-fantasy-gold/30 transition-all">
      <p className="text-2xl font-fantasy text-fantasy-gold mb-2">{name.name}</p>
      <p className="text-sm text-gray-400 mb-3 italic">
        {Object.entries(name.attributes).map(([k, v]) => `${k}: ${v}`).join(' | ')}
      </p>
      <div className="flex items-center gap-4 text-sm font-medium">
        <button
          onClick={() => vote(name.id, 'upvotes')}
          disabled={hasVotedUp}
          className={`flex items-center gap-1 transition-colors ${hasVotedUp ? 'text-green-500/50 cursor-not-allowed' : 'text-gray-400 hover:text-green-400'}`}
        >
          👍 {name.upvotes}
        </button>

        <button
          onClick={() => vote(name.id, 'downvotes')}
          disabled={hasVotedDown}
          className={`flex items-center gap-1 transition-colors ${hasVotedDown ? 'text-red-500/50 cursor-not-allowed' : 'text-gray-400 hover:text-red-400'}`}
        >
          👎 {name.downvotes}
        </button>
      </div>
    </div>
  );
}
