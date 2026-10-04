/**
 * =========================================================================
 * NATHAN BIRHANE - MASTER APPLICATION CONTROLLER
 * =========================================================================
 * Standard, resilient, zero-dependency browser-compatible engine.
 * Self-contained SVG icon system ensuring 100% offline & file:/// execution.
 */

// Embedded SVG icon repository (zero CDN dependency)
const ICONS = {
  "search": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  "calendar": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  "moon": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  "sun": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  "download": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  "file-text": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  "arrow-right": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  "arrow-up-right": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',
  "arrow-up": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
  "check": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  "check-circle": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  "map-pin": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  "mail": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  "phone": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  "linkedin": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  "briefcase": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
  "graduation-cap": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
  "layers": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  "wrench": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  "terminal": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  "shield-check": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
  "award": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  "send": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
  "copy": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  "flask-conical": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><line x1="8.5" y1="2" x2="15.5" y2="2"></line><line x1="8.5" y1="14" x2="15.5" y2="14"></line></svg>',
  "menu": '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  "x": '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  "info": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  "edit-2": '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
  "cpu": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>',
  "boxes": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  "compass": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  "book-open": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
  "user": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  "printer": '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>'
};

// Safe icon injection helperz
function getIcon(name) {
  return ICONS[name] || '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle></svg>';
}

