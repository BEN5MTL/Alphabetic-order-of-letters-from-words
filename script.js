function OrdineAlfabeticaCuvant() {
  let cuv = prompt("Introduceti cuvantul:");
  let litere = cuv.split("");
  litere = litere.sort();
  alert("Literele in ordine alfabetica sunt: " + litere.join(''));
}
OrdineAlfabeticaCuvant();