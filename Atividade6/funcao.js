function verificarTriangulo() {
  let a = Number(document.getElementById("ladoA").value);
  let b = Number(document.getElementById("ladoB").value);
  let c = Number(document.getElementById("ladoC").value);

  let resultado = document.getElementById("resultado");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado.innerText = "Os valores precisam ser números!";
    return;
  }

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      resultado.innerText = "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
      resultado.innerText = "Triângulo Isósceles";
    } else {
      resultado.innerText = "Triângulo Escaleno";
    }
  } else {
    resultado.innerText = "Os valores NÃO formam um triângulo";
  }
}
