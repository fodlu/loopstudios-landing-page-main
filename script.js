const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const nav = document.querySelector(".navs");
const links = nav.querySelectorAll("a");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  close.classList.toggle("active");
  nav.classList.toggle("active");
  ham.style.transition = ".4m";
});

close.addEventListener("click", () => {
  ham.classList.toggle("active");
  close.classList.toggle("active");
  nav.classList.toggle("active");
  ham.style.transition = ".4m";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    ham.classList.toggle("active");
    close.classList.toggle("active");
    nav.classList.toggle("active");
  });
});
