const { connection } = require("../service/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
async function logIn(req){

    const body = req.body
    const email = body.email
    const password = body.password

    const sql = `SELECT * FROM USER WHERE email = ? AND password = ?`;
    const [value] = await connection.execute(sql, email, password);

    if (value.length === 0) throw new Error('Email inválido');  

    const user = value[0]
    const match = await bcrypt.compare(password, user.password); 
    const token = jwt.sign({ id: user.id }, user, { expiresIn: '12h' });   
    if (match){
        const dataEntry = 'INSERT INTO login (userId, token, dateCreate, dateExpired) VALUES (?, ?,NOW(), DATE_ADD(NOW(), INTERVAL 12 HOUR))';  
        const values = [user.id, token]; 
        const [result] = await connection.execute(dataEntry, values);  
    
        console.log('Dados de login inseridos:', result);  

        return res.json({
            success: true,
            message: "sucesso no login.",
            response: { id: user.id, token: "bearer " + token, user: account.email }
        });
    }
    if (!password) throw new Error('Senha inválida');  

}

module.exports = {
    logIn
}