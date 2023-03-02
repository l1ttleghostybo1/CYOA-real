let title = document.querySelector(".title");
let name1 = document.querySelector(".name1");
let name2 = document.querySelector(".name2");
let name3 = document.querySelector(".name3");
let name4 = document.querySelector(".name4");
let name5 = document.querySelector(".name5");
let name6 = document.querySelector(".name6");

let claymore = document.querySelector(".claymore");

let beidou = document.querySelector(".beidou");
let beidoubutton = document.querySelector(".beidoubutton");

let nilou = document.querySelector(".nilou");
let niloubutton = document.querySelector(".niloubutton");

let xiao = document.querySelector(".xiao");
let xiaobutton = document.querySelector(".xiaobutton");

let itto = document.querySelector(".itto");
let ittobutton = document.querySelector(".ittobutton");

let tighnari = document.querySelector(".tighnari");
let tighnaributton = document.querySelector(".tighnaributton");

let xinyan = document.querySelector(".xinyan");
let xinyanbutton = document.querySelector(".xinyanbutton");


beidoubutton.onclick = function() {
  title.innerHTML = "You chose Beidou. Now choose a weapon";
  name1.style.display = "none";
  nilou.style.display = "none";
  xiao.style.display = "none";
  itto.style.display = "none";
  tighnari.style.display = "none";
  xinyan.style.display = "none";

  claymore.style.display = "block";
};

niloubutton.onclick = function() {
  title.innerHTML = "You chose Nilou. Now choose a weapon";
  name2.style.display = "none";
  beidou.style.display = "none";
  xiao.style.display = "none";
  itto.style.display = "none";
  tighnari.style.display = "none";
  xinyan.style.display = "none";

};

xiaobutton.onclick = function() {
  title.innerHTML = "You chose Xiao. Now choose a weapon";
  name3.style.display = "none";
  beidou.style.display = "none";
  nilou.style.display = "none";
  itto.style.display = "none";
  tighnari.style.display = "none";
  xinyan.style.display = "none";

};

ittobutton.onclick = function() {
  title.innerHTML = "You chose Itto. Now choose a weapon";
  name4.style.display = "none";
  beidou.style.display = "none";
  xiao.style.display = "none";
  nilou.style.display = "none";
  tighnari.style.display = "none";
  xinyan.style.display = "none";

};

tighnaributton.onclick = function() {
  title.innerHTML = "You chose Tighnari. Now choose a weapon";
  name5.style.display = "none";
  beidou.style.display = "none";
  xiao.style.display = "none";
  nilou.style.display = "none";
  itto.style.display = "none";
  xinyan.style.display = "none";

};

xinyanbutton.onclick = function() {
  title.innerHTML = "You chose Xinyan. Now choose a weapon";
  name6.style.display = "none";
  beidou.style.display = "none";
  xiao.style.display = "none";
  nilou.style.display = "none";
  tighnari.style.display = "none";
  itto.style.display = "none";

};