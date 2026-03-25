#!/bin/bash

# This script will create basic HTML structure for all pages
# We'll use the React build output which has the content, and just need to make it static

echo "Copying build output from React app..."
cp -r /app/frontend/build/* /app/static-site/ 2>/dev/null || echo "No React build found, creating from scratch"

echo "Creating HTML pages from scratch..."
# Create a simple index page to test
cat > /app/static-site/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Official website of Samaria Gorge National Park, Crete. Europe's longest gorge, a UNESCO Biosphere Reserve.">
    <title>Samaria Gorge National Park — Official Website</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <!-- Navigation will be injected by JS -->
    <nav id="main-nav"></nav>
    
    <!-- Hero Section -->
    <section class="relative" style="height: 100vh; min-height: 640px; max-height: 900px; overflow: hidden; display: flex; align-items: flex-end;">
        <div class="absolute inset-0 w-full" style="height: 120%; top: -10%;">
            <img src="https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg" 
                 alt="Samaria Gorge dramatic landscape" 
                 class="parallax-image w-full h-full object-cover">
        </div>
        
        <div class="absolute inset-0" style="background: linear-gradient(180deg, hsla(155, 30%, 8%, 0.3) 0%, hsla(155, 25%, 10%, 0.5) 50%, hsla(155, 20%, 6%, 0.85) 100%);"></div>
        
        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <div class="max-w-3xl">
                <div class="mb-5">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-body" 
                          style="background: hsla(35, 65%, 42%, 0.2); color: hsl(38, 60%, 88%); border: 1px solid hsla(35, 65%, 42%, 0.35);">
                        🇬🇷 UNESCO Biosphere Reserve · Crete, Greece
                    </span>
                </div>
                
                <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-primary-foreground leading-tight hero-heading mb-6">
                    Samaria
                    <span class="block italic font-normal text-4xl sm:text-5xl lg:text-6xl" style="color: hsl(38, 60%, 88%);">Gorge</span>
                </h1>
                
                <p class="text-base sm:text-lg text-primary-foreground/80 font-body leading-relaxed max-w-xl mb-8">
                    Europe's longest gorge. 16 kilometres of ancient limestone, wild Cretan beauty,
                    and the legendary Kri-Kri mountain goat — home to one of the world's most breathtaking hikes.
                </p>
                
                <div class="flex flex-wrap gap-4">
                    <a href="The-Hike.html" class="btn btn-accent btn-lg">
                        Explore the Hike
                        <svg class="w-4 h-4 ml-1 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <a href="How-to-get-there.html" class="btn btn-outline btn-lg">
                        Plan Your Visit
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Content sections would go here -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="font-display font-bold text-4xl text-center mb-12">Welcome to Samaria Gorge</h2>
            <p class="text-center text-lg max-w-3xl mx-auto">
                More content will be added here. The site structure is ready!
            </p>
        </div>
    </section>
    
    <!-- Footer will be injected by JS -->
    <footer id="main-footer"></footer>
    
    <script src="assets/main.js"></script>
</body>
</html>
EOF

echo "✅ Basic HTML structure created"
echo "📍 Location: /app/static-site/index.html"
