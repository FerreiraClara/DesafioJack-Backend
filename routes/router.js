const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const endpoint = require('../controller/endpoint');
const authMiddleware = require('../middleware/authMiddleware')(jwt);

router.post('/login', endpoint.login)
router.post('/register-person', endpoint.registerUser);

router.use(authMiddleware.authentication);

router.post('/create-task', endpoint.createTask)
router.get('/get-tasks', endpoint.getTask)
router.post('/edit-task', endpoint.editTask)
router.get('/get-user', endpoint.getUser)
router.post('/delete-tasks', endpoint.deleteTask)
router.post('/logout', endpoint.logout)

module.exports = router;