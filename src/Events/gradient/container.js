import { rgba } from "./rgba"

export function toggleGradientContainer() {
  const containerInputBackground = document.querySelector('.generator div:first-child p'),
        gradientContainer = document.querySelector('.gradient'),

        titleGradient = document.querySelector('.titleGradient'),
        inputBackground = document.querySelector("#inputBackground"),

        belovedBlock = document.querySelector('.beloved-block'),
        code = document.querySelector('code p:first-child')

  if (gradientContainer.classList.contains('close')) {
    rgba()
    containerInputBackground.classList.add('borrado')
    titleGradient.classList.add('open')

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
