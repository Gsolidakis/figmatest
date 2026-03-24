/* ============================================================
   SAMARIA GORGE — Shared JavaScript
   ============================================================ */

// === SHARED HTML FRAGMENTS ===================================

const NAV_HTML = `
<div class="container">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C12 4 9 7 9 11c0 2 1 3.5 2 4.5L8 28h16l-3-12.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M13 8c-2-1-4-0.5-5 1.5M19 8c2-1 4-0.5 5 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="16" cy="13" r="2.5" fill="currentColor"/>
        </svg>
      </div>
      <div>
        <div class="nav-logo-name">Samaria Gorge</div>
        <div class="nav-logo-sub">National Park &middot; Crete</div>
      </div>
    </a>

    <nav class="nav-links">
      <a href="index.html" class="nav-link" data-nav="home">Home</a>
      <a href="The-Hike.html" class="nav-link" data-nav="hike">The Hike</a>
      <a href="Live-camera.html" class="nav-link" data-nav="camera">Live Cameras</a>
      <a href="Gallery.html" class="nav-link" data-nav="gallery">Gallery</a>
      <a href="FAQ.html" class="nav-link" data-nav="faq">FAQ</a>
      <div class="nav-sep"></div>
      <a href="How-to-get-there.html" class="nav-link nav-getting-there" data-nav="getting-there">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Getting There
      </a>
      <div class="nav-dropdown" id="nav-dropdown">
        <button class="nav-more nav-link" id="more-trigger" aria-expanded="false">
          More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="nav-dropdown-menu" id="more-menu" role="menu">
          <a href="BookVilla.html" class="nav-dropdown-item" data-nav="villa">
            <div class="nav-dropdown-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <div class="nav-dropdown-label">Book a Villa</div>
              <div class="nav-dropdown-desc">800m from the entrance &middot; &euro;70/night</div>
            </div>
          </a>
        </div>
      </div>
    </nav>

    <div class="nav-ctas">
      <a href="BookVilla.html" class="btn btn-sm btn-outline">Book Villa</a>
      <a href="How-to-get-there.html" class="btn btn-sm btn-primary">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Getting There
      </a>
    </div>

    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <svg id="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      <svg id="icon-close" class="hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
</div>

<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <nav>
    <a href="index.html" data-nav="home">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>Home</a>
    <a href="The-Hike.html" data-nav="hike">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>The Hike</a>
    <a href="Live-camera.html" data-nav="camera">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>Live Cameras</a>
    <a href="Gallery.html" data-nav="gallery">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>Gallery</a>
    <a href="FAQ.html" data-nav="faq">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>FAQ</a>
    <a href="How-to-get-there.html" class="mobile-highlight" data-nav="getting-there">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Getting There</a>
    <a href="BookVilla.html" data-nav="villa">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Book a Villa</a>
    <div class="mobile-actions">
      <a href="BookVilla.html" class="btn btn-outline">Book Villa</a>
      <a href="How-to-get-there.html" class="btn btn-primary">Getting There</a>
    </div>
  </nav>
</div>
`;

