function OrdineAlfabeticaCuvant(cuv) {
  let litere = cuv.split("");
  litere = litere.sort();
  return litere.join("");
}
