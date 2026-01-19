let liste = document.querySelectorAll("#ma-liste li");

for (let i = 0; i < liste.length; i++) {
  if (i % 2 === 0) {
    liste[i].style.color = "blue";
  }
}
