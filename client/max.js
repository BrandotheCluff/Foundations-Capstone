//Max Calculator Variables
const getQuerySubmit = document.getElementById('getQuerySubmit')
const squatInput = document.getElementById('squat-input')
const benchInput = document.getElementById('bench-input')
const deadInput = document.getElementById('dead-input')
const maxSquatVal = document.getElementById('squat-answer')
const maxBenchVal = document.getElementById('bench-answer')
const maxDeadVal = document.getElementById('dead-answer')


const calcMaxes = () => {
    axios.get('http://localhost:5000/max')
    .then(res => {
        const lifts = res.data
        //1RM = weight*((1+(5/30)+(1+(3/30) / 2
        const {
            squat_value: squat,
            bench_value: bench,
            dead_value: dead
        } = lifts
        squatInput.value = squat
        benchInput.value = bench
        deadInput.value = dead 
    })
}


