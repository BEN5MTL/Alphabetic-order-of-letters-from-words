function OrdineAlfabeticaCuvant() {
  let cuv = prompt("Introduceti cuvantul:");
  let litere = cuv.split("");
  litere = litere.sort();
  return litere.join("");
}
