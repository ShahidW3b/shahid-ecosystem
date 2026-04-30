const systems = [
  {
    title: "Cleaning Operations Platform",
    label: "Business System",
    category: "Platform",
    tags: ["Booking Workflow", "Admin Dashboard", "EN/DE"],
    image: "images/Crystal.png",
    highlight: "Operational clarity for service businesses.",
    researchUse:
      "Built around clear service packages, smooth booking flow, multilingual access, and internal request visibility.",
    caseStudyLabel: "View Live Product",
    caseStudyHref: "https://crystal-nest-cleaning.vercel.app/",
    problem:
      "Most cleaning businesses lose bookings due to unclear service packages, slow inquiry handling, and lack of internal visibility.",
    solution:
      "A platform that standardizes service packages, captures bookings in structured form, and provides real-time internal visibility.",
    architecture: [
      "Conversion-optimized landing system",
      "Structured booking intake workflow",
      "Internal operations dashboard",
      "Scalable automation-ready architecture",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Backend-ready architecture"],
  },
  {
    title: "Axonyra Research Interface",
    label: "Research Brand System",
    category: "Research",
    tags: ["AI Safety", "Cybersecurity", " Research Interface"],
    image: "images/Axonyra.png",
    highlight: "Research Platform for AI Systems",
    researchUse:
      "Built to present AI research, publication direction, and technical authority through a clear digital interface.",
    caseStudyLabel: "View Live Product",
    caseStudyHref: "https://axonyra.vercel.app/",
    problem:
      "Research-focused brands often appear abstract, fragmented, or difficult to understand for visitors.",
    solution:
      "A structured research interface that presents Axonyra’s AI safety, cybersecurity, and publication direction with clarity and authority.",
    architecture: [
      "Research-focused landing page",
      "Clear topic and positioning sections",
      "Authority-driven brand structure",
      "Conversion path for collaboration and inquiries",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "Admin Dashboard System",
    label: "Product Interface",
    category: "Product",
    tags: ["Dashboard Logic", "Dynamic UI", "State Management"],
    image: "images/dashboard.png",
    highlight: "Full control over bookings and services",
    researchUse:
      "Built to organize bookings, service logic, and workflows through a clean dashboard with state-driven UI.",
    caseStudyLabel: "View Live Product",
    caseStudyHref:
      "https://client-booking-dashboard-1ur9fk45j-shahabs-projects-654ac3d3.vercel.app/",
    problem:
      "Most dashboard demos focus on static UI and visuals, lacking real interaction logic, workflow structure, and data handling.",
    solution:
      "An interactive admin dashboard for managing bookings, services, and workflows with dynamic state updates and real-time UI feedback.",
    architecture: [
      "Booking lifecycle and status management",
      "Client-side state persistence (localStorage)",
      "Dynamic filtering and real-time UI updates",
      "Modular multi-view dashboard architecture",
    ],
    stack: ["HTML", "CSS", "Vanilla JavaScript"],
  },
];

const founderProfile = {
  image: "images/Me.jpeg",
};

const research = [
  {
    title:
      "A Taxonomy-Based Analysis of High-Risk Prompt Intent and Linguistic Perturbations in Large Language Models",
    status: "Submitted",
    area: "LLM Safety",
    summary:
      "A research-led framework for understanding risky prompt intent, adversarial phrasing, and safety pressure points in large language models.",
    href: "#",
    cta: "Read publication",
    systemCta: "See system direction",
  },
  {
    title: "Vulnerabilities of AI in Cybersecurity",
    status: "Under Review",
    area: "AI Security",
    summary:
      "Explores where AI systems create new defensive opportunities and where they expose fragile or exploitable surfaces.",
    href: "#",
    cta: "View paper overview",
    systemCta: "See applied security system",
  },
  {
    title: "AI and Education",
    status: "Under Review",
    area: "Applied AI",
    summary:
      "Examines practical AI use in educational environments through a structured, impact-aware lens rather than generic hype.",
    href: "#",
    cta: "Open publication",
    systemCta: "View product translation",
  },
];

const principles = [
  "Systems over pages",
  "Structure over decoration",
  "Performance over noise",
  "Research-driven engineering",
  "Interfaces that feel built, not assembled",
];

const authoritySignals = [
  {
    title: "Research → System Translation",
    text: "Show how papers influence actual products, interfaces, and workflows. That instantly moves you beyond the freelancer category.",
    icon: "✦",
  },
  {
    title: "Case-Study Driven Presentation",
    text: "Frame projects as designed systems with reasoning, architecture, and decision logic — not as random visual pieces.",
    icon: "⌘",
  },
  {
    title: "Operator Positioning",
    text: "Present yourself as someone who designs structured digital environments with intent, not just someone who delivers pages.",
    icon: "⬡",
  },
];

const categories = ["All", "Platform", "Brand", "Product", "Research"];

const contactFlows = [
  {
    key: "system",
    title: "Start a System",
    subtitle: "For platforms, websites, dashboards, or product interfaces.",
    icon: "◎",
    companyPlaceholder: "Company / Project / Brand",
    messagePlaceholder:
      "Tell me about the system you want to build, improve, or redesign.",
  },
  {
    key: "research",
    title: "Collaborate on Research",
    subtitle:
      "For AI, safety, cybersecurity, and publication-related discussions.",
    icon: "✦",
    companyPlaceholder: "Institution / Journal / Team",
    messagePlaceholder:
      "Tell me about the research direction, paper, or collaboration idea.",
  },
  {
    key: "inquiry",
    title: "General Inquiry",
    subtitle: "For introductions, opportunities, and broader conversations.",
    icon: "✉",
    companyPlaceholder: "Company / Project / Brand",
    messagePlaceholder: "Write your message here.",
  },
];

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");
const systemsGrid = document.getElementById("systemsGrid");
const emptyState = document.getElementById("emptyState");
const categoryPills = document.getElementById("categoryPills");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const researchList = document.getElementById("researchList");
const principlesGrid = document.getElementById("principlesGrid");
const signalsGrid = document.getElementById("signalsGrid");
const contactOptions = document.getElementById("contactOptions");
const headerContactBtn = document.getElementById("headerContactBtn");

const systemModal = document.getElementById("systemModal");
const contactModal = document.getElementById("contactModal");
const systemModalTitle = document.getElementById("systemModalTitle");
const systemModalSubtitle = document.getElementById("systemModalSubtitle");
const systemProblem = document.getElementById("systemProblem");
const systemSolution = document.getElementById("systemSolution");
const systemArchitecture = document.getElementById("systemArchitecture");
const systemStack = document.getElementById("systemStack");
const contactModalTitle = document.getElementById("contactModalTitle");
const contactModalSubtitle = document.getElementById("contactModalSubtitle");
const contactCompanyField = document.getElementById("contactCompanyField");
const contactMessageField = document.getElementById("contactMessageField");
const contactForm = document.getElementById("contactForm");

const state = {
  dark: true,
  search: "",
  selectedCategory: "All",
};
const backToTop = document.getElementById("backToTop");

function getSystemImage(system) {
  return system.image && system.image.trim()
    ? system.image
    : buildSystemVisual(system.title);
}

function renderFounderPortrait() {
  const portrait = document.getElementById("founderPortraitImage");
  if (!portrait) return;

  const fallback = `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#0f172a"/>
                  <stop offset="100%" stop-color="#0b1220"/>
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#2563eb" stop-opacity="0.95"/>
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.85"/>
                </linearGradient>
              </defs>
              <rect width="800" height="1000" fill="url(#g)"/>
              <circle cx="400" cy="260" r="110" fill="#1e293b" stroke="#38bdf8" stroke-width="8"/>
              <path d="M220 830c24-152 122-236 180-236s156 84 180 236" fill="#111827" stroke="#334155" stroke-width="8"/>
              <rect x="130" y="94" width="540" height="812" rx="40" fill="none" stroke="url(#g2)" stroke-width="10" opacity="0.8"/>
              <text x="400" y="540" text-anchor="middle" fill="#e2e8f0" font-family="Inter, Arial, sans-serif" font-size="38">Add your portrait here</text>
              <text x="400" y="590" text-anchor="middle" fill="#94a3b8" font-family="Inter, Arial, sans-serif" font-size="24">Change founderProfile.image in the script</text>
            </svg>
          `)}`;

  portrait.src =
    founderProfile.image && founderProfile.image.trim()
      ? founderProfile.image
      : fallback;
}

function buildSystemVisual(title) {
  const variants = {
    "Cleaning Operations Platform": `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
                <defs>
                  <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#0f172a"/>
                    <stop offset="55%" stop-color="#111827"/>
                    <stop offset="100%" stop-color="#0b1220"/>
                  </linearGradient>
                  <linearGradient id="panel1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1d4ed8"/>
                    <stop offset="100%" stop-color="#0891b2"/>
                  </linearGradient>
                </defs>
                <rect width="1200" height="700" fill="url(#bg1)"/>
                <g opacity="0.14" stroke="#93c5fd">
                  <path d="M0 120h1200M0 240h1200M0 360h1200M0 480h1200M0 600h1200"/>
                  <path d="M120 0v700M240 0v700M360 0v700M480 0v700M600 0v700M720 0v700M840 0v700M960 0v700M1080 0v700"/>
                </g>
                <rect x="70" y="80" width="1060" height="540" rx="34" fill="#0f172a" stroke="#334155"/>
                <rect x="110" y="126" width="280" height="448" rx="28" fill="#111827" stroke="#334155"/>
                <rect x="430" y="126" width="654" height="182" rx="28" fill="#0b1220" stroke="#334155"/>
                <rect x="430" y="338" width="310" height="236" rx="28" fill="#0b1220" stroke="#334155"/>
                <rect x="774" y="338" width="310" height="236" rx="28" fill="#0b1220" stroke="#334155"/>
                <rect x="140" y="160" width="220" height="18" rx="9" fill="#1e293b"/>
                <rect x="140" y="202" width="170" height="88" rx="20" fill="url(#panel1)"/>
                <rect x="140" y="320" width="220" height="16" rx="8" fill="#1e293b"/>
                <rect x="140" y="352" width="190" height="16" rx="8" fill="#1e293b"/>
                <rect x="140" y="404" width="220" height="58" rx="18" fill="#0b1220" stroke="#334155"/>
                <circle cx="204" cy="433" r="18" fill="#22d3ee"/>
                <rect x="236" y="421" width="90" height="18" rx="9" fill="#334155"/>
                <rect x="470" y="162" width="180" height="18" rx="9" fill="#1e293b"/>
                <rect x="470" y="206" width="220" height="64" rx="22" fill="url(#panel1)"/>
                <rect x="728" y="206" width="320" height="12" rx="6" fill="#1e293b"/>
                <rect x="728" y="236" width="270" height="12" rx="6" fill="#1e293b"/>
                <rect x="470" y="382" width="210" height="148" rx="24" fill="#111827" stroke="#334155"/>
                <path d="M500 504c34-44 62-68 92-68 30 0 56 22 90 58" fill="none" stroke="#22d3ee" stroke-width="14" stroke-linecap="round"/>
                <rect x="806" y="382" width="250" height="22" rx="11" fill="#1e293b"/>
                <rect x="806" y="424" width="220" height="22" rx="11" fill="#1e293b"/>
                <rect x="806" y="466" width="180" height="22" rx="11" fill="#1e293b"/>
              </svg>`,
    "Digital Studio Showcase": `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
                <defs>
                  <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="50%" stop-color="#111827"/>
                    <stop offset="100%" stop-color="#172554"/>
                  </linearGradient>
                  <linearGradient id="panel2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#60a5fa"/>
                    <stop offset="100%" stop-color="#22d3ee"/>
                  </linearGradient>
                </defs>
                <rect width="1200" height="700" fill="url(#bg2)"/>
                <circle cx="195" cy="135" r="150" fill="#1d4ed8" opacity="0.16"/>
                <circle cx="1030" cy="585" r="190" fill="#06b6d4" opacity="0.16"/>
                <rect x="78" y="86" width="1044" height="528" rx="36" fill="#090f1f" stroke="#334155"/>
                <rect x="118" y="122" width="964" height="68" rx="22" fill="#0f172a" stroke="#334155"/>
                <rect x="154" y="148" width="180" height="14" rx="7" fill="#334155"/>
                <rect x="894" y="142" width="146" height="26" rx="13" fill="url(#panel2)"/>
                <rect x="118" y="220" width="458" height="354" rx="32" fill="#0f172a" stroke="#334155"/>
                <rect x="610" y="220" width="472" height="168" rx="32" fill="#0f172a" stroke="#334155"/>
                <rect x="610" y="406" width="224" height="168" rx="28" fill="#0f172a" stroke="#334155"/>
                <rect x="858" y="406" width="224" height="168" rx="28" fill="#0f172a" stroke="#334155"/>
                <rect x="158" y="274" width="168" height="14" rx="7" fill="#334155"/>
                <rect x="158" y="316" width="270" height="124" rx="24" fill="url(#panel2)"/>
                <rect x="158" y="468" width="344" height="16" rx="8" fill="#1e293b"/>
                <rect x="158" y="500" width="300" height="16" rx="8" fill="#1e293b"/>
                <path d="M658 326c44-56 82-94 126-94 44 0 76 26 122 84" fill="none" stroke="#60a5fa" stroke-width="18" stroke-linecap="round"/>
                <path d="M722 342c32-34 58-54 88-54s54 16 92 50" fill="none" stroke="#22d3ee" stroke-width="12" stroke-linecap="round"/>
                <rect x="646" y="438" width="154" height="20" rx="10" fill="#334155"/>
                <rect x="646" y="476" width="120" height="20" rx="10" fill="#334155"/>
                <rect x="894" y="438" width="152" height="96" rx="24" fill="url(#panel2)"/>
              </svg>`,
    "Interactive Quiz Application": `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
                <defs>
                  <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#0b1120"/>
                    <stop offset="100%" stop-color="#172554"/>
                  </linearGradient>
                  <linearGradient id="panel3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#2563eb"/>
                    <stop offset="100%" stop-color="#22d3ee"/>
                  </linearGradient>
                </defs>
                <rect width="1200" height="700" fill="url(#bg3)"/>
                <g opacity="0.16">
                  <circle cx="210" cy="110" r="130" fill="#60a5fa"/>
                  <circle cx="1040" cy="590" r="170" fill="#22d3ee"/>
                </g>
                <rect x="170" y="70" width="860" height="560" rx="44" fill="#0f172a" stroke="#334155"/>
                <rect x="220" y="122" width="760" height="64" rx="24" fill="#111827" stroke="#334155"/>
                <rect x="256" y="148" width="220" height="14" rx="7" fill="#334155"/>
                <rect x="802" y="140" width="132" height="28" rx="14" fill="url(#panel3)"/>
                <rect x="220" y="222" width="760" height="208" rx="30" fill="#0b1220" stroke="#334155"/>
                <rect x="270" y="276" width="410" height="22" rx="11" fill="#334155"/>
                <rect x="270" y="322" width="520" height="16" rx="8" fill="#1e293b"/>
                <rect x="270" y="356" width="420" height="16" rx="8" fill="#1e293b"/>
                <rect x="220" y="460" width="360" height="110" rx="26" fill="#111827" stroke="#334155"/>
                <rect x="620" y="460" width="360" height="110" rx="26" fill="#111827" stroke="#334155"/>
                <rect x="262" y="494" width="256" height="22" rx="11" fill="url(#panel3)"/>
                <rect x="662" y="494" width="256" height="22" rx="11" fill="#334155"/>
                <circle cx="890" cy="302" r="64" fill="url(#panel3)"/>
                <path d="M870 302l16 16 34-38" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    "Research Interface Layer": `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
                <defs>
                  <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                  </linearGradient>
                  <linearGradient id="panel4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1d4ed8"/>
                    <stop offset="100%" stop-color="#06b6d4"/>
                  </linearGradient>
                </defs>
                <rect width="1200" height="700" fill="url(#bg4)"/>
                <g opacity="0.15" stroke="#93c5fd">
                  <path d="M130 90h940v520H130z"/>
                  <path d="M130 182h940M130 274h940M130 366h940M130 458h940M130 550h940"/>
                  <path d="M318 90v520M506 90v520M694 90v520M882 90v520"/>
                </g>
                <rect x="118" y="78" width="964" height="544" rx="38" fill="#0b1220" stroke="#334155"/>
                <rect x="164" y="126" width="872" height="84" rx="26" fill="#0f172a" stroke="#334155"/>
                <rect x="200" y="158" width="330" height="18" rx="9" fill="#334155"/>
                <rect x="868" y="150" width="120" height="28" rx="14" fill="url(#panel4)"/>
                <rect x="164" y="242" width="270" height="330" rx="30" fill="#111827" stroke="#334155"/>
                <rect x="466" y="242" width="570" height="146" rx="30" fill="#111827" stroke="#334155"/>
                <rect x="466" y="426" width="270" height="146" rx="28" fill="#111827" stroke="#334155"/>
                <rect x="766" y="426" width="270" height="146" rx="28" fill="#111827" stroke="#334155"/>
                <rect x="204" y="290" width="190" height="18" rx="9" fill="#334155"/>
                <rect x="204" y="332" width="190" height="132" rx="24" fill="url(#panel4)"/>
                <rect x="512" y="288" width="278" height="18" rx="9" fill="#334155"/>
                <rect x="512" y="328" width="456" height="14" rx="7" fill="#1e293b"/>
                <rect x="512" y="356" width="408" height="14" rx="7" fill="#1e293b"/>
                <path d="M520 520c48-54 84-90 122-90s76 34 122 90" fill="none" stroke="#22d3ee" stroke-width="16" stroke-linecap="round"/>
                <circle cx="900" cy="500" r="52" fill="url(#panel4)"/>
                <rect x="836" y="564" width="128" height="12" rx="6" fill="#334155"/>
              </svg>`,
  };
  const svg = variants[title] || variants["Digital Studio Showcase"];
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function setThemeLabel() {
  themeToggle.textContent = state.dark ? "☀" : "☾";
}

