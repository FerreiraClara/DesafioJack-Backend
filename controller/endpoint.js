const {addTask} = require("../mainclass/createTask") 
const {taskEdit} = require("../mainclass/editTask") 
const {taskDelete} = require("../mainclass/deleteTask") 
const {listTask} = require('../mainclass/getTask')
const {dataUser} = require('../mainclass/getUser')
const {logIn} = require("../mainclass/login") 
const {logOut} = require("../mainclass/logout") 

const {addUser} = require('../mainclass/registerUser')
const mongoose = require('mongoose');
let schema = {};
schema.task = require("../models/task.js")(mongoose);
schema.user = require("../models/user.js")(mongoose);


const registerUser = (req, res, schema) => {
    console.log('Endpoint acionado com sucesso.');

    const user = addUser(req, schema)

    res.json({user})
}

async function createTable(req, res, schema){
    const response = addTable(req, schema)
}

async function getUser(req, res, schema) {
    const response = dataUser()

    res.json({response})
}

async function createTask(req, res, schema) {
    const response = addTask(req, schema)

    res.json({response})
}

async function getTask(req, res, schema) {
    const response = listTask(req, schema)

    res.json({response})
}

async function editTask(req, res, schema) {
    const response = taskEdit(req, schema)
    
    res.json({response})
}

async function deleteTask(req, res,schema) {
    const response = taskDelete(req, schema)
    res.json({response})
}

async function login(req, res, schema) {
    const response = logIn(req,schema)

    res.json({response})
    
}

async function logout(req, res, schema) {
    const response = logOut(req, schema)
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