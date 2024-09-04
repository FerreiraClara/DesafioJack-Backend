const mysql = require('mysql');

function connectionDB(){
    
const connection = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root', 
    password: '',
    database: 'taskly'
});

connection.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

connection.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
}
module.exports={
     connectionDB
}