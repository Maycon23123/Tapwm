function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(str) {
  if (!str) return false;

  let texto = str.toLowerCase().replace(/\s+/g, "");
  let invertido = texto.split("").reverse().join("");

  return texto === invertido;
}

function verificarSubconjunto(p1, p2) {
  if (!p1 || !p2) return "erro";

  return p1.includes(p2) ? "é um subconjunto" : "não é um subconjunto";
}

function diaDaSemana(data) {
  let dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return dias[new Date(data).getDay()];
}