function scrollToSection(targetId) {
  const target = document.querySelector(targetId);
  const headerWrap = document.querySelector(".header-wrap");

  if (!target) return;

  const headerHeight = headerWrap ? headerWrap.offsetHeight : 0;
  const extraSpace = 20;

  const targetY =
    target.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight -
    extraSpace;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
}

function setupAnchorOffset() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      scrollToSection(targetId);

      if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        mobileToggle.textContent = "☰";
      }

      history.replaceState(null, "", targetId);
    });
  });
}

function renderSignals() {
  signalsGrid.innerHTML = authoritySignals
    .map(
      (signal) => `
        <article class="signal-card">
          <div class="icon-box">${signal.icon}</div>
          <h3 style="margin:14px 0 0; font-size: 22px;">${signal.title}</h3>
          <p>${signal.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderResearch() {
  researchList.innerHTML = research
    .map(
      (paper) => `
        <article class="paper-card">
          <div class="paper-top">
            <div>
              <h3 class="paper-title">${paper.title}</h3>
              <div class="paper-meta">${paper.area}</div>
            </div>
            <div class="badge">${paper.status}</div>
          </div>
          <p class="paper-summary">${paper.summary}</p>
          <div class="paper-actions">
            <button class="btn btn-elite publication-btn" data-open-paper="${paper.title}">
              <strong>${paper.cta}</strong><span>↗</span>
            </button>
            <button class="btn btn-secondary publication-btn" data-jump-systems>
              <strong>${paper.systemCta}</strong><span>→</span>
            </button>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll("[data-jump-systems]").forEach((btn) => {
    btn.addEventListener("click", () => {
      scrollToSection("#systems");
    });
  });

  document.querySelectorAll("[data-open-paper]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open("#", "_blank", "noopener,noreferrer");
    });
  });
}

