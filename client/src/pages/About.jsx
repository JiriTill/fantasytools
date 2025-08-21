import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import KoFiButton from "../components/KoFiButton";

export default function About() {
  const canonical = "https://www.fantasynamecreator.com/about";
  const siteName = "Fantasy Name Creator";
  const title = "About Fantasy Name Creator – who we are";
  const description =
    "Fantasy Name Creator is a free AI-powered tool for worldbuilders, GMs, and writers. Learn about the project, our mission, and the studio behind it.";

  // If you have a brand/og image, replace this path; otherwise the portrait is fine.
  const ogImage = "https://www.fantasynamecreator.com/images/jtill.png";
  const logo = "https://www.fantasynamecreator.com/favicon.ico";

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Basic meta */}
        <meta name="description" content={description} />
        <meta name="keywords" content="about fantasy name generator, about fantasy name creator, worldbuilding tools, name generator for writers" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD: Organization + Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: "https://www.fantasynamecreator.com",
            logo,
            sameAs: ["https://neoantica.com"]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.fantasynamecreator.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: canonical
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="p-6 flex flex-col items-center pb-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-white text-center mb-6">About Fantasy Name Creator</h1>

          <img
            src="/images/jtill.png"
            alt="Portrait of JTill, worldbuilder and founder of Neoantica"
            className="float-right ml-6 mb-4 w-[400px] h-[400px] rounded-xl shadow-lg border border-indigo-700"
          />

          <p className="text-lg">
            <strong>Fantasy Name Creator</strong> is a free AI-powered name generator designed for worldbuilders, game masters,
            writers, and storytellers. Whether you're building a world, naming a faction, or crafting a religion, our creators
            use carefully crafted prompts to deliver rich, thematic results tailored for fantasy settings.
          </p>

          <p className="text-lg">
            This project was born out of love for board games, worldbuilding, and TTRPGs. My name is <strong>JTill</strong>, and I've founded{' '}
            <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              Neoantica
            </a>{' '}
            — a small Czech creative studio focused on storytelling, myth, and fantasy content.
          </p>

          <p className="text-lg">
            I’ve used many name generators over the years, and while some were helpful, most felt generic or limited. That’s why I built
            Fantasy Name Creator: to provide a fresh, customizable experience using modern AI that adapts to different fantasy themes and
            creative needs.
          </p>

          <KoFiButton id="T6T31JW6G3" />

          <p className="text-lg">
            Whether you're writing a Slavic-inspired dark fantasy saga, designing a faction for your D&amp;D world, or inventing relics of
            ancient religions, this tool is here to support your creativity and imagination. This is just the beginning. New features,
            categories, and inspiration tools are already in the works. If you have ideas or feedback, feel free to share them—Fantasy Name
            Creator is a tool for creators, shaped by creators.
          </p>

          <p className="text-lg">
            Want us to build you a custom side quest, faction, or a whole world? We can help you with that. Just visit{' '}
            <a href="https://neoantica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              Neoantica.com
            </a>{' '}
            and explore how we can bring your fantasy vision to life.
          </p>

          <KoFiButton id="T6T31JW6G3" />
        </div>

        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-10 inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Back to Fantasy Name Creator
        </Link>
      </main>

      <Footer />
    </div>
  );
}
