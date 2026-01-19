function esAdulte(age) {
  return age >= 18;
}

function formaterMessage(age) {
  if (esAdulte(age)) {
    return "accès autorisé";
  } else {
    return "accès non autorisé";
  }
}

console.log(formaterMessage(18));
