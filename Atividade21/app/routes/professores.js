module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
           user: 'DS2612001',
           password: '',
           database: 'LP2', 
           driver: 'mssql',
           server: 'apolo',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
  
      async function getProfessores() {
          try {
              const pool = await sql.connect(sqlConfig);
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset);
 
              res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
        
       }
      getProfessores();
   });
}