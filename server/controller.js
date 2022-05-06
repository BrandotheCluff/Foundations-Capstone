require('dotenv').config()
const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env
console.log(CONNECTION_STRING)
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false 
        }
    }
})
// let maxSquat = (lifts.squat * ((1 + (5 / 30)) + (1 + (3 / 30)))) / 2
// let maxBench = (lifts.bench * ((1 + (5 / 30)) + (1 + (3 / 30)))) / 2
// let maxDead = (lifts.dead * ((1 + (5 / 30)) + (1 + (3 / 30)))) / 2



module.exports = {
    getMaxes: (req, res) => {
        sequelize.query(`
        select * 
        from maxes
        where client_id = ${clientId}
        `)


    },

    requestCoachIntro: (req, res) => {
        const {
             clientId,
            firstName,
            lastName,
            email,
            date
        } = req.body
        sequelize.query(`
        Insert into client (client_id, client_firstname, client_lastname, client_email, date)
        values (${clientId}, ${firstName}, ${lastName}, ${email}, ${date})
        `)
    } 
}