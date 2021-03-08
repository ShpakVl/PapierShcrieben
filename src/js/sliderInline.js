const btns = Array.from(document.querySelectorAll('.slider-inline__number'))
const slidesInline = Array.from(document.querySelectorAll('.slider-inline__slide'))

const active = 'slider-inline--active'

const setActive = (target) =>
{
  target.classList.remove(active)
  target.classList.add(active)
  const prev = target.previousElementSibling

  prev ? setActive(prev) : false
}

const onClick = e =>
{
  const step = e.target.parentElement
  const slideId = step.getAttribute('data-id')
  
  btns.map(btn => 
    {
      const parent = btn.parentElement
      
      if (parent.classList.contains(active))
      {
        parent.classList.remove(active)
        parent.previousElementSibling ? parent.previousElementSibling.classList.remove(active) : false
      }
    })

  setActive(step)
  
  document.querySelector(`.slider-inline__slide.${active}`).classList.remove(active)
  document.querySelector(`.slider-inline__slide#${slideId}`).classList.add(active)
}

btns.map(btn => btn.onclick = e => onClick(e))