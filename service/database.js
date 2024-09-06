const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root', 
    password: '123456',
    database: 'taskly'
});

function connectionDB(){
  
connection.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

}
module.exports={
     connectionDB,
     connection
}