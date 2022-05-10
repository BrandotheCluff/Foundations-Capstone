//Max Calculator Variables
const squatInput = document.getElementById('squat-input')
const benchInput = document.getElementById('bench-input')
const deadInput = document.getElementById('dead-input')
const maxSquatVal = document.getElementById('squat-answer')
const maxBenchVal = document.getElementById('bench-answer')
const maxDeadVal = document.getElementById('dead-answer')
const qFormArea = document.getElementById('q-form')
const qFormEmail = document.getElementById('email')


function resetFormValues() {
qFormArea.value = ''
qFormEmail.value = ''
}

const calcMaxes = () => {

    let squat = +squatInput.value
    let bench = +benchInput.value
    let dead = +deadInput.value

    maxSquatVal.value = Math.round((squat * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
    maxBenchVal.value = Math.round((bench * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
    maxDeadVal.value = Math.round((dead * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)




}

const getMaxes = document.getElementById('get-maxes')

getMaxes.addEventListener('click', e => {
    calcMaxes()
})

const sendQuestions = document.getElementById('add-q')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/max', sendQuestions)
    .then(() => {
        resetFormValues()
    })
    .catch(err => console.log('front end error', err))
})

resetFormValues()

