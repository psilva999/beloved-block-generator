export function colorsHexadecimal() {
  const belovedBlock = document.querySelector(".beloved-block"),
        spanBelovedBlock = document.querySelector(".beloved-block span"),

        inputColor = document.querySelectorAll('input[type="color"]'),
        inputColorLikeArray = [...inputColor],

        labelColor = document.querySelectorAll('label'),
        labelColorLikeArray = [...labelColor],

        code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code]

  const radial = document.querySelector(".button-radial"),
      linear = document.querySelector('.button-linear'),
      angulo = document.querySelector(".container-angles .active")

const inputOpacityLikeArray = [...document.querySelectorAll('.opacity-gradient input')],

      inputGradientLikeArray = [...document.querySelectorAll('.toggle-gradient input[type="range"]')]

  inputColorLikeArray[0].value = '#D8D6D6'
  inputColorLikeArray[1].value = '#D8D6D6'
  inputColorLikeArray[2].value = '#D8D6D6'
  inputColorLikeArray[4].value = '#1F191A'

  inputColor.forEach(input => {
    input.addEventListener('input', () => {

      if (input.id === 'inputBackground') {
        changeLabelContent(0)

        belovedBlock.style.background = inputColorLikeArray[0].value
        codeLikeArray[0].textContent = `background:${inputColorLikeArray[0].value};`
      }

      else if (input.id === 'inputGradient1') {
        changeLabelContent(1)
        console.log(inputGradientLikeArray[0].value, inputGradientLikeArray[1].value)
        changeGradientBelovedBlock()
      }

      else if (input.id === 'inputGradient2') {
        changeLabelContent(2)
        changeGradientBelovedBlock()
        console.log(inputGradientLikeArray[0].value, inputGradientLikeArray[1].value)
      }

      else if (input.id === 'inputBorder') {
        changeLabelContent(3)
        belovedBlock.style.border = inputColorLikeArray[3].value
      }

      else if (input.id === 'inputTextColor') {
        changeLabelContent(4)

        spanBelovedBlock.style.color = inputColorLikeArray[4].value
        codeLikeArray[3].textContent = `color:${inputColorLikeArray[4].value};`
      }
    })

    function changeLabelContent(e) {
      labelColorLikeArray[e].textContent = inputColorLikeArray[e].value
    }

    function changeGradientBelovedBlock() {
      if (linear.classList.contains('active')) {
        belovedBlock.style.background = `${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

        codeLikeArray[0].textContent = `background:${linear.value}-gradient(${angulo.value}, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
      }

      else if (radial.classList.contains('active')) {
        belovedBlock.style.background = `${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%)`

        codeLikeArray[0].textContent = `background:${radial.value}-gradient(circle, ${inputColorLikeArray[0].value} ${inputGradientLikeArray[0].value}%, ${inputColorLikeArray[1].value} ${inputGradientLikeArray[1].value}%);`
      }
    }
    
  })
}

export function copyColor() {
  const labelColor = document.querySelectorAll('label'),
        labelColorLikeArray = [...labelColor]

  labelColor.forEach(label => {
    label.addEventListener("click", () => {
      if (label.id === 'label-background') {
        toggleCopied(0)
      }

      else if (label.id === 'label-gradient1') {
        toggleCopied(1)
      }

      else if (label.id === 'label-gradient2') {
        toggleCopied(2)
      }

      else if (label.id === 'label-border-background') {
        toggleCopied(3)
      }

      else if (label.id === 'label-color') {
        toggleCopied(4)
      }
    })
  })

  function toggleCopied(e) {
    navigator.clipboard.writeText(labelColorLikeArray[e].textContent)

    if (!labelColorLikeArray[e].classList.contains('copied')) {
      let tempo = 3,
          removeCopiedMessage = setInterval(displayNoneCopied, 700)

      labelColorLikeArray[e].classList.add('copied')
      function displayNoneCopied() {
        tempo--

        if (tempo === 0) {
          labelColorLikeArray[e].classList.remove('copied')
          clearInterval(removeCopiedMessage)
        }
      }

    }
  }
}