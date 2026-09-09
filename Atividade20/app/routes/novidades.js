module.exports = function(app) {
    app.get('/novidades', function(req, res) {
        // res.render() carrega uma view (ex.: arquivo .ejs) e monta a página.
        // res.send() envia diretamente uma resposta para o navegador,
        // sem precisar renderizar uma view.
        // Isso permite já colocar o HTML diretamente nesse código.

        res.send(`
            <h1>Novidades</h1>
            <p>Confira as novidades da Semana da Tecnologia!</p>
            <p>Em breve teremos novos eventos e palestras.</p>
        `);

    });

}