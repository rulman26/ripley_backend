require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const moment = require('moment')
const { MS_NAME, PORT, HOST} = process.env;
app.use(cors())
app.use(express.json())

const controlador = require('./src/controller/index')
app.use('/api',controlador)


const date = moment().utc('America/Lima').clone()
app.listen(PORT, HOST)
console.log(`${date} => ${MS_NAME} ${HOST}:${PORT}`)