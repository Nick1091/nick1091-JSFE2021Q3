$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .navigation').toggleClass('active');
    });  
});

$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function(){
    $("#navig").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

const BurgerBtn = document.querySelector('.burger_menu');
const dekstopMenu1024 = document.querySelector('.dekstop_navi1024');
const TitleText = document.querySelector('.welcome_text')

function toggleBtn() {
  BurgerBtn.classList.toggle('burger_active');
  dekstopMenu1024.classList.toggle('dekstop_navi1024_active');
  TitleText.classList.toggle('welcome_text_none')
}

BurgerBtn.addEventListener('click', toggleBtn);




