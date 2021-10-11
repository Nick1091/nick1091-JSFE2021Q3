const wsNext = document.querySelector('.ws_right')
const wsPrevious = document.querySelector('.ws_left')
const wsItems = document.querySelectorAll('.item_ws')
const wsCubes = document.querySelectorAll('.cube')
const wsCurrentNumber = document.querySelector('.current_number')
const wsWelcome = document.querySelector('.ws_welcome')
let wsIndex = 0;
let wsPrevIndex = 0;
let listing = 0;
let startX = 0;
let endX = 0;



function mouseMove() {
    if (startX - endX < 0 && endX && startX && !listing) {
      wsPreviousSlide();
    } else if (startX - endX > 0 && endX && startX && !listing) {
      wsNextSlide();
    }
    startX = 0;
    endX = 0;
}


wsWelcome.addEventListener('mousedown', e => {
    if (!startX) {
        startX = e.offsetX;
    } else {
        endX = e.offsetX
        mouseMove()
    }
});
 

wsWelcome.addEventListener('mouseout', e => {
    if (startX) {
        endX = e.offsetX
        mouseMove()
    }
    
});


wsWelcome.addEventListener('mouseup', e => {
    endX = e.offsetX;
    mouseMove()
});



const wsActive = (n, direction) => {
    
    listing  = 1;
    wsItems[wsPrevIndex].classList.remove('active_ws')   
    wsCurrentNumber.innerHTML = `${n+1}`;
    wsItems[n].classList.add('active_ws')
    wsItems[wsPrevIndex].classList.add('next_ws')
    wsItems[wsPrevIndex].classList.add(direction)
    wsItems[wsPrevIndex].addEventListener("animationend", () => {
      wsItems[wsPrevIndex].classList.remove('next_ws')
      wsItems[wsPrevIndex].classList.remove('active_ws')
      wsItems[wsPrevIndex].classList.remove(direction)
        setTimeout(() => {
          wsItems[wsPrevIndex].classList.remove('next_ws')
          wsItems[wsPrevIndex].classList.remove(direction)
            wsPrevIndex = n
            listing = 0
        }, 0) 
    });
}

const wsActiveDots = n => {
    for (dot of wsCubes) {
        dot.classList.remove('cube_active')
    }
    wsCubes[n].classList.add('cube_active')
}

const wsChangeItem = (x, direction = 'dot') => {
    wsActive(x, direction)
    wsActiveDots(x)
}

const wsNextSlide = () => {
    if (wsIndex === wsItems.length - 1) {
        wsIndex = 0;
        wsChangeItem(wsIndex, 'to-right')
    } else {
        wsIndex++;
        wsChangeItem(wsIndex, 'to-right')
    }
}

const wsPreviousSlide = () => {
    if (wsIndex === 0) {
        wsIndex = wsItems.length - 1;
        wsChangeItem(wsIndex, 'to-left')
    } else {
        wsIndex--;
        wsChangeItem(wsIndex, 'to-left')
    }
}

wsNext.addEventListener('click', () => {
    if (!listing) wsNextSlide()
    }
)

wsPrevious.addEventListener('click', () => {
    if (!listing) wsPreviousSlide()
    }
)

for (let i = 0; i < wsCubes.length; i++) {
    wsCubes[i].addEventListener('click', () => {
        if (i!== wsPrevIndex ) {
            if (i < wsPrevIndex) wsChangeItem(i, 'to-right')
            else wsChangeItem(i, 'to-left')
            wsIndex = i
        }
    })
}






const exploreSlider = document.querySelector('.explore_picture');
const before = exploreSlider.querySelector('.explore_img_inner');
const beforeImage = before.querySelector('.explore_quin');
const exploreBtn = exploreSlider.querySelector('.explore_slider');

const exploreWrapper = document.querySelector('.Explore');

const body = document.body;

let isAct = false;

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};


exploreWrapper.addEventListener('mousedown', () => {
    isAct = true;
});
exploreWrapper.addEventListener('mouseup', () => {
    isAct = false;
});
exploreWrapper.addEventListener('mouseleave', () => {
    isAct = false;
});


const mainExploreSlider = (x) => {
    let shift = Math.max(0, Math.min(x, exploreSlider.offsetWidth)); 
    before.style.width = `${shift}px`;
    exploreBtn.style.left = `${shift}px`;
};

exploreWrapper.addEventListener('mousemove', (e) => {
    if(!isAct){
        return;
    }
    let x = e.pageX;

    x -= exploreSlider.getBoundingClientRect().left;
    mainExploreSlider(x)
    pauseEvents(e);
})









const tickets = document.querySelector('.tickets_form');

const btnBasicLow = tickets.querySelector('.basic_low');
const btnBasicUp = tickets.querySelector('.basic_up');

const btnSeniorLow = tickets.querySelector('.senior_low');      
const btnSeniorUp = tickets.querySelector('.senior_up');

let basicAmount = tickets.querySelector('.basic_count_value');
let seniorAmount = tickets.querySelector('.senior_count_value');

let amount = tickets.querySelector('.amount_total_sum');


// popup

let selectTicketType = document.getElementById('select');

const btnFormBasicLow = document.querySelector('.btn_basic_low');
const btnFormBasicUp = document.querySelector('.btn_basic_up');
const btnFormSeniorLow = document.querySelector('.btn_senior_low') ;    
const btnFormSeniorUp = document.querySelector('.btn_senior_up');


