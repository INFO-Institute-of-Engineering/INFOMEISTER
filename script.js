/* =====================================================================
   INFOMEISTER SCRIPT (script.js)
   ---------------------------------------------------------------------
   This file contains all interactive behaviors for the INFOMEISTER site.
   All logic has been modularly grouped via comment blocks for clarity.

   CONTENTS OVERVIEW
   0. Tailwind CSS Configuration (Runtime Extension)
   1. Utility Helpers
   2. Smooth Scrolling Navigation
   3. Mobile Menu Toggle Logic
   4. Carousel (Hero Slide Cards) Functionality
   5. Back To Top Button Behavior
   6. Dynamic Footer Year Injection
   7. Team Member Data + Dynamic Rendering
   8. Intersection Observer Progressive Reveal Animations
   9. Initialization Sequence

   AUTHORING NOTES
   - Uses only vanilla JavaScript (no external JS framework) for portability.
   - Avoids polluting global scope by wrapping in an IIFE.
   - Accessible patterns (ARIA labels, keyboard support) considered.
   ===================================================================== */

(function() {
  'use strict';

  /* -------------------------------------------------------------------
     0. TAILWIND CSS CONFIGURATION (Runtime Extension)
     - Extends Tailwind with custom brand colors and utilities
     - Must be executed after Tailwind CDN loads
     ------------------------------------------------------------------- */
  function configureTailwind() {
    if (typeof tailwind !== 'undefined' && tailwind.config) {
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              display: ['Inter', 'system-ui', 'sans-serif'],
              body: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
              brand: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
                950: '#172554'
              }
            },
            boxShadow: {
              'glow': '0 0 0 1px rgba(255,255,255,0.08), 0 4px 25px -5px rgba(59,130,246,0.5), 0 10px 40px -10px rgba(59,130,246,0.4)'
            },
            backgroundImage: {
              'grid': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
              'radial-fade': 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 60%)'
            }
          }
        }
      };
    }
  }

  /* -------------------------------------------------------------------
     1. UTILITY HELPERS
     ------------------------------------------------------------------- */
  /**
   * selectAll - convenience wrapper around querySelectorAll returning an Array.
   * @param {string} selector - CSS selector string.
   * @param {Element|Document} scope - Optional scope; defaults to document.
   * @returns {Element[]} Array of matched elements.
   */
  function selectAll(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
  }

  /**
   * smoothScrollToHash - Scrolls smoothly to a given hash target id.
   * @param {string} id - Target element id (without '#').
   */
  function smoothScrollToHash(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* -------------------------------------------------------------------
     2. SMOOTH SCROLLING NAVIGATION
     - Intercepts anchor clicks that reference internal hash targets.
     - Provides a unified smooth scroll behavior across browsers.
     ------------------------------------------------------------------- */
  function setupSmoothScrolling() {
    selectAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const hash = anchor.getAttribute('href');
        if (!hash || hash === '#') return;
        const targetId = hash.substring(1);
        const target = document.getElementById(targetId);
        if (!target) return; // Non-existent anchor, allow default
        e.preventDefault();
        smoothScrollToHash(targetId);
        // Auto-close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMobileMenu();
        }
      });
    });
  }

  /* -------------------------------------------------------------------
     3. MOBILE MENU TOGGLE LOGIC
     - Handles hamburger button interactions.
     - Automatically closes on breakpoint resize.
     ------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu    = document.getElementById('mobileMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon     = document.getElementById('closeIcon');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  function setupMobileMenu() {
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    // Close if viewport resized above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    });
  }

  /* -------------------------------------------------------------------
     4. IMAGE DISPLAY FUNCTIONALITY
     - Simple image container for uploaded poster images.
     - Supports click-to-redirect functionality to subdomains.
     - Ready for dynamic image upload and link assignment.
     ------------------------------------------------------------------- */
  
  /**
   * displayImage - Displays an uploaded image with a clickable link.
   * @param {string} imageUrl - URL of the image to display.
   * @param {string} linkUrl - URL to redirect when image is clicked.
   * @param {string} altText - Alt text for accessibility.
   */
  function displayImage(imageUrl, linkUrl = '#', altText = 'Featured poster') {
    const imageContainer = document.getElementById('imageContainer');
    if (!imageContainer) return;

    imageContainer.innerHTML = `
      <a href="${linkUrl}" class="group block w-full" target="_blank" rel="noopener noreferrer">
        <div class="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-400/60 transition-all duration-300 shadow-lg hover:shadow-glow">
          <img 
            src="${imageUrl}" 
            alt="${altText}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </a>
    `;
  }

  /**
   * setupImageDisplay - Initializes the image display system.
   * This function can be extended to handle file uploads, form submissions, etc.
   */
  function setupImageDisplay() {
    // Example usage - you can replace this with dynamic content
    // displayImage('path/to/your/image.jpg', 'https://your-subdomain.com', 'Event Poster');
    
    // The container is ready for your image upload functionality
    console.log('Image display system initialized');
  }

  /* -------------------------------------------------------------------
     5. BACK TO TOP BUTTON BEHAVIOR
     - Displays button after user scrolls beyond threshold.
     - Smooth scroll to top when activated.
     ------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTop');

  function setupBackToTop() {
    if (!backToTopBtn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) backToTopBtn.classList.remove('hidden');
      else backToTopBtn.classList.add('hidden');
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* -------------------------------------------------------------------
     6. DYNAMIC FOOTER YEAR INJECTION
     - Keeps copyright year current.
     ------------------------------------------------------------------- */
  function setFooterYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------------
     7. TEAM MEMBER DATA + DYNAMIC RENDERING
     - Team member cards generated programmatically for scalability.
     - Update the `teamMembers` array to modify displayed data.
     ------------------------------------------------------------------- */
  const teamMembers = [
    // Core Leadership
    { name: 'Gururaja',    role: 'President',            linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=0f172a,1e3a8a' },
    { name: 'Thamnu',    role: 'Vice President',       linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=SP&backgroundColor=0f172a,1e3a8a' },
    { name: 'Srivarshini',  role: 'Secretary',    linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=RK&backgroundColor=0f172a,1e3a8a' },
    { name: 'Harshini',   role: 'Joint Secretary',            linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MA&backgroundColor=0f172a,1e3a8a' },
    { name: 'Aswin Raj',   role: 'President Special Aide',       linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=VR&backgroundColor=0f172a,1e3a8a' },
    { name: 'Vaitheeshwaran S',   role: 'President Special Aide',           linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=GH&backgroundColor=0f172a,1e3a8a' },
    { name: 'Logeshwari',    role: 'President Special Aide',           linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=0f172a,1e3a8a' },
    { name: 'Sri Dharshana',  role: 'President Special Aide',   linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=SA&backgroundColor=0f172a,1e3a8a' },
    { name: 'Vanipriya',  role: 'Treasurer',    linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=RL&backgroundColor=0f172a,1e3a8a' },
    { name: 'Alphin V T',   role: 'Technical Lead',   linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=TN&backgroundColor=0f172a,1e3a8a' },
    { name: 'Ramana',     role: 'Technical Lead', linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=JR&backgroundColor=0f172a,1e3a8a' },
    { name: 'Gowtham',     role: 'Technical Lead',          linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=KM&backgroundColor=0f172a,1e3a8a' },
    { name: 'Ramesh M',   role: 'Technical Lead',          linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=0f172a,1e3a8a' },
    { name: 'P. Rahul',    role: 'Media Lead',           linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=PR&backgroundColor=0f172a,1e3a8a' },
    { name: 'M. Ajay',     role: 'Logistics Lead',       linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MAJ&backgroundColor=0f172a,1e3a8a' },
    { name: 'S. Divya',    role: 'Community Manager',    linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=SD&backgroundColor=0f172a,1e3a8a' },
    { name: 'H. Ibrahim',  role: 'Innovation Lead',      linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=HI&backgroundColor=0f172a,1e3a8a' },
    { name: 'O. Neha',     role: 'Program Coordinator',  linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=ON&backgroundColor=0f172a,1e3a8a' },
    { name: 'K. Suresh',   role: 'Operations Executive', linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=KS&backgroundColor=0f172a,1e3a8a' },
    { name: 'E. Anjali',   role: 'Outreach Lead',        linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=EA&backgroundColor=0f172a,1e3a8a' },
    { name: 'R. Vivek',    role: 'Mobile Dev Lead',      linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=0f172a,1e3a8a' },
    { name: 'F. Jayan',    role: 'Web Lead',             linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=FJ&backgroundColor=0f172a,1e3a8a' },
    { name: 'A. Geetha',   role: 'UI/UX Designer',       linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=0f172a,1e3a8a' },
    { name: 'S. Kiran',    role: 'Blockchain Lead',      linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=SK&backgroundColor=0f172a,1e3a8a' },
    { name: 'N. Preethi',  role: 'Content Strategist',   linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=NP&backgroundColor=0f172a,1e3a8a' },
    { name: 'L. Raghav',   role: 'QA Lead',              linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=LR&backgroundColor=0f172a,1e3a8a' },
    { name: 'I. Farah',    role: 'Security Analyst',     linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=IF&backgroundColor=0f172a,1e3a8a' },
    { name: 'Y. Mano',     role: 'AI Research Intern',   linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=YM&backgroundColor=0f172a,1e3a8a' },
    { name: 'C. Snehal',   role: 'Program Analyst',      linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CS&backgroundColor=0f172a,1e3a8a' },
    { name: 'Z. Harini',   role: 'Outreach Intern',      linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=ZH&backgroundColor=0f172a,1e3a8a' },
    { name: 'B. Varun',    role: 'Core Member',          linkedin: '#', instagram: '#', img: 'https://api.dicebear.com/7.x/initials/svg?seed=BV&backgroundColor=0f172a,1e3a8a' }
  ];

  /**
   * socialIcon - Returns SVG markup string for a given social platform.
   * @param {('linkedin'|'instagram')} type - Social platform identifier.
   * @returns {string} Inline SVG as string.
   */
  function socialIcon(type) {
    if (type === 'linkedin') {
      return '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.7v1.71h.05c.52-.98 1.8-2.01 3.7-2.01 3.96 0 4.7 2.6 4.7 5.98V21h-4v-5.26c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76V21H9z"/></svg>';
    }
    if (type === 'instagram') {
      return '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.25"/></svg>';
    }
    return '';
  }

  /**
   * renderTeam - Dynamically inserts team member cards into the grid.
   */
  function renderTeam() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    const fragment = document.createDocumentFragment();
    teamMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'group relative p-4 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-white/10 hover:border-brand-400/40 transition flex flex-col';
      card.innerHTML = `
        <div class="relative mb-4">
          <div class="w-20 h-20 mx-auto rounded-xl overflow-hidden ring-2 ring-white/10 shadow-lg bg-slate-800">
            <img src="${member.img}" alt="${member.name} avatar" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <h3 class="font-semibold text-sm text-center">${member.name}</h3>
        <p class="text-[11px] text-center text-slate-400 mb-3">${member.role}</p>
        <div class="mt-auto flex items-center justify-center gap-3 text-slate-400">
          <a href="${member.linkedin}" aria-label="LinkedIn profile of ${member.name}" class="hover:text-brand-300 transition" target="_blank" rel="noopener noreferrer">${socialIcon('linkedin')}</a>
          <a href="${member.instagram}" aria-label="Instagram profile of ${member.name}" class="hover:text-brand-300 transition" target="_blank" rel="noopener noreferrer">${socialIcon('instagram')}</a>
        </div>`;
      fragment.appendChild(card);
    });
    teamGrid.appendChild(fragment);
  }

  /* -------------------------------------------------------------------
     8. INTERSECTION OBSERVER PROGRESSIVE REVEAL
     - Adds .slide-up class when sections enter viewport for subtle motion.
     - Improves perceived performance with progressive enhancement.
     ------------------------------------------------------------------- */
  function setupRevealAnimations() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    selectAll('section').forEach(section => observer.observe(section));
  }

  /* -------------------------------------------------------------------
     9. INITIALIZATION SEQUENCE
     - Orchestrates setup functions in logical order.
     - Executes after DOM is fully parsed (DOMContentLoaded).
     ------------------------------------------------------------------- */
  function init() {
    configureTailwind();        // Configure Tailwind with custom theme
    setupSmoothScrolling();
    setupMobileMenu();
    setupImageDisplay();
    setupBackToTop();
    setFooterYear();
    renderTeam();
    setupRevealAnimations();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
