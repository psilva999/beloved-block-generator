export function border() {
  const belovedBlock = document.querySelector(".beloved-block"),
        border = document.querySelector('#border'),

        select = document.querySelector(".normal-range select"),
        color = document.querySelector('#inputBorder'),

        borders = document.querySelectorAll('.ajuste-bordas button'),
        arrayBorders = [...borders],

        code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code]
  
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

  if (border.value < .1)
    codeLikeArray[9].classList.add('p-off')

  else {
    codeLikeArray[9].classList.remove('p-off')

    codeLikeArray[9].textContent = `border:${ border.value / 10 }rem ${ select.options[select.selectedIndex].value } ${ color.value };`
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
