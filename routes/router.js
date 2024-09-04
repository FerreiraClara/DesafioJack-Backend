const express = require('express');
const router = express.Router();

const endpoint = require('../controller/endpoint');

router.post('/registerPerson', endpoint.registerPerson);
router.post('./createTable', endpoint.createTable)
router.post('./createTask', endpoint.createTask)
router.post('./editTask', endpoint.editTask)
router.post('./login', endpoint.login)
router.post('./logout', endpoint.logout)

module.exports = router;