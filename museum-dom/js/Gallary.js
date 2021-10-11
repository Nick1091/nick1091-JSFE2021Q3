const galleryPict = document.querySelectorAll('.gallery_column');
const gallery = document.querySelector('.gallery_pictures_inner');

function shuffle(arr) {
    let  temp;
    for (let i = arr.length - 1; i > 0; i--) {
      let  j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function ready() {
    
    let arr = [];
    let h = 0;
    // const heightCol = gallery.getAttribute('max-height');

    galleryPict.forEach((el) => {
        let src = el.getAttribute('src');
        let width = el.getAttribute('width');
        let height = el.getAttribute('height');
        let obj = { src: src, width: width, height: height };
        arr.push(obj);
    });
    arr = shuffle(arr);
    let n = 0;
    let p = 1;
    galleryPict.forEach((el) => {
        let hightEl = Number(arr[n]['height']);
        // (2840)
        if ((h + hightEl > 2840 && p === 1) || (h + hightEl > 2915 && p === 2)) {
            p++;
            h = hightEl;
        } else { h = h + hightEl; }
        if (n === 0 || (p === 3 && h === hightEl)) {
            el.classList.add('square');
        } else { el.classList.remove('square') }
        el.setAttribute('width', arr[n]['width']);
        el.setAttribute('height', arr[n]['height']);
        el.setAttribute('src', arr[n]['src']);
        n++;
    });
}

document.addEventListener("DOMContentLoaded", ready);


/* <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache</img>=0"> */



function debounce(func, wait = 20, immediate = true){
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.gallery_column')

function checkSlide(){
    sliderImages.forEach(sliderImage => {

        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 4;
       
        const imageBottom = sliderImage.getBoundingClientRect().top + sliderImage.height + window.scrollY ;
        const isHalfShown = slideInAt > sliderImage.getBoundingClientRect().top + window.scrollY;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('gallery_column_active');
        } else {
            sliderImage.classList.remove('gallery_column_active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));