import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import AmazonAffiliate from '../components/AmazonAffiliate';


export default function HowToCreateLoreRichNames() {
  // push Google Ads


  // --- SEO constants for this post ---
  const canonical = "https://www.fantasynamecreator.com/blog/lore-rich-names";
  const siteName = "Fantasy Name Creator";
  const title = "How to Create Lore-Rich Names for Your Characters";
  const description = "Go beyond simple labels and learn how to create lore-rich fantasy names that reflect your character's culture, history, and destiny. A guide for writers and worldbuilders.";
  const ogImage = "https://www.fantasynamecreator.com/images/og-lore-rich-names-image.jpg";
  // Full ISO-8601 datetimes with timezone (+02:00 for CEST)
  const datePublished = "2025-08-21T09:00:00+02:00";
  const dateModified = "2025-08-21T12:00:00+02:00";
  const authorName = "Fantasy Name Creator Team"; // or "JTill"
  const authorUrl = "https://www.fantasynamecreator.com/about";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full text-center pt-10 pb-6 px-4 bg-gradient-to-b from-fantasy-dark-secondary to-fantasy-dark border-b border-white/5">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-fantasy-gold hover:text-white transition font-fantasy text-xl mb-2 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm tracking-wide">
          How to Create Lore-Rich Names
        </h1>
      </header>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center flex-grow">
        <Helmet>
          {/* Same SEO tags as before */}
          <html lang="en" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={description} />
          <meta name="keywords" content="lore-rich names, character names, fantasy names, worldbuilding, storytelling, writing tips, naming conventions, fantasy name generator" />
          <meta name="robots" content="index,follow" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content="How to Create Lore-Rich Names for Your Characters" />
          <meta property="og:description" content="A guide on how to create meaningful and immersive names for characters and places in your fantasy world." />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={ogImage} />
          <meta property="article:published_time" content={datePublished} />
          <meta property="article:modified_time" content={dateModified} />
          <meta property="article:author" content={authorName} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": title,
              "description": description,
              "image": [ogImage],
              "inLanguage": "en",
              "author": { "@type": "Person", "name": authorName, "url": authorUrl },
              "publisher": {
                "@type": "Organization",
                "name": siteName,
                "logo": { "@type": "ImageObject", "url": "https://www.fantasynamecreator.com/favicon.ico" }
              },
              "datePublished": datePublished,
              "dateModified": dateModified,
              "mainEntityOfPage": { "@type": "WebPage", "@id": canonical },
              "url": canonical
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fantasynamecreator.com/" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fantasynamecreator.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "How to Create Lore-Rich Names", "item": canonical }
              ]
            })}
          </script>
        </Helmet>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <h1 className="text-3xl font-fantasy text-fantasy-gold mb-2 text-center hidden">How to Create Lore-Rich Fantasy Names (That Actually Feel “Real”)</h1>
          <p className="italic text-sm text-gray-500 text-center mb-8">Published: August, 2025 | Read Time: 5 Minutes</p>

          <p>
            A truly great fantasy name doesn’t just sound good—it carries a story inside it. It hints at a culture’s values, a region’s geography, an old feud, a forgotten saint, or a curse nobody wants to speak aloud. Lore-rich names make readers feel like your world existed long before page one… and will keep existing after the final scene.
          </p>
          <p>
            This method works for characters, places, faction names, religions, and legendary items. If you like brainstorming fast, start with a name generator fantasy tool (like Fantasy Name Creator), then deepen your favorites using the Lore button.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">1) Start with the “job” of the name</h3>
          <p>
            Before you play with syllables, decide what the name must communicate. Write one sentence:
          </p>
          <p className="italic pl-4 border-l-2 border-fantasy-gold/50 my-2">“This is a ____ known for ____.”</p>

          <p className="font-semibold text-white mt-4">Examples:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
            <li>“This is a coastal city known for shipwreck salvagers.”</li>
            <li>“This is a knightly order known for burning heretics.”</li>
            <li>“This is a blade known for drinking oaths.”</li>
          </ul>
          <p className="mt-4">
            Now you’re not naming “a thing.” You’re naming a thing with reputation—and reputation is lore.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">2) Give each culture a tiny naming system (3–5 rules)</h3>
          <p>
            You don’t need a full invented language. You need consistency. Pick a few rules per culture and stick to them:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
            <li>preferred endings (-a / -ia / -elle vs. -or / -ek / -grim)</li>
            <li>favorite sounds (L/M/N for river folk; K/G/T for mountain clans)</li>
            <li>typical length (nobles longer, soldiers shorter)</li>
            <li>title habits (“Ser”, “Dame”, “Archivist”, “Storm-Warden”)</li>
            <li>name order (given + house; “of ____”; clan before given name)</li>
          </ul>
          <p className="mt-4">
            Readers learn patterns quickly. Once they do, every new name feels like proof your world is coherent.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">3) Use sound to imply meaning</h3>
          <p>
            People attach meaning to sound even when the word is invented. The classic bouba/kiki finding shows that across many languages, people match certain sounds with rounded vs. sharp shapes.
          </p>
          <blockquote className="border-l-4 border-fantasy-gold pl-4 italic text-gray-400 my-4 bg-black/20 p-4 rounded-r">
            “the association of the nonce word bouba with a round shape…”
          </blockquote>

          <p>
            Research on real first names also finds systematic sound differences between male and female names. For example, studies report that male names are more likely to be shorter and end in consonants, while female names more often contain “smaller” vowel sounds.
          </p>

          <p className="font-bold text-white mt-4">Practical takeaways you can apply:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
            <li><strong>hard consonants (k/t/g/d)</strong> → sharp, martial, harsh, “steel”</li>
            <li><strong>sonorants (l/m/n/r/v)</strong> → flowing, noble, ancient, lyrical</li>
            <li><strong>long vowels / extra syllables</strong> → ceremonial, courtly, religious</li>
            <li><strong>short clipped rhythm</strong> → frontier, soldier, criminal, practical</li>
          </ul>
          <p className="mt-4">
            You can break these expectations—but do it on purpose. A gentle-sounding villain name or a brutal-sounding saint name can be a great twist.
          </p>

          {/* Amazon Affiliate Box */}
          <div className="my-12">
            <AmazonAffiliate />
          </div>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">4) Add the “second layer”: public name vs. street name vs. enemy name</h3>
          <p>
            Lore often lives in what people call something when nobody important is listening. Give key names at least two forms:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
            <li>the official record name (formal)</li>
            <li>the everyday name (shortened)</li>
            <li>the rival’s name (insult, slur, grim nickname)</li>
          </ul>

          <div className="bg-black/40 p-4 rounded border border-white/5 my-4">
            <p className="font-mono text-sm"><span className="text-fantasy-gold">Example:</span> The Order of the Dawnward Oath (formal) → Dawnwarders (everyday) → Sun-dogs (enemy)</p>
          </div>
          <p>Instant history: propaganda, rivalry, social class, and power.</p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">5) Build names from lore blocks</h3>
          <p>
            Instead of inventing from scratch, combine small blocks that already carry meaning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Places</h4>
              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                <li><strong>geography + mood:</strong> Frostmere, Ashfell, Starford, Blackwater</li>
                <li><strong>founder + feature:</strong> Valenbridge, Kareth’s Gate</li>
                <li><strong>“relic word”:</strong> one archaic term locals no longer understand</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Factions</h4>
              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                <li><strong>virtue/goal + group noun:</strong> Covenant of Steel, Silent Ledger</li>
                <li><strong>symbol + title:</strong> Ashen Hand, Mirror Court, Stag Banner</li>
                <li><strong>place identity:</strong> Wolves of Harrowpeak, Guild of Kestrel Quay</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Religions</h4>
              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                <li><strong>deity title + path:</strong> Way of the Hearth-Mother, Church of the Unblinking Sun</li>
                <li><strong>doctrine + text:</strong> Spiral Testament, Iron Catechism</li>
                <li><strong>split faiths:</strong> old name vs. reform name</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Items</h4>
              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                <li><strong>action + consequence:</strong> Oathbreaker, Truth-Drinker, King’s Silence</li>
                <li><strong>material + epithet:</strong> Obsidian Crown, Silverwake Blade</li>
                <li><strong>“of ____”:</strong> of the Ninth Tide, of Winter’s Debt</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            This is why lore-rich names feel authored: they contain meaning by design.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">6) Use generators the writerly way (shortlist → Lore → connect the dots)</h3>
          <p>
            A fantasy name maker works best as a spark engine. Try this workflow:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
            <li>Generate 10</li>
            <li>Shortlist 2–3 that sound right</li>
            <li>Click Lore on finalists</li>
            <li>Keep the name whose lore hook fits—or steal the lore and attach it to a better-sounding name</li>
          </ol>
          <p className="mt-4">
            This is also how you link your world together. Use a faction name generator to get faction names, then jump to a religion name generator for the faith they claim to follow, and finish with a fantasy object name generator for the relic they’re fighting over. Suddenly your setting has gravity: everything connects.
          </p>

          <h3 className="text-fantasy-gold font-fantasy text-2xl mt-8 mb-4">7) A quick “lived-in” checklist</h3>
          <p>Before you lock a name:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 font-medium">
            <li>can someone shout it in a battle?</li>
            <li>can a bartender say it casually?</li>
            <li>would locals shorten it?</li>
            <li>what do enemies call it?</li>
            <li>does it match your culture’s 3–5 rules?</li>
          </ul>
          <p className="mt-4">
            If it survives those questions, it’s not just a label. It’s a piece of your world.
          </p>

          <hr className="my-10 border-white/10" />

          {/* Sources Section */}
          <div className="bg-black/30 p-6 rounded-lg border border-white/5 text-sm text-gray-400">
            <h4 className="text-fantasy-gold font-bold mb-3 uppercase tracking-wider text-xs">Sources and further reading</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://royalsocietypublishing.org/doi/10.1098/rstb.2017.0136" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline decoration-dotted">
                  Royal Society Publishing (Bouba/Kiki effect and sound symbolism).
                </a>
              </li>
              <li>
                <a href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0126809" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline decoration-dotted">
                  Sidhu & Pexman (2015), What’s in a Name? Sound Symbolism and Gender in First Names (PLOS ONE).
                </a>
              </li>
              <li>
                <a href="https://www.degruyterbrill.com/document/doi/10.1515/ling-2020-0027/html?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline decoration-dotted">
                  Ackermann (2021), cross-linguistic work on gender and name phonology (De Gruyter).
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 p-8 bg-card-gradient rounded-xl border border-white/10 shadow-lg">
            <h2 className="text-2xl font-fantasy text-fantasy-gold mb-6">Continue Your Journey</h2>
            <div className="flex flex-col space-y-3">
              <Link to="/blog/why-names-matter" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → Why Names Matter in Fantasy Worlds?
              </Link>
              <Link to="/blog/tips-for-worldbuilding" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → 5 Tips for Worldbuilding and Creating a Cohesive World
              </Link>
              <Link to="/blog/gender-specific-names" onClick={() => window.scrollTo(0, 0)} className="text-lg text-fantasy-gold hover:text-white transition-colors underline decoration-dotted">
                → Fantasy Female vs. Male Names: Crafting Distinctive Identities
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="my-12 bg-gradient-to-r from-fantasy-gold/10 to-fantasy-gold/5 p-8 rounded-xl border border-fantasy-gold/30 text-center">
            <h3 className="text-2xl font-fantasy text-fantasy-gold mb-4">Ready to Create Your Fantasy World?</h3>
            <p className="text-gray-300 mb-6">Use our generators to create unique names for characters, worlds, factions, religions, and items—then unlock instant lore to bring them to life.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/character" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg">Generate Character Names</Link>
              <Link to="/world" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-fantasy-gold hover:bg-white text-fantasy-dark font-bold rounded-lg transition shadow-lg">Generate World Names</Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition text-center">← Back to Blog</Link>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-fantasy-gold hover:text-white transition font-fantasy text-lg">← Home</Link>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
