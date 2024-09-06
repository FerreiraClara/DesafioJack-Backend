const {connection} = require("../service/database")

async function addTask(req){
    const body = req.body
    const title = body.title
    const description = body.description

    try {
        if(!title) throw new Error('Não informado o titulo')
        const dataEntry = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
        const values = [title, description];
        const [result] = await connection.execute(dataEntry, values);
        console.log('Dados inseridos:', result);

        return result
        
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    addTask
}