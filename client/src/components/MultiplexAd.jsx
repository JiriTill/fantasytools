import { useEffect } from "react";

export default function MultiplexAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Multiplex Ad error:", e);
    }
  }, []);

  return (
    <>
      {/* Google AdSense script (only once in your app is enough, can be in index.html or Helmet) */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-7735418117469222"
        data-ad-slot="5497946015"
      ></ins>
    </>
  );
}
