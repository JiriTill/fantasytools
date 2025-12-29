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
    <div className="w-full max-w-3xl mx-auto my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-7735418117469222"
        data-ad-slot="5497946015"
      ></ins>
    </div>
  );
}
