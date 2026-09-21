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
 * 8. Service Inquiry Auto-Selector
 * 9. Responsive Mobile Navigation Drawer
 * 10. Current Year Dynamic Update
 */

document.addEventListener('DOMContentLoaded', () => {
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

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Staggered reveal effect
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, idx * 60);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. SUBTLE SCROLL PARALLAX FOR FLOATING DOODLES
   ========================================================================== */
function initParallaxDoodles() {
  const parallaxItems = document.querySelectorAll('.parallax-item');
  if (!parallaxItems.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        parallaxItems.forEach(item => {
          const speed = parseFloat(item.getAttribute('data-speed') || '0.08');
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
          // Trigger smooth count-up animation every time section enters view
          activeAnimYears = animateNumber(statYears, 0, 2, 1200);
          activeAnimAccessibility = animateNumber(statAccessibility, 0, 35, 1500);
          activeAnimProjects = animateNumber(statProjects, 0, 6, 1300);
        }
      } else {
        // Reset counters when out of view so next visit re-animates
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
    
    // Ease out cubic formula for smooth decelerating count motion
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
  const projectCards = document.querySelectorAll('.browser-project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

const PROJECT_DETAILS = {
  ptb: {
    badge: 'Enterprise Compliance & Audit System',
    title: 'PTB Tobacco Management System',
    desc: 'An enterprise-grade administrative compliance portal built to enforce regulatory quota tracking, license verification, and multi-tier role governance with zero tamper risk.',
    architecture: [
      'Multi-tier role-based access control (Super Admin, Inspector T2, Auditor, Licensee) using cryptographic JWT payloads.',
      'Immutable audit logging capturing user ID, timestamp, IP address, and state delta on every record mutation.',
      'Express.js middleware layer validating token signatures and role entitlements prior to reaching controller handlers.',
      'Optimized MongoDB aggregate pipelines delivering fast regulatory compliance summaries across 10,000+ quota allocations.'
    ],
    stack: ['React.js', 'Node.js / Express', 'MongoDB', 'JWT Authentication', 'REST APIs', 'Role-Based Access Control (RBAC)']
  },
  zimma: {
    badge: 'Pakistan’s 1st SECP-Registered Escrow App',
    title: 'Zimma Solution Mobile App',
    desc: 'Cross-platform task coordination and milestone management platform engineered with background push notifications and secure offline storage for SECP-compliant financial escrow security.',
    architecture: [
      'Flutter single-codebase architecture delivering high frame-rate cross-platform interfaces across iOS and Android.',
      'Firebase Auth multi-provider integration safeguarding client and contractor accounts.',
      'Cloud Firestore real-time listener trees synchronizing task milestones, payment verifications, and escrow states.',
      'Firebase Cloud Messaging (FCM) background push notifications keeping all parties updated on escrow lock and release cycles.',
      'Local SQLite/Hive cache layer ensuring seamless offline task coordination with automatic synchronization on network reconnect.'
    ],
    stack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Firebase Cloud Messaging (FCM)', 'SECP Escrow Engine', 'Offline Cache']
  },
  'schedule-ai': {
    badge: 'Generative AI & Agentic Workflow',
    title: 'Intelligent Schedule Management Engine',
    desc: 'Autonomous agentic assistant that parses unstructured conversational natural language into conflict-resolved, time-blocked calendar entries with multi-constraint validation.',
    architecture: [
      'Next.js full-stack framework with React Server Components and fast serverless API endpoints.',
      'OpenAI API integration for semantic entity recognition, temporal expression parsing, and priority classification.',
      'LangChain orchestration with prompt validation chains, JSON schema enforcement, and deterministic fallback handling.',
      'Deterministic conflict-resolution engine that maps existing busy times and identifies optimal non-overlapping slots.',
      'Automated calendar event creation with custom notification triggers.'
    ],
    stack: ['Next.js', 'OpenAI API', 'LangChain', 'Prompt Engineering', 'Conflict Resolution Algorithms', 'TypeScript/JavaScript']
  },
  szabist: {
    badge: 'University Administrative Platform',
    title: 'SZABIST Admin v1.0 (Schedule System)',
    desc: 'Departmental scheduling system engineered for university faculty, managing lecture timetables, room allocation logic, and automated WhatsApp notification dispatches.',
    architecture: [
      'Node.js & Express RESTful API managing faculty courses, classroom capacity constraints, and time slot reservations.',
      'WhatsApp Business API webhook integration broadcasting immediate timetable modifications and emergency schedule alerts.',
      'MongoDB schemas with indexed query paths for instantaneous clash detection across simultaneous department rooms.',
      'Clean administrative dashboard facilitating multi-instructor roster imports and single-click broadcast triggers.'
    ],
    stack: ['Node.js / Express', 'MongoDB', 'WhatsApp Business API', 'Webhook Dispatch Queue', 'Clash Detection', 'Roster Management']
  }
};

function initProjectModals() {
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modal) return;

  let lastFocusedElement = null;

  function openModal(projectId) {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;

    const listHtml = data.architecture.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    const tagsHtml = data.stack.map(tag => `<span class="p-tech-pill">${escapeHtml(tag)}</span>`).join('');

    modalBody.innerHTML = `
      <p style="margin-bottom: 1.25rem; font-size: 1rem; color: var(--text-purple-muted);">${escapeHtml(data.desc)}</p>
      
      <div class="modal-section-title">Technical Architecture &amp; Engineering Highlights</div>
      <ul class="modal-list">${listHtml}</ul>

      <div class="modal-section-title">Production Tech Stack</div>
      <div class="modal-tags">${tagsHtml}</div>
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

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      openModal(projId);
    });
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
// Web3Forms Access Key (Get yours free from https://web3forms.com)
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

    // Client-side validation
    if (!name || !email || !message) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please fill out all required fields.';
      formStatus.setAttribute('aria-hidden', 'false');
      return;
    }

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending…';

    formStatus.className = '';
    formStatus.textContent = '';
    formStatus.setAttribute('aria-hidden', 'true');

    // Helper for Mailto Fallback
    function triggerMailtoFallback() {
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${projectType} from ${name}`);
      const mailtoBody    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nDomain: ${projectType}\n\nMessage:\n${message}`);
      window.location.href = `mailto:a.shakoor9744@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      formStatus.className = 'form-status success';
      formStatus.textContent = 'Message prepared in your email client! If it did not open automatically, please send directly to a.shakoor9744@gmail.com.';
      formStatus.setAttribute('aria-hidden', 'false');
    }

    // If key is not configured, fall back to mailto directly
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
