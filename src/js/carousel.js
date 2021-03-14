const carousel__btn = Array.from(document.querySelectorAll('.carousel__btn'));
const carousel__content = document.querySelector('.carousel__content');
const card = document.querySelector('.card').offsetWidth;
const carousel__active= "carousel--active"
const blockWidth = card*3 + 60;
carousel__btn.map((item,idx)=>{
    item.onclick = (e)=>{
        document.querySelector(`.${carousel__active}`).classList.remove(carousel__active);
        carousel__content.style.transform = `translateX(-${blockWidth*idx}px)`;
        return item.classList.add(carousel__active);
    } 
})