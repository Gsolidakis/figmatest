/**
 * postbuild.js
 * ─────────────────────────────────────────────────────────────
 * After `npm run build` produces build/index.html, this script
 * copies it to every page URL so that each .html file exists
 * independently on the server — no .htaccess or redirect needed.
 *
 * Each file IS the full React app. When the browser loads e.g.
 * The-Hike.html, the React Router sees the URL and renders the
 * correct page automatically.
 * ─────────────────────────────────────────────────────────────
 */

const fs   = require('fs');
const path = require('path');

const buildDir  = path.join(__dirname, '..', 'build');
const indexHtml = path.join(buildDir, 'index.html');

// Every page URL that exists in the sitemap / React Router
const pages = [
  'Home.html',
  'The-Hike.html',
  'How-to-get-there.html',
  'FAQ.html',
  'Gallery.html',
  'Live-camera.html',
  'Live-Camera-Omalos.html',
  'Live-Camera-Samaria.html',
  'BookVilla.html',
  'Travel-Agencies-Chania.html',
  'Travel-Agencies-Rethymnon.html',
  'Travel-Agencies-Heraklion.html',
  'Disclaimer.html',
  'NenDirections.html',
];

const content = fs.readFileSync(indexHtml, 'utf8');

pages.forEach(page => {
  fs.writeFileSync(path.join(buildDir, page), content);
  console.log(`  ✓  ${page}`);
});

console.log(`\n  ${pages.length} HTML files created in /build — ready to upload.\n`);
