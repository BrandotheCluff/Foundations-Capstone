require('dotenv').config()
const Sequelize = require('sequelize')
const { DATABASE_URL } = process.env
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    requestCoachIntro: (req, res) => {
        const {
            firstName,
            lastName,
            email,
            date
        } = req.body
        sequelize.query(`
        Insert into client (client_firstname, client_lastname, client_email, date)
        values ('${firstName}', '${lastName}', '${email}', '${date}')
        returning *;`)
            .then(sillygoose => res.status(200).send(sillygoose))
                .catch(err => console.log(err))
    },

submitQuestions: (req, res) => {
    const {questions, email} = req.body
    sequelize.query(`
    Insert into questions (questions, email)
    values ('${questions}', '${email}')
    `)
}
   

}