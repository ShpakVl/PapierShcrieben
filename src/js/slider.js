const btnsSlider = Array.from(document.querySelectorAll('.slider__btn'))
const activeSlide = 'slider--active'

const onClickSlide = e =>
{
  const target = e.target
  const dataId = target.getAttribute('data-id')
  const sliderId = target.getAttribute('data-slider-id')

  document.querySelector(`.slider__btn.${activeSlide}[data-slider-id=${sliderId}]`).classList.remove(activeSlide)
  target.classList.add(activeSlide)
  
  document.querySelector(`.slider__wrapper#${sliderId} .slider__slide.${activeSlide}`).classList.remove(activeSlide)
  document.querySelector(`.slider__slide#${dataId}`).classList.add(activeSlide)
}

btnsSlider.map(btn => btn.onclick = e => onClickSlide(e))