let CostBasic1 =  document.querySelector('.costBasicType');
let CostSenior1 = document.querySelector('.costSeniorType');

let basicAmountForm = document.querySelector('.basic_count-value');
let seniorAmountForm = document.querySelector('.senior_count-value');

let exhibitionType = document.querySelector('.overview_type');
      
let amountBasicTickets = document.querySelector('.tickets_total_basic');
let amountSeniorTickets = document.querySelector('.tickets_total_senior');

let CostBasic2 =  document.querySelector('.costBasicType2');
let CostSenior2 = document.querySelector('.costSeniorType2');

let CostBasicSum = document.querySelector('.cost_ticketssum_basic');
let CostSeniorSum = document.querySelector('.cost_ticketssum_senior');

let TotalSum =  document.querySelector('.tickets_total_sum');




let radios = tickets.querySelectorAll('.tickets_radio_choice');

let money;

function updateAmountOfTickets() {
    basicAmountForm.value = basicAmount.value;
    seniorAmountForm.value = seniorAmount.value;
    amountBasicTickets.textContent = basicAmount.value;
    amountSeniorTickets.textContent = seniorAmountForm.value;
}
let valueType 
function changeSum(){
    if (radios[0].checked){
        valueType = 20;
    } else if (radios[1].checked){
        valueType = 25;
        } else if (radios[2].checked){
        valueType = 40;
    } 
    createSum();
}
    
function createSum(){        
   money = (basicAmount.value * valueType) + (seniorAmount.value * valueType / 2);
        updateAmountOfTickets();
        CostBasic2.textContent = valueType;
        CostSenior2.textContent = valueType / 2;
        CostBasic1.textContent = valueType;
        CostSenior1.textContent = valueType / 2;
        CostBasicSum.textContent = Number(amountBasicTickets.textContent) * valueType;
        CostSeniorSum.textContent = Number(amountSeniorTickets.textContent) * valueType / 2;
    amount.textContent = money;
    TotalSum.textContent = money;exhibitionType.textContent = selectTicketType.options[selectTicketType.selectedIndex].value;
}

    createSum()
    btnBasicLow.addEventListener('click', ()=>{
        createSum();
    });
    btnBasicUp.addEventListener('click', ()=>{
        createSum();
    });
    btnSeniorLow.addEventListener('click', ()=>{
        createSum();
    });
    btnSeniorUp.addEventListener('click', ()=>{
        createSum();
    });
    radios[0].addEventListener('click', ()=>{
        selectTicketType.selectedIndex = 0;
        exhibitionType.textContent = selectTicketType.options[0].value;
        changeSum()
    });    
    radios[1].addEventListener('click', ()=>{
        selectTicketType.selectedIndex = 1;
        exhibitionType.textContent = selectTicketType.options[1].value;
        changeSum()
    });    
    radios[2].addEventListener('click', ()=>{
        selectTicketType.selectedIndex = 2;
        exhibitionType.textContent = selectTicketType.options[2].value;
        changeSum()
    });    

    
    function showSelectChanges(){
        exhibitionType.textContent = selectTicketType.options[selectTicketType.selectedIndex].value 
        if (selectTicketType.options[selectTicketType.selectedIndex].value == 'Permanent exhibition') {
            valueType = 20;
        } else if (selectTicketType.options[selectTicketType.selectedIndex].value == 'Temporary exhibition') {
            valueType = 25;
        } else if (selectTicketType.options[selectTicketType.selectedIndex].value == 'Combined Admission') {
            valueType = 40;
        }
        createSum();   
    };

    selectTicketType.addEventListener('input', showSelectChanges)
    
    btnFormBasicLow.addEventListener('click', ()=>{
        btnBasicLow.nextElementSibling.stepDown();
        createSum();
    });
    btnFormBasicUp.addEventListener('click', ()=>{
        btnBasicUp.previousElementSibling.stepUp();
        createSum();
    });
    btnFormSeniorLow.addEventListener('click', ()=>{
        btnSeniorLow.nextElementSibling.stepDown();
        createSum();
    });
    btnFormSeniorUp.addEventListener('click', ()=>{
        btnSeniorUp.previousElementSibling.stepUp();
        createSum();
    });

    tickets.addEventListener('change', (e)=> {
        if(e.target.className !== 'tickets__radio_choice') return
        changeSum();
    })
    changeSum()

    

    
const dateInput = document.querySelector('.date_input');    
dateInput.valueAsDate  = new Date();

let dayOfWeek = document.querySelector('.day_of_week');
let dayOfMonth = document.querySelector('.day_of_month');
let monthOfYear = document.querySelector('.month_of_year');

const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function changeDate() {
    let newDate = new Date(dateInput.value);
    dayOfWeek.textContent = daysArray[newDate.getDay()];
    dayOfMonth.textContent = newDate.getDate();
    monthOfYear.textContent = monthsArray[newDate.getMonth()]
}
changeDate()
dateInput.addEventListener('input', changeDate)



const timeSelected = document.querySelector('.time_select');
const timeSelect = document.querySelector('.overview_time');

function  changeTime() {
    timeSelect.textContent = timeSelected.options[timeSelected.selectedIndex].value;
}
changeTime()
timeSelected.addEventListener('input', changeTime);