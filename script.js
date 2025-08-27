let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

let doctitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :)";
});
window.addEventListener("focus", () => {
  document.title = doctitle;
});
let d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
