/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//console.log("Hello Rigo from the console!");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let what = ["comió", "se molestó", "aplastó", "rompió"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];
  document.querySelector("#excuse").innerHTML = `${
    who[getRandomInt(who.length)]
  } 
    ${what[getRandomInt(what.length)]} 
    ${when[getRandomInt(when.length)]}`;
};
