// Small hand-written stroke icons (no external icon library) keyed by the
// `icon` field in content.js's academicPrograms, plus one shared icon for
// announcement cards.
const icons = {
  science: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2"/><path d="M8 15h8"/></svg>`,
  social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>`,
  language: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4V5Z"/></svg>`,
  announcement: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14"/></svg>`,
};

function renderStats() {
  const row = document.getElementById("statRow");
  row.innerHTML = siteContent.stats
    .map((s) => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`)
    .join("");
}

function renderAnnouncements() {
  const list = document.getElementById("announcementList");
  list.innerHTML = siteContent.announcements
    .map(
      (a) => `
      <article class="card">
        <span class="card-icon">${icons.announcement}</span>
        <p class="card-date">${a.date}</p>
        <h3>${a.title}</h3>
        <p>${a.body}</p>
      </article>`
    )
    .join("");
}

function renderAcademics() {
  const list = document.getElementById("academicsList");
  list.innerHTML = siteContent.academicPrograms
    .map(
      (p) => `
      <article class="card">
        <span class="card-icon">${icons[p.icon] || ""}</span>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
      </article>`
    )
    .join("");
}

function renderUniversities() {
  const worldwide = document.getElementById("universityListWorldwide");
  const ethiopia = document.getElementById("universityListEthiopia");

  const badge = (u) =>
    `<span class="uni-badge">${u.name}${u.location ? `<em>${u.location}</em>` : ""}</span>`;

  worldwide.innerHTML = siteContent.universityPlacements.worldwide.map(badge).join("");
  ethiopia.innerHTML = siteContent.universityPlacements.ethiopia.map(badge).join("");
}

renderStats();
renderAnnouncements();
renderAcademics();
renderUniversities();

// Nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Contact form — no backend behind this static site, so submitting opens
// the visitor's email client with the message pre-filled and addressed to
// the school, instead of silently discarding it.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  const subject = `Message from ${name}`;
  const body = `${message}\n\n---\nFrom: ${name} (${email})`;

  window.location.href = `mailto:info@debremarkoshs.edu.et?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
