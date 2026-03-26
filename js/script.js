window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.classList.add("bg-black/95");
    header.classList.remove("bg-[#0b0b0b]/80");
  } else {
    header.classList.remove("bg-black/95");
    header.classList.add("bg-[#0b0b0b]/80");
  }
});