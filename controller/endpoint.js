const { datePerson} = require('../mainclass/mainclass')

const registerPerson = (req, res) => {
    console.log('Endpoint acionado com sucesso.');

    const date = datePerson(req)

    res.json({date})
}

const createTable = () => {

}

const createTask = () => {

}

const editTask = () => {

}

const login = () => {

}

const logout = () => {

}
module.exports = {
    registerPerson,
    createTable,
    createTask,
    editTask,
    login,
    logout
}