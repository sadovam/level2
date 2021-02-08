
// ======= Part 1

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
document.getElementById("task7__input").addEventListener("focus", () => document.getElementById("task7__rect").classList.remove("hidden"));
document.getElementById("task7__input").addEventListener("keydown", () => document.getElementById("task7__rect").classList.add("hidden"));

// task 8
document.getElementById("task8__btn").onclick = task8ShowImage;

function task8ShowImage() {
  let imgUrl = document.getElementById("task8__input").value;
  if(!imgUrl) return;
  let img = document.getElementById("task8__img");
  img.src = imgUrl;
  img.classList.remove("hidden");
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

function getCookie(cname) {
  cname += "=";
  let re = new RegExp('(?<=' + cname + ').*?' + '(?=;|$)');
  return re.exec(decodeURIComponent(document.cookie));
}


function task13ValuesToStorages() {
  localStorage.setItem('val13', document.getElementById("task13__input1").innerHTML);
  sessionStorage.setItem('val13', document.getElementById("task13__input2").innerHTML);
  document.cookie = 'val13' + "=" + document.getElementById("task13__input3").innerHTML;
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

//task 18
document.getElementById("task18__card").ondrop = function(event){
  event.preventDefault();
  if (event.dataTransfer.items[0].kind === 'file') {
    let file = event.dataTransfer.items[0].getAsFile();
    document.getElementById("task18__text").innerHTML = file.name;
  }
};

document.getElementById("task18__card").ondragover = function(event) {
  event.preventDefault();
};


document.getElementById("task18__input").onchange = function() {
  document.getElementById("task18__text").innerHTML = this.files[0].name;
}

document.getElementById("task18__btn").onclick = () => document.getElementById("task18__input").click();

// ======= Part 2

let scsv = `10,212,Луганськ,401297
10,213,Вінниця,370707
10,214,Сімферополь,342054
10,215,Макіївка,341362
10,216,Херсон,286958

10,23,Одеса,1017699
# fdsf fdhdhd dghfdhdfhfd

10,24,Дніпро,990724
10,25,Донецьк,908456
10,26,Запоріжжя,731922
10,27,Львів,724314
10,28,Кривий Ріг,619278
10,226,Івано-Франківськ,237686
10,227,Кам'янське,231915
10,228,Кропивницький,225339
10,229,Тернопіль,223462
10,230,Кременчук,219022
# hfdhtd tdhtddrt rdghr
10,29,Миколаїв,480080
10,210,Маріуполь,436569
10,211,Севастополь,403893
10,217,Чернігів,286899

10,218,Полтава,286649
10,219,Черкаси,274762
10,20,Київ,2967360
10,22,Харків,1443207
10,220,Хмельницький,273713
10,221,Чернівці,267060
10,222,Житомир,264318
10,223,Суми,262119
#gdgdfgdfgfdg

10,224,Рівне,246003
10,225,Горлівка,242224

`

function parseCSV(strCSV) {


  let cities = strCSV.split('\n')
    .filter(s => s !== "" && !s.startsWith("#"))
    .map(sc => {
      let s = sc.split(",");
      return {x:s[0], y:s[1], tname:s[2], population:+s[3]}
    })
    .sort((a, b) => b.population - a.population)
    .slice(0,10)
    .reduce(function(a, c, number) {
      a[c.tname] = {population: c.population, rating: number};
      return a;
    }, {});

  return (str) => {
    for (let city of Object.keys(cities)) {
      let re = new RegExp(city + '(?=\\s|\\.|,|$)', "g");
      str = str.replace(re, `${city} (${cities[city].rating + 1} место в ТОП-10 самых крупных городов Украины, население ${cities[city].population} человек)`);
    }
    return str;
  }
}

funcReplace = parseCSV(scsv);
console.log(funcReplace("Львів bla bla bla wellcome Харків yes so big here Львів international source Харків was here Одеса"));
let s = `Львів, город с богатой историей, расположенный на западе Украины, был основан в XIII в.
и с тех пор много раз менял флаг: он принадлежал Польше, Австро-Венгрии и Советской империи. Во Львіве
организовано много городских праздников, таких как праздники кофе и шоколада, праздник сыра и вина, ежегодный день хлеба и другие. Харків является одним из
крупнейших городов Украины, а также областным центром Харківської области. `
console.log(funcReplace(s));