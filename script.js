// Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Link ativo conforme a seção visível
const navAnchors = [...links.querySelectorAll("a")];
const sections = navAnchors
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove("active"));
        const active = navAnchors.find(
          (a) => a.getAttribute("href") === `#${entry.target.id}`
        );
        active && active.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// Form de contato (simulado — sem backend)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  status.textContent = `Obrigado, ${data.get("name")}! Sua mensagem foi registrada. 🚀`;
  form.reset();
});
