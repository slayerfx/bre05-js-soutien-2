function calculerPrixTTC(prixHT) {
  return prixHT * 1.2;
}

let prixFinal = calculerPrixTTC(50);
console.log(prixFinal);
