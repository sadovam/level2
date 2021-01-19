
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
  if (elm && !elm.className.endsWith("hidden")) elm.className += " hidden";
}

// task 2
document.getElementById("task2__btn").onclick = task2CssJsToggleSquare;

function task2CssJsToggleSquare() {
  let elm = document.getElementById("task2-square1");
  if (elm) toggleElement(elm);
}

// Toggle element
function toggleElement(elm) {
  let pos = elm.className.search(" hidden");
  pos !== -1 ? elm.className = elm.className.replace(" hidden", "") : elm.className += " hidden";
}

// task 3
document.getElementById("task3__btn").onclick = task3CssJsToggleSquares;

function task3CssJsToggleSquares() {
  let elms = document.getElementsByClassName("task3-square");
  for (let i = 0; i < elms.length; i++) toggleElement(elms[i]);
}

// task 4
document.getElementById("task4__btn").onclick = task4CssJsToggleElement;

function task4CssJsToggleElement() {
  let sel = document.getElementById("task4__input").value;
  if(!sel) return;
  let elms = document.querySelectorAll(sel);
  for (let i = 0; i < elms.length; i++) toggleElement(elms[i]);
}

// task 5
document.getElementById("task5__square").addEventListener("click", task5Alert);

function task5Alert() {
  alert("Привет!");
  document.getElementById("task5__square").removeEventListener("click", task5Alert);
  document.getElementById("task5__square").addEventListener("click", () => task5Hide(this));
}

function task5Hide(elm) {
  elm.style.display = "none";
}

// task 6 
document.getElementById("task6__btn").addEventListener("mouseover", task6ToggleSquare);
document.getElementById("task6__btn").addEventListener("mouseout", task6ToggleSquare);

function task6ToggleSquare() {
  toggleElement(document.getElementById("task6__square"));
}

// task 7
document.getElementById("task7__input").addEventListener("focus", () => elementOnOff(document.getElementById("task7__rect"), true));
document.getElementById("task7__input").addEventListener("keydown", () => elementOnOff(document.getElementById("task7__rect"), false));

// Show / hide element
function elementOnOff(elm, isOn) {
  let pos = elm.className.search(" hidden");
  if(isOn && pos !== -1) {
    elm.className = elm.className.replace(" hidden", "");
  } else if(!isOn && pos === -1) {
    elm.className += " hidden";
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
document.onmousemove = (e) => task10SetCoordinates(e, document.getElementById("task10__text"));

function task10SetCoordinates(e, elm) {
  elm.innerHTML = `Х: ${e.clientX}, У: ${e.clientY}`;
}

// task 11
document.getElementById("task11__text").innerHTML = "Language: " + navigator.language;

