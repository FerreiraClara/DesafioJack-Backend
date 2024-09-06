const {addTable} = require("../mainclass/createTable")
const {addTask} = require("../mainclass/createTask") 
const {taskEdit} = require("../mainclass/editTask") 
const {taskDelete} = require("../mainclass/deleteTask") 
const {listTask} = require('../mainclass/getTask')
const {logIn} = require("../mainclass/login") 
const {logOut} = require("../mainclass/logout") 

const {datePerson} = require('../mainclass/mainclass')

const registerPerson = (req, res) => {
    console.log('Endpoint acionado com sucesso.');

    const date = datePerson(req)

    res.json({date})
}

async function createTable(req, res){
    const response = addTable()
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
    
}

async function deleteTask(req, res) {
    const response = taskDelete(req)
}

async function login(req, res) {
    const response = logIn(req)
    
}

async function logout(req, res) {
    const response = logOut(req)
    
}

module.exports = {
    registerPerson,
    createTable,
    createTask,
    deleteTask,
    getTask,
    editTask,
    login,
    logout
}