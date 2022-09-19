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
