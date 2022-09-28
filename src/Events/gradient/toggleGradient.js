import { rgba } from './rgba'

export function opacityGradient() {
  const inputOpacity = document.querySelectorAll('.opacity-gradient input')

  let inputOpacityLikeArray = [...inputOpacity]

  inputOpacityLikeArray[0].value = 0
  inputOpacityLikeArray[1].value = 10

  inputOpacity.forEach(e => e.addEventListener("input", rgba))
}

export function gradientColors() {
  let inputGradient = document.querySelectorAll('.toggle-gradient input[type="range"]'),
      inputGradientLikeArray = [...inputGradient],

      spanGradient = document.querySelectorAll('.sg'),
      spanLikeArray = [...spanGradient]

  inputGradientLikeArray[0].value = 0
  inputGradientLikeArray[1].value = 100
  
  inputGradient.forEach(e => {
    e.addEventListener('input', () => {

      if (e.id === 'gradient1') {
        rgba() 
        spanMovement(0) 
      }

      else if (e.id === 'gradient2') {
        rgba() 
        spanMovement(1)
      }
    })

    function spanMovement(e) {
      let newSpanPosition = (inputGradientLikeArray[e].value * 85) / 100
  
      spanLikeArray[e].style.left = `${ newSpanPosition.toFixed(2) }%`
      spanLikeArray[e].textContent = inputGradientLikeArray[e].value
    }
  })
}
