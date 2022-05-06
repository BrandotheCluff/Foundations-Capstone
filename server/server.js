require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {requestCoachIntro, getMaxes} = require('./controller.js')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/max', getMaxes)
app.post('/appt', requestCoachIntro)














app.listen(SERVER_PORT, () => console.log(`All systems go on ${SERVER_PORT}`))