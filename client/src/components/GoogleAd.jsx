import React, { useEffect } from 'react';

export default function GoogleAd({ slot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsbygoogle error:", e);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-center border-t border-indigo-700 pt-6 mb-10">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7735418117469222"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <div className="text-sm text-gray-400 italic mt-2">
        [Google Ad]
      </div>
    </div>
  );
}
