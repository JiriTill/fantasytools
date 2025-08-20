// KoFiWidget.jsx
import { useEffect, useState } from "react";

export default function KoFiWidget({
  id = "T6T31JW6G3",          // your Ko-fi Page ID (not username)
  label = "Support us on Ko-fi",
  color = "#72a4f2",          // button color
  containerId = "kofi-button" // where the widget will render
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = () => {
      try {
        if (window.kofiwidget2) {
          window.kofiwidget2.init(label, color, id);
          window.kofiwidget2.draw();
          setLoaded(true);
        }
      } catch (e) {
        console.error("Ko-fi init failed:", e);
      }
    };

    if (window.kofiwidget2) {
      init();
      return;
    }

    const s = document.createElement("script");
    s.src = "https://storage.ko-fi.com/cdn/widget/Widget_2.js";
    s.async = true;
    s.onload = init;
    document.body.appendChild(s);

    return () => {
      if (s.parentNode) s.parentNode.removeChild(s);
    };
  }, [id, label, color]);

  return (
    <div style={{ display: "grid", gap: "0.5rem", justifyItems: "start" }}>
      <p style={{ margin: 0, lineHeight: 1.5 }}>
        Enjoying <strong>Fantasy Name Creator</strong>?{" "}
        <strong>Your support helps keep this app free for everyone.</strong>
      </p>

      {/* Ko-fi renders the button into this element */}
      <div id={containerId} />

      {/* Fallback link in case the script is blocked */}
      {!loaded && (
        <a
          href={`https://ko-fi.com/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      )}
    </div>
  );
}
