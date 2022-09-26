export function toggleGradientContainer() {
  const containerInputBackground = document.querySelector('.generator div:first-child p'),
        gradientContainer = document.querySelector('.gradient'),

        titleGradient = document.querySelector('.titleGradient'),
        inputBackground = document.querySelector("#inputBackground"),

        belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child')

  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulo = document.querySelector(".container-angles .active")

  const inputColorLikeArray = [...document.querySelectorAll('.color12 input[type="color"]')],

        inputOpacityLikeArray = [...document.querySelectorAll('.opacity-gradient input')],

        inputGradientLikeArray = [...document.querySelectorAll('.toggle-gradient input[type="range"]')]

  if (gradientContainer.classList.contains('close')) {
    containerInputBackground.classList.add('borrado')
    titleGradient.classList.add('open')

    if (linear.classList.contains('active')) {
      belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

      code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
    }

    else if (radial.classList.contains('active')) {
      belovedBlock.style.background = `${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

      code.textContent = `background:${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
    }

    gradientContainer.classList.remove('close')
    inputBackground.disabled = true
  }

  else {
    containerInputBackground.classList.remove('borrado')
    titleGradient.classList.remove('open')

    belovedBlock.style.background = document.querySelector('#inputBackground').value
    code.textContent = `background:${document.querySelector('#inputBackground').value};`

    gradientContainer.classList.add('close')
    inputBackground.disabled = false
  }
}

export function toggleLinearRadial() {
  const radial = document.querySelector(".button-radial"),
        linear = document.querySelector('.button-linear'),
        angulos = document.querySelector(".angulos"),

        anglesContainer = document.querySelectorAll('.container-angles button'),
        buttonLikeArray = [...anglesContainer],
        angulo = document.querySelector(".container-angles .active")

  const inputColorLikeArray = [...document.querySelectorAll('.color12 input[type="color"]')],

        inputOpacityLikeArray = [...document.querySelectorAll('.opacity-gradient input')],

        inputGradientLikeArray = [...document.querySelectorAll('.toggle-gradient input[type="range"]')]

  const belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child')


  document.querySelectorAll('.blr').forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains('button-linear')) {

        if (linear.classList.contains("active")) {
          removeActive()
          radialBelovedBlock()
          radial.classList.add("active")

          linear.classList.remove("active")
          angulos.classList.add('radial')
        }

        else {
          disabledFalse()
          linearBelovedBlock()

          buttonLikeArray[1].classList.add('active')
          radial.classList.remove("active")

          linear.classList.add("active")
          angulos.classList.remove('radial')
        }
      }

      else if (button.classList.contains('button-radial')) {

        if (radial.classList.contains("active")) {
          disabledFalse()
          linearBelovedBlock()

          buttonLikeArray[1].classList.add('active')
          radial.classList.remove("active")

          linear.classList.add("active")
          angulos.classList.remove('radial')
        }

        else {
          removeActive()
          radialBelovedBlock()
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

  function linearBelovedBlock() {
    belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

    code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
  }

  function radialBelovedBlock() {
    belovedBlock.style.background = `${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

    code.textContent = `background:${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
  }
}
 
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
        
        belovedBlock.style.background = `${linear.value}-gradient(${buttonLikeArray[e].value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${linear.value}-gradient(${buttonLikeArray[e].value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
      }
    })

  })
}

export function gradientColors() {
  const inputGradient = document.querySelectorAll('.toggle-gradient input[type="range"]'),
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

  inputOpacityLikeArray[0].value = 0
  inputOpacityLikeArray[1].value = 100

  inputGradientLikeArray[0].value = 0
  inputGradientLikeArray[1].value = 100

  inputOpacity.forEach(e => {
    e.addEventListener("input", () => {
      console.log('real world')
    })
  })
  
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
        belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
      }

      else if (radial.classList.contains('active')) {
        belovedBlock.style.background = `${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

        code.textContent = `background:${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
      }
    }

    function spanMovement(e) {
      let newSpanPosition = (inputGradientLikeArray[e].value * 85) / 100
  
      spanLikeArray[e].style.left = `${ newSpanPosition.toFixed(2) }%`
      spanLikeArray[e].textContent = inputGradientLikeArray[e].value
    }
  })
}
