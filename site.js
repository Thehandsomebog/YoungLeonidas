const atlasContent = {
  foundations: {
    number: "01 / 05",
    category: "Foundations",
    title: "How peptide signals work in animals",
    description:
      "Begin with amino acids, peptide bonds, receptors, and the important differences between laboratory models, humans, and companion animals.",
    evidence: "Foundational biology",
  },
  metabolic: {
    number: "02 / 05",
    category: "Metabolic health",
    title: "Glucose, appetite, and energy signaling",
    description:
      "Explore insulin, incretin biology, appetite signaling, and why canine and feline metabolism require different clinical interpretation.",
    evidence: "Established + emerging",
  },
  mobility: {
    number: "03 / 05",
    category: "Mobility & recovery",
    title: "Load, tissue response, and rehabilitation",
    description:
      "Understand joint, muscle, tendon, and connective-tissue research without turning early biological findings into injury-treatment claims.",
    evidence: "Mixed evidence",
  },
  skin: {
    number: "04 / 05",
    category: "Skin & coat",
    title: "Barrier biology and repair signaling",
    description:
      "Connect collagen, extracellular matrix, inflammatory signaling, and coat health to species-aware dermatology research.",
    evidence: "Mechanism-led",
  },
  aging: {
    number: "05 / 05",
    category: "Healthy aging",
    title: "Cellular resilience across the lifespan",
    description:
      "Review mitochondrial signaling, cognitive aging, stress response, and the limits of translating longevity research into pet-health promises.",
    evidence: "Early + conceptual",
  },
};

const speciesNames = {
  dog: "Dog",
  cat: "Cat",
  all: "Cross-species",
};

const speciesButtons = [...document.querySelectorAll(".species-button")];
const atlasPins = [...document.querySelectorAll(".atlas-pin")];
const detailNumber = document.querySelector("#detail-number");
const detailCategory = document.querySelector("#detail-category");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const detailSpecies = document.querySelector("#detail-species");
const detailEvidence = document.querySelector("#detail-evidence");

let activeSpecies = "dog";

if (speciesButtons.length && detailSpecies) {
  speciesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSpecies = button.dataset.species;
      speciesButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      detailSpecies.textContent = speciesNames[activeSpecies];
    });
  });
}

if (atlasPins.length && detailTitle) {
  atlasPins.forEach((pin) => {
    pin.addEventListener("click", () => {
      const content = atlasContent[pin.dataset.area];
      if (!content) return;
      atlasPins.forEach((item) => item.classList.toggle("is-active", item === pin));
      detailNumber.textContent = content.number;
      detailCategory.textContent = content.category;
      detailTitle.textContent = content.title;
      detailDescription.textContent = content.description;
      detailSpecies.textContent = speciesNames[activeSpecies];
      detailEvidence.textContent = content.evidence;
    });
  });
}

const filterButtons = [...document.querySelectorAll(".filter-pill")];
const dossierCards = [...document.querySelectorAll(".dossier-card")];

if (filterButtons.length && dossierCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const filter = button.dataset.filter;
      dossierCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
}

const blogFilterButtons = [...document.querySelectorAll("[data-blog-filter]")];
const blogCards = [...document.querySelectorAll("[data-blog-category]")];

if (blogFilterButtons.length && blogCards.length) {
  blogFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      blogFilterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const filter = button.dataset.blogFilter;
      blogCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.blogCategory !== filter;
      });
    });
  });
}

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#pet-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
}
