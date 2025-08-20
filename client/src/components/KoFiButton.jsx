export default function KoFiButton({
  id = "T6T31JW6G3",
  text = "Support us on Ko-fi",
}) {
  const href = `https://ko-fi.com/${id}?utm_source=fantasynamecreator&utm_medium=about&utm_campaign=button`;

  return (
    <section className="my-8">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
        <p className="m-0 text-center italic text-xs sm:text-sm text-indigo-100/80">
          Enjoying <span className="font-semibold">Fantasy Name Creator</span>?{" "}
          <span className="font-semibold">Your support helps keep this app free for everyone.</span>
        </p>

        <div className="mt-3 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support us on Ko-fi"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          >
            <img
              src="https://storage.ko-fi.com/cdn/cup-border.png"
              alt=""
              className="h-5 w-auto"
            />
            {text}
          </a>
        </div>
      </div>
    </section>
  );
}
