const bars = document.querySelector(".bars");
const aside = document.querySelector("aside");
const closeButton = document.querySelector(".close-button");

bars.addEventListener("click", function () {
  aside.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", function () {
  aside.classList.remove("show-sidebar");
});
