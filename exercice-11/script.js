let carre = document.getElementById("carre");
let position = 0;

carre.addEventListener("click", () => {
  position = position + 50;
  carre.style.left = position + "px";
});
