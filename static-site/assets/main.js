// ==========================================
// SAMARIA GORGE - MAIN JAVASCRIPT
// All interactive functionality
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // === NAVIGATION ===
  initNavigation();
  
  // === TABS ===
  initTabs();
  
  // === ACCORDION (FAQ) ===
  initAccordion();
  
  // === GALLERY LIGHTBOX ===
  initGallery();
  
  // === GALLERY FILTERS ===
  initGalleryFilters();
  
  // === PARALLAX HERO ===
  initParallax();
  
  // === SCROLL TO TOP ===
  window.scrollTo(0, 0);
});

// === NAVIGATION FUNCTIONALITY ===
function initNavigation() {
  const nav = document.querySelector('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const moreDropdownBtn = document.getElementById('more-dropdown-btn');
  const moreDropdown = document.getElementById('more-dropdown');
  let scrolled = false;
  
  // Scroll behavior
  window.addEventListener('scroll', function() {
    const isScrolled = window.scrollY > 60;
    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/Home.html';
    
    if (isScrolled && !scrolled) {
      scrolled = true;
      nav.classList.remove('nav-glass');
      nav.classList.add('nav-glass-light', 'nav-scrolled');
    } else if (!isScrolled && scrolled && isHome) {
      scrolled = false;
      nav.classList.remove('nav-glass-light', 'nav-scrolled');
      nav.classList.add('nav-glass');
    }
  });
  
  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // Desktop dropdown
  if (moreDropdownBtn && moreDropdown) {
    moreDropdownBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      moreDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!moreDropdown.contains(e.target) && !moreDropdownBtn.contains(e.target)) {
        moreDropdown.classList.remove('active');
      }
    });
    
    // Close dropdown when clicking a link
    const dropdownLinks = moreDropdown.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        moreDropdown.classList.remove('active');
      });
    });
  }
  
  // Set initial nav state
  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/Home.html';
  if (!isHome || window.scrollY > 60) {
    nav.classList.remove('nav-glass');
    nav.classList.add('nav-glass-light', 'nav-scrolled');
    scrolled = true;
  }
}

// === TABS FUNCTIONALITY ===
function initTabs() {
  const tabsContainers = document.querySelectorAll('[data-tabs]');
  
  tabsContainers.forEach(container => {
    const triggers = container.querySelectorAll('.tabs-trigger');
    const contents = container.querySelectorAll('.tabs-content');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetValue = this.getAttribute('data-value');
        
        // Remove active class from all triggers and contents
        triggers.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger
        this.classList.add('active');
        
        // Show corresponding content
        const targetContent = container.querySelector(`[data-content="${targetValue}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

// === ACCORDION FUNCTIONALITY ===
function initAccordion() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // Toggle active state
      this.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
}

// === GALLERY FUNCTIONALITY ===
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const title = this.getAttribute('data-title');
      const tag = this.getAttribute('data-tag');
      const desc = this.getAttribute('data-desc');
      
      if (img) {
        openLightbox(img.src, title, tag, desc);
      }
    });
  });
}

function openLightbox(src, title, tag, desc) {
  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full text-primary-foreground hover:bg-card/40 transition-colors" style="background-color: hsla(var(--card), 0.2);" onclick="this.parentElement.remove()">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div onclick="event.stopPropagation()" class="max-w-4xl w-full">
      <img src="${src}" alt="${title}" class="w-full max-h-screen object-contain rounded-2xl shadow-elevated" style="max-height: 80vh;">
      <div class="mt-4 text-center">
        <span class="badge bg-primary text-primary-foreground border-0 mb-2">${tag}</span>
        <div class="font-display font-semibold text-xl text-primary-foreground">${title}</div>
        <div class="text-primary-foreground/65 font-body text-sm mt-1">${desc}</div>
      </div>
    </div>
  `;
  
  lightbox.addEventListener('click', function() {
    this.remove();
  });
  
  document.body.appendChild(lightbox);
}

// === GALLERY FILTERS ===
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items
      galleryItems.forEach(item => {
        const itemTag = item.getAttribute('data-tag');
        
        if (filter === 'All' || itemTag === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// === PARALLAX HERO ===
function initParallax() {
  const heroImage = document.querySelector('.parallax-image');
  
  if (heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      const parallaxSpeed = 0.35;
      heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }, { passive: true });
  }
}

// === UTILITY: SCROLL TO TOP ON NAVIGATION ===
// This is handled by default browser behavior for anchor links
