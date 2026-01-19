let panier = [
  ["Pomme", "Poire"],
  ["Banane", "Ananas", "Kiwi"],
  ["Fraise", "Framboise"],
];

for (let i = 0; i < panier.length; i++) {
  for (let j = 0; j < panier[i].length; j++) {
    console.log("Fruit trouve :" + panier[i][j]);
  }
}
