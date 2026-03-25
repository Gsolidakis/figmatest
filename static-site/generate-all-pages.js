const fs = require('fs');

// Shared navigation HTML
const navbar = `
<header class="fixed top-0 left-0 right-0 z-50 nav-glass" id="main-header">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <a href="index.html" class="flex items-center gap-3">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/15 border border-primary-foreground/30">
          <span class="text-primary-foreground font-bold text-xl">🐐</span>
        </div>
        <div>
          <div class="font-display font-bold text-base leading-tight text-primary-foreground">Samaria Gorge</div>
          <div class="text-xs font-body text-primary-foreground/70">National Park · Crete</div>
        </div>
      </a>
      
      <button id="mobile-toggle" class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-primary-foreground hover:bg-primary-foreground/10">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <nav class="hidden lg:flex items-center gap-2">
        <a href="The-Hike.html" class="px-3 py-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">The Hike</a>
        <a href="FAQ.html" class="px-3 py-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">FAQ</a>
        <a href="Gallery.html" class="px-3 py-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Gallery</a>
        <a href="Live-camera.html" class="px-3 py-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Live Camera</a>
        <div class="w-px h-4 mx-1 bg-primary-foreground/25"></div>
        <a href="How-to-get-there.html" class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/15 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Getting There
        </a>
        <button id="more-dropdown-btn" class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-primary-foreground/65 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
          More
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </nav>
    </div>
  </div>
  
  <div id="mobile-menu" class="mobile-menu lg:hidden">
    <div class="px-4 py-6 space-y-2">
      <a href="The-Hike.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">The Hike</a>
      <a href="FAQ.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">FAQ</a>
      <a href="Gallery.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">Gallery</a>
      <a href="Live-camera.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">Live Camera</a>
      <a href="How-to-get-there.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">Getting There</a>
      <a href="BookVilla.html" class="block px-3 py-2 rounded-lg text-base font-medium hover:bg-muted">Book Villa</a>
    </div>
  </div>
  
  <div id="more-dropdown" class="dropdown">
    <a href="BookVilla.html" class="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted">
      <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      <div>
        <div class="font-medium text-sm">Book Villa</div>
        <div class="text-xs text-muted-foreground">Stay near the gorge</div>
      </div>
    </a>
  </div>
</header>
`;

// Shared footer HTML
const footer = `
<footer class="bg-primary text-primary-foreground mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="font-display font-bold text-lg mb-4">Samaria Gorge</h3>
        <p class="text-primary-foreground/70 text-sm">Europe's longest gorge. A UNESCO Biosphere Reserve in the White Mountains of Crete.</p>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-4">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="The-Hike.html" class="text-primary-foreground/70 hover:text-primary-foreground">The Hike</a></li>
          <li><a href="How-to-get-there.html" class="text-primary-foreground/70 hover:text-primary-foreground">Getting There</a></li>
          <li><a href="FAQ.html" class="text-primary-foreground/70 hover:text-primary-foreground">FAQ</a></li>
          <li><a href="Gallery.html" class="text-primary-foreground/70 hover:text-primary-foreground">Gallery</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-sm mb-4">Contact</h4>
        <p class="text-primary-foreground/70 text-sm">Samaria National Park<br>Omalos, Crete, Greece</p>
      </div>
    </div>
    <div class="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
      <p>&copy; 2025 Samaria Gorge National Park. <a href="Disclaimer.html" class="hover:text-primary-foreground">Disclaimer</a></p>
    </div>
  </div>
</footer>
`;

// Page template function
function createPage(title, description, content, canonical) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <title>${title}</title>
    <link rel="canonical" href="https://www.samaria-gorge.gr/${canonical}">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body class="bg-background">
    ${navbar}
    <main class="pt-28">
        ${content}
    </main>
    ${footer}
    <script src="assets/main.js"></script>
</body>
</html>`;
}

// Generate all pages
console.log("Generating HTML pages...");

// Just output simple message - actual file creation will be done via bash
console.log("Template functions ready");
