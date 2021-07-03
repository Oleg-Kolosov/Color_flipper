const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('button')
const title = document.querySelector('h1')

const getRandomIndex = () => Math.floor(Math.random() * hex.length)

btn.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomIndex()]
    }
    title.innerText = `Background color : ${hexColor}`
    document.body.style.background = hexColor
})


