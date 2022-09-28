export function selectFontWeight() {
  const belovedBlock = document.querySelector(".beloved-block"),
        select = document.querySelector(".font-weight select"),

        code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code]

  belovedBlock.style.fontWeight = select.options[select.selectedIndex].value
  codeLikeArray[5].textContent = `font-weight:${select.options[select.selectedIndex].value};`
}

export function copyCode() {
  const code = document.querySelectorAll('code p'), 
        codeLikeArray = [...code],

        button = document.querySelector('code button')

  let codeForCopy = '',
      classOff = Number(document.querySelectorAll('.p-off').length),
      totalClassOf = classOff + 1
      
  for (let i = 0; i < codeLikeArray.length; i++) {
    if (!codeLikeArray[i].classList.contains('p-off')) {
      if (i === codeLikeArray.length - totalClassOf) {
        codeForCopy += `${ codeLikeArray[i].textContent }`
      }

      else codeForCopy += `${ codeLikeArray[i].textContent }\n`
    }
    
  }

  navigator.clipboard.writeText(codeForCopy)

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
