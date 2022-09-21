export function configBorder() {
  const borders = document.querySelectorAll('.ajuste-bordas button'),
        arrayBorders = [...borders]

  borders.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains('bTop')) {
        toggleBorders(0)
      }

      else if (button.classList.contains('bRight')) {
        toggleBorders(1)
      }

      else if (button.classList.contains('bBottom')) {
        toggleBorders(2)
      }

      else if (button.classList.contains('bLeft')) {
        toggleBorders(3)
      }
    })

    function toggleBorders(number) {
      if (!arrayBorders[number].classList.contains("off")) 
        arrayBorders[number].classList.add("off")

      else 
        arrayBorders[number].classList.remove('off')
    }
    
  })
}

export function toggleLargeRange() {
  const inputRange = document.querySelectorAll('.large-range input'), 
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
        valueWidthHeight(0)
        spanMovement(0)
      }

      else if (e.id === 'height') {
        valueWidthHeight(1)
        spanMovement(1)
      }

      else if (e.id === 'border-radius') {
        value_others_span(2)
        spanMovement(2)
      }

      else if (e.id === 'padding') {
        value_others_span(3)
        spanMovement(3)
      }

      else if (e.id === 'letterSpacing') {
        value_others_span(4)
        spanMovement(4)
      }

      else if (e.id === 'fontSize') {
        value_others_span(5)
        spanMovement(5)
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
}

export function colorsHexadecimal() {
  const inputColor = document.querySelectorAll('input[type="color"]'),
        inputColorLikeArray = [...inputColor],

        labelColor = document.querySelectorAll('label'),
        labelColorLikeArray = [...labelColor]

  inputColor.forEach(input => {
    input.addEventListener('input', () => {
      if (input.id === 'inputBackground') {
        changeLabelContent(0)
      }

      else if (input.id === 'inputGradient1') {
        changeLabelContent(1)
      }

      else if (input.id === 'inputGradient2') {
        changeLabelContent(2)
      }

      else if (input.id === 'inputBorder') {
        changeLabelContent(3)
      }

      else if (input.id === 'inputTextColor') {
        changeLabelContent(4)
      }
    })

    function changeLabelContent(e) {
      console.log(labelColorLikeArray[e])
      labelColorLikeArray[e].textContent = `${inputColorLikeArray[e].value}`
    }
    
  })
}
