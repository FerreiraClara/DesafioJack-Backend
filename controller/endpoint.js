const {addTable} = require("../mainclass/createTable")
const {addTask} = require("../mainclass/createTask") 
const {taskEdit} = require("../mainclass/editTask") 
const {taskDelete} = require("../mainclass/deleteTask") 
const {listTask} = require('../mainclass/getTask')
const {dataUser} = require('../mainclass/getUser')
const {logIn} = require("../mainclass/login") 
const {logOut} = require("../mainclass/logout") 

const {addUser} = require('../mainclass/registerUser')

const registerUser = (req, res) => {
    console.log('Endpoint acionado com sucesso.');

    const user = addUser(req)

    res.json({user})
}

async function createTable(req, res){
    const response = addTable()
}

async function getUser(req, res) {
    const response = dataUser()

    res.json({response})
}

async function createTask(req, res) {
    const response = addTask(req)

    res.json({response})
}

async function getTask(req, res) {
    const response = listTask(req)

    res.json({response})
}

async function editTask(req, res) {
    const response = taskEdit(req)
    
    res.json({response})
}

async function deleteTask(req, res) {
    const response = taskDelete(req)
    res.json({response})
}

async function login(req, res) {
    const response = logIn(req)

    res.json({response})
    
}

async function logout(req, res) {
    const response = logOut(req)
    res.json({response})
}

module.exports = {
    registerUser,
    createTable,
    createTask,
    deleteTask,
    getTask,
    getUser,
    editTask,
    login,
    logout
}