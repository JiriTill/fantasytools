/**
 * Static Meta Tag Generator for SEO
 * 
 * This script generates static HTML pages with proper meta tags for each route.
 * Search engines (especially Bing) can then see proper content without JavaScript.
 * 
 * Strategy: Generate a basic HTML with correct meta tags that redirects to the SPA
 * 
 * Run: node scripts/generate-meta-pages.js
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'client', 'public', 'seo');

// Page definitions with their SEO metadata
const pages = [
    // Generators
    {
        path: 'character',
        title: 'Fantasy Character Name Generator | Fantasy Name Creator',
        description: 'Generate unique fantasy character names for your RPG campaigns, novels, and games. AI-powered with instant lore and backstory generation.',
        canonical: 'https://www.fantasynamecreator.com/character'
    },
    {
        path: 'world',
        title: 'Fantasy World Name Generator | Fantasy Name Creator',
        description: 'Create immersive world, city, and location names for your fantasy settings. Perfect for RPGs, novels, and worldbuilding projects.',
        canonical: 'https://www.fantasynamecreator.com/world'
    },
    {
        path: 'faction',
        title: 'Fantasy Faction Name Generator | Fantasy Name Creator',
        description: 'Generate unique faction, guild, and organization names. Create memorable groups for your RPG campaigns and fantasy stories.',
        canonical: 'https://www.fantasynamecreator.com/faction'
    },
    {
        path: 'religion',
        title: 'Fantasy Religion Name Generator | Fantasy Name Creator',
        description: 'Create unique religion, cult, and deity names for your fantasy world. Build believable faiths and pantheons for RPGs and novels.',
        canonical: 'https://www.fantasynamecreator.com/religion'
    },
    {
        path: 'item',
        title: 'Fantasy Item Name Generator | Fantasy Name Creator',
        description: 'Generate unique magic item, weapon, and artifact names. Create legendary loot for your D&D campaigns and fantasy games.',
        canonical: 'https://www.fantasynamecreator.com/item'
    },
    {
        path: 'dynamic',
        title: 'Custom Fantasy Name Generator | Fantasy Name Creator',
        description: 'Create truly unique fantasy names from your custom inputs. Describe context, culture and tone to generate evocative names.',
        canonical: 'https://www.fantasynamecreator.com/dynamic'
    },
    // Blog posts
    {
        path: 'blog/gender-neutral-names',
        title: 'Gender-Neutral Fantasy Names and Genderfluid Fantasy Names: A Respectful Guide',
        description: 'A practical, respectful guide to creating gender-neutral and genderfluid fantasy names for writers and DMs.',
        canonical: 'https://www.fantasynamecreator.com/blog/gender-neutral-names'
    },
    {
        path: 'blog/why-names-matter',
        title: 'Why Names Matter in Fantasy Worlds | Fantasy Name Creator',
        description: 'Discover how the right name can transform your characters, worlds, and factions from good to unforgettable.',
        canonical: 'https://www.fantasynamecreator.com/blog/why-names-matter'
    },
    {
        path: 'blog/tips-for-worldbuilding',
        title: '5 Tips for Worldbuilding | Fantasy Name Creator',
        description: 'Learn essential worldbuilding techniques to create immersive, believable fantasy settings that captivate your audience.',
        canonical: 'https://www.fantasynamecreator.com/blog/tips-for-worldbuilding'
    },
    {
        path: 'blog/lore-rich-names',
        title: 'How to Create Lore-Rich Names | Fantasy Name Creator',
        description: 'Master the art of crafting names that carry weight, history, and meaning in your fantasy narratives.',
        canonical: 'https://www.fantasynamecreator.com/blog/lore-rich-names'
    },
    {
        path: 'blog/gender-specific-names',
        title: 'Fantasy Female vs. Male Names | Fantasy Name Creator',
        description: 'Explore how to create culturally-sensitive, memorable names that reflect gender identity in fantasy worlds.',
        canonical: 'https://www.fantasynamecreator.com/blog/gender-specific-names'
    },
    {
        path: 'blog/create-faiths-cults-orders',
        title: 'Create Faiths, Cults, Orders & Pantheons | Fantasy Name Creator',
        description: 'Build believable religions, holy orders, and cults. A guide to naming, designing beliefs, and creating lore.',
        canonical: 'https://www.fantasynamecreator.com/blog/create-faiths-cults-orders'
    },
    {
        path: 'blog/naming-systems-writers-use',
        title: '7 Naming Systems Writers Use | Fantasy Name Creator',
        description: 'Discover the 7 naming systems fantasy writers use to create consistent, realistic names for clans, guilds, and lineages.',
        canonical: 'https://www.fantasynamecreator.com/blog/naming-systems-writers-use'
    },
    {
        path: 'blog/faction-names-board-games',
        title: 'Faction Names for Board Games | Fantasy Name Creator',
        description: 'Learn practical naming rules and templates to create memorable faction names for board games.',
        canonical: 'https://www.fantasynamecreator.com/blog/faction-names-board-games'
    },
    {
        path: 'blog/religion-myth-tabletop-games',
        title: 'Religion and Myth in Tabletop Games | Fantasy Name Creator',
        description: 'A guide to creating mythic yet playable names for religions, cults, and pantheons in TTRPGs.',
        canonical: 'https://www.fantasynamecreator.com/blog/religion-myth-tabletop-games'
    },
    // Ideas
    {
        path: 'ideas/15-fantasy-religions',
        title: '15 Fantasy Religions (Free to Use) | Fantasy Name Creator',
        description: '15 ready-to-use fantasy religions with lore, beliefs, and naming conventions for your RPG or novel.',
        canonical: 'https://www.fantasynamecreator.com/ideas/15-fantasy-religions'
    },
    {
        path: 'ideas/10-fantasy-quest-hooks',
        title: '10 Fantasy Quest Hooks with Twists | Fantasy Name Creator',
        description: '10 unique fantasy quest hooks with unexpected twists to inspire your next RPG adventure or story.',
        canonical: 'https://www.fantasynamecreator.com/ideas/10-fantasy-quest-hooks'
    },
    // Hub pages
    {
        path: 'blog',
        title: 'Fantasy Worldbuilding Blog | Fantasy Name Creator',
        description: 'Expert tips, guides, and inspiration for fantasy writers, game masters, and worldbuilders.',
        canonical: 'https://www.fantasynamecreator.com/blog'
    },
    {
        path: 'ideas',
        title: 'Fantasy Ideas & Lists | Fantasy Name Creator',
        description: 'Free lists, ideas, and inspiration for your fantasy RPG campaigns, novels, and worldbuilding projects.',
        canonical: 'https://www.fantasynamecreator.com/ideas'
    },
    // Utility pages
    {
        path: 'faq',
        title: 'FAQ | Fantasy Name Creator',
        description: 'Frequently asked questions about Fantasy Name Creator, our generators, and how to use them.',
        canonical: 'https://www.fantasynamecreator.com/faq'
    },
    {
        path: 'about',
        title: 'About | Fantasy Name Creator',
        description: 'Learn about Fantasy Name Creator and our mission to help worldbuilders create amazing fantasy names.',
        canonical: 'https://www.fantasynamecreator.com/about'
    },
    {
        path: 'contact',
        title: 'Contact | Fantasy Name Creator',
        description: 'Get in touch with the Fantasy Name Creator team. We\'d love to hear from you!',
        canonical: 'https://www.fantasynamecreator.com/contact'
    },
    {
        path: 'privacy',
        title: 'Privacy Policy | Fantasy Name Creator',
        description: 'Privacy policy for Fantasy Name Creator.',
        canonical: 'https://www.fantasynamecreator.com/privacy'
    },
    {
        path: 'terms',
        title: 'Terms of Service | Fantasy Name Creator',
        description: 'Terms of service for Fantasy Name Creator.',
        canonical: 'https://www.fantasynamecreator.com/terms'
    }
];

function generateMetaPage(page) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <link rel="canonical" href="${page.canonical}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${page.canonical}">
    <meta property="og:site_name" content="Fantasy Name Creator">
    <meta property="og:image" content="https://www.fantasynamecreator.com/images/og-default.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    
    <!-- Bing verification -->
    <meta name="msvalidate.01" content="8FDB6F01D161E89C25223C99A3F816EA">
    
    <!-- This is a lightweight page for search engine crawlers -->
    <!-- The actual content is rendered by the React SPA -->
    <script>
        // Redirect to the SPA after a brief moment (for JS-enabled browsers)
        // This allows crawlers to see the meta tags first
    </script>
</head>
<body>
    <noscript>
        <h1>${page.title}</h1>
        <p>${page.description}</p>
        <p><a href="${page.canonical}">Visit this page</a></p>
    </noscript>
    
    <div id="content">
        <h1>${page.title}</h1>
        <p>${page.description}</p>
        <p>Loading...</p>
    </div>
</body>
</html>`;
}

function generatePages() {
    console.log('📄 Generating SEO meta pages...\n');

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let count = 0;

    for (const page of pages) {
        const html = generateMetaPage(page);
        const filePath = path.join(OUTPUT_DIR, `${page.path.replace(/\//g, '-')}.html`);

        // Ensure parent directories exist
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`  ✓ ${page.path}`);
        count++;
    }

    console.log(`\n✅ Generated ${count} SEO meta pages in ${OUTPUT_DIR}`);
}

generatePages();
