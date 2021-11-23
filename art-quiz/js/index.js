import OutputInfo from './console.js'
OutputInfo();
// заполнение карточек категорий


// получение data
let data ;
const img = new Image();
async function getData(){
  let images = 'js/data.json';
  let res = await fetch(images);
  let data = await res.json();
  return data
}
const dataInfo = await getData()


// переход между главным экраном и категориями
const btnArtists = document.querySelector('.main_artist');
const btnPictures = document.querySelector('.main_pictures');

const homeBtnArtist = document.querySelector('.back_button_artists')
const homeBtnPicture = document.querySelector('.back_button_pictures')

const artistCategory = document.querySelector('.artists_categories');
const pictureCategory = document.querySelector('.pictures_categories');
const mainPage = document.querySelector('.main');

function hiddenMain(){
   mainPage.classList.toggle('hidden');
 }
 btnArtists.addEventListener('click', ()=> {
   artistCategory.classList.toggle('hidden');
   hiddenMain()
   setBg()//
 })
 homeBtnArtist.addEventListener('click', ()=> {
  artistCategory.classList.toggle('hidden');
   hiddenMain()
 })
 btnPictures.addEventListener('click', ()=> {
  pictureCategory.classList.toggle('hidden');
   hiddenMain()
   setBg()//
 })
 homeBtnPicture.addEventListener('click', ()=> {
  pictureCategory.classList.toggle('hidden');
   hiddenMain()
 })
// close game
const back = document.querySelectorAll('.category_back')
const clos = document.querySelectorAll('.close');
clos.forEach(btn =>{
  btn.addEventListener('click', () =>{
    questionPictures.classList.add('hidden');
    questionArtists.classList.add('hidden');
    hiddenMain();
    deleteInterval();
    ind = 0;
    saveResult.length = 0;
    colorBullet();
  })
});  
back.forEach(btn =>{
  btn.addEventListener('click', () =>{
    questionPictures.classList.add('hidden');
    questionArtists.classList.add('hidden');
    deleteInterval();
    ind = 0;
    saveResult.length = 0;
    colorBullet();
    (result<12)? artistCategory.classList.toggle('hidden') : pictureCategory.classList.toggle('hidden');
  })
});  

//нажатие на блок и присвоение числа создание массива
const questionArtists = document.querySelector('.question_artists')
function showQuestionArtists(){
  artistCategory.classList.toggle('hidden');
  questionArtists.classList.toggle('hidden');
  fillingAuthor();
}
const questionPictures = document.querySelector('.question_pictures')
function showQuestionPictures(){
  pictureCategory.classList.toggle('hidden');
  questionPictures.classList.toggle('hidden');
  fillingPicture();
}
//create arr for lockal stor
let arrayAllResults = [];
while(arrayAllResults.length < 24){
  arrayAllResults.push('')
}
// block category
const blockCategory = document.querySelectorAll('.block_category');
let result
let interval

blockCategory.forEach(button =>{
  button.addEventListener('click', (e) =>{
    result = e.currentTarget.dataset.num;
    ind = 0;
    if(e.target == imageCategory[result]){
      (result < 12) ? showQuestionArtists() : showQuestionPictures()
      checkChecked()
    }
  })
})
//name author
const imageQuestions = document.querySelectorAll('.image_question')
const authorChoice = document.querySelector('.author_choice')

function currentName(ind) {
let currentArr = dataInfo.slice( result * 10,  result * 10 + 10);
return currentArr[ind];
}
//получем массив из 4 знач
function currentImage(ind) {
  let currentImg = dataInfo.slice( result * 10,  result * 10 + 10);
  let setImg = new Set;
  setImg.add(+currentImg[ind].imageNum);
    while(setImg.size < 4) {
      if (Math.floor(Math.random() * 240) != +currentImg[ind].imageNum ){
      setImg.add(Math.floor(Math.random() * 240))
      }
    }
  let arrImg = [...setImg];
  return (arrImg);
}
//перемешиваем массив из 4 знач
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }
  return answers;
}

