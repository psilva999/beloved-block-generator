export function toggleLargeRange() {
  const belovedBlock = document.querySelector(".beloved-block"),

        inputRange = document.querySelectorAll('.large-range input'), 
        inputRangeLikeArray = [...inputRange],

        spanValue = document.querySelectorAll('.large-range span'),
        spanLikeArray = [...spanValue],

        code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code]

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

        codeLikeArray[1].textContent = `width:${inputRangeLikeArray[0].value}rem;`
      }

      else if (e.id === 'height') {
        valueWidthHeight(1)
        spanMovement(1)

        belovedBlock.style.height = `${ inputRangeLikeArray[1].value }rem`
        codeLikeArray[2].textContent = `height:${inputRangeLikeArray[1].value}rem;`
      }

      else if (e.id === 'border-radius') {
        value_others_span(2)
        spanMovement(2)

        belovedBlock.style.borderRadius = `${ inputRangeLikeArray[2].value / 10 }rem`

        if (inputRangeLikeArray[2].value < .1)
          codeLikeArray[6].classList.add("p-off")

        else {
          codeLikeArray[6].classList.remove("p-off")
          codeLikeArray[6].textContent = `border-radius:${ inputRangeLikeArray[2].value / 10 }rem;`
        }
      }

      else if (e.id === 'padding') {
        value_others_span(3)
        spanMovement(3)

        belovedBlock.style.padding = `${ inputRangeLikeArray[3].value / 10 }rem`
        
        if (inputRangeLikeArray[3].value < .1)
          codeLikeArray[7].classList.add("p-off")

        else {
          codeLikeArray[7].classList.remove("p-off")
          codeLikeArray[7].textContent = `padding:${ inputRangeLikeArray[3].value / 10 }rem;`
        }
      }

      else if (e.id === 'letterSpacing') {
        value_others_span(4)
        spanMovement(4)

        belovedBlock.style.letterSpacing = `${ inputRangeLikeArray[4].value / 10 }rem`

        if (inputRangeLikeArray[4].value < .1)
          codeLikeArray[8].classList.add("p-off")

        else {
          codeLikeArray[8].classList.remove("p-off")

          codeLikeArray[8].textContent = `letter-spacing:${ inputRangeLikeArray[4].value / 10 }rem;`
        }
      }

      else if (e.id === 'fontSize') {
        value_others_span(5)
        spanMovement(5)

        belovedBlock.style.fontSize = `${ inputRangeLikeArray[5].value / 10 }rem`
        codeLikeArray[4].textContent = `font-size:${inputRangeLikeArray[5].value / 10}rem;`
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