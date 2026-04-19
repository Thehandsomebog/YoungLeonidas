const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

const visual = document.querySelector(".hero-visual");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (visual && !prefersReducedMotion) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    visual.style.transform = `translate3d(${x * 0.6}px, ${y * 0.35}px, 0)`;
  });
}

const homeLink = document.querySelector("[data-home-link]");

if (homeLink) {
  const repoName = "YoungLeonidas";
  const isGitHubProjectSite =
    window.location.hostname.endsWith(".github.io") &&
    window.location.pathname.includes(`/${repoName}/`);

  homeLink.setAttribute("href", isGitHubProjectSite ? `/${repoName}/` : "/");
}