//получем массив из 4 знач для авторов
function currentAuthor(ind) {
  let currentImg = dataInfo.slice( result * 10,  result * 10 + 10);
  let setImg = new Set;
  setImg.add(currentImg[ind].author);
    while(setImg.size < 4) {
      dataInfo[(Math.floor(Math.random() * 240))] 
      setImg.add(dataInfo[Math.floor(Math.random() * 240)].author)
      }
    let arrImg = [...setImg];
  return (arrImg);
}

// get names and picture
const questionPicture = document.querySelector('.picture') ;
const currentAuthors = document.querySelectorAll('.current_answer');
let number
function fillingAuthor(){
  
number = currentName(ind);
let arr4 = (shuffleAnswers(currentAuthor(ind)));
  for(let i = 0; i < 4; i++){
    currentAuthors[i].textContent = arr4[i];
  } 
  let images = new Image();
      images.src = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${number.imageNum}.jpg`;
      images.onload = ()  =>{   
        questionPicture.style.backgroundImage = `url(${images.src})`;
        imageCurrent.style.backgroundImage = `url(${images.src})`;     
}
}

//получаем картинки// имена
let imageCurrent = document.querySelector('.image_current')
let ans
let ind = 0;
let saveResult = [];
let right = 0;
function fillingPicture(){
  authorChoice.textContent = currentName(ind).author;
  let arr4 = (shuffleAnswers(currentImage(ind)));
  ans = arr4.findIndex(item => item == currentName(ind).imageNum);
  let img = new Image();
  for(let i = 0; i < 4; i++){
      let images = new Image();
      images.src = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${arr4[i]}.jpg`;
      images.onload = ()  =>{   
        imageQuestions[i].style.backgroundImage = `url(${images.src})`;
    };
    img.src = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${currentName(ind).imageNum}.jpg`;
      img.onload = ()  =>{   
        imageCurrent.style.backgroundImage = `url(${img.src})`;
    }
  }
}  


  let popup = document.querySelector('.popup')
  let popupWindow = document.querySelector('.popup_window')
  let overlay = document.querySelector('.overlay')
  let passIcon = document.querySelector('.pass_icon')
  let namePicture = document.querySelector('.name_picture')
  let nameAuthor = document.querySelector('.name_author')
  let yearPicture = document.querySelector('.year_picture')
  //модальное окно
  function showInfoPicture(){
    popupWindow.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    nameAuthor.textContent = currentName(ind).author;
    namePicture.textContent = currentName(ind).name;
    yearPicture.textContent = currentName(ind).year;    
    // нужно вписать локал сторадж
  }
  //final round
  let passRoundSuccess = document.querySelector('.popup_congratulations')
  let resultRoundNumber = document.querySelector('.result')
  let homeBtn = document.querySelector('.home_btn')
  function showFinalResults(sumRound){
    overlay.classList.toggle('hidden');
    passRoundSuccess.classList.toggle('hidden');
    resultRoundNumber.textContent = `${sumRound} / 10`; //lockal stor
  }
  const nextButton = document.querySelector('.next_button')
  nextButton.addEventListener('click', ()=>{
    passRoundSuccess.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    questionPictures.classList.add('hidden');
    questionArtists.classList.add('hidden');
    saveResult = [];
    colorBullet();
    (result < 12)? artistCategory.classList.toggle('hidden') : pictureCategory.classList.toggle('hidden');
  })
  homeBtn.addEventListener('click', ()=>{
    passRoundSuccess.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    questionPictures.classList.add('hidden');
    questionArtists.classList.add('hidden');
    colorBullet();
    hiddenMain();
    saveResult.length = 0;
  })
  //up step
  const nextBtn = document.querySelector('.next_btn');
  nextBtn.addEventListener('click', ()=>{
    ind +=1
    showInfoPicture()
    checkChecked()
    if(result < 12){
      fillingAuthor()
    }
    else{
      fillingPicture()
    }
  })

  // если ответ то next window
  const bullets = document.querySelectorAll('.bullet')
  function colorBullet(){
    bullets.forEach(item => item.style.backgroundColor = 'var(--secondary-color)')
  }
  
  const showNextQuestion = (e) => {
    if(e.target.style.backgroundImage == imageQuestions[ans].style.backgroundImage){
      right = 1;
      passIcon.style.backgroundImage = 'url(assets/svg/righty_answer.svg)';
      bullets[10 + ind].style.backgroundColor ='var(--tertiary-color)';
    } else {right = 0; 
    bullets[10 + ind].style.backgroundColor = 'red';}
    resultsShowWindow()
  }
  const showNextQuestionArtists = (e) => {
    if(e.target.textContent == number.author){
      right = 1;
      bullets[ind].style.backgroundColor ='var(--tertiary-color)';
      passIcon.style.backgroundImage = 'url(assets/svg/righty_answer.svg)';
    } else {right = 0; 
    bullets[ind].style.backgroundColor = 'red';}
    resultsShowWindow()
  }

  function resultsShowWindow(){
    if (right == 1) {
      passIcon.style.backgroundImage = 'url(assets/svg/righty_answer.svg)';
      audio2.play();
    }
    else {
      right = 0;
      passIcon.style.backgroundImage = 'url(assets/svg/wrong_answer.svg)';
      audio3.play();
    }
    saveResult.push(right);
    if(saveResult.length < 10){
      showInfoPicture()
    } else {
      arrayAllResults.splice(result, 1, saveResult)///lockal
      let sumRound = saveResult.reduce((a, b) => a + b, 0)
      showFinalResults(sumRound)
      audio4.play()
      setBg();
    }
    deleteInterval()
  }
  
  imageQuestions.forEach(button =>{
    button.addEventListener('click', showNextQuestion)
  })
  currentAuthors.forEach(button =>{
    button.addEventListener('click', showNextQuestionArtists)
  })

const picture = document.querySelectorAll('.picture');
const currentAnswer = document.querySelectorAll('.current_answer');
const settingsCategory = document.querySelector('.settings');
const mainSettings = document.querySelector('.main_settings');
const settingsTitle = document.querySelector('.settings_title');

mainSettings.addEventListener('click', ()=>{
  hideSettings()
})

settingsTitle.addEventListener('click', ()=>{
  hideSettings()
})
function hideSettings(){
  hiddenMain()
  settingsCategory.classList.toggle('hidden');
}
//////////////////////// volume


const volumeUp = document.querySelector('.volume_up');
const volumeLower = document.querySelector('.volume_low');
const inputVolume = document.querySelector('.input_volume');
const audio = document.querySelector('.audio1');
const audio2 = document.querySelector('.audio2');
const audio3 = document.querySelector('.audio3');
const audio4 = document.querySelector('.audio4');
let volumeValue;
inputVolume.style.background = `linear-gradient(to right, var(--tertiary-color) 0%, var(--tertiary-color) ${inputVolume.value}%, #fff ${inputVolume.value}%, #fff 100%)`
inputVolume.addEventListener('input', ()=>{
  changeVolume()
  volumeValue = inputVolume.value;
  audio.play()
})
volumeUp.addEventListener('click', ()=>{
  if(volumeValue !== 'undefined') {
    inputVolume.value = volumeValue 
   }else inputVolume.value = 20;
  changeVolume()
})
volumeLower.addEventListener('click', ()=>{
  inputVolume.value = 0;
  changeVolume()
})
function changeVolume(){
  audio.volume = inputVolume.value / 100;;
  audio2.volume = inputVolume.value / 100;;
  audio3.volume = inputVolume.value / 100;;
  audio4.volume = inputVolume.value / 100;;
  inputVolume.style.background = `linear-gradient(to right, var(--tertiary-color) 0%, var(--tertiary-color) ${inputVolume.value}%, #fff ${inputVolume.value}%, #fff 100%)`
}
let buttons = document.querySelectorAll('button') 
buttons.forEach(item => item.addEventListener('click', () => {
  audio.play()
  changeVolume()
}))


//time progress
let timeCheckbox = document.querySelector("input[type=checkbox]")
let time = document.querySelector('.time_count_value')
let progress = document.querySelectorAll('progress')
let timeQuestion = document.querySelectorAll('.time_question')
let btnSave = document.querySelector('.btn_save')
let sec;
let isChecked = 0; 
btnSave.addEventListener('click', ()=>{
  SaveSettings()
  hideSettings()
})
function SaveSettings(){
  if(timeCheckbox.checked){
      timeQuestion.forEach(item => item.classList.remove('hidden'))
      progress.forEach(item => item.classList.remove('hidden'))        
      progress.forEach(item => item.max = time.value);
      sec = time.value;
      isChecked = 1;
  } else{
      timeQuestion.forEach(item => item.classList.add('hidden'))
      progress.forEach(item => item.classList.add('hidden'))
      sec = 0;
      timeQuestion.forEach(item => item.innerHTML = 0);
      isChecked = 0;
  }
  
 }
 function isCheckedCheckbox(){
   if(isChecked == 1){
    timeCheckbox.checked = true;
  }
  SaveSettings()
 }
      
//timer
function deleteInterval(){
  clearInterval(interval)
}
function startTimeInterval(){
  clearInterval(interval)
  interval = setInterval(secondsTimer, 1000);
}
function checkChecked(){
  if(isChecked){
    sec = time.value; 
    timeQuestion.forEach(item => item.innerHTML = time.value);
    progress.forEach(item => item.value = 0);
    startTimeInterval()
  }
}
function secondsTimer () {
    sec --;
    progress.forEach(item => item.value += 1);
    if (sec > 0)  timeQuestion.forEach(item => item.innerHTML = sec);
    else {   
      timeQuestion.forEach(item => item.innerHTML = sec);
      right = 0;
      resultsShowWindow()   
    }
  }

  const imageCategory = document.querySelectorAll('.image_category');
const categoryWrapper = document.querySelectorAll('.categories_wrapper')

function setBg(){
  let currentArr;
  for(let i = 0 ; i < 24; i++) {
    if (i == 0) {
      currentArr = 0;  
      let image = new Image();
      image.src = `assets/image/0.jpg`;
      image.onload = () => {
        imageCategory[i].style.backgroundImage = `url(assets/image/0.jpg)`}
        if( Array.isArray( arrayAllResults[i] )) {
          imageCategory[i].style.filter = "grayscale(0)"
          showScore(i)
          score(i)
        }
    } else {
      currentArr += 1
      let image = new Image();
      image.src = `assets/image/${i}0.jpg`;
      image.onload = () => {
        imageCategory[i].style.backgroundImage = `url(assets/image/${i}0.jpg)`}
        if( Array.isArray( arrayAllResults[i] )) {
          imageCategory[i].style.filter = "grayscale(0)"
          showScore(i)
          score(i)
        }
    } 
  }
}
const blockTitleCategory = document.querySelectorAll('.title_block_category')
function showScore(i){
  let element = document.querySelectorAll('.title_block_category')[i].querySelectorAll('h3')[1];
  element.innerHTML = `${arrayAllResults[i].reduce((a, b) => a + b, 0)} / 10 `;
}

function score(i){
  let el = document.querySelectorAll('.score')[i];
  el.innerHTML = 'Результат';
  el.classList.add('result_img');
}

let resultImg = document.querySelectorAll('.score')

resultImg.forEach(item => item.addEventListener('click', ()=>{
  result = item.closest('.block_category').dataset.num;
  showNewWindowResults()
}))

const wrapper = document.querySelector('.wrapper')
function showNewWindowResults(){
  // console.log(CurrentTarget)

  (result < 12)? artistCategory.classList.toggle('hidden') : pictureCategory.classList.toggle('hidden');
  let scoreWrapper = document.createElement("div")
   let scoreResult = document.createElement("div")
   wrapper.prepend(scoreWrapper)
   scoreWrapper.classList.add('score_wrapper')  
   scoreWrapper.prepend(scoreResult)
   scoreResult.classList.add('results_wrapper')
   let category = document.createElement("button")
   let scoreBtn = document.createElement("button")
   scoreBtn.innerHTML = `Назад`;
   category.innerHTML = `Домой`;
   category.classList.add('home_button');
   category.classList.add('back_button_pictures');
   scoreBtn.classList.add('category_button');
    category.classList.add('text_regular');
    scoreBtn.classList.add('text_regular');
    for(let i = 0; i < 10; i++){
      let titleCategory;
      titleCategory = `Часть ${result % 12 + 1}`;
      let scoreResultBlock = document.createElement("div")
      scoreResult.append(scoreResultBlock);
      scoreResultBlock.classList.add('score_result_block')
      scoreResultBlock.innerHTML = 
      `<h3 class="title_category text_wither2">${titleCategory}</h3>
      <div class="image_score_category">`;
      let imageScoreCategory = document.querySelectorAll('.image_score_category')[i];
      let imag = new Image();
      imag.src = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${currentName(i).imageNum}.jpg`;
      imag.onload = ()  =>{   
        imageScoreCategory.style.backgroundImage = `url(${imag.src})`;   
      }    
      if(arrayAllResults[result][i] == 1) {
        imageScoreCategory.style.filter = 'grayscale(0)'};
        imageScoreCategory.style.cursor = 'pointer';
        imageScoreCategory.addEventListener('click' , ()=>{
          // function showInfoPicture(){
            popupWindow.classList.toggle('hidden')
            overlay.classList.toggle('hidden')
            passIcon.classList.add('hidden')
            nameAuthor.textContent = currentName(i).author;
            namePicture.textContent = currentName(i).name;
            yearPicture.textContent = currentName(i).year;
            let img = new Image();
            img.src = `https://raw.githubusercontent.com/Nick1091/image-data/master/img/${currentName(i).imageNum}.jpg`;
            img.onload = ()  =>{   
              imageCurrent.style.backgroundImage = `url(${img.src})`;}
              nextBtn.classList.add('hidden');
              let buttonExit = document.createElement('button');
              buttonExit.classList.add('exit_btn')
              buttonExit.classList.add('text_regular2'); 
              buttonExit.innerHTML = 'назад'; 
              popup.append(buttonExit) 
              buttonExit.addEventListener('click', ()=>{
                nextBtn.classList.remove('hidden');
                popupWindow.classList.toggle('hidden')
                overlay.classList.toggle('hidden')
                passIcon.classList.remove('hidden')
                popup.removeChild(buttonExit)
                // passIcon.classList.add('hidden')
              })
            })
          
        }
        let scoreResultBtn = document.createElement("div")
        scoreWrapper.prepend(scoreResultBtn);
        scoreResultBtn.style.cssText=`display: flex;
        gap: 20px;
        width: 100%;
        text-align: center;
        justify-content: flex-end;
      `;
      category.style.display = 'inline-block'
      scoreBtn.style.display = 'inline-block'
      scoreResultBtn.prepend(scoreBtn);
      scoreResultBtn.prepend(category);
    scoreBtn.addEventListener('click', ()=>{
      wrapper.removeChild(wrapper.firstChild)
      if (result < 12){
        artistCategory.classList.toggle('hidden');
      }
      else {pictureCategory.classList.toggle('hidden');
      }
    })
    category.addEventListener('click', ()=>{
      wrapper.removeChild(wrapper.firstChild)
      mainPage.classList.toggle('hidden');
    })
}



function setLocalStorage() {
  localStorage.setItem('answers', JSON.stringify(arrayAllResults));
  localStorage.setItem('isChecked', isChecked);
  localStorage.setItem('volume', inputVolume.value);  
  localStorage.setItem('time', time.value);  
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
  if(localStorage.getItem('answers')) {
    let ar = localStorage.getItem('answers');
    arrayAllResults = JSON.parse(ar);
  }
  if(localStorage.getItem('isChecked')) {
    isChecked = +(localStorage.getItem('isChecked'));
    // console.log(isChecked)
    isCheckedCheckbox()
  }
  if(localStorage.getItem('volume')) {
    inputVolume.value = Number(localStorage.getItem('volume'));
  }
  if(localStorage.getItem('time')) {
    time.value = Number(localStorage.getItem('time'));
  }
}
window.addEventListener('load', getLocalStorage); 
getLocalStorage() 