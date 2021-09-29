const touchBtn = document.querySelector('.total');
const closeForm = document.querySelector('.close');
const form = document.querySelector('.form__buy-ticket');
const blockForm = document.querySelector('.overlay')

function showForm(){
    blockForm.classList.remove('overlay_no');
    form.classList.add('open_form')
};
 
function eventCloseForm(){
    blockForm.classList.add('overlay_no');
    form.classList.remove('open_form');
};


closeForm.addEventListener('click', eventCloseForm);

blockForm.addEventListener('click', eventCloseForm);

touchBtn.addEventListener('click', showForm);




const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})