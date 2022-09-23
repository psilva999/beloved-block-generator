export function toggleLargeRange() {
  const belovedBlock = document.querySelector(".beloved-block"),

        inputRange = document.querySelectorAll('.large-range input'), 
        inputRangeLikeArray = [...inputRange],

        spanValue = document.querySelectorAll('.large-range span'),
        spanLikeArray = [...spanValue]

  inputRangeLikeArray[2].value = '1'
  inputRangeLikeArray[3].value = '0'
  inputRangeLikeArray[4].value = '0'
  inputRangeLikeArray[5].value = '30'

  inputRange.forEach(e => {
    e.addEventListener('input', () => {

      if (e.id === 'width') {
        let responsive = (Number(inputRangeLikeArray[0].value) * 18) / 25

        valueWidthHeight(0)
        spanMovement(0)

        if (window.matchMedia('(max-width:460px)').matches) {
          belovedBlock.style.width = `${ responsive.toFixed(2) }rem`
        }

        else {
          belovedBlock.style.width = `${ inputRangeLikeArray[0].value }rem`
        }
      }

      else if (e.id === 'height') {
        valueWidthHeight(1)
        spanMovement(1)
        belovedBlock.style.height = `${ inputRangeLikeArray[1].value }rem`
      }

      else if (e.id === 'border-radius') {
        value_others_span(2)
        spanMovement(2)
        belovedBlock.style.borderRadius = `${ inputRangeLikeArray[2].value / 10 }rem`
      }

      else if (e.id === 'padding') {
        value_others_span(3)
        spanMovement(3)
        belovedBlock.style.padding = `${ inputRangeLikeArray[3].value / 10 }rem`
      }

      else if (e.id === 'letterSpacing') {
        value_others_span(4)
        spanMovement(4)
        belovedBlock.style.letterSpacing = `${ inputRangeLikeArray[4].value / 10 }rem`
      }

      else if (e.id === 'fontSize') {
        value_others_span(5)
        spanMovement(5)
        belovedBlock.style.fontSize = `${ inputRangeLikeArray[5].value / 10 }rem`
      }
    })

  })

  function valueWidthHeight(e) {
    spanLikeArray[e].textContent = `${ inputRangeLikeArray[e].value }rem`
  }

  function value_others_span(e) {
    spanLikeArray[e].textContent = `${ Number(inputRangeLikeArray[e].value / 10).toFixed(1) }rem`
  }

  function spanMovement(e) {
    let maxValueInputRange = Number(inputRangeLikeArray[e].getAttribute("max")),
        newSpanPosition = (inputRangeLikeArray[e].value * 85) / maxValueInputRange

    if (inputRangeLikeArray[e].value === '1') 
      spanLikeArray[e].style.left = `0%`

    else 
      spanLikeArray[e].style.left = `${ newSpanPosition.toFixed(2) }%`
  }

  const borderBelovedBlock = document.querySelector('.normal-range input[type="range"]'),
        spanBorder = document.querySelector(".normal-range .valueBorder")

  borderBelovedBlock.value = 0
  borderBelovedBlock.addEventListener('input', () => {
    let newSpanPosition = (borderBelovedBlock.value * 85) / 10

    spanBorder.textContent = `${borderBelovedBlock.value / 10}rem`
    spanBorder.style.left = `${ newSpanPosition.toFixed(2) }%`
  })
}

