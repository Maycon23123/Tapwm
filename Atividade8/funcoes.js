function calcularArray(numeros) {
  if (!Array.isArray(numeros) || numeros.length !== 3) {
    return "Array inválido";
  }

  let soma = Math.max.apply(null, numeros);
  soma = numeros.reduce((acc, n) => acc + n, 0);

  let q1 = Math.pow(numeros[0], 2);
  let q2 = Math.pow(numeros[1], 2);

  return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${q1} e o quadrado do segundo é: ${q2}`;
}

function gerarPalavras(letras) {
  if (!Array.isArray(letras) || letras.length !== 5) {
    return ["Array inválido"];
  }

  let palavras = [];

  for (let i = 0; i < 10; i++) {
    let palavra = "";

    for (let j = 0; j < 5; j++) {
      let index = Math.floor(Math.random() * letras.length);
      palavra += letras[index];
    }

    palavras.push(palavra);
  }

  return palavras;
}
