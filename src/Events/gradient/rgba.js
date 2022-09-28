export function rgba() {
  const belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child'),

        radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulo = document.querySelector(".container-angles .active")

  const inputColorLikeArray = [...document.querySelectorAll('.color12 input[type="color"]')],

        inputOpacityLikeArray = [...document.querySelectorAll('.opacity-gradient input')],

        inputGradientLikeArray = [...document.querySelectorAll('.toggle-gradient input[type="range"]')]

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

  if (linear.classList.contains('active')) {
    belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%)`

    code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%);`
  }

  else if (radial.classList.contains('active')) {
    belovedBlock.style.background = `${radial.value}-gradient(circle, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%)`

    code.textContent = `background:${radial.value}-gradient(circle, ${rgba1} ${inputGradientLikeArray[0].value}%, ${rgba2} ${inputGradientLikeArray[1].value}%);`
  }
} 
