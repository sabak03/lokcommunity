// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
  });
}

// Parallax scroll var (used by hero background)
const root = document.documentElement;
window.addEventListener('scroll', () => {
  root.style.setProperty('--scroll', String(window.scrollY));
});

// Dynamic year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();