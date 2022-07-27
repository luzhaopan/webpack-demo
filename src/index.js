import src from './assets/22.png'
import src2 from './assets/car.svg'
import testTxt from './assets/test.txt'
import jpg from './assets/11.jpg'
import './style.css'
import './style.less'
import _ from 'lodash'
import helloWorld from './hello-world'

//
const getName = () => {
    console.log('8888888！！')
}

getName()

//
const img = document.createElement('img')
img.src = src

document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.width = '60px'
img2.style.height = '60px'
img2.src = src2

document.body.appendChild(img2)

// 导入文本文件
const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: #eee;'
block.classList.add('block-bg')
block.textContent = testTxt
document.body.appendChild(block)

// 设置通用资源类型asset，
const jpgTest = document.createElement('img')
jpgTest.style.cssText = 'width: 160px; height: 100px;'
jpgTest.src = jpg

document.body.appendChild(jpgTest)

// 添加css loader
document.body.classList.add('bg')

// helloWorld
helloWorld()



console.log(_.join(['77','88', '99'], '-'))