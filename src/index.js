import src from './assets/22.png'
import src2 from './assets/car.svg'

const getName = () => {
    console.log('8888888！！')
}

getName()

const img = document.createElement('img')
img.src = src

document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.width = '60px'
img2.style.height = '60px'
img2.src = src2

document.body.appendChild(img2)