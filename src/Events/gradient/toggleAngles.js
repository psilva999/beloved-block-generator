import { rgba } from './rgba'

export function toggleAngles() {
  const angles = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...angles]

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
        
        rgba()
      }
    })

  })
}
