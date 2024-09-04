const { datePerson} = require('../mainclass/mainclass')

const registerPerson = (req, res) => {
    console.log('Endpoint acionado com sucesso.');

    const date = datePerson(req)

    res.json({date})
}

module.exports = {
    registerPerson
}