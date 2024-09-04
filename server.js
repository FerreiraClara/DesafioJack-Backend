const express = require('express')
const router = require('./routes/router')
const app = express()
const cors = require("cors");
const connectionDB = require('./service/database')
const port = 3000


connectionDB.connectionDB()
app.use(express.json())
app.options("*", cors({ origin: 'http://127.0.0.1:5173', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://127.0.0.1:5173", optionsSuccessStatus: 200 }));
app.use('/', router)

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})