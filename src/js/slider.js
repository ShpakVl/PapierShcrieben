const btnsSlider = Array.from(document.querySelectorAll('.slider__btn'))
const activeSlide = 'slider--active'

const onClickSlide = e =>
{
  const target = e.target
  const dataId = target.getAttribute('data-id')

  document.querySelector(`.slider__btn.${activeSlide}`).classList.remove(activeSlide)
  target.classList.add(activeSlide)
  // СДЕЛАТЬ СРАВНЕНИЕ ПО АЙДИ ИЛИ ЕЩЕ КАК-ТО ЧТОБЫ УБИРАЛСЯ СЛАЙД В ДАННОМ СТЕПЕ
  document.querySelector(`.slider__slide.${activeSlide}`).classList.remove(activeSlide)
  document.querySelector(`.slider__slide#${dataId}`).classList.add(activeSlide)
}

btnsSlider.map(btn => btn.onclick = e => onClickSlide(e))