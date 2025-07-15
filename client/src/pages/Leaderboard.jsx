import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import GoogleAd from '../components/GoogleAd';

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
    <>
    <Helmet>
        <title>Hall of Legends | Fantasy Name Leaderboard</title>
        <meta
            name="description"
            content="Explore the Hall of Legends – the top-voted fantasy names shared by creators across realms. Vote for your favorites or add your own creation!"
        />
        <meta
            name="keywords"
            content="fantasy name generator leaderboard, top RPG names, best fantasy names, fantasy name voting, shared fantasy names"
        />
        <meta property="og:title" content="Hall of Legends | Fantasy Name Creator" />
        <meta
            property="og:description"
            content="Vote on the best fantasy names or share your own in the Hall of Legends – powered by the community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantasynamecreator.com/leaderboard" />
        <meta property="og:image" content="https://fantasynamecreator.com/images/og-leaderboard.jpg" />
    </Helmet>
    
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">🧭 Hall of Legends</h1>

      <p className="text-center text-gray-300 mb-6 max-w-3xl mx-auto">
        These names have captured the imaginations of creators across the realms. Vote for your favorites, discover new inspirations, and see which names rise to legendary status.
      </p>
        <GoogleAd slot="4105556455" />
              
      </div>
    </div>
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
          ← Back to Fantasy Name Creator
        </Link>
      </div>
    </div>
      <Footer />
    </>
  );
}

function NameCard({ name }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow mb-4">
      <p className="text-2xl font-bold mb-1">{name.name}</p>
      <p className="text-sm text-gray-400 mb-2">
        {[
          `gender: ${name.attributes.gender}`,
          `race: ${name.attributes.race}`,
          `profession: ${name.attributes.profession}`,
          `socialClass: ${name.attributes.socialClass}`,
          `tone: ${name.attributes.tone}`,
        ].join(' | ')}
      </p>
      <div className="flex gap-4 text-lg">
        <span>👍 {name.upvotes}</span>
        <span>👎 {name.downvotes}</span>
      </div>
    </div>
  );
}