function renderAllIcons() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    const iconName = el.getAttribute("data-icon");
    if (iconName && ICONS[iconName]) {
      el.innerHTML = ICONS[iconName];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("Critical: PORTFOLIO_DATA not found. Verify js/data.js");
    return;
  }

  const data = PORTFOLIO_DATA;

  // Initialize Modules
  initTheme();
  renderHero(data);
  renderAbout(data);
  renderEducation(data);
  renderExperience(data);
  renderProjects(data);
  renderTechnicalSkills(data);
  renderSoftwareSkills(data);
  renderCertifications(data);
  renderAchievements(data);
  renderContact(data);
  initNavigation();
  initModals(data);
  initQCTool();
  initContactForm(data);

  // Render Icons
  renderAllIcons();
});

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="text-orange">${getIcon(type === "success" ? "check-circle" : "info")}</span>
    <span>${escapeHTML(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

window.copyToClipboard = function(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
};

function fallbackCopy(text, label) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showToast(`Copied ${label} to clipboard!`);
}

/* =========================================================================
   SCROLL LOCK HELPERS (used by all modals)
   ========================================================================= */
function lockBodyScroll() {
  document.body.classList.add('modal-open');
}
function unlockBodyScroll() {
  document.body.classList.remove('modal-open');
}

/* =========================================================================
   1. THEME TOGGLE
   ========================================================================= */
function initTheme() {
  const saved = localStorage.getItem("nb_portfolio_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("nb_portfolio_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("theme-toggle-icon");
  if (iconSpan) {
    iconSpan.innerHTML = theme === "dark" ? getIcon("sun") : getIcon("moon");
  }
}

/* =========================================================================
   2. HERO SECTION
   ========================================================================= */
function renderHero(data) {
  const p = data.personal;
  const s = data.summary;

  const heroName = document.getElementById("hero-name");
  const heroMainTitle = document.getElementById("hero-main-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroLocation = document.getElementById("hero-location");
  const heroBio = document.getElementById("hero-bio");
  const heroAvatar = document.getElementById("hero-avatar-img");
  const heroLinkedin = document.getElementById("hero-linkedin-btn");

  if (heroName) heroName.textContent = p.fullName;
  if (heroMainTitle) heroMainTitle.textContent = p.mainTitle;
  if (heroSubtitle) heroSubtitle.textContent = p.subtitle;
  if (heroLocation) heroLocation.textContent = p.location;
  if (heroBio) heroBio.textContent = s.leadText;
  if (heroLinkedin) heroLinkedin.href = p.linkedIn;

  if (heroAvatar) {
    const imgs = (p.images || {});
    const primarySrc = imgs.profile || p.profilePhoto || "assets/images/image.png";
    const fallbackSrc = imgs.profileFallback || p.profilePhoto || "assets/images/image.png";
    heroAvatar.src = primarySrc;
    heroAvatar.onerror = function() {
      if (this.src !== fallbackSrc) { this.src = fallbackSrc; }
    };
  }
}

/* =========================================================================
   3. ABOUT SECTION
   ========================================================================= */
function renderAbout(data) {
  const bio = document.getElementById("about-bio-text");
  const comps = document.getElementById("about-competencies-grid");
  const stds = document.getElementById("about-standards-list");

  if (bio) bio.textContent = data.summary.fullBio;

  if (comps && data.summary.coreCompetencies) {
    comps.innerHTML = data.summary.coreCompetencies.map(comp => `
      <div class="card-clean flex flex-col justify-between">
        <div>
          <div style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--accent-orange-subtle); color: var(--accent-orange); display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem;">
            ${getIcon(comp.icon || "shield-check")}
          </div>
          <h3 class="text-sm font-bold text-primary" style="margin-bottom: 0.35rem;">${escapeHTML(comp.title)}</h3>
          <p class="text-xs text-secondary leading-relaxed">${escapeHTML(comp.desc)}</p>
        </div>
      </div>
    `).join("");
  }

  if (stds && data.testingStandards) {
    stds.innerHTML = data.testingStandards.map(std => `
      <div class="flex items-center gap-2" style="padding: 0.5rem 0.65rem; border-radius: var(--radius-sm); background: var(--bg-subtle); border: 1px solid var(--border-light); margin-bottom: 0.4rem;">
        <span class="font-mono text-xs font-bold text-orange" style="background: var(--accent-orange-subtle); padding: 0.15rem 0.4rem; border-radius: var(--radius-sm); flex-shrink: 0;">${escapeHTML(std.code)}</span>
        <span class="text-xs text-primary truncate">${escapeHTML(std.name)}</span>
      </div>
    `).join("");
  }
}

/* =========================================================================
   4. EDUCATION SECTION
   ========================================================================= */
function renderEducation(data) {
  const container = document.getElementById("education-content");
  if (!container || !data.education) return;

  container.innerHTML = data.education.map(edu => `
    <div class="card-clean" style="border-left: 4px solid var(--accent-orange);">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2" style="margin-bottom: 0.85rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-light);">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-lg font-bold text-primary">${escapeHTML(edu.degree)}</h3>
          </div>
          <p class="text-sm font-semibold text-orange" style="margin-top: 0.2rem;">${escapeHTML(edu.institution)} <span class="text-muted">•</span> ${escapeHTML(edu.location)}</p>
          <p class="text-xs text-secondary" style="margin-top: 0.15rem;">${escapeHTML(edu.degreeNote)}</p>
        </div>
        <div style="text-align: right;">
          <span class="technical-pill">
            ${getIcon("calendar")} ${escapeHTML(edu.graduationYear)}
          </span>
        </div>
      </div>
      <div>
        <h4 class="text-xs font-mono uppercase font-bold text-secondary" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          ${getIcon("book-open")} Academic Modules & Engineering Principles
        </h4>
        <div class="grid grid-2 gap-2">
          ${edu.highlights.map(hl => `
            <div class="flex items-start gap-2 text-xs text-secondary">
              <span class="text-orange" style="margin-top: 0.15rem;">${getIcon("check")}</span>
              <span>${escapeHTML(hl)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   5. WORK EXPERIENCE SECTION (INTERACTIVE TABBED WORKSTATION)
   ========================================================================= */
let activeCompanyId = "exp-bole";

function renderExperience(data) {
  const tabsContainer = document.getElementById("experience-company-tabs");
  const displayContainer = document.getElementById("experience-detail-display");
  if (!tabsContainer || !displayContainer || !data.experience) return;

  const activeExp = data.experience.find(e => e.id === activeCompanyId) || data.experience[0];

  // Render Left Tabs
  tabsContainer.innerHTML = data.experience.map(exp => {
    const isActive = exp.id === activeExp.id;
    return `
      <button class="exp-tab-btn ${isActive ? 'active' : ''}" onclick="selectCompany('${exp.id}')">
        <div class="flex items-center justify-between" style="margin-bottom: 0.2rem;">
          <strong class="text-xs ${isActive ? 'text-orange' : 'text-primary'}">${escapeHTML(exp.organization)}</strong>
          ${exp.isCurrent ? `<span class="technical-pill" style="color: var(--accent-orange); background: var(--accent-orange-subtle); border-color: var(--accent-orange-border);">Current</span>` : ''}
        </div>
        <div class="flex items-center justify-between text-xs text-secondary font-mono" style="font-size: 0.72rem;">
          <span>${escapeHTML(exp.positions[0])}</span>
          <span>${escapeHTML(exp.period.split('–')[0].trim())}</span>
        </div>
      </button>
    `;
  }).join("");

  // Render Right Detail Panel
  displayContainer.innerHTML = `
    <div class="card-clean" style="border-left: 4px solid var(--accent-orange);">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-2" style="margin-bottom: 0.85rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-light);">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-lg font-bold text-primary">${escapeHTML(activeExp.organization)}</h3>
            ${activeExp.isCurrent ? `<span class="technical-pill" style="color: var(--accent-orange); background: var(--accent-orange-subtle); border-color: var(--accent-orange-border);">Current Position</span>` : ''}
          </div>
          ${activeExp.projectName ? `<p class="text-sm font-semibold text-orange" style="margin-top: 0.2rem;">${escapeHTML(activeExp.projectName)}</p>` : ''}
          ${activeExp.department ? `<p class="text-xs text-secondary" style="margin-top: 0.15rem;">${escapeHTML(activeExp.department)}</p>` : ''}
        </div>
        <div>
          <span class="technical-pill font-mono">
            ${getIcon("calendar")} ${escapeHTML(activeExp.period)}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2 flex-wrap" style="margin-bottom: 0.85rem;">
        <span class="text-xs text-secondary font-mono">Positions:</span>
        ${activeExp.positions.map(pos => `
          <span class="technical-pill" style="color: var(--accent-orange); background: var(--accent-orange-subtle); border-color: var(--accent-orange-border);">
            ${escapeHTML(pos)}
          </span>
        `).join("")}
        <span class="technical-pill">
          ${getIcon("map-pin")} ${escapeHTML(activeExp.location)}
        </span>
      </div>

      <div style="margin-bottom: 1rem;">
        <h4 class="text-xs font-mono uppercase text-secondary font-bold" style="margin-bottom: 0.5rem;">Key Quality & Supervision Responsibilities:</h4>
        <div style="display: flex; flex-direction: column; gap: 0.35rem;">
          ${activeExp.responsibilities.map(r => `
            <div class="flex items-start gap-2 text-xs text-secondary">
              <span class="text-orange" style="margin-top: 0.15rem;">${getIcon("check")}</span>
              <span>${escapeHTML(r)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      ${activeExp.keyHighlights ? `
        <div style="padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); background: var(--bg-subtle); border: 1px solid var(--border-light); font-size: 0.75rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          <span class="text-orange">${getIcon("award")}</span>
          <span><strong>Engineering Milestone:</strong> ${escapeHTML(activeExp.keyHighlights)}</span>
        </div>
      ` : ''}
    </div>
  `;
}

window.selectCompany = function(id) {
  activeCompanyId = id;
  if (typeof PORTFOLIO_DATA !== "undefined") {
    renderExperience(PORTFOLIO_DATA);
  }
};

/* =========================================================================
   6. PROJECTS SECTION (SEARCH & FILTERABLE)
   ========================================================================= */
let activeProjectCategory = "All";
let projectSearchQuery = "";

// Helper: resolve project image fallback from data.personal.images
function getProjectFallback(projId, imgs) {
  const fallbacks = (imgs && imgs.projectFallbacks) || {};
  // Fallback to actual PNG files that exist — SVG placeholders are optional
  if (projId === "proj-batching-plant") {
    return fallbacks.batchingPlant || (imgs.projects && imgs.projects.batchingPlant) || "assets/images/Ready-mix-Concrete.png";
  }
  if (projId === "proj-bole-hq") {
    return fallbacks.boleHQ || (imgs.projects && imgs.projects.boleHQ) || "assets/images/Bole Headquarter.png";
  }
  return fallbacks.fulwaha || (imgs.projects && imgs.projects.fulwaha) || "assets/images/High rise building.png";
}

function renderProjects(data) {
  const grid = document.getElementById("projects-grid");
  const filters = document.getElementById("project-filters");
  const countBadge = document.getElementById("projects-count-badge");
  const searchInput = document.getElementById("project-live-search");
  if (!grid || !data.projects) return;

  const categories = ["All", ...new Set(data.projects.map(p => p.category))];

  // Filters
  if (filters && !filters.dataset.rendered) {
    filters.dataset.rendered = "true";
    filters.innerHTML = categories.map(cat => `
      <button class="btn btn-outline btn-sm ${cat === activeProjectCategory ? 'btn-primary' : ''}" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;" onclick="setProjectCategory('${cat}')">
        ${escapeHTML(cat)}
      </button>
    `).join("");
  }

  // Bind Search
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = "true";
    searchInput.addEventListener("input", (e) => {
      projectSearchQuery = e.target.value.toLowerCase().trim();
      renderProjects(data);
    });
  }

  let list = data.projects;
  if (activeProjectCategory !== "All") {
    list = list.filter(p => p.category === activeProjectCategory);
  }
  if (projectSearchQuery) {
    list = list.filter(p => {
      return p.title.toLowerCase().includes(projectSearchQuery) ||
             p.company.toLowerCase().includes(projectSearchQuery) ||
             p.summary.toLowerCase().includes(projectSearchQuery) ||
             p.tags.some(t => t.toLowerCase().includes(projectSearchQuery));
    });
  }

  if (countBadge) {
    countBadge.textContent = `${list.length} of ${data.projects.length} Projects`;
  }

  grid.innerHTML = list.map(proj => {
    const imgs = (data.personal.images || {});
    const fallbackImg = getProjectFallback(proj.id, imgs);

    return `
      <div class="card-clean flex flex-col justify-between">
        <div>
          <div class="project-image-box">
            <img src="${proj.image || fallbackImg}" onerror="this.src='${fallbackImg}'" alt="${escapeHTML(proj.title)}" loading="lazy" />
            <span class="technical-pill" style="position: absolute; top: 0.5rem; left: 0.5rem; background: rgba(255,255,255,0.95); font-weight: 700;">
              ${escapeHTML(proj.category)}
            </span>
          </div>

          <div class="flex items-center gap-2" style="margin-bottom: 0.25rem;">
            <span class="text-xs font-semibold text-orange">${escapeHTML(proj.company)}</span>
          </div>
          <h3 class="text-base font-bold text-primary" style="margin-bottom: 0.35rem;">${escapeHTML(proj.title)}</h3>
          
          <div class="flex items-center gap-1 flex-wrap" style="margin-bottom: 0.5rem;">
            ${proj.roles.map(r => `<span class="technical-pill">${escapeHTML(r)}</span>`).join("")}
          </div>

          <p class="text-xs text-secondary" style="line-height: 1.5; margin-bottom: 0.75rem;">${escapeHTML(proj.summary)}</p>

          <div class="flex items-center gap-1 flex-wrap" style="margin-bottom: 1rem;">
            ${proj.tags.slice(0, 3).map(t => `<span class="technical-pill" style="font-size: 0.65rem;">#${escapeHTML(t)}</span>`).join("")}
          </div>
        </div>

        <button onclick="window.openProjectModal('${proj.id}')" class="btn btn-secondary btn-sm w-full">
          <span>View Technical Specifications</span>
          ${getIcon("arrow-right")}
        </button>
      </div>
    `;
  }).join("");
}

window.setProjectCategory = function(cat) {
  activeProjectCategory = cat;
  const filters = document.getElementById("project-filters");
  if (filters) filters.dataset.rendered = "";
  if (typeof PORTFOLIO_DATA !== "undefined") {
    renderProjects(PORTFOLIO_DATA);
  }
};

/* =========================================================================
   7. TECHNICAL & SOFTWARE SKILLS
   ========================================================================= */
function renderTechnicalSkills(data) {
  const container = document.getElementById("technical-skills-grid");
  if (!container || !data.technicalSkills) return;

  container.innerHTML = data.technicalSkills.map(group => `
    <div class="card-clean flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2" style="margin-bottom: 0.65rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--border-light);">
          <span class="text-orange">${getIcon(group.icon || "wrench")}</span>
          <h3 class="text-xs font-bold text-primary font-mono uppercase">${escapeHTML(group.category)}</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.35rem;">
          ${group.skills.map(s => `
            <div class="flex items-start gap-2 text-xs text-secondary">
              <span class="text-orange" style="margin-top: 0.15rem;">${getIcon("check")}</span>
              <span>${escapeHTML(s)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderSoftwareSkills(data) {
  const container = document.getElementById("software-skills-grid");
  if (!container || !data.softwareSkills) return;

  container.innerHTML = data.softwareSkills.map(sw => `
    <div class="card-clean flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2.5" style="margin-bottom: 0.75rem;">
          <div style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; color: var(--accent-orange); flex-shrink: 0;">
            ${getIcon(sw.icon || "cpu")}
          </div>
          <div>
            <h3 class="text-base font-bold text-primary">${escapeHTML(sw.name)}</h3>
            <p class="text-xs text-secondary">${escapeHTML(sw.category)}</p>
          </div>
        </div>

        <div style="padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); background: var(--bg-subtle); border: 1px solid var(--border-light); margin-bottom: 0.65rem;">
          <span class="text-xs text-secondary font-mono" style="font-size: 0.7rem; display: block;">Proficiency Level:</span>
          <strong class="text-xs text-orange">${escapeHTML(sw.proficiencyLevel)}</strong>
        </div>

        <p class="text-xs text-secondary leading-relaxed" style="margin-bottom: 0.65rem;">${escapeHTML(sw.description || "")}</p>

        ${sw.subTools ? `
          <div style="display: flex; flex-direction: column; gap: 0.25rem; padding-top: 0.5rem; border-top: 1px solid var(--border-light);">
            ${sw.subTools.map(sub => `
              <div class="text-xs">
                <strong class="text-primary">${escapeHTML(sub.tool)}:</strong>
                <span class="text-secondary"> ${escapeHTML(sub.role)}</span>
              </div>
            `).join("")}
          </div>
        ` : ''}

        ${sw.useCases ? `
          <div class="flex items-center gap-1 flex-wrap" style="padding-top: 0.5rem; border-top: 1px solid var(--border-light);">
            ${sw.useCases.map(uc => `<span class="technical-pill">${escapeHTML(uc)}</span>`).join("")}
          </div>
        ` : ''}
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   8. CERTIFICATIONS & ACHIEVEMENTS
   ========================================================================= */
function renderCertifications(data) {
  const container = document.getElementById("certifications-grid");
  if (!container || !data.certifications) return;

  container.innerHTML = data.certifications.map(cert => `
    <div class="card-clean flex flex-col justify-between" style="${cert.isPlaceholder ? 'border-style: dashed;' : ''}">
      <div>
        <div class="flex items-center justify-between" style="margin-bottom: 0.35rem;">
          <span class="technical-pill" style="font-size: 0.65rem;">${cert.isPlaceholder ? 'Editable Placeholder' : 'Training & Practice'}</span>
          <span class="text-xs text-muted font-mono">${escapeHTML(cert.date)}</span>
        </div>
        <h3 class="text-sm font-bold ${cert.isPlaceholder ? 'text-secondary' : 'text-primary'}" style="margin-bottom: 0.2rem;">${escapeHTML(cert.title)}</h3>
        <p class="text-xs text-orange font-medium" style="margin-bottom: 0.35rem;">${escapeHTML(cert.issuer)}</p>
        <p class="text-xs text-secondary leading-relaxed">${escapeHTML(cert.description)}</p>
      </div>
      ${cert.isPlaceholder ? `<div class="text-xs text-muted font-mono" style="margin-top: 0.5rem; font-size: 0.68rem;">Update in js/data.js when verified</div>` : ''}
    </div>
  `).join("");
}

function renderAchievements(data) {
  const container = document.getElementById("achievements-grid");
  if (!container || !data.achievements) return;

  container.innerHTML = data.achievements.map(ach => `
    <div class="card-clean" style="${ach.isPlaceholder ? 'border-style: dashed;' : ''}">
      <div class="flex items-start gap-3">
        <div style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; color: var(--accent-orange); flex-shrink: 0;">
          ${getIcon(ach.icon || "award")}
        </div>
        <div>
          <div class="flex items-center gap-2" style="margin-bottom: 0.2rem;">
            <span class="font-mono text-orange font-bold uppercase" style="font-size: 0.7rem;">${escapeHTML(ach.category)}</span>
            ${ach.isPlaceholder ? `<span class="editable-badge">${getIcon("edit-2")} Placeholder</span>` : ''}
          </div>
          <h3 class="text-sm font-bold text-primary" style="margin-bottom: 0.25rem;">${escapeHTML(ach.title)}</h3>
          <p class="text-xs text-secondary leading-relaxed">${escapeHTML(ach.description)}</p>
        </div>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   9. CONTACT SECTION
   ========================================================================= */
function renderContact(data) {
  const p = data.personal;
  const emailText = document.getElementById("contact-email-text");
  const phoneText = document.getElementById("contact-phone-text");
  const locationText = document.getElementById("contact-location-text");
  const linkedinLink = document.getElementById("contact-linkedin-link");

  if (emailText) emailText.textContent = p.email;
  if (phoneText) phoneText.textContent = p.phone;
  if (locationText) locationText.textContent = p.location;
  if (linkedinLink) {
    linkedinLink.href = p.linkedIn;
    linkedinLink.textContent = "linkedin.com/in/nathan-birhane29";
  }
}

function initContactForm(data) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // --- Draft auto-save ---
  const DRAFT_KEY = "nb_contact_draft";

  // Restore saved draft on load
  try {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      const draft = JSON.parse(saved);
      if (draft.name && form.elements["name"]) form.elements["name"].value = draft.name;
      if (draft.email && form.elements["email"]) form.elements["email"].value = draft.email;
      if (draft.subject && form.elements["subject"]) form.elements["subject"].value = draft.subject;
      if (draft.message && form.elements["message"]) form.elements["message"].value = draft.message;
    }
  } catch (e) { /* ignore malformed draft */ }

  // Save draft on any input/change
  function saveDraft() {
    try {
      const draft = {
        name: form.elements["name"] ? form.elements["name"].value : "",
        email: form.elements["email"] ? form.elements["email"].value : "",
        subject: form.elements["subject"] ? form.elements["subject"].value : "",
        message: form.elements["message"] ? form.elements["message"].value : ""
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch (e) { /* ignore storage errors */ }
  }

  form.addEventListener("input", saveDraft);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"] ? form.elements["name"].value.trim() : "";
    const email = form.elements["email"] ? form.elements["email"].value.trim() : "";
    const subject = form.elements["subject"] ? form.elements["subject"].value.trim() : "";
    const message = form.elements["message"] ? form.elements["message"].value.trim() : "";

    if (!name || !email || !message) {
      showToast("Please provide your name, email, and message.", "info");
      return;
    }

    const recipient = data.personal.email;
    const mailtoSubject = encodeURIComponent(subject || `Materials Engineering Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}\n\n---\nSent via Nathan Birhane Portfolio`);
    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    showToast("Opening your email client addressed to Nathan Birhane...");
    window.location.href = mailtoUrl;

    // Clear draft after submit
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
    setTimeout(() => form.reset(), 1000);
  });
}

/* =========================================================================
   10. MODALS (PROJECT & CV & QC TOOL)
   ========================================================================= */
function initModals(data) {
  const backdrop = document.getElementById("modal-backdrop");
  const modalBody = document.getElementById("modal-content-body");
  const closeBtn = document.getElementById("modal-close-btn");

  window.openProjectModal = function(projectId) {
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj || !backdrop || !modalBody) return;

    const imgs = (data.personal.images || {});
    const fallbackImg = getProjectFallback(proj.id, imgs);

    modalBody.innerHTML = `
      <div>
        <div style="position: relative; width: 100%; height: 240px; background: var(--bg-subtle); overflow: hidden; border-bottom: 1px solid var(--border-light);">
          <img src="${proj.image || fallbackImg}" onerror="this.src='${fallbackImg}'" alt="${escapeHTML(proj.title)}" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; bottom: 0.75rem; left: 1rem; right: 1rem;">
            <span class="technical-pill" style="background: var(--accent-navy); color: #fff; font-weight: 700;">${escapeHTML(proj.category)}</span>
            <h2 class="text-xl font-bold text-primary" style="margin-top: 0.25rem; background: rgba(255,255,255,0.9); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); display: inline-block;">${escapeHTML(proj.title)}</h2>
          </div>
        </div>

        <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h4 class="text-xs font-mono uppercase text-secondary font-bold" style="margin-bottom: 0.25rem;">Assigned Roles:</h4>
            <div class="flex items-center gap-1 flex-wrap">
              ${proj.roles.map(r => `<span class="technical-pill" style="color: var(--accent-orange); background: var(--accent-orange-subtle);">${escapeHTML(r)}</span>`).join("")}
            </div>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase text-secondary font-bold" style="margin-bottom: 0.25rem;">Project Overview & Scope:</h4>
            <p class="text-xs text-secondary leading-relaxed" style="margin-bottom: 0.5rem;">${escapeHTML(proj.summary)}</p>
            <div style="padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); background: var(--bg-subtle); border: 1px solid var(--border-light); font-size: 0.75rem; color: var(--text-secondary);">
              <strong class="text-primary block" style="margin-bottom: 0.15rem;">Civil & Structural Scope:</strong>
              ${escapeHTML(proj.scope)}
            </div>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase text-secondary font-bold" style="margin-bottom: 0.25rem;">Technical Duties & Quality Protocols:</h4>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              ${proj.technicalDuties.map(d => `
                <div class="flex items-start gap-2 text-xs text-secondary">
                  <span class="text-orange" style="margin-top: 0.15rem;">${getIcon("check")}</span>
                  <span>${escapeHTML(d)}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase text-secondary font-bold" style="margin-bottom: 0.25rem;">Testing & Verification Focus:</h4>
            <div class="flex items-center gap-1 flex-wrap">
              ${proj.testingFocus.map(tf => `<span class="technical-pill">${escapeHTML(tf)}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    backdrop.classList.add("active");
    backdrop.setAttribute("aria-label", `Project: ${escapeHTML(proj.title)}`);
    lockBodyScroll();
  };

  // CV is now the official PDF — open it directly in a new tab.
  window.openDigitalCVModal = function() {
    window.open("assets/docs/Nathan_Birhane_CV.pdf", "_blank", "noopener,noreferrer");
  };

  function closeModal() {
    backdrop.classList.remove("active");
    unlockBodyScroll();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeModal();
    }
  });
}

/* =========================================================================
   11. INTERACTIVE ASTM QC CALCULATOR
   ========================================================================= */
function initQCTool() {
  const calcModal = document.getElementById("qc-calculator-modal");
  if (!calcModal) return;

  window.openCalculatorModal = () => {
    calcModal.classList.add("active");
    lockBodyScroll();
    calculateQC();
  };

  window.closeCalculatorModal = () => {
    calcModal.classList.remove("active");
    unlockBodyScroll();
  };

  const form = document.getElementById("qc-calc-form");
  if (form) {
    form.addEventListener("input", calculateQC);
  }

  calcModal.addEventListener("click", (e) => {
    if (e.target === calcModal) window.closeCalculatorModal();
  });
}

function calculateQC() {
  const form = document.getElementById("qc-calc-form");
  if (!form) return;

  const specimenType = form.elements["specimenType"].value;
  const gradeStr = form.elements["concreteGrade"].value;
  const targetGrade = parseInt(gradeStr.replace("C", ""), 10) || 25;
  const cureAge = parseInt(form.elements["cureAge"].value, 10) || 28;
  const loadKN = parseFloat(form.elements["appliedLoad"].value) || 0;
  const slumpMM = parseInt(form.elements["measuredSlump"].value, 10) || 100;

  // Area
  const area = specimenType === "cube" ? 22500 : 17671.46;
  const loadN = loadKN * 1000;
  const measuredMPa = Number((loadN / area).toFixed(2));

  // Age Target
  const ageFactor = cureAge <= 7 ? 0.67 : (cureAge >= 28 ? 1.0 : 0.85);
  const targetAtAge = Number((targetGrade * ageFactor).toFixed(2));
  const ratio = Math.round((measuredMPa / targetAtAge) * 100);

  const isStrengthPass = measuredMPa >= targetAtAge;
  const isSlumpPass = Math.abs(slumpMM - 100) <= 25;

  const stressEl = document.getElementById("calc-result-stress");
  const targetEl = document.getElementById("calc-result-target");
  const ratioEl = document.getElementById("calc-result-ratio");
  const areaEl = document.getElementById("calc-result-area");
  const strengthBadge = document.getElementById("calc-strength-badge");
  const slumpBadge = document.getElementById("calc-slump-badge");
  const overallBanner = document.getElementById("calc-overall-banner");

  if (stressEl) stressEl.textContent = `${measuredMPa} MPa`;
  if (targetEl) targetEl.textContent = `${targetAtAge} MPa (${cureAge}-Day Target)`;
  if (ratioEl) ratioEl.textContent = `${ratio}%`;
  if (areaEl) areaEl.textContent = `${Math.round(area).toLocaleString()} mm²`;

  if (strengthBadge) {
    strengthBadge.textContent = isStrengthPass ? "COMPLIANT (ASTM C39)" : "BELOW TARGET";
    strengthBadge.style.color = isStrengthPass ? "var(--accent-green)" : "#DC2626";
  }

  if (slumpBadge) {
    slumpBadge.textContent = isSlumpPass ? "WITHIN TOLERANCE (ASTM C143)" : "OUT OF TOLERANCE";
    slumpBadge.style.color = isSlumpPass ? "var(--accent-green)" : "#D97706";
  }

  if (overallBanner) {
    if (isStrengthPass && isSlumpPass) {
      overallBanner.style.background = "#F0FDF4";
      overallBanner.style.borderColor = "#BBF7D0";
      overallBanner.style.color = "#166534";
      overallBanner.innerHTML = `${getIcon("check-circle")} <span><strong>Batch Verification Passed:</strong> Meets required compressive strength and slump tolerances for ${gradeStr}.</span>`;
    } else {
      overallBanner.style.background = "#FEF2F2";
      overallBanner.style.borderColor = "#FECACA";
      overallBanner.style.color = "#991B1B";
      overallBanner.innerHTML = `${getIcon("info")} <span><strong>Non-Conformance Flagged:</strong> Requires engineering inspection or batch adjustment.</span>`;
    }
  }
}

/* =========================================================================
   12. NAVIGATION & MOBILE DRAWER
   ========================================================================= */
function initNavigation() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".nav-link");
  const header = document.getElementById("site-header");

  // Scroll: add/remove 'scrolled' class for backdrop-blur shadow
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // Mobile menu toggle with icon swap
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      // Swap icon between menu and x
      const iconSpan = toggle.querySelector("[data-icon]");
      if (iconSpan) {
        iconSpan.setAttribute("data-icon", isOpen ? "x" : "menu");
        iconSpan.innerHTML = ICONS[isOpen ? "x" : "menu"] || "";
      }
    });

    drawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        drawer.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        const iconSpan = toggle.querySelector("[data-icon]");
        if (iconSpan) {
          iconSpan.setAttribute("data-icon", "menu");
          iconSpan.innerHTML = ICONS["menu"] || "";
        }
      });
    });

    // Close drawer on outside click
    document.addEventListener("click", (e) => {
      if (!drawer.classList.contains("active")) return;
      if (toggle.contains(e.target) || drawer.contains(e.target)) return;
      drawer.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      const iconSpan = toggle.querySelector("[data-icon]");
      if (iconSpan) {
        iconSpan.setAttribute("data-icon", "menu");
        iconSpan.innerHTML = ICONS["menu"] || "";
      }
    });

    // Close drawer on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("active")) {
        drawer.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
        const iconSpan = toggle.querySelector("[data-icon]");
        if (iconSpan) {
          iconSpan.setAttribute("data-icon", "menu");
          iconSpan.innerHTML = ICONS["menu"] || "";
        }
      }
    });
  }

  // Active Spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        links.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { passive: true });
}
