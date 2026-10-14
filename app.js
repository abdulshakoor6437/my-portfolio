/**
 * Abdul Shakoor Portfolio — Core Application Script
 * Deep Purple & Scalloped Cloud Creative-Developer Site
 * 
 * Features:
 * 1. Scroll-Reveal Animation Engine (Staggered In-View)
 * 2. Subtle Parallax for Decorative Doodles
 * 3. Animated Hero Capability Switcher
 * 4. 3-Stat IntersectionObserver Count-Up
 * 5. Project Category Filtering & Browser Modals
 * 6. One-Click Clipboard Copy with Floating Toast
 * 7. Contact Form Handler & Pre-Filled Mailto Dispatch
 * 8. Service Inquiry Auto-Select in Contact Form
 * 9. Mobile Navigation Drawer Toggle
 * 10. Copyright Year Auto-Sync
 */

document.addEventListener('DOMContentLoaded', () => {
  // If browser-projects-grid is empty or needs dynamic render
  const gridContainer = document.querySelector('.browser-projects-grid');
  if (gridContainer && gridContainer.querySelectorAll('.browser-project-card').length === 0) {
    if (typeof renderProjectsToGrid === 'function') {
      renderProjectsToGrid();
    }
  }

  // Calculate and update pill counts dynamically at load time from PROJECTS_DATA
  updateFilterCounts();

  initScrollReveal();
  initParallaxDoodles();
  initCapabilitySandbox();
  initStatsCounter();
  initProjectFilters();
  initProjectModals();
  initClipboardToast();
  initContactForm();
  initServiceInquiryLinks();
  initMobileNav();
  initCurrentYear();
});

/* ==========================================================================
   1. SCROLL-REVEAL ANIMATION ENGINE (Staggered In-View)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. SUBTLE PARALLAX FOR DECORATIVE DOODLES
   ========================================================================== */