function renderPrinciples() {
  principlesGrid.innerHTML = principles
    .map(
      (item, index) => `
        <article class="principle">
          <small>0${index + 1}</small>
          <strong>${item}</strong>
        </article>
      `,
    )
    .join("");
}

function renderContactOptions() {
  contactOptions.innerHTML = contactFlows
    .map(
      (flow) => `
        <button class="contact-option" data-contact="${flow.key}">
          <div class="contact-option-left">
            <div class="icon-box">${flow.icon}</div>
            <div>
              <strong>${flow.title}</strong>
              <div class="muted">${flow.subtitle}</div>
            </div>
          </div>
          <span>→</span>
        </button>
      `,
    )
    .join("");

  contactOptions.querySelectorAll("[data-contact]").forEach((button) => {
    button.addEventListener("click", () =>
      openContactModal(button.dataset.contact),
    );
  });
}

function renderCategoryPills() {
  categoryPills.innerHTML = categories
    .map(
      (category) => `
        <button class="pill ${
          state.selectedCategory === category ? "active" : ""
        }" data-pill="${category}">${category}</button>
      `,
    )
    .join("");

  categoryPills.querySelectorAll("[data-pill]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.pill;
      categorySelect.value = state.selectedCategory;
      renderCategoryPills();
      renderSystems();
    });
  });
}

