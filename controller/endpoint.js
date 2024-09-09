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


async function registerUser (req, res){
    console.log('Endpoint acionado com sucesso.');

    const response = await addUser(req, schema)

    res.json({response})
}



async function getUser(req, res) {
    const response = await dataUser(req, schema)

    res.json({response})
}

async function createTask(req, res) {
    const response = addTask(req, schema)

    res.json({response})
}

async function getTask(req, res) {
    const response = await listTask(req, schema)

    res.json({response})
}

async function editTask(req, res) {
    const response = await taskEdit(req, schema)
    
    res.json({response})
}

async function deleteTask(req, res) {
    const response = await taskDelete(req, schema)
    res.json({response})
}

async function login(req, res) {
    const response = await logIn(req,schema)

    res.json({response})
    
}

async function logout(req, res) {
    const response = await logOut(req, schema)
    res.json({response})
}

module.exports = {
    registerUser,
    createTask,
    deleteTask,
    getTask,
    getUser,
    editTask,
    login,
    logout
}