import { rgba } from './rgba'

export function toggleAngles() {
  const angles = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...angles]

  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulo = document.querySelector(".container-angles .active")

  const inputColorLikeArray = [...document.querySelectorAll('.color12 input[type="color"]')],

        inputOpacityLikeArray = [...document.querySelectorAll('.opacity-gradient input')],

        inputGradientLikeArray = [...document.querySelectorAll('.toggle-gradient input[type="range"]')]

  const belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child')

  let inputColor1 = inputColorLikeArray[0].value.replace('#', ''),
      inputColor2 = inputColorLikeArray[1].value.replace('#', '')

  String.prototype.convertToRGB = function(){
    let aRgbHex = this.match(/.{1,2}/g)
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ]
    
    return aRgb
  }
  
  let rgb1 = inputColor1.convertToRGB(),
      rgba1 = `rgba(${rgb1},${inputOpacityLikeArray[0].value / 10})`,

      rgb2 = inputColor2.convertToRGB(),
      rgba2 = `rgba(${rgb2},${inputOpacityLikeArray[1].value / 10})`

  angles.forEach(button => {
    button.addEventListener("click", () => {
      for (let i = 0; i < buttonLikeArray.length; i++) {
        buttonLikeArray[i].classList.remove('active')
      } 

      if (button.value === '0deg') activeAngle(0)
      else if (button.value === '45deg') activeAngle(1)

      else if (button.value === '90deg') activeAngle(2)
      else if (button.value === '135deg') activeAngle(3)

      else if (button.value === '180deg') activeAngle(4)
      else if (button.value === '225deg') activeAngle(5)

      else if (button.value === '270deg') activeAngle(6)
      else if (button.value === '315deg') activeAngle(7)

      function activeAngle(e) {
        buttonLikeArray[e].classList.add('active')
        
        belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%);`
      }
    })

  })
}
