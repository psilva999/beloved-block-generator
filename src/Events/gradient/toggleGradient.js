import { rgba } from './rgba'

export function gradientColors() {
  let inputGradient = document.querySelectorAll('.toggle-gradient input[type="range"]'),
      inputGradientLikeArray = [...inputGradient],

      spanGradient = document.querySelectorAll('.sg'),
      spanLikeArray = [...spanGradient]

  const inputOpacity = document.querySelectorAll('.opacity-gradient input'),
        inputOpacityLikeArray = [...inputOpacity],

        belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child')

  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),

        angulo = document.querySelector(".container-angles .active"),
        inputColorLikeArray = [...document.querySelectorAll('.color12 input[type="color"]')]

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

  inputGradientLikeArray[0].value = 0
  inputGradientLikeArray[1].value = 100
  
  inputGradient.forEach(e => {
    e.addEventListener('input', () => {
      console.log(inputGradientLikeArray[0].value, inputGradientLikeArray[1].value)

      if (e.id === 'gradient1') { 
        spanMovement(0) 
        gradientOnBelovedBlock()
        console.log(inputGradientLikeArray[0].value)
      }

      else if (e.id === 'gradient2') { 
        spanMovement(1)
        gradientOnBelovedBlock()
        console.log(inputGradientLikeArray[1].value)
      }
    })

    function gradientOnBelovedBlock() {
      if (linear.classList.contains('active')) {
        belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%);`
      }

      else if (radial.classList.contains('active')) {
        belovedBlock.style.background = `${radial.value}-gradient(circle, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${radial.value}-gradient(circle, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%);`
      }
    }

    function spanMovement(e) {
      let newSpanPosition = (inputGradientLikeArray[e].value * 85) / 100
  
      spanLikeArray[e].style.left = `${ newSpanPosition.toFixed(2) }%`
      spanLikeArray[e].textContent = inputGradientLikeArray[e].value
    }
  })
}

export function opacityGradient() {
  const inputOpacity = document.querySelectorAll('.opacity-gradient input')

  let inputOpacityLikeArray = [...inputOpacity]

  inputOpacityLikeArray[0].value = 0
  inputOpacityLikeArray[1].value = 10

  inputOpacity.forEach(e => e.addEventListener("input", rgba))
}
