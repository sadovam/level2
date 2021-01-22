
// task 1
document.getElementById("task1__btn1").onclick = task1CssRemoveSquare;
document.getElementById("task1__btn2").onclick = task1JsRemoveSquare; 
document.getElementById("task1__btn3").onclick = task1CssJsRemoveSquare;

function task1CssRemoveSquare() {
  let elm = document.getElementById("task1-square1");
  if (elm) elm.style.display = "none";
}

function task1JsRemoveSquare() {
  let elm = document.getElementById("task1-square2");
  if (elm) elm.remove();
}

function task1CssJsRemoveSquare() {
  let elm = document.getElementById("task1-square3");
  if (elm && !elm.classList.contains("hidden")) elm.classList.add("hidden");
}

// task 2
document.getElementById("task2__btn").onclick = task2CssJsToggleSquare;

function task2CssJsToggleSquare() {
  let elm = document.getElementById("task2-square1");
  if (elm) elm.classList.toggle("hidden");
}

// task 3
document.getElementById("task3__btn").onclick = task3CssJsToggleSquares;

function task3CssJsToggleSquares() {
  let elms = document.getElementsByClassName("task3-square");
  for (let i = 0; i < elms.length; i++) elms[i].classList.toggle("hidden");
}

// task 4
document.getElementById("task4__btn").onclick = task4CssJsToggleElement;

function task4CssJsToggleElement() {
  let sel = document.getElementById("task4__input").value;
  if(!sel) return;
  let elms = document.querySelectorAll(sel);
  for (let i = 0; i < elms.length; i++) elms[i].classList.toggle("hidden");
}

// task 5
document.getElementById("task5__square").addEventListener("click", task5Alert);

function task5Alert() {
  alert("Привет!");
  document.getElementById("task5__square").removeEventListener("click", task5Alert);
  document.getElementById("task5__square").addEventListener("click", () => this.style.display = "none");
}

// task 6 
document.getElementById("task6__btn").addEventListener("mouseover", task6ToggleSquare);
document.getElementById("task6__btn").addEventListener("mouseout", task6ToggleSquare);

function task6ToggleSquare() {
  document.getElementById("task6__square").classList.toggle("hidden");
}

// task 7
document.getElementById("task7__input").addEventListener("focus", () => elementOnOff(document.getElementById("task7__rect"), true));
document.getElementById("task7__input").addEventListener("keydown", () => elementOnOff(document.getElementById("task7__rect"), false));

// Show / hide element
function elementOnOff(elm, turnOn) {
  let isOff = elm.classList.contains("hidden");
  if(turnOn && isOff) {
    elm.classList.remove("hidden");
  } else if(!turnOn && !isOff) {
    elm.classList.add("hidden");
  }
}

// task 8
document.getElementById("task8__btn").onclick = task8ShowImage;

function task8ShowImage() {
  let imgUrl = document.getElementById("task8__input").value;
  if(!imgUrl) return;
  let img = document.getElementById("task8__img");
  img.src = imgUrl;
  elementOnOff(img, true);
}

// task 9
document.getElementById("task9__btn").onclick = task9ShowImages;

function task9ShowImages() {
  let imgUrls = document.getElementById("task9__text").value;
  let imgHolder = document.getElementById("task9__images");
  imgHolder.className = "task9__images";
  if(!imgUrls) return;
  for(let url of imgUrls.split("\n")) {
    let img = document.createElement("img");
    img.src = url;
    img.className = "img";
    imgHolder.appendChild(img);
  }
  
}

// task 10
document.onmousemove = (e) => document.getElementById("task10__text").innerHTML = `Х: ${e.clientX}, У: ${e.clientY}`;


// task 11
document.getElementById("task11__text").innerHTML = "Language: " + navigator.language;

// task 12
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => task12GetUserCoordinates(position));
} else {
  document.getElementById("task12__text").innerHTML = "Местоположение<br> недоступно";
}

function task12GetUserCoordinates(position) {
  document.getElementById("task12__text").innerHTML = `Ш: ${position.coords.latitude} <br>Д: ${position.coords.longitude}`;
}

// task 13

window.addEventListener("unload", task13ValuesToStorages);
window.addEventListener("load", task13ValuesFromStorages);

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function task13ValuesToStorages() {
  localStorage.setItem('val13', document.getElementById("task13__input1").innerHTML);
  sessionStorage.setItem('val13', document.getElementById("task13__input2").innerHTML);
  setCookie("val13", document.getElementById("task13__input3").innerHTML, 30);
}

function task13ValuesFromStorages() {
  document.getElementById("task13__input1").innerHTML = localStorage.getItem('val13');
  document.getElementById("task13__input2").innerHTML = sessionStorage.getItem('val13');
  document.getElementById("task13__input3").innerHTML = getCookie("val13");
}

// task 14
let btn = document.createElement("button");
btn.innerHTML = "^";
btn.className = "button-up hidden";
btn.id = "button-up";
document.body.appendChild(btn);
btn.onclick = () => document.documentElement.scrollTo(0,0);

window.onscroll = () => {
  let bottomOffset = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
  
  btn = document.getElementById("button-up");
  if (bottomOffset < 25 && btn.classList.contains("hidden")) {
    btn.classList.remove("hidden");
  }

  if (bottomOffset > 100 && !btn.classList.contains("hidden")) {
    btn.classList.add("hidden");
  }

}

// task 15

document.getElementById("task15__big").onclick = () => alert("BIG");
document.getElementById("task15__small").onclick = (event) => {
  alert("small");
  event.stopPropagation();
}

// task 16
document.getElementById("task16__btn").onclick = function() {
  document.getElementById("block-screen").style.display="block";
  document.body.style.overflow="hidden"; 
}

document.getElementById("block-screen").onclick = function() {
  this.style.display="none";
  document.body.style.overflow = "auto";
}; 

//task 17 
document.getElementById("task17__form").onsubmit = function(event){event.preventDefault()};