function mensage(mensagem) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensagem;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (validar) {
  validar.preventDefault();

  const sim = document.getElementById("sim");
  const nao = document.getElementById("nao");

  if (!sim.checked && !nao.checked) {
    mensage("Por favor, selecione uma opção.");
    return;
  }

  mensage("Salvo com sucesso!");
  form.reset();
});

function clearForm() {
  const form = document.getElementById("form");
  form.reset();
  mensage("Formulário limpo.");
}