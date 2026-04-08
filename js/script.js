const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("backToTop");

// carregar tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  html.classList.remove("dark");
  themeToggle.textContent = "☀️";
} else {
  html.classList.add("dark");
  themeToggle.textContent = "🌙";
}

// botão de tema
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  }
});

// botão voltar ao topo
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});