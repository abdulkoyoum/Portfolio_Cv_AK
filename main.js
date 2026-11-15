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
