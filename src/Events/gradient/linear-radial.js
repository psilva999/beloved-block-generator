import { rgba } from "./rgba"

export function toggleLinearRadial() {
  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulos = document.querySelector(".angulos"),

        anglesContainer = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...anglesContainer]

  document.querySelectorAll('.blr').forEach(button => {
    button.addEventListener("click", () => {

      if (button.classList.contains('button-linear') && !linear.classList.contains("active")) {
        disabledFalse()
        buttonLikeArray[1].classList.add('active')
        radial.classList.remove("active")

        linear.classList.add("active")
        angulos.classList.remove('radial')
        rgba()
      }

      else if (button.classList.contains('button-radial') && !radial.classList.contains("active")) {
        removeActive()
        radial.classList.add("active")

        linear.classList.remove("active")
        angulos.classList.add('radial')
        rgba()
      }

    })
  })

  function removeActive() {
    for (let i = 0; i < buttonLikeArray.length; i++) {
      buttonLikeArray[i].classList.remove('active')
    } 

    anglesContainer.forEach(inputBackground => inputBackground.disabled = true)
  }

  function disabledFalse() {
    anglesContainer.forEach(inputBackground => inputBackground.disabled = false)
  }
}
