import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- smooth scroll (Lenis ↔ GSAP) ---------------- */
let lenis: Lenis | null = null;
function initSmoothScroll() {
  if (reduced) return;
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  if (lenis) lenis.scrollTo(top);
  else window.scrollTo({ top, behavior: "smooth" });
}

/* ---------------- anchor / nav smooth scroll ---------------- */
function initAnchors() {
  document.querySelectorAll<HTMLElement>("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToId(el.dataset.scroll!);
    });
  });
}

/* ---------------- scroll-spy (active nav link) ---------------- */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll<HTMLElement>(".navlink"));
  const sections = ["inicio", "nosotros", "servicios", "ecosistema", "contacto"]
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  if (!sections.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id;
        links.forEach((l) =>
          l.dataset.scroll === id
            ? l.setAttribute("data-active", "true")
            : l.removeAttribute("data-active")
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------------- reveal-on-scroll (GSAP, with CSS fallback) ---------------- */
function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (reduced) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  items.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 42 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onStart: () => el.classList.add("in"),
      }
    );
  });
}

/* ---------------- animated counters ---------------- */
function initCounters() {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    if (reduced) {
      el.textContent = end + suffix;
      return;
    }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: end,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(obj.v) + suffix),
        }),
    });
  });
}

/* ---------------- hero parallax + photo tilt ---------------- */
function initHeroParallax() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero || reduced || window.matchMedia("(pointer: coarse)").matches) return;
  const parallax = hero.querySelectorAll<HTMLElement>("[data-parallax]");
  const tilt = hero.querySelector<HTMLElement>("[data-tilt]");

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    parallax.forEach((el) => {
      const d = Number(el.dataset.depth || 0);
      el.style.transform = `translate(${cx * d}px, ${cy * d}px)`;
    });
    if (tilt) tilt.style.transform = `perspective(900px) rotateY(${cx * 9}deg) rotateX(${-cy * 9}deg)`;
  });
}

/* ---------------- magnetic buttons ---------------- */
function initMagnetic() {
  if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
    el.addEventListener("pointerenter", () => { el.style.willChange = "transform"; });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
      el.style.willChange = "";
    });
  });
}

/* ---------------- contact form (no backend yet) ---------------- */
function initForm() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const empresa = (form.querySelector<HTMLInputElement>('[name="cf-0"]'))?.value ?? '';
    const waMsg = encodeURIComponent(
      `Hola Validum${empresa ? `, soy ${empresa}` : ''} y quiero información sobre outsourcing administrativo.`
    );
    window.open(`https://wa.me/573000000000?text=${waMsg}`, "_blank", "noopener,noreferrer");
    if (status) {
      status.textContent = "¡Gracias! Abriendo WhatsApp…";
      status.classList.remove("hidden");
    }
    form.reset();
  });
}

/* ---------------- lazy-load the WebGL ecosystem (three.js) ---------------- */
function initEcosystemLazy() {
  const section = document.getElementById("ecosistema");
  if (!section) return;
  let loaded = false;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !loaded) {
          loaded = true;
          io.disconnect();
          import("./ecosystem").then((m) => m.initEcosystem());
        }
      });
    },
    { rootMargin: "300px 0px" } // start fetching just before it scrolls in
  );
  io.observe(section);
}

/* ---------------- boot ---------------- */
function boot() {
  initSmoothScroll();
  initAnchors();
  initScrollSpy();
  initReveals();
  initCounters();
  initHeroParallax();
  initMagnetic();
  initForm();
  initEcosystemLazy();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
