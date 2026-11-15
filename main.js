// ============================================================
//  Portfolio Abdul Koyoum EHYSSE
//  1. Traductions anglaises (le français est écrit dans index.html)
//  2. Galeries de photos et vidéos (liste explicite des fichiers)
//  3. Apparition douce des blocs au défilement
// ============================================================

const EN = {
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.experience": "Background",
  "nav.skills": "Skills",
  "nav.contact": "Contact",

  "hero.eyebrow": "Engineering student · INSA Centre Val de Loire",
  "hero.title": "Robotics, mechatronics and industrial systems",
  "hero.lead": "From CAD to 3D printing and embedded electronics, I design systems that move: a vision-guided robotic arm, an autonomous car and, right now, an electric city scooter.",
  "hero.availability": "Looking for a 16 to 21-week internship, April 5 – August 27, 2027 · Willing to relocate anywhere in France",
  "hero.cv": "Download my resume",
  "hero.contact": "Contact me",

  "about.title": "About",
  "about.p1": "4th-year engineering student at INSA Centre Val de Loire, majoring in Industrial Systems Engineering (expected graduation: 2028), after integrated preparatory classes and a 1st engineering year in electrical engineering at the École Polytechnique d'Abomey-Calavi (EPAC), Benin.",
  "about.p2": "What drives me: turning a set of specifications into a working prototype. With a partner, I designed a vision-guided robotic arm and an autonomous car, from 3D modelling to control. At Bénin Excellence, I taught CAD and 3D printing, and assisted AI classes, for about a hundred participants.",
  "about.f1k": "Based in",
  "about.f1v": "Blois, France · Willing to relocate anywhere in France",
  "about.f2k": "Languages",
  "about.f2v": "French (native), English (B1), Fon and Yoruba (understanding)",
  "about.f3k": "Internship",
  "about.f3v": "16 to 21 weeks, April 5 – August 27, 2027",

  "projects.title": "Projects",
  "badge.ongoing": "Ongoing",
  "p0.org": "Entrepreneurial project with a partner",
  "p0.date": "since July 2026",
  "p0.title": "Electric city scooter",
  "p0.desc": "Designing an electric city scooter with one goal: mastering the whole process, from idea to finished product. Specifications: 350 W hub motor, 48 V battery, 25 km/h (the legal maximum in France) and a range of about 50 km. Parts and CNC machining are ordered, and the prototype is due in July 2027.",
  "p0.role": "My role, with a partner: CAD in Fusion 360, CAM for machining, motor and battery selection, electronics, programming and supplier sourcing.",
  "p3.org": "Les Entrepreneuriales programme, INSA",
  "p3.date": "November 2024 - July 2026",
  "p3.title": "Urbaqua: connected hydroponics kit",
  "p3.desc": "An entrepreneurial project to make urban farming accessible through hydroponics. Two 3D-printed models: a modular growing tower and a compact cube. Each includes LED lighting, a water pump, ventilation and temperature and humidity sensors driven by ESP32 and Arduino. The prototypes were tested with real plants, up to the first sprouts. Results: Pépite Prize, Les Entrepreneuriales INSA programme and 6 pre-orders at VivaTech.",
  "p3.role": "My role: co-founder, in charge of CAD and electronics, plus the business plan and pitches. I left when the company was incorporated, in July 2026, to focus on new projects.",
  "p1.org": "AI Lab, Bénin Excellence, with a partner",
  "p1.date": "January - June 2023",
  "p1.title": "Vision-guided 4-axis robotic arm",
  "p1.desc": "The arm spots a component on the tray with a camera, identifies it with a YOLOv5 model trained for the project, then picks it up and places it, with an observed success rate of about 90%. Mechanics: belt-driven stepper motors and a gripper driven by a DC motor with a limit switch. Control: Arduino Uno and CNC Shield, driven from the PC in Python. The project grew out of a simple conveyor-belt logistics line, carried over and upgraded into a robotic arm, then taught at the 2023 and 2024 Bénin Excellence sessions.",
  "p1.role": "My role: designed all the hardware from scratch (concept, CAD, 3D printing, wiring, testing), including a full CAD redesign, plus the arm's control; helped train the model.",
  "p2.org": "Technical project with a partner, Benin",
  "p2.date": "January - June 2023",
  "p2.title": "Autonomous car",
  "p2.desc": "A small car that follows a track and avoids obstacles using only its camera and AI. A Raspberry Pi processes the image, an ESP32 drives the DC motors and the steering servo. The frame was designed in Fusion 360 and 3D-printed, based on a set of specifications and on sizing the electronic components.",
  "p2.role": "My role: designing and controlling the vehicle, and helping train the models.",

  "others.title": "Other projects",
  "others.elec.t": "PIC18F45 microcontroller (INSA, electronics project)",
  "others.elec.d": "Programmed inputs and outputs, timers, the analog-to-digital converter, and SPI, USART and I2C links.",
  "others.be.t": "Mechanical design office (INSA)",
  "others.be.d": "Sizing, documentation and drawings of a speed reducer for a sliding gate opener.",
  "others.app.t": "Application development (INSA)",
  "others.app.d": "Battleship game in Python, with a Tkinter graphical interface.",
  "others.maq.t": "Electronic models (EPAC, 2022)",
  "others.maq.d": "Demonstration models presented at the Electrical Engineering Student Day.",

  "tag.prog": "Programming",
  "tag.robotics": "Robotics",
  "tag.print": "3D printing",
  "tag.business": "Entrepreneurship",
  "tag.hydro": "Hydroponics",
  "tag.product": "Product design",
  "tag.sensors": "ESP32 sensors",
  "tag.electronics": "Electronics",
  "tag.powertrain": "Motor and battery",
  "tag.manufacturing": "Manufacturing",
  "tag.suppliers": "Supplier sourcing",
  "tag.vision": "Computer vision",
  "tag.fea": "Finite element analysis",
  "tag.cam": "CAM / CNC machining",
  "tag.control": "Control engineering",
  "tag.plc": "Unitronics PLCs (UniLogic)",
  "tag.mfg": "Manufacturing methods",
  "tag.specs": "Specifications",
  "tag.prod": "Production management",
  "tag.spc": "Quality and SPC",

  "exp.title": "Experience",
  "exp.kiabi.date": "July 2026 - present",
  "exp.kiabi.role": "Sales associate",
  "exp.kiabi.org": "Kiabi, Blois · Part-time student contract, 16 h/week",
  "exp.kiabi.desc": "Checkout, customer advice, inventories and clothing alterations.",
  "exp.bchef.date": "October 2024 - July 2026",
  "exp.bchef.role": "Crew member",
  "exp.bchef.org": "BCHEF, Blois · Part-time student contract, 18 h/week",
  "exp.bchef.desc": "Opening and closing the restaurant, stock management, peak-hour service.",
  "exp.be.date": "August 2022 - July 2024",
  "exp.be.role": "Robotics designer and instructor",
  "exp.be.org": "AI Lab, Bénin Excellence, Benin",
  "exp.be.desc": "Designed the projects taught at the 2023 and 2024 sessions: a conveyor-belt logistics line, carried over and upgraded into a vision-guided robotic arm. Taught CAD and 3D printing, and assisted MicroPython, machine learning and deep learning classes for about a hundred participants.",

  "edu.title": "Education",
  "edu.insa.date": "September 2024 - 2028 (expected graduation)",
  "edu.insa.title": "Engineering degree, Industrial Systems Engineering (4th year)",
  "edu.insa.mods": "Courses: control systems, microcontrollers, power electronics, finite element analysis, production management, quality and SPC, databases, object-oriented C++.",
  "edu.epac.date": "September 2021 - July 2024",
  "edu.epac.title": "Integrated preparatory classes and 1st engineering year, Electrical Engineering",
  "edu.epac.org": "École Polytechnique d'Abomey-Calavi (EPAC), Benin",
  "edu.eeia.date": "July 2022",
  "edu.eeia.title": "Artificial Intelligence Summer School",
  "edu.eeia.org": "Robotics, deep learning, embedded electronics",
  "edu.bac.date": "July 2021",
  "edu.bac.title": "Scientific baccalaureate (series C), with honours",

  "skills.title": "Skills",
  "skills.cad": "Design",
  "skills.prog": "Programming and AI",
  "skills.elec": "Electronics and measurement",
  "skills.industry": "Industry",
  "skills.methods": "Methods",
  "skills.langs": "Languages",
  "lang.fr": "French (native)",
  "lang.en": "English (B1)",
  "lang.fon": "Fon and Yoruba (understanding)",
  "skills.engagement": "Volunteering:",
  "skills.engagementText": "Secours populaire (food aid charity) since January 2025.",
  "skills.interests": "Interests:",
  "skills.interestsList": "chess, sport (tennis, running), reading.",

  "contact.title": "Contact",
  "contact.lead": "Have an internship in robotics, manufacturing or industrial data? Get in touch.",
};

