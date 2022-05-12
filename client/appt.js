//Schedule Variables
const inputFirstName = document.getElementById('first-name-input')
const inputLastName = document.getElementById('last-name-input')
const inputEmail = document.getElementById('email-input')
const inputDate = document.getElementById('date-input')
const inputTime = document.getElementById('time')
const inputNotes = document.getElementById('notes-input')

let date = new Date()
inputDate.min = date.toLocaleDateString('en-ca')
inputDate.max = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US')

function resetFormValues() {
    inputTime.value = '10:00:00'
    inputDate.value =  date.toLocaleDateString('en-ca')
    inputFirstName.value = ''
    inputLastName.value = ''
    inputEmail.value = ''    
}

const possibleTimes = [
    {
        display: '7:00 AM', 
        server: '07:00:00'
    }, 
    {
        display: '7:30 AM', 
        server: '07:30:00'
    }, 
    {
        display: '8:00 AM', 
        server: '08:00:00'
    }, 
    {
        display: '8:30 AM', 
        server: '08:30:00'
    }, 
    {
        display: '9:00 AM', 
        server: '09:00:00'
    }, 
    {
        display: '9:30 AM', 
        server: '09:30:00'
    }, 
    {
        display: '10:00 AM', 
        server: '10:00:00'
    }, 
    {
        display: '10:30 AM', 
        server: '10:30:00'
    }, 
    {
        display: '11:00 AM', 
        server: '11:00:00'
    }, 
    {
        display: '11:30 AM', 
        server: '11:30:00'
    }, 
    {
        display: '12:00 PM', 
        server: '12:00:00'
    }, 
    {
        display: '12:30 PM', 
        server: '12:30:00'
    }, 
    {
        display: '1:00 PM', 
        server: '13:00:00'
    }, 
    {
        display: '1:30 PM', 
        server: '13:30:00'
    }, 
    {
        display: '2:00 PM', 
        server: '14:00:00'
    }, 
    {
        display: '2:30 PM', 
        server: '14:30:00'
    }, 
    {
        display: '3:00 PM', 
        server: '15:00:00'
    },
    {
        display: '3:30 PM',
        server: '15:30:00'
    },
    {
        display: '4:00 PM',
        server: '16:00:00'
    },
    {
        display: '4:30 PM',
        server: '16:30:00'
    },
    {
        display: '5:00 PM',
        server: '17:00:00'
    },
    {
        display: '5:30 PM',
        server: '17:30:00'
    },
    {
        display: '6:00 PM',
        server: '18:00:00'
    },
    {
        display: '6:30 PM',
        server: '18:30:00'
    },
    {
        display: '7:00 PM',
        server: '19:00:00'
    },
    {
        display: '7:30 PM',
        server: '19:30:00'
    },
    {
        display: '8:00 PM',
        server: '20:00:00'
    },
]

for (let i = 0; i < possibleTimes.length; i++) {
    let obj = possibleTimes[i]
    const newTime = document.createElement('option')
    newTime.setAttribute('value', obj.server)
    newTime.textContent = obj.display
    inputTime.appendChild(newTime)
}


document.getElementById('postQuery').addEventListener('submit', (e) => {
    e.preventDefault()
    const bodyObj = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        email: inputEmail.value,
    }
    let dateTime = `${dateInput.value} ${timeInput.value}:00`
    let dateTimeObj = new Date(dateTime)
    
    axios.post(`http://localhost:5000/appt`,{body: bodyObj, date: dateTimeObj})
        .then(() => {
            resetFormValues()
        })
        .catch(err => console.log('front end error', err))
})

resetFormValues()