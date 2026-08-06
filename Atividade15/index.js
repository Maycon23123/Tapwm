function mensagem(texto) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = texto;
}

function abrirCurso() {
  const curso = document.getElementById("curso").value;

  if (curso === "") {
    mensagem("Escolha um curso.");
    return;
  }

  const confirmar = confirm("Deseja abrir as informações deste curso?");

  if (!confirmar) {
    mensagem("A abertura do curso foi cancelada.");
    document.getElementById("curso").value = "";
    return;
  }

  let titulo = "";
  let descricao = "";

  if (curso === "ADS") {
    titulo = "Análise e Desenvolvimento de Sistemas";
    descricao =
      "Curso voltado para programação, banco de dados, desenvolvimento web e mobile.";
  } else if (curso === "LOG") {
    titulo = "Logística";
    descricao =
      "Curso focado em transporte, armazenamento e distribuição de produtos.";
  } else if (curso === "ELE") {
    titulo = "Eletrônica Automotiva";
    descricao =
      "Curso voltado aos sistemas eletrônicos utilizados em veículos.";
  } else if (curso === "MAN") {
    titulo = "Manufatura Avançada";
    descricao = "Curso sobre processos modernos de produção industrial.";
  } else if (curso === "POL") {
    titulo = "Polímeros";
    descricao =
      "Curso voltado ao estudo e fabricação de materiais poliméricos.";
  }

  const janela = window.open("", "", "width=600,height=300");
  janela.document.write(`
        <html>
        <head>
            <title>${titulo}</title>
            <style>
                body{
                    font-family: Arial;
                    padding:20px;
                    background:#f2f2f2;
                }
                h1{
                    color:#1030c2;
                }
            </style>
        </head>
        <body>
            <h1>${titulo}</h1>
            <p>${descricao}</p>
        </body>
        </html>
    `);
  mensagem("Curso aberto com sucesso!");
}
