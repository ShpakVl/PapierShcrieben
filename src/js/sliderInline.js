const btns = Array.from(document.querySelectorAll('.slider-inline__number'))
const divisions = document.querySelectorAll('.slider-inline__division')
const slides = document.querySelectorAll('.slide')


const onClick = e =>
{
  const step = e.target.parentElement
  const parent = step.parentElement

  
}

btns.map(btn => btn.onclick = e => onClick(e))