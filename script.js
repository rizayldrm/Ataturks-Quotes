var quoteArray = []
var index = 0
var textPosition = 0
var flag = true
var destination = document.getElementById('typedtext')

window.addEventListener('load', typewriter())

function loadQuote() {
    const url = 'https://ataturk.vercel.app/tr'

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log(response.status)
            }
        })

        .then(data => {
            quoteArray[index] = data.quote
        })
}

function typewriter() {
    if (flag) {
        loadQuote()
        quoteArray[index] += ' '
        flag = false
    }

    destination.innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>'

    if (textPosition++ != quoteArray[index].length) {
        setTimeout('typewriter()', 80)
    } else {
        quoteArray[index] = ' '
        setTimeout('typewriter()', 2000)
        textPosition = 0
        flag = true
    }
}