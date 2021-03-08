const btnsSlider = Array.from(document.querySelectorAll('.slider__btn'))
const activeSlide = 'slider--active'

const onClickSlide = e =>
{
  const target = e.target
  console.log(target)
  const slideId = target.getAttribute('data-id')
  document.querySelector(`.slider__btn.${activeSlide}`).classList.remove(activeSlide)
  target.classList.add(activeSlide)

  document.querySelector(`.slider__slide.${activeSlide}`).classList.remove(activeSlide)
  document.querySelector(`.slider__slide#${slideId}`).classList.add(activeSlide)
}

btnsSlider.map(btn => btn.onclick = e => onClickSlide(e))