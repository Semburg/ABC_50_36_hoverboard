const container = document.getElementById('container')
const colors = ['#e75c3c', '#a222as', '#2eccd72', '#8a43ed']

const SQUARES = 300
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))


    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}`

    // console.log(color)

    // console.log(element, 'add')
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`




    // console.log(element, 'remove')
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

