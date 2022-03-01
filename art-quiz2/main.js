(()=>{"use strict";var t={965:(t,n,e)=>{t.exports=e.p+"1934d7000e8ac1426de3.json"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{const t=function(){function t(t,n,e,o){void 0===n&&(n="div"),void 0===e&&(e=""),void 0===o&&(o="");var r=document.createElement(n);r.className=e,r.textContent=o,t&&t.append(r),this.node=r}return t.prototype.destroy=function(){this.node.remove()},t}();var n,o=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=function(t){function n(n,e,o,r){void 0===e&&(e="div"),void 0===r&&(r="");var i=t.call(this,n,e,o.default,r)||this;return i.styles=o,i}return o(n,t),n.prototype.quickIn=function(){this.node.classList.remove(this.styles.hidden)},n.prototype.quickOut=function(){this.node.classList.add(this.styles.hidden)},n.prototype.animateIN=function(){var t=this;return new Promise((function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){t.node.classList.contains(t.styles.hidden)||n(null),t.node.classList.remove(t.styles.hidden),t.node.ontransitionend=function(e){e.target===t.node&&(t.node.ontransitionend=null,n(null))}}))}))}))},n.prototype.animateOut=function(){var t=this;return new Promise((function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){t.node.classList.contains(t.styles.hidden)&&n(null),t.node.classList.add(t.styles.hidden),t.node.ontransitionend=function(e){e.target===t.node&&(t.node.ontransitionend=null,n(null))}}))}))}))},n}(t),i=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),a={time:10,timeEnable:!1,volume:0,volumeEnable:!1},c=function(){function t(){}return t.prototype.loadFromStorage=function(){var t=localStorage.getItem("settings");if(function(t){return!!t}(t)){var n=JSON.parse(t);this.settings=n}else this.settings=a},t.prototype.getData=function(){return JSON.parse(JSON.stringify(this.settings))},t.prototype.setData=function(t){this.settings=t,this.saveTOStorage()},t.prototype.saveTOStorage=function(){localStorage.setItem("settings",JSON.stringify(this.settings))},t}(),s=function(n){function e(e,o){var r=n.call(this,e,"div",{default:"settings",hidden:"hide"})||this,i=o;new t(r.node,"button","button_main","назад").node.onclick=function(){r.onBack()};var a=new t(r.node,"div","time_block","Игра на время"),c=new t(a.node,"input");c.node.className="range",c.node.type="range",c.node.min=5..toString(),c.node.max=30..toString(),c.node.step=5..toString(),c.node.value=i.time.toString(),c.node.style.background="linear-gradient(to right, #ffcb0f 0%, #ffcb0f ".concat(4*(+c.node.value-5),"%, #ffffff ").concat(4*(+c.node.value-5),"%, #ffffff 100%)"),c.node.oninput=function(){c.node.style.background="linear-gradient(to right, #ffcb0f 0%, #ffcb0f ".concat(4*(+c.node.value-5),"%, #ffffff ").concat(4*(+c.node.value-5),"%, #ffffff 100%)"),i.time=c.node.valueAsNumber};var s=new t(a.node,"button","checkbox-group");s.node.innerHTML='<label for="time_game" class="label_checkbox"></label>';var u=new t(s.node,"input","time_game");u.node.id="time_game",u.node.type="checkbox",u.node.checked=i.timeEnable;var l=document.createElement("p");l.innerHTML="Вкл / Выкл",a.node.append(l),document.querySelectorAll(".label_checkbox")[0].style.left=u.node.checked?"27px":"3px",u.node.addEventListener("click",(function(){document.querySelectorAll(".label_checkbox")[0].style.left=u.node.checked?"27px":"3px",i.timeEnable=u.node.checked}));var d=new t(r.node,"div","volume_block","Громкость"),f=new t(d.node,"input");f.node.className="range_volume",f.node.type="range",f.node.min=(0).toString(),f.node.max=100..toString(),f.node.step=1..toString(),f.node.value=i.volume.toString(),f.node.style.background="linear-gradient(to right, #ffcb0f 0%, #ffcb0f ".concat(+f.node.value,"%, #ffffff ").concat(+f.node.value,"%, #ffffff 100%)"),i.volume=f.node.valueAsNumber,f.node.oninput=function(){f.node.style.background="linear-gradient(to right, #ffcb0f 0%, #ffcb0f ".concat(+f.node.value,"%, #ffffff ").concat(+f.node.value,"%, #ffffff 100%)"),i.volume=f.node.valueAsNumber};var p=new t(d.node,"button","checkbox-group");p.node.innerHTML='<label for="volume_game" class="label_checkbox"></label>';var h=new t(p.node,"input","time_game");h.node.id="volume_game",h.node.type="checkbox",h.node.checked=i.volumeEnable;var y=document.createElement("p");return y.innerHTML="Вкл / Выкл",d.node.append(y),document.querySelectorAll(".label_checkbox")[1].style.left=h.node.checked?"27px":"3px",h.node.addEventListener("click",(function(){document.querySelectorAll(".label_checkbox")[1].style.left=h.node.checked?"27px":"3px",i.volumeEnable=h.node.checked})),new t(r.node,"button","button_main","сохранить").node.onclick=function(){r.onSave(i)},r}return i(e,n),e}(r),u=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),l=function(n){function e(e){var o=n.call(this,e,"div",{default:"main_wrapper",hidden:"hide"})||this;o.quickOut();var r=new t(o.node,"div","main_bottom"),i=new t(r.node,"button","button"),a=new Image(24,24);a.src="./assets/svg/carbon_settings.svg",i.node.append(a),new t(o.node,"div","main_logo");var c=new t(o.node,"div","select_wrapper");return new t(c.node,"button","select_item","Картины").node.onclick=function(){return o.onGameSelect("pictures")},new t(c.node,"button","select_item","Художники").node.onclick=function(){return o.onGameSelect("artists")},i.node.onclick=function(){return o.onSettings()},o}return u(e,n),e}(r),d=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),f=function(n){function e(e,o){var r=n.call(this,e,"div",{default:"game_finish",hidden:"hide"})||this,i=new t(r.node,"div","block_button","");new t(i.node,"button","","следующий раунд").node.onclick=function(){r.onNext()},new t(i.node,"button","","на главную").node.onclick=function(){r.onHome()};var a=new t(r.node,"div","block_result","Поздравляем"),c=new Image(200,200);return c.src="./assets/svg/present.svg",a.node.append(c),new t(a.node,"div","result","").node.textContent="Ваш результат раунда: ".concat(o.filter((function(t){return!0===t})).length," / 10"),r}return d(e,n),e}(r),p=new(function(){function t(){this.baseUrl="./assets/audio/",this.cache=new Map,this.soundList=["correct_a","incorrect_a","final","press_btn"]}return t.prototype.preload=function(){var t=this;Promise.all(this.soundList.map((function(n){return t.preloadFile("".concat(t.baseUrl).concat(n,".mp3"))}))).then((function(n){t.soundList.forEach((function(e,o){t.cache.set(e,n[o])}))}))},t.prototype.preloadFile=function(t){return fetch(t).then((function(t){return t.blob()}))},t.prototype.correctAudio=function(t){this.playSound("correct_a",t)},t.prototype.fail=function(t){this.playSound("incorrect_a",t)},t.prototype.playSound=function(t,n){var e=this.cache.get(t);if(e){var o=new Audio(URL.createObjectURL(e));n.volumeEnable&&(o.volume=n.volume/400,o.play())}else o=new Audio("".concat(this.baseUrl).concat(t,".mp3")),n.volumeEnable&&(o.volume=n.volume/400,o.play())},t}()),h=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return h(n,t),n.prototype.start=function(t){var n=this;this.initialTime=t,this.timer&&this.stop();var e=t,o=function(t){n.node.textContent="".concat(t<=9?"0".concat(t):t," / ").concat(n.initialTime)};o(t),this.timer=window.setInterval((function(){e--,o(e),e<=0&&n.onTimeout()}),1e3)},n.prototype.stop=function(){window.clearInterval(this.timer)},n}(t),m=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),g=function(n){function e(e,o,r,i){var a=n.call(this,e,"div",{default:"game_field",hidden:"hide"})||this;a.GameQuestionConstructor=o,a.gameOptions=r;var c=new t(a.node,"div","btns");return new t(c.node,"button","btn","назад").node.onclick=function(){a.onBack()},new t(c.node,"button","btn","на главную").node.onclick=function(){a.onHome()},a.timer=new y(a.node),a.progressQuestion=new t(a.node,"div","","Вопрос"),a.answersIndicator=new t(a.node,"div","dots",""),i.map((function(){return new t(a.answersIndicator.node,"p","dot")})),a.results=[],a.questionCycle(r.gameName,i,0,(function(){"artists"===r.gameName&&(r.dataModel.artists[a.gameOptions.categoryIndex]=a.results),"pictures"===r.gameName&&(r.dataModel.pictures[a.gameOptions.categoryIndex]=a.results),a.onFinish(a.results,r.dataModel)})),a}return m(e,n),e.prototype.questionCycle=function(t,n,e,o){var r=this;if(e>=n.length)o();else{var i;this.results.map((function(t,n){return document.querySelectorAll(".dot")[n].style.backgroundColor=t?"#ffcb0f":"#ae0101"})),this.progressQuestion.node.textContent="Вопрос ".concat(e+1," / ").concat(n.length),this.gameOptions.settings.timeEnable&&(this.timer.start(this.gameOptions.settings.time),this.timer.onTimeout=function(){i.destroy(),r.results.push(!1),p.fail(r.gameOptions.settings),r.questionCycle(t,n,e+1,o)});var a=new this.GameQuestionConstructor(this.node,n[e]);a.animateIN(),i=a,a.onAnswer=function(i){a.animateOut().then((function(){a.destroy(),i===n[e].correctAnswerIndex?p.correctAudio(r.gameOptions.settings):p.fail(r.gameOptions.settings),r.results.push(i===n[e].correctAnswerIndex),r.questionCycle(t,n,e+1,o)}))}}},e.prototype.destroy=function(){this.timer.stop(),n.prototype.destroy.call(this)},e}(r),v=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(n){function e(e,o,r,i,a){var c=n.call(this,e,"div","category")||this,s=a[r].length>0&&a[r].filter((function(t){return t})).length,u=new t(c.node,"div","category_round","Раунд ".concat((r+1).toString()));new t(u.node,"span","","".concat(s?"".concat(s,"/10"):""));var l=new t(c.node,"div","category_img");l.node.style.backgroundImage="url('".concat(o.picture,"')"),l.node.style.filter=s?"grayscale(0)":"grayscale(1)",l.node.onclick=function(){i.onSelect()};var d=new t(c.node,"div","category_score","score");return d.node.style.display=s?"category_score":"none",d.node.onclick=function(){i.onScore()},c}return v(e,n),e}(t),b=function(n){function e(e,o,r,i){var a=n.call(this,e,"div",{default:"categories_page",hidden:"hide"})||this;a.quickOut();var c=new t(a.node,"div","head_panel");new t(c.node,"button","button_back","назад").node.onclick=function(){a.onBack()},new t(c.node,"h1","head_name","".concat("pictures"===o?"Картины":"Художники"));var s=new t(a.node,"div","categories"),u="pictures"===o?i.pictures:i.artists;return r.map((function(t,n){return new w(s.node,t,n,{onSelect:function(){a.onSelect(n)},onScore:function(){a.onScore(+t.name,u[n])}},u)})),a}return v(e,n),e}(r),_=e(965),O=function(){function t(){this.questionsCategory=10}return t.prototype.build=function(){return t=this,n=void 0,o=function(){var t;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(n){switch(n.label){case 0:return t=this,[4,this.loadImagesData(_)];case 1:return t.data=n.sent(),[2,this]}}))},new((e=void 0)||(e=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}));var t,n,e,o},t.prototype.getCategoriesData=function(t){var n=this.questionsCategory,e=Math.floor(this.data.length/n/2),o=[];if("artists"===t)for(var r=0;r<e;r++){var i="./assets/image/".concat(10*r,".jpg"),a={name:r.toString(),picture:i,score:new Array(e).fill(!1)};o.push(a)}else for(r=12;r<e+12;r++)i="./assets/image/".concat(10*r,".jpg"),a={name:r.toString(),picture:i,score:new Array(e).fill(!1)},o.push(a);return o},t.prototype.getPicturesQuestions=function(t){for(var n=this.questionsCategory,e=[],o=(t+=12)*n;o<(t+1)*n;o++){for(var r=[],i=Math.floor(4*Math.random()),a="https://raw.githubusercontent.com/Nick1091/image-data/master/img/".concat(this.data[o].imageNum,".jpg"),c=0;c<4;c++)if(i===c)r.push(a);else{var s=this.data[Math.floor(Math.random()*this.data.length)].imageNum;r.push("https://raw.githubusercontent.com/Nick1091/image-data/master/img/".concat(s,".jpg"))}var u={artistsName:this.data[o].author,answers:r,correctAnswerIndex:i};e.push(u)}return e},t.prototype.getArtistsQuestions=function(t){for(var n=this.questionsCategory,e=[],o=t*n;o<(t+1)*n;o++){for(var r=[],i=Math.floor(4*Math.random()),a=this.data[o].author,c=0;c<4;c++)if(i===c)r.push(a);else{var s=this.data[Math.floor(Math.random()*this.data.length)].author;r.push(s)}var u={artistsUrl:"https://raw.githubusercontent.com/Nick1091/image-data/master/img/".concat(this.data[o].imageNum,".jpg"),answers:r,correctAnswerIndex:i};e.push(u)}return e},t.prototype.loadImagesData=function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.map((function(t){return{author:t.author,name:t.name,year:Number(t.year),imageNum:Number(t.imageNum)}}))}))},t}(),k=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),S=function(n){function e(e,o){var r=n.call(this,e,"div",{default:"wrapper-art",hidden:"hide"})||this;r.quickOut();var i=new t(r.node,"div","question_artists","Кто автор этой картины?"),a=new t(r.node,"div","answers_artists"),c=new Image(200,200);return c.src=o.artistsUrl,i.node.append(c),o.answers.map((function(n,e){new t(a.node,"button","",n.toString()).node.onclick=function(){r.onAnswer(e)}})),r}return k(e,n),e}(r),x=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),N=function(n){function e(e,o){var r=n.call(this,e,"div",{default:"wrapper",hidden:"hide"})||this;r.quickOut(),new t(r.node,"div","","Какую из картин написал ".concat(o.artistsName," ?"));var i=new t(r.node,"div","block_pictures");return o.answers.map((function(n,e){var o=new t(i.node,"button",""),a=new Image(200,200);a.src=n,o.node.append(a),o.node.onclick=function(){r.onAnswer(e)}})),r}return x(e,n),e}(r),C={artists:Array(12).fill([]),pictures:Array(12).fill([])},j=function(){function t(){}return t.prototype.loadFromStorage=function(){var t=localStorage.getItem("dataModel");if(function(t){return!!t}(t)){var n=JSON.parse(t);this.dataModel=n}else this.dataModel=C},t.prototype.getData=function(){return JSON.parse(JSON.stringify(this.dataModel))},t.prototype.setData=function(t){this.dataModel=t,this.saveTOStorage()},t.prototype.saveTOStorage=function(){localStorage.setItem("dataModel",JSON.stringify(this.dataModel))},t}(),A=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),M=function(n){function e(e,o,r){var i=n.call(this,e,"div","score_img")||this;new t(i.node,"div","","Автор: ".concat(o.author)),new t(i.node,"div","","Год: ".concat(o.year)),new t(i.node,"div","","Название ".concat(o.name));var a="https://raw.githubusercontent.com/Nick1091/image-data/master/img/".concat(o.imageNum,".jpg"),c=new Image(200,200);return c.src=a,i.node.append(c),c.style.filter=r?"grayscale(0)":"grayscale(1)",i}return A(e,n),e}(t),I=function(n){function e(e,o,r,i){var a=n.call(this,e,"div",{default:"score_page",hidden:"hide"})||this;a.quickOut();var c=new t(a.node,"div","score_panel");new t(c.node,"button","score_back","назад").node.onclick=function(){a.onBack()};var s=new t(a.node,"div","score_container"),u=i.slice(10*o,10*o+10);return r.map((function(t,n){return new M(s.node,u[n],t)})),a}return A(e,n),e}(r),E=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();new(function(n){function e(e){var o=n.call(this,e,"div","global_wrapper")||this;o.main=new t(o.node,"div","global_main"),o.footer=new t(o.node,"div","global_footer"),new t(o.footer.node,"div","","© 2021");var r=document.createElement("a");r.href="https://github.com/Nick1091",r.target="_blank",r.textContent="NIKOLAI KUKHARCHUK",o.footer.node.append(r);var i=document.createElement("a");i.href="https://rs.school/js/",i.target="_blank",i.className="footer_rs",o.footer.node.append(i);var a=new t(o.main.node,"div","loading...");return p.preload(),o.settingsModel=new c,o.settingsModel.loadFromStorage(),o.dataModel=new j,o.dataModel.loadFromStorage(),o.model=new O,o.model.build().then((function(){a.destroy(),o.mainCycle()})),o}return E(e,n),e.prototype.gameCycle=function(t,n){var e,o=this,r=[];if("artists"===t)r=this.model.getArtistsQuestions(n);else{if("pictures"!==t)throw new Error("error");r=this.model.getPicturesQuestions(n)}"artists"===t?e=new g(this.main.node,S,{gameName:t,categoryIndex:n,settings:this.settingsModel.getData(),dataModel:this.dataModel.getData()},r):"pictures"===t&&(e=new g(this.main.node,N,{gameName:t,categoryIndex:n,settings:this.settingsModel.getData(),dataModel:this.dataModel.getData()},r)),e.animateIN(),e.onHome=function(){e.animateOut().then((function(){e.destroy(),o.mainCycle()}))},e.onBack=function(){e.animateOut().then((function(){e.destroy(),o.categoryCycle(t,o.dataModel.getData())}))},e.onFinish=function(r,i){e.animateOut().then((function(){o.dataModel.setData(i),e.destroy();var a=new f(o.main.node,r);a.animateIN(),a.onHome=function(){a.animateOut().then((function(){a.destroy(),o.mainCycle()}))},a.onNext=function(){a.animateOut().then((function(){a.destroy(),a.destroy(),o.gameCycle(t,n+1)}))}}))}},e.prototype.scoreCycle=function(t,n,e){var o=this,r=new I(this.main.node,t,n,this.model.data);r.animateIN(),r.onBack=function(){r.animateOut().then((function(){r.destroy(),o.categoryCycle(e,o.dataModel.getData())}))}},e.prototype.categoryCycle=function(t,n){var e=this,o=new b(this.main.node,t,this.model.getCategoriesData(t),n);o.animateIN(),o.onBack=function(){o.animateOut().then((function(){o.destroy(),e.mainCycle()}))},o.onSelect=function(n){o.animateOut().then((function(){o.destroy(),e.gameCycle(t,n)}))},o.onScore=function(n,r){o.animateOut().then((function(){o.destroy(),e.scoreCycle(n,r,t)}))}},e.prototype.mainCycle=function(){var t=this,n=new l(this.main.node);n.animateIN(),n.onGameSelect=function(e){n.animateOut().then((function(){n.destroy(),t.categoryCycle(e,t.dataModel.getData())}))},n.onSettings=function(){n.animateOut().then((function(){n.destroy()})).then((function(){var n=new s(t.main.node,t.settingsModel.getData());n.animateIN(),n.onBack=function(){n.animateOut().then((function(){n.destroy(),t.mainCycle()}))},n.onSave=function(e){n.animateOut().then((function(){n.destroy(),t.settingsModel.setData(e),t.mainCycle()}))}}))}},e}(t))(document.body)})()})();