const FOOTER_HTML = `
<div class="footer-wave" style="background:var(--bg)">
  <svg viewBox="0 0 1440 48" preserveAspectRatio="none" fill="var(--fg)">
    <path d="M0 48V20C240 0 480 40 720 20S1200 0 1440 20V48H0z"/>
  </svg>
</div>
<div class="container">
  <div class="footer-inner">
    <div>
      <a href="index.html" class="nav-logo" style="margin-bottom:0">
        <div class="nav-logo-icon" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15)">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 4C12 4 9 7 9 11c0 2 1 3.5 2 4.5L8 28h16l-3-12.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
            <path d="M13 8c-2-1-4-0.5-5 1.5M19 8c2-1 4-0.5 5 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="16" cy="13" r="2.5" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <div class="nav-logo-name" style="color:rgba(247,244,239,.9)">Samaria Gorge</div>
          <div class="nav-logo-sub" style="color:rgba(247,244,239,.45)">National Park &middot; Crete</div>
        </div>
      </a>
      <p class="footer-brand-desc">Europe&rsquo;s longest gorge. A UNESCO Biosphere Reserve nestled in the White Mountains of western Crete.</p>
      <div class="footer-status">Open May &ndash; October</div>
    </div>
    <div>
      <div class="footer-heading">Explore</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="The-Hike.html">The Hike</a>
        <a href="How-to-get-there.html">Getting There</a>
        <a href="Live-camera.html">Live Cameras</a>
        <a href="Gallery.html">Gallery</a>
        <a href="BookVilla.html">Book Villa</a>
        <a href="FAQ.html">FAQ</a>
        <a href="Disclaimer.html">Disclaimer</a>
      </div>
    </div>
    <div>
      <div class="footer-heading">Visit Info</div>
      <div class="footer-info-item">
        <div class="footer-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div><div class="footer-info-label">Location</div><div class="footer-info-sub">Xyloskalo, Omalos Plateau<br>Chania, Crete, Greece</div></div>
      </div>
      <div class="footer-info-item">
        <div class="footer-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div><div class="footer-info-label">Opening Hours</div><div class="footer-info-sub">7:00 AM &ndash; 1:00 PM (full hike)<br>Until 3:00 PM (partial)</div></div>
      </div>
      <div class="footer-info-item">
        <div class="footer-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <div><div class="footer-info-label">Season</div><div class="footer-info-sub">1 May &ndash; 31 October</div></div>
      </div>
    </div>
    <div>
      <div class="footer-heading">Contact</div>
      <div class="footer-links">
        <a href="mailto:info@samaria-gorge.gr">info@samaria-gorge.gr</a>
        <a href="https://goo.gl/maps/7zTq4ZDxpxXWWYB68" target="_blank" rel="noopener">Google Maps Directions</a>
      </div>
      <div style="margin-top:1.25rem;font-size:.72rem;color:rgba(247,244,239,.35)">Entry fee accepted by card and cash</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; ${new Date().getFullYear()} Samaria Gorge National Park &middot; All rights reserved</span>
    <div class="footer-bottom-links">
      <a href="https://whc.unesco.org/en/tentativelists/5865/" target="_blank" rel="noopener">UNESCO Biosphere Reserve</a>
      <a href="Disclaimer.html">Disclaimer</a>
    </div>
  </div>
</div>
`;

// === INIT ====================================================
document.addEventListener('DOMContentLoaded', function () {

  // Inject nav
  var navEl = document.getElementById('navbar');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject footer
  var footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // === ACTIVE NAV LINK ======================================
  var page = document.body.dataset.page || 'home';
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    if (el.dataset.nav === page) el.classList.add('active');
  });

  // === NAV STATE (transparent/scrolled) =====================
  var navbar = document.getElementById('navbar');
  var isHome = page === 'home';
  if (navbar) {
    if (isHome) {
      navbar.classList.add('navbar--transparent');
      window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
          navbar.classList.remove('navbar--transparent');
          navbar.classList.add('navbar--scrolled');
        } else {
          navbar.classList.remove('navbar--scrolled');
          navbar.classList.add('navbar--transparent');
        }
      }, { passive: true });
    } else {
      navbar.classList.add('navbar--scrolled');
    }
  }

  // === MOBILE TOGGLE ========================================
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('#nav-toggle');
    var menu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('icon-menu');
    var closeIcon = document.getElementById('icon-close');
    if (toggle && menu) {
      var open = menu.classList.toggle('open');
      menu.setAttribute('aria-hidden', String(!open));
      toggle.setAttribute('aria-expanded', String(open));
      if (menuIcon) menuIcon.classList.toggle('hidden', open);
      if (closeIcon) closeIcon.classList.toggle('hidden', !open);
    }
  });

  // === MORE DROPDOWN ========================================
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('#more-trigger');
    var dropdown = document.getElementById('nav-dropdown');
    if (trigger && dropdown) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    } else if (dropdown) {
      dropdown.classList.remove('open');
    }
  });

  // === PARALLAX (home hero only) ============================
  var heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      heroBg.style.transform = 'translateY(' + (window.scrollY * 0.32) + 'px)';
    }, { passive: true });
  }

  // === SCROLL REVEAL ========================================
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '-50px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  // === TABS =================================================
  document.querySelectorAll('.tab-list').forEach(function (list) {
    var container = list.closest('.tabs');
    if (!container) return;
    list.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.tab;
        list.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        container.querySelectorAll('.tab-panel').forEach(function (p) {
          p.classList.toggle('active', p.dataset.panel === target);
        });
      });
    });
  });

  // === GALLERY FILTER + LIGHTBOX ============================
  var filterBtns = document.querySelectorAll('.gallery-filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var tag = btn.dataset.filter;
      galleryItems.forEach(function (item) {
        if (tag === 'all' || item.dataset.tag === tag) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbTag = document.getElementById('lb-tag');
  var lbTitle = document.getElementById('lb-title');
  if (lightbox) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        if (img && lbImg) {
          lbImg.src = img.src;
          lbImg.alt = img.alt;
        }
        if (lbTag) lbTag.textContent = item.dataset.tag || '';
        if (lbTitle) lbTitle.textContent = item.dataset.title || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // === CAMERA TABS ==========================================
  // handled by generic tabs logic above

});
