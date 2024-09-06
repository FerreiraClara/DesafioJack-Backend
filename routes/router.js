const express = require('express');
const router = express.Router();

const endpoint = require('../controller/endpoint');

router.post('/register-person', endpoint.registerPerson);
router.post('./create-table', endpoint.createTable)
router.post('./create-task', endpoint.createTask)
router.post('./get-task', endpoint.getTask)
router.post('./edit-task', endpoint.editTask)
router.post('./delete-task', endpoint.deleteTask)
router.post('./login', endpoint.login)
router.post('./logout', endpoint.logout)

module.exports = router;