function getFilteredSystems() {
  const q = state.search.trim().toLowerCase();

  return systems.filter((system) => {
    const matchesCategory =
      state.selectedCategory === "All" ||
      system.category === state.selectedCategory;

    const matchesSearch =
      !q ||
      system.title.toLowerCase().includes(q) ||
      system.label.toLowerCase().includes(q) ||
      system.category.toLowerCase().includes(q) ||
      system.tags.some((tag) => tag.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });
}

function renderSystems() {
  const filtered = getFilteredSystems();

  systemsGrid.innerHTML = filtered
    .map(
      (system) => `
        <article class="system-card" data-system="${system.title}">
          <div class="system-top">
            <div class="system-grid-bg"></div>
            <div class="system-top-inner">
              <div class="system-row">
                <div class="badge">${system.label}</div>
                <div class="system-category">${system.category}</div>
              </div>
              <div class="system-media">
                <img src="${getSystemImage(system)}" alt="${system.title} preview" loading="lazy" />
              </div>

              <div>
                <h3 class="system-title">${system.title}</h3>
                <p class="system-highlight">${system.highlight}</p>
              </div>
            </div>
          </div>

          <div class="system-bottom">
            <p class="system-solution">${system.solution}</p>

            <div class="research-signal">
              <div class="signal-label">✦ Platform Logic</div>
              <p class="signal-text">${system.researchUse}</p>
            </div>

            <div class="tag-row">
              ${system.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>

            <div class="system-actions">
              <div class="inspect-row">
                <span>Inspect architecture</span>
                <span>↗</span>
              </div>

              <div class="action-row">
                <button class="btn btn-elite" data-open-system="${system.title}">
                  <strong>Open system</strong><span>↗</span>
                </button>
                <button class="btn btn-secondary" data-case-study="${system.title}">
                  ${system.caseStudyLabel} ↗
                </button>
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  emptyState.style.display = filtered.length ? "none" : "block";

  systemsGrid.querySelectorAll("[data-open-system]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const system = systems.find(
        (item) => item.title === button.dataset.openSystem,
      );
      openSystemModal(system);
    });
  });

  systemsGrid.querySelectorAll("[data-case-study]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const system = systems.find(
        (item) => item.title === button.dataset.caseStudy,
      );

      if (system && system.caseStudyHref && system.caseStudyHref !== "#") {
        window.open(system.caseStudyHref, "_blank", "noopener,noreferrer");
      }
    });
  });

  systemsGrid.querySelectorAll(".system-card").forEach((card) => {
    card.addEventListener("click", () => {
      const system = systems.find((item) => item.title === card.dataset.system);
      openSystemModal(system);
    });
  });
}

function openSystemModal(system) {
  if (!system) return;

  systemModalTitle.textContent = system.title;
  systemModalSubtitle.textContent = system.label;
  systemProblem.textContent = system.problem;
  systemSolution.textContent = system.solution;

  systemArchitecture.innerHTML = system.architecture
    .map((item) => `<div class="architecture-item">${item}</div>`)
    .join("");

  systemStack.innerHTML = system.stack
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");

  systemModal.classList.add("open");
  systemModal.setAttribute("aria-hidden", "false");
}

function closeSystemModal() {
  systemModal.classList.remove("open");
  systemModal.setAttribute("aria-hidden", "true");
}

function openContactModal(key) {
  const flow = contactFlows.find((item) => item.key === key) || contactFlows[0];

  contactModalTitle.textContent = flow.title;
  contactModalSubtitle.textContent = flow.subtitle;
  contactCompanyField.placeholder = flow.companyPlaceholder;
  contactMessageField.placeholder = flow.messagePlaceholder;
  contactModal.classList.add("open");
  contactModal.setAttribute("aria-hidden", "false");
}

function closeContactModal() {
  contactModal.classList.remove("open");
  contactModal.setAttribute("aria-hidden", "true");
}

function setupBackToTop() {
  if (!backToTop) return;

  backToTop.addEventListener("click", () => {
    scrollToSection("#hero");
  });

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
}

function toggleBackToTop() {
  if (!backToTop) return;

  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

themeToggle.addEventListener("click", () => {
  state.dark = !state.dark;
  root.classList.toggle("dark", state.dark);
  setThemeLabel();
});

mobileToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  mobileToggle.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileToggle.textContent = "☰";
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderSystems();
});

categorySelect.addEventListener("change", (event) => {
  state.selectedCategory = event.target.value;
  renderCategoryPills();
  renderSystems();
});

headerContactBtn.addEventListener("click", () => openContactModal("system"));

document.querySelectorAll("[data-close-system]").forEach((button) => {
  button.addEventListener("click", closeSystemModal);
});

document.querySelectorAll("[data-close-contact]").forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

systemModal.addEventListener("click", (event) => {
  if (event.target === systemModal) closeSystemModal();
});

contactModal.addEventListener("click", (event) => {
  if (event.target === contactModal) closeContactModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSystemModal();
    closeContactModal();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(
    "Inquiry captured. Connect this form to Formspree, Supabase, email, or your backend next.",
  );
  contactForm.reset();
  closeContactModal();
});

renderSignals();
renderResearch();
renderPrinciples();
renderFounderPortrait();
renderContactOptions();
renderCategoryPills();
renderSystems();
setThemeLabel();
setupAnchorOffset();
setupBackToTop();
