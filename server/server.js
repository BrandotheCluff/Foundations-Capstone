require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {requestCoachIntro, submitQuestions} = require('./controller.js')

const app = express()
const imgURL = 'http://drive.google.com/uc?export=view&id=1YH4mPiTE7nlYsYNDl2YRyuNw5wxfrGzr'

app.use(cors())
app.use(express.json())

// app.get('/', getBuffCLuff)
// app.post('/max', calcMaxes)
app.get('/style/:http://drive.google.com/uc?export=view&id=1YH4mPiTE7nlYsYNDl2YRyuNw5wxfrGzr', (req, res) => {
    imgURL = req.params;
    res.sendFile(__dirname, '/client/appt.css', 'http://drive.google.com/uc?export=view&id=1YH4mPiTE7nlYsYNDl2YRyuNw5wxfrGzr'); 
    });
app.post('/appt', requestCoachIntro)
app.post('/max', submitQuestions)














app.listen(SERVER_PORT, () => console.log(`All systems go on ${SERVER_PORT}`))