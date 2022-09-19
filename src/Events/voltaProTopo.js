export function voltaProTopo() {
  const buttonTop = document.querySelector(".volta-pro-topo")

  if (window.pageYOffset >= 390 && (window.matchMedia('(max-width:1264px)') || window.matchMedia('(max-height:600px)')))
    buttonTop.classList.add("active")
    
  else 
    buttonTop.classList.remove("active")
}
