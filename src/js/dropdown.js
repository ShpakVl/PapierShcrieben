const dropdowns = Array.from(document.querySelectorAll('.dropdown'))
const options = Array.from(document.querySelectorAll('.dropdown__item'))
const classActive = 'dropdown--open'
const classArrow = 'arrow--open'

const toggleMenu = target => {
    const active = document.querySelector(`.${classActive}`)

    active && active !== target ? active.classList.toggle(classActive) : false

    !target.classList.contains('dropdown__item') ? toggleClass(target, [classActive, classArrow]) : false
}

const selectOption = target => {
    const label = target.parentElement.parentElement.querySelector('.dropdown__label')

    label.setAttribute('data-value', target.getAttribute('data-value'))
    label.innerText = target.textContent

    document.querySelector(`.${classActive}`).classList.toggle(classActive)

}
const onBlur = () => {
    const active = document.querySelector(`.${classActive}`)
    active ? toggleClass(active, [classActive, classArrow]) : false
}
dropdowns.map(dropdown => {
    dropdown.onclick = e => toggleMenu(e.target)
    dropdown.onblur = e => onBlur()
})

options.map(option => {
    option.onclick = e => selectOption(e.target)
})