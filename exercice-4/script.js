let table = [10, 25, 5, 40, 18, 3];

function afficherGrandsNombres(table) {
  for (let number of table) {
    if (number > 15) {
      console.log("nombre supérieur à 15 : " + number);
    }
  }
}

afficherGrandsNombres(table);
