const jwt = require("jsonwebtoken");
async function addUser(req) {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const saltRounds = 10
        let passwordhash = ''
        bcrypt.hash(password, saltRounds, function (err, hash) {
            passwordhash = hash
        });
        if (!name && passwordhash) throw new Error('Ocorreu um erro ao criar o cadastro')

        const dataEntry = 'INSERT INTO USER (name, email, password) VALUES (?, ?,?)';
        const values = [name, email, passwordhash];
        const [result] = await connection.execute(dataEntry, values);
        console.log('Dados inseridos:', result);

        return result
    }
    catch (err) {

    }
}

module.exports = {
    addUser
}

console.log('Primeira etapa atingida')