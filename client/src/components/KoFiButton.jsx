export default function KoFiButton({
  id = "T6T31JW6G3",
  text = "Support us on Ko-fi"
}) {
  const href = `https://ko-fi.com/${id}?utm_source=fantasynamecreator&utm_medium=about&utm_campaign=button`;

  return (
    <div className="grid gap-3 justify-items-start my-6">
      <p className="text-lg">
        Enjoying <strong>Fantasy Name Creator</strong>?{" "}
        <strong>Your support helps keep this app free for everyone.</strong>
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Support us on Ko-fi"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 font-semibold shadow-sm"
      >
        <img
          src="https://storage.ko-fi.com/cdn/cup-border.png"
          alt=""
          className="h-5 w-auto"
        />
        {text}
      </a>
    </div>
  );
}
