let app = require('./app/config/server');

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaInscricao = require('./app/routes/inscricao');
rotaInscricao(app);

let rotaSobre = require('./app/routes/sobre');
rotaSobre(app);

let rotaProgramacao = require('./app/routes/programacao');
rotaProgramacao(app);

let rotaContato = require('./app/routes/contato');
rotaContato(app);

let rotaNovidades = require('./app/routes/novidades');
rotaNovidades(app);

app.listen(3000, function () {
    console.log("servidor iniciado");
});