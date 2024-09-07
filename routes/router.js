const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const endpoint = require('../controller/endpoint');
const authMiddleware = require('../middleware/authMiddleware')(jwt);

router.use(authMiddleware.authentication);

router.post('/register-person', endpoint.registerUser);
router.post('./create-table', endpoint.createTable)
router.post('./create-task', endpoint.createTask)
router.post('./get-task', endpoint.getTask)
router.post('./edit-task', endpoint.editTask)
router.post('./get-user', endpoint.getUser)
router.post('./delete-task', endpoint.deleteTask)
router.post('./login', endpoint.login)
router.post('./logout', endpoint.logout)

module.exports = router;