function mensage(mensagem) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensagem;
}

function validar() {
  const form = document.getElementById("form");

  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentario = document.getElementById("coment").value.trim();

  const pesquisa = form.elements["pesquisa"];

  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoEmail.test(email)) {
    mensage("Digite um e-mail válido.");
    return false;
  }

  let resposta = "";

  for (let radio of pesquisa) {
    if (radio.checked) {
      resposta = radio.value;
    }
  }

  if (resposta === "") {
    mensage("Selecione uma opção da pesquisa.");
    return false;
  }

  if (resposta === "sim") {
    mensage("Volte sempre a esta página!");
  } else {
    mensage("Que bom que você voltou a visitar esta página!");
  }

  form.reset();
  return false;
}

function clearForm() {
  const form = document.getElementById("form");
  form.reset();
  mensage("Formulário limpo.");
}
