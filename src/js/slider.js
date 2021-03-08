const btns = Array.from(document.querySelectorAll('.slider__btn'))

const active = 'slider--active'

const onClick = e =>
{
  const target = e.target
  const slideId = target.getAttribute('data-id')

  document.querySelector(`.slider__btn.${active}`).classList.remove(active)
  target.classList.add(active)

  document.querySelector(`.slider__slide.${active}`).classList.remove(active)
  document.querySelector(`.slider__slide#${slideId}`).classList.add(active)
}

btns.map(btn => btn.onclick = e => onClick(e))