// ============================================================
//  Bascule FR / EN : français par défaut, anglais seulement après
//  un clic sur EN (le choix est retenu)
// ============================================================

const CV = { fr: "assets/cv/CV_Abdul_EHYSSE_FR.pdf", en: "assets/cv/CV_Abdul_EHYSSE_EN.pdf" };

const nodes = document.querySelectorAll("[data-i18n]");
const FR = {};
nodes.forEach((el) => { FR[el.dataset.i18n] = el.textContent; });

const switchBtn = document.getElementById("lang-switch");
const cvLink = document.getElementById("cv-link");

let lang = "fr";

function render() {
  const dict = lang === "en" ? EN : FR;
  nodes.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-placeholder-en]").forEach((el) => {
    el.dataset.placeholderFr ??= el.dataset.placeholder;
    el.dataset.placeholder = lang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderFr;
  });
  document.documentElement.lang = lang;
  switchBtn.textContent = lang === "en" ? "FR" : "EN";
  switchBtn.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
  cvLink.href = CV[lang];
}

try { if (localStorage.getItem("lang") === "en") lang = "en"; } catch {}
render();

switchBtn.addEventListener("click", () => {
  lang = lang === "en" ? "fr" : "en";
  try { localStorage.setItem("lang", lang); } catch {}
  render();
});