export function border() {
  const belovedBlock = document.querySelector(".beloved-block"),
        border = document.querySelector('#border'),

        select = document.querySelector(".normal-range select"),
        color = document.querySelector('#inputBorder'),

        borders = document.querySelectorAll('.ajuste-bordas button'),
        arrayBorders = [...borders]
  
  if (arrayBorders[0].classList.contains("off")) {
    belovedBlock.style.borderTop = `
      0rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  else {
    belovedBlock.style.borderTop = `
      ${ border.value / 10 }rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  if (arrayBorders[1].classList.contains("off")) {
  belovedBlock.style.borderRight = `
    0rem
    ${ select.options[select.selectedIndex].value } 
    ${ color.value }`
  }

  else {
    belovedBlock.style.borderRight = `
      ${ border.value / 10 }rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  if (arrayBorders[2].classList.contains("off")) {
    belovedBlock.style.borderBottom = `
      0rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  else {
    belovedBlock.style.borderBottom = `
      ${ border.value / 10 }rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  if (arrayBorders[3].classList.contains("off")) {
    belovedBlock.style.borderLeft = `
      0rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }

  else {
    belovedBlock.style.borderLeft = `
      ${ border.value / 10 }rem
      ${ select.options[select.selectedIndex].value } 
      ${ color.value }`
  }
}

export function configBorder() {
  const belovedBlock = document.querySelector(".beloved-block"),

        borders = document.querySelectorAll('.ajuste-bordas button'),
        arrayBorders = [...borders],

        border = document.querySelector('#border'),
        select = document.querySelector(".normal-range select"),
        color = document.querySelector('#inputBorder')

  borders.forEach(button => {
    button.addEventListener("click", () => {

      if (button.classList.contains('bTop')) {
        if (!arrayBorders[0].classList.contains("off")) {
          arrayBorders[0].classList.add("off")

          belovedBlock.style.borderTop = `
            0rem
            ${ select.options[select.selectedIndex].value } 
            ${ color.value }`
        }

        else {
          arrayBorders[0].classList.remove('off')
          belovedBlock.style.borderTop = `
            ${ border.value / 10 }rem
            ${ select.options[select.selectedIndex].value } 
            ${ color.value }`
        }
      }

      else if (button.classList.contains('bRight')) {
        if (!arrayBorders[1].classList.contains("off")) {
          arrayBorders[1].classList.add("off")
          belovedBlock.style.borderRight = `
            0rem
            ${ select.options[select.selectedIndex].value } 
            ${ color.value }`
        }

        else {
          arrayBorders[1].classList.remove('off')
          belovedBlock.style.borderRight = `
            ${ border.value / 10 }rem
            ${ select.options[select.selectedIndex].value } 
            ${ color.value }`
        }
      }

      else if (button.classList.contains('bBottom')) {
        if (!arrayBorders[2].classList.contains("off")) {
          arrayBorders[2].classList.add("off")
          belovedBlock.style.borderBottom = `
          0rem
          ${ select.options[select.selectedIndex].value } 
          ${ color.value }`
        }

        else {
          arrayBorders[2].classList.remove('off')

          belovedBlock.style.borderBottom = `
          ${ border.value / 10 }rem
          ${ select.options[select.selectedIndex].value } 
          ${ color.value }`
        }
      }

      else if (button.classList.contains('bLeft')) {
        if (!arrayBorders[3].classList.contains("off")) {
          arrayBorders[3].classList.add("off")

          belovedBlock.style.borderLeft = `
          0rem
          ${ select.options[select.selectedIndex].value } 
          ${ color.value }`
        }

        else {
          arrayBorders[3].classList.remove('off')

          belovedBlock.style.borderLeft = `
          ${ border.value / 10 }rem
          ${ select.options[select.selectedIndex].value } 
          ${ color.value }`
        }
      }
    })
    
  })
}

export function colorsHexadecimal() {
  const belovedBlock = document.querySelector(".beloved-block"),
        spanBelovedBlock = document.querySelector(".beloved-block span"),

        inputColor = document.querySelectorAll('input[type="color"]'),
        inputColorLikeArray = [...inputColor],

        labelColor = document.querySelectorAll('label'),
        labelColorLikeArray = [...labelColor]

  inputColorLikeArray[0].value = '#D8D6D6'
  inputColorLikeArray[1].value = '#D8D6D6'
  inputColorLikeArray[2].value = '#D8D6D6'
  inputColorLikeArray[4].value = '#1F191A'

  inputColor.forEach(input => {
    input.addEventListener('input', () => {
      if (input.id === 'inputBackground') {
        changeLabelContent(0)
        belovedBlock.style.background = inputColorLikeArray[0].value
      }

      else if (input.id === 'inputGradient1') {
        changeLabelContent(1)
      }

      else if (input.id === 'inputGradient2') {
        changeLabelContent(2)
      }

      else if (input.id === 'inputBorder') {
        changeLabelContent(3)
        belovedBlock.style.border = inputColorLikeArray[3].value
      }

      else if (input.id === 'inputTextColor') {
        changeLabelContent(4)
        spanBelovedBlock.style.color = inputColorLikeArray[4].value
      }
    })

    function changeLabelContent(e) {
      labelColorLikeArray[e].textContent = inputColorLikeArray[e].value
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

export function selectFontWeight() {
  const belovedBlock = document.querySelector(".beloved-block"),
        select = document.querySelector(".font-weight select")

  belovedBlock.style.fontWeight = select.options[select.selectedIndex].value
}

export function copyCode() {
  const code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code],
        button = document.querySelector('code button')
  
  navigator.clipboard.writeText(codeLikeArray[0, 1, 2, 3, 4].textContent)

  let tempo = 3,
      removeCopiedMessage = setInterval(restart, 700)

  button.innerHTML = 'copied'
  function restart() {
    tempo--

    if (tempo === 0) {
      button.innerHTML = 'copy'
      clearInterval(removeCopiedMessage)
    }
  }
}
