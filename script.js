const hamburguesa = document.querySelector('#hamburguer')
const enlaces = document.querySelector('#nav__ul')
const dropdowns = document.querySelectorAll('.dropdown')
const sombra = document.querySelector('#hero__shadow')

hamburguesa.addEventListener('click', () => {
  enlaces.classList.toggle('show')
})

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown__menu')
  
  dropdown.addEventListener('mouseenter', () => {
    sombra.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  })
  
  dropdown.addEventListener('mouseleave', () => {
    sombra.style.backgroundColor = 'transparent'
  })
})
// Mobile dropdown
dropdowns.forEach(drop => {
  drop.addEventListener('click', e => {
    e.stopPropagation() // evita cerrar el nav accidentalmente
    const menu = drop.querySelector('.dropdown__menu')
    menu.classList.toggle('show')
  })
})
