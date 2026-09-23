//let dbConnection = require('../config/dbConnection');
module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
                // como está recebendo o app
                // já foi carregada no autoload e está sendo requisitada somente quando essa rota for
                //acessada
                let connection = app.config.dbConnection;
                const pool = await connection();
                const results = await pool.request().query('SELECT * from PROFESSORES');
                res.render('informacao/professores',{profs : results.recordset});
            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();
    });
}; 
