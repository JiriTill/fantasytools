/**
 * Sitemap Generator Script
 * Generates sitemap.xml at build time with proper lastmod dates
 * 
 * Run: node scripts/generate-sitemap.js
 * Outputs: client/public/sitemap.xml
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://www.fantasynamecreator.com';
const OUTPUT_PATH = path.join(__dirname, '..', 'client', 'public', 'sitemap.xml');

// Get git last commit date for a file, fallback to today
function getLastModified(filePath) {
    try {
        const fullPath = path.join(__dirname, '..', 'client', 'src', 'pages', filePath);
        if (fs.existsSync(fullPath)) {
            const gitDate = execSync(`git log -1 --format=%aI -- "${fullPath}"`, {
                encoding: 'utf8',
                cwd: path.join(__dirname, '..')
            }).trim();
            if (gitDate) {
                return gitDate.split('T')[0]; // Return YYYY-MM-DD
            }
        }
    } catch (e) {
        // Git command failed, use file mtime
        try {
            const fullPath = path.join(__dirname, '..', 'client', 'src', 'pages', filePath);
            if (fs.existsSync(fullPath)) {
                const stats = fs.statSync(fullPath);
                return stats.mtime.toISOString().split('T')[0];
            }
        } catch (e2) {
            // Fallback to today
        }
    }
    return new Date().toISOString().split('T')[0];
}

// Page definitions with their source files, priorities, and change frequencies
const pages = {
    // Core pages (highest priority)
    core: [
        { url: '/', file: 'Home.jsx', priority: 1.0, changefreq: 'weekly' },
    ],

    // Generator pages (very high priority - main product)
    generators: [
        { url: '/character', file: 'Character.jsx', priority: 0.9, changefreq: 'weekly' },
        { url: '/world', file: 'World.jsx', priority: 0.9, changefreq: 'weekly' },
        { url: '/faction', file: 'Faction.jsx', priority: 0.9, changefreq: 'weekly' },
        { url: '/religion', file: 'Religion.jsx', priority: 0.9, changefreq: 'weekly' },
        { url: '/item', file: 'Item.jsx', priority: 0.9, changefreq: 'weekly' },
        { url: '/dynamic', file: 'Dynamic.jsx', priority: 0.8, changefreq: 'weekly' },
    ],

    // Hub pages
    hubs: [
        { url: '/blog', file: 'Blog.jsx', priority: 0.8, changefreq: 'weekly' },
        { url: '/ideas', file: 'Ideas.jsx', priority: 0.8, changefreq: 'weekly' },
    ],

    // Blog posts
    blog: [
        { url: '/blog/gender-neutral-names', file: 'GenderNeutralNames.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/why-names-matter', file: 'WhyNamesMatter.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/tips-for-worldbuilding', file: 'FiveTipsForWorldbuilding.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/lore-rich-names', file: 'HowToCreateLoreRichNames.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/gender-specific-names', file: 'FemalevsMale.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/create-faiths-cults-orders', file: 'CreateFaiths.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/naming-systems-writers-use', file: 'NamingSystems.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/faction-names-board-games', file: 'FactionNamesBoardGames.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/blog/religion-myth-tabletop-games', file: 'ReligionMythTabletop.jsx', priority: 0.7, changefreq: 'monthly' },
    ],

    // Ideas posts
    ideas: [
        { url: '/ideas/15-fantasy-religions', file: 'ideas/FifteenFantasyReligions.jsx', priority: 0.7, changefreq: 'monthly' },
        { url: '/ideas/10-fantasy-quest-hooks', file: 'ideas/FantasyQuestHooks.jsx', priority: 0.7, changefreq: 'monthly' },
    ],

    // Utility pages
    utility: [
        { url: '/faq', file: 'FAQ.jsx', priority: 0.6, changefreq: 'monthly' },
        { url: '/about', file: 'About.jsx', priority: 0.5, changefreq: 'monthly' },
        { url: '/contact', file: 'Contact.jsx', priority: 0.5, changefreq: 'monthly' },
    ],

    // Legal pages (lowest priority)
    legal: [
        { url: '/privacy', file: 'Privacy.jsx', priority: 0.3, changefreq: 'yearly' },
        { url: '/terms', file: 'Terms.jsx', priority: 0.3, changefreq: 'yearly' },
    ],
};

function generateSitemap() {
    console.log('🗺️  Generating sitemap.xml...\n');

    let urlEntries = [];
    let totalUrls = 0;

    // Process all page categories
    for (const [category, categoryPages] of Object.entries(pages)) {
        console.log(`Processing ${category}...`);

        for (const page of categoryPages) {
            const lastmod = getLastModified(page.file);

            urlEntries.push({
                loc: `${SITE_URL}${page.url}`,
                lastmod: lastmod,
                changefreq: page.changefreq,
                priority: page.priority
            });

            totalUrls++;
            console.log(`  ✓ ${page.url} (lastmod: ${lastmod})`);
        }
    }

    // Generate XML
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    const urlsetClose = '</urlset>\n';

    const urlsXml = urlEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n');

    const sitemap = xmlHeader + urlsetOpen + urlsXml + '\n' + urlsetClose;

    // Write to file
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');

    console.log(`\n✅ Sitemap generated successfully!`);
    console.log(`   📁 Output: ${OUTPUT_PATH}`);
    console.log(`   📊 Total URLs: ${totalUrls}`);
    console.log(`   📏 File size: ${Buffer.byteLength(sitemap, 'utf8')} bytes`);

    // Validate
    if (totalUrls > 50000) {
        console.warn('\n⚠️  Warning: Sitemap exceeds 50,000 URLs. Consider using a sitemap index.');
    }
    if (Buffer.byteLength(sitemap, 'utf8') > 50 * 1024 * 1024) {
        console.warn('\n⚠️  Warning: Sitemap exceeds 50MB. Consider using a sitemap index.');
    }
}

// Run the generator
generateSitemap();
