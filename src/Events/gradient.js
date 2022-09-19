export function toggleGradientContainer() {
  const containerInputBackground = document.querySelector('.generator div:first-child p'),
        gradientContainer = document.querySelector('.gradient'),

        titleGradient = document.querySelector('.titleGradient'),
        inputBackground = document.querySelector("#inputBackground")

  if (gradientContainer.classList.contains('close')) {
    containerInputBackground.classList.add('borrado')
    titleGradient.classList.add('open')

    gradientContainer.classList.remove('close')
    inputBackground.disabled = true
  }

  else {
    containerInputBackground.classList.remove('borrado')
    titleGradient.classList.remove('open')

    gradientContainer.classList.add('close')
    inputBackground.disabled = false
  }
}

export function toggleLinearRadial() {
  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulos = document.querySelector(".angulos"),

        anglesContainer = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...anglesContainer]

  document.querySelectorAll('.blr').forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains('button-linear')) {

        if (linear.classList.contains("active")) {
          removeActive()
          radial.classList.add("active")

          linear.classList.remove("active")
          angulos.classList.add('radial')
        }

        else {
          disabledFalse()
          buttonLikeArray[1].classList.add('active')
          radial.classList.remove("active")

          linear.classList.add("active")
          angulos.classList.remove('radial')
        }
      }

      else if (button.classList.contains('button-radial')) {

        if (radial.classList.contains("active")) {
          disabledFalse()
          buttonLikeArray[1].classList.add('active')
          radial.classList.remove("active")

          linear.classList.add("active")
          angulos.classList.remove('radial')
        }

        else {
          removeActive()
          radial.classList.add("active")

          linear.classList.remove("active")
          angulos.classList.add('radial')
        }
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

export function toggleAngles() {
  const angles = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...angles]

  angles.forEach(button => {
    button.addEventListener("click", () => {
      for (let i = 0; i < buttonLikeArray.length; i++) {
        buttonLikeArray[i].classList.remove('active')
      } 

      if (button.value === '0deg') {
        buttonLikeArray[0].classList.add('active')
      }

      else if (button.value === '45deg') {
        buttonLikeArray[1].classList.add('active')
      }

      else if (button.value === '90deg') {
        buttonLikeArray[2].classList.add('active')
      }

      else if (button.value === '135deg') {
        buttonLikeArray[3].classList.add('active')
      }

      else if (button.value === '180deg') {
        buttonLikeArray[4].classList.add('active')
      }

      else if (button.value === '225deg') {
        buttonLikeArray[5].classList.add('active')
      }

      else if (button.value === '270deg') {
        buttonLikeArray[6].classList.add('active')
      }

      else if (button.value === '315deg') {
        buttonLikeArray[7].classList.add('active')
      }
    })

  })
}
