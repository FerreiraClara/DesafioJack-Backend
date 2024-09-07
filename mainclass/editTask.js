const {addTask} = require("./createTask")
async function taskEdit(req){

    const body = req.body
    const title = body.title
    const id = body.id
    const description = body.description

    const dataEntry = 'UPDATE tasks (title, description) VALUES (?, ?) WHERE id = ?';
    const values = [title, description, id];

    try {
        const [result] = await connection.execute(dataEntry, values);
        console.log('Dados inseridos:', result);

        return result;

    } catch (error) {
        console.error('Erro ao inserir dados');
    }
}

module.exports = {
    taskEdit
}