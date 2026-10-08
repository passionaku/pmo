// Sticky header shadow
const header = document.getElementById("site-header");
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 10);
}, { passive: true });

// FAQ accordion
document.querySelectorAll(".faq-item").forEach(item => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  q.addEventListener("click", () => {
    const open = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(o => {
      o.classList.remove("open");
      o.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!open) {
      item.classList.add("open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".rv").forEach(el => io.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
