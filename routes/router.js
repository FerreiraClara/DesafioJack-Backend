const express = require('express');
const router = express.Router();

const endpoint = require('../controller/endpoint');

router.post('/registerperson', endpoint.registerPerson);

module.exports = router;