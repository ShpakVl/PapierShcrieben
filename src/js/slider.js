const btnsSlider = Array.from(document.querySelectorAll('.slider__btn'))
const activeSlide = 'slider--active'

const onClickSlide = e =>
{
  const target = e.target
  const dataId = target.getAttribute('data-id')
  const stepId = target.getAttribute('data-step-id')

  document.querySelector(`.slider__btn.${activeSlide}[data-step-id=${stepId}]`).classList.remove(activeSlide)
  target.classList.add(activeSlide)
  
  document.querySelector(`.slider-inline__slide#${stepId} .slider__slide.${activeSlide}`).classList.remove(activeSlide)
  document.querySelector(`.slider__slide#${dataId}`).classList.add(activeSlide)
}

btnsSlider.map(btn => btn.onclick = e => onClickSlide(e))