document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
//  Galeries de photos et vidéos
//  Pour ajouter un média : déposer le fichier dans assets/img/projets/
//  puis l'ajouter à la liste du projet ci-dessous, dans l'ordre d'affichage.
// ============================================================

const MEDIA = {
  "trottinette": ["trottinette1.jpeg"],
  "urbaqua": ["urbaqua1.jpeg", "urbaqua2.jpeg", "urbaqua3.jpeg", "urbaqua4.jpeg", "urbaqua5.jpeg"],
  "bras-robotique": ["bras-robotique1.jpeg", "bras-robotique2.mp4", "bras-robotique3.jpeg", "bras-robotique4.png"],
  "voiture-autonome": ["voiture-autonome1.mp4"],
};

function buildGallery(el) {
  const items = (MEDIA[el.dataset.gallery] || []).map((file) => ({
    type: /\.(mp4|webm)$/i.test(file) ? "video" : "image",
    url: `assets/img/projets/${file}`,
  }));
  if (items.length === 0) return;

  const track = document.createElement("div");
  track.className = "gallery-track";
  items.forEach(({ type, url }, i) => {
    const label = `${el.dataset.alt} (${i + 1}/${items.length})`;
    // Chaque média est affiché en entier devant une copie agrandie et floutée
    const slide = document.createElement("div");
    slide.className = "slide";
    let media;
    if (type === "video") {
      media = document.createElement("video");
      media.src = url;
      media.controls = true;
      media.muted = true;
      media.playsInline = true;
      media.preload = "metadata";
      media.setAttribute("aria-label", label);
      // Fond flou tiré de la première image de la vidéo
      media.addEventListener("loadedmetadata", () => { media.currentTime = 0.1; }, { once: true });
      media.addEventListener("seeked", () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 64;
          canvas.height = Math.round(64 * media.videoHeight / media.videoWidth) || 36;
          canvas.getContext("2d").drawImage(media, 0, 0, canvas.width, canvas.height);
          slide.style.setProperty("--bg", `url(${canvas.toDataURL()})`);
        } catch {}
      }, { once: true });
    } else {
      media = document.createElement("img");
      media.src = url;
      media.alt = label;
      media.loading = "lazy";
      slide.style.setProperty("--bg", `url("${url}")`);
    }
    slide.appendChild(media);
    track.appendChild(slide);
  });
  el.appendChild(track);
  if (items.length === 1) return;

  const go = (i) => track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  const current = () => Math.round(track.scrollLeft / track.clientWidth);

  const prev = document.createElement("button");
  prev.className = "gallery-btn prev";
  prev.type = "button";
  prev.setAttribute("aria-label", "Précédent / Previous");
  prev.textContent = "‹";
  prev.addEventListener("click", () => go((current() - 1 + items.length) % items.length));

  const next = document.createElement("button");
  next.className = "gallery-btn next";
  next.type = "button";
  next.setAttribute("aria-label", "Suivant / Next");
  next.textContent = "›";
  next.addEventListener("click", () => go((current() + 1) % items.length));

  const dots = document.createElement("div");
  dots.className = "gallery-dots";
  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `${i + 1}/${items.length}`);
    dot.addEventListener("click", () => go(i));
    dots.appendChild(dot);
  });

  // Met à jour les points et met en pause les vidéos qui ne sont plus affichées
  const update = () => {
    const i = current();
    dots.querySelectorAll("button").forEach((d, j) => d.classList.toggle("active", i === j));
    track.querySelectorAll("video").forEach((v) => { if (v.parentElement !== track.children[i]) v.pause(); });
  };
  track.addEventListener("scroll", update, { passive: true });
  update();

  el.append(prev, next, dots);
}

document.querySelectorAll("[data-gallery]").forEach(buildGallery);

// ============================================================
//  Apparition douce des blocs au défilement
//  Le CSS ne masque ces blocs que sous html.js ; ils s'affichent tous
//  au bout de 2,5 s au cas où l'observateur ne se déclencherait pas.
// ============================================================

const revealTargets = document.querySelectorAll(".project, .timeline li, .skill-card");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
  setTimeout(() => revealTargets.forEach((el) => el.classList.add("visible")), 2500);
}
