const dropdowns = Array.from(document.querySelectorAll('.dropdown'))
const options = Array.from(document.querySelectorAll('.dropdown__item'))
const classActive = 'dropdown--open'

const toggleMenu = target => {
    const active = document.querySelector(`.${classActive}`)

    active && active !== target ? active.classList.toggle(classActive) : false

    !target.classList.contains('dropdown__item') ? target.classList.toggle(classActive) : false
}

const selectOption = target => {
    const label = target.parentElement.parentElement.querySelector('.dropdown__label')

    label.setAttribute('data-value', target.getAttribute('data-value'))
    label.innerText = target.textContent

    document.querySelector(`.${classActive}`).classList.toggle(classActive)

}
const onBlur = () => {
    const active = document.querySelector(`.${classActive}`)
    active.classList.toggle(classActive);
}
dropdowns.map(dropdown => {
    dropdown.onclick = e => toggleMenu(e.target)
    dropdown.onblur = e => onBlur()
})

options.map(option => {
    option.onclick = e => selectOption(e.target)
})