function initParallaxDoodles() {
  const parallaxItems = document.querySelectorAll('.parallax-doodle');
  if (!parallaxItems.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        parallaxItems.forEach(item => {
          const speed = parseFloat(item.getAttribute('data-speed')) || 0.05;
          const yPos = -(scrollY * speed);
          item.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   3. ANIMATED HERO CAPABILITY SWITCHER
   ========================================================================== */
function initCapabilitySandbox() {
  const tabBtns = document.querySelectorAll('.cap-tab-btn');
  const panels = document.querySelectorAll('.cap-panel');

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button states
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panel visibility with transition
      panels.forEach(panel => {
        if (panel.id === `cap-panel-${targetTab}`) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
}

/* ==========================================================================
   4. PROVEN IMPACT: 3-STAT INTERSECTIONOBSERVER COUNT-UP
   ========================================================================== */
function initStatsCounter() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const statYears = document.getElementById('statYears');
  const statAccessibility = document.getElementById('statAccessibility');
  const statProjects = document.getElementById('statProjects');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let activeAnimYears = null;
  let activeAnimAccessibility = null;
  let activeAnimProjects = null;

  function stopAllAnimations() {
    if (activeAnimYears && activeAnimYears.id) cancelAnimationFrame(activeAnimYears.id);
    if (activeAnimAccessibility && activeAnimAccessibility.id) cancelAnimationFrame(activeAnimAccessibility.id);
    if (activeAnimProjects && activeAnimProjects.id) cancelAnimationFrame(activeAnimProjects.id);
  }

  function resetCounters() {
    if (statYears) statYears.textContent = '0';
    if (statAccessibility) statAccessibility.textContent = '0';
    if (statProjects) statProjects.textContent = '0';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      stopAllAnimations();
      if (entry.isIntersecting) {
        if (prefersReducedMotion) {
          if (statYears) statYears.textContent = '2';
          if (statAccessibility) statAccessibility.textContent = '35';
          if (statProjects) statProjects.textContent = '6';
        } else {
          resetCounters();
          activeAnimYears = animateNumber(statYears, 0, 2, 1200);
          activeAnimAccessibility = animateNumber(statAccessibility, 0, 35, 1500);
          activeAnimProjects = animateNumber(statProjects, 0, 6, 1300);
        }
      } else {
        resetCounters();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

function animateNumber(element, start, end, duration) {
  const animHandle = { id: null };
  if (!element) return animHandle;

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);
    
    element.textContent = current;

    if (progress < 1) {
      animHandle.id = requestAnimationFrame(update);
    } else {
      element.textContent = end;
    }
  }

  animHandle.id = requestAnimationFrame(update);
  return animHandle;
}

/* ==========================================================================
   5. PROJECT CATEGORY FILTERING & BROWSER ARCHITECTURAL MODALS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const emptyState = document.getElementById('projectsEmptyState');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      const projectCards = document.querySelectorAll('.browser-project-card');
      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(/\s+/);
        const isFeatured = card.getAttribute('data-featured') === 'true';

        let isMatch = false;
        if (filter === 'all') {
          isMatch = true;
        } else if (filter === 'featured') {
          isMatch = isFeatured;
        } else if (categories.includes(filter)) {
          isMatch = true;
        }

        if (isMatch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

/**
 * Dynamically computes filter counts from PROJECTS_DATA at load time.
 */
function updateFilterCounts() {
  if (typeof PROJECTS_DATA === 'undefined' || !Array.isArray(PROJECTS_DATA)) return;

  const totalCount = PROJECTS_DATA.length;
  const webCount = PROJECTS_DATA.filter(p => p.category && p.category.includes('web')).length;
  const aiCount = PROJECTS_DATA.filter(p => p.category && p.category.includes('ai')).length;
  const mobileCount = PROJECTS_DATA.filter(p => p.category && p.category.includes('mobile')).length;
  const featuredCount = PROJECTS_DATA.filter(p => p.featured).length;

  const countAll = document.getElementById('filterCountAll');
  const countWeb = document.getElementById('filterCountWeb');
  const countAi = document.getElementById('filterCountAi');
  const countMobile = document.getElementById('filterCountMobile');
  const countFeatured = document.getElementById('filterCountFeatured');

  if (countAll) countAll.textContent = totalCount;
  if (countWeb) countWeb.textContent = webCount;
  if (countAi) countAi.textContent = aiCount;
  if (countMobile) countMobile.textContent = mobileCount;
  if (countFeatured) countFeatured.textContent = featuredCount;
}

function initProjectModals() {
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (!modal) return;

  let lastFocusedElement = null;

  function openModal(projectId) {
    const data = (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA))
      ? PROJECTS_DATA.find(p => p.id === projectId)
      : null;

    if (!data) {
      console.warn('Project data not found for id:', projectId);
      return;
    }

    lastFocusedElement = document.activeElement;

    if (modalBadge) modalBadge.textContent = data.modalBadge || data.categoryBadge || 'Architecture Deep-Dive';
    if (modalTitle) modalTitle.textContent = data.modalTitle || data.title;

    const listHtml = (data.architecture || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');
    const tagsHtml = (data.stack || data.tags || []).map(tag => `<span class="p-tech-pill">${escapeHtml(tag)}</span>`).join('');

    let principlesHtml = '';
    if (data.designPrinciples && data.designPrinciples.length) {
      principlesHtml = `
        <div class="modal-section-title">Core Design &amp; Architecture Principles</div>
        <ul class="modal-principles-list">
          ${data.designPrinciples.map(dp => `<li><span class="principle-check">✓</span> <span>${escapeHtml(dp)}</span></li>`).join('')}
        </ul>
      `;
    }

    let linksHtml = '';
    if (data.isPrivate || !data.githubUrl) {
      linksHtml += `
        <span class="btn-private" title="Private project repository (Verified Build)">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Private Repository</span>
        </span>
      `;
    } else {
      linksHtml += `
        <a href="${escapeHtml(data.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-github" title="View Source on GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View on GitHub</span>
        </a>
      `;
    }

    if (data.demoUrl) {
      linksHtml += `
        <a href="${escapeHtml(data.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-demo" title="Open Live Demo">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          <span>Live Demo</span>
        </a>
      `;
    }

    const actionRowHtml = linksHtml ? `<div class="modal-action-row">${linksHtml}</div>` : '';

    modalBody.innerHTML = `
      <p style="margin-bottom: 1.25rem; font-size: 1rem; color: var(--text-purple-muted); line-height: 1.65;">${escapeHtml(data.modalDesc || data.shortDescription || data.desc || '')}</p>
      
      ${principlesHtml}

      <div class="modal-section-title">Technical Architecture &amp; Engineering Highlights</div>
      <ul class="modal-list">${listHtml}</ul>

      <div class="modal-section-title">Production Tech Stack</div>
      <div class="modal-tags">${tagsHtml}</div>

      ${actionRowHtml}
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Event delegation to catch clicks on any .open-modal-btn
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (btn) {
      const projId = btn.getAttribute('data-project');
      if (projId) {
        openModal(projId);
      }
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   6. CLIPBOARD COPY WITH FLOATING TOAST NOTIFICATION
   ========================================================================== */
function initClipboardToast() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout;

  function showToast(text) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = text;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 3000);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied "${text}" to clipboard!`);
    } catch (err) {
      showToast(`Contact: ${text}`);
    }
    document.body.removeChild(textArea);
  }
}

/* ==========================================================================
   7. CONTACT FORM — Web3Forms API Integration with Mailto Fallback
   ========================================================================== */
const WEB3FORMS_ACCESS_KEY = 'cc95b092-151e-4568-b1a1-0047ae944eeb';

function initContactForm() {
  const form       = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn  = document.getElementById('submitBtn');

  if (!form || !formStatus || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name        = form.name.value.trim();
    const email       = form.email.value.trim();
    const projectType = form.projectType ? form.projectType.value : 'General Inquiry';
    const message     = form.message.value.trim();
    const accessKey   = (form.access_key && form.access_key.value && form.access_key.value !== 'YOUR_WEB3FORMS_ACCESS_KEY') 
                        ? form.access_key.value 
                        : WEB3FORMS_ACCESS_KEY;

    if (!name || !email || !message) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please fill out all required fields.';
      formStatus.setAttribute('aria-hidden', 'false');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';

    formStatus.className = '';
    formStatus.textContent = '';
    formStatus.setAttribute('aria-hidden', 'true');

    function triggerMailtoFallback() {
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${projectType} from ${name}`);
      const mailtoBody    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nDomain: ${projectType}\n\nMessage:\n${message}`);
      window.location.href = `mailto:a.shakoor9744@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      formStatus.className = 'form-status success';
      formStatus.textContent = 'Message prepared in your email client! If it did not open automatically, please send directly to a.shakoor9744@gmail.com.';
      formStatus.setAttribute('aria-hidden', 'false');
    }

    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      triggerMailtoFallback();
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: `New Portfolio Inquiry: ${projectType} from ${name}`,
          message: `Project Domain: ${projectType}\n\nMessage:\n${message}`,
          from_name: 'Abdul Shakoor Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent! Thank you—Abdul will get back to you soon.';
        formStatus.setAttribute('aria-hidden', 'false');
        form.reset();
      } else {
        console.warn('Web3Forms returned non-success:', data);
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error('Web3Forms submission error, triggering mailto fallback:', err);
      triggerMailtoFallback();
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Message';
    }
  });
}

/* ==========================================================================
   8. SERVICE INQUIRY LINKS (Auto-Select Domain & Scroll)
   ========================================================================== */
function initServiceInquiryLinks() {
  const serviceLinks = document.querySelectorAll('.service-cta-link');
  const projectSelect = document.getElementById('formProject');

  if (!serviceLinks.length || !projectSelect) return;

  serviceLinks.forEach(link => {
    link.addEventListener('click', () => {
      const selectedService = link.getAttribute('data-service-select');
      if (selectedService) {
        for (let i = 0; i < projectSelect.options.length; i++) {
          if (projectSelect.options[i].value === selectedService) {
            projectSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });
}

/* ==========================================================================
   9. RESPONSIVE MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu();
    }
  });
}

/* ==========================================================================
   10. CURRENT YEAR DYNAMIC UPDATE
   ========================================================================== */
function initCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
