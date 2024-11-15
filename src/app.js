/* eslint-disable */
import "./index.html";

window.onload = function() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My turtle",
    "The police",
    "A bad friend",
    "A crocodile",
    "The teacher",
    "A burglar"
  ];
  let action = [
    "painted over",
    "gifted",
    "stole",
    "crushed",
    "tore",
    "burned",
    "sold",
    "hid"
  ];
  let what = [
    "my homework",
    "my phone",
    "my car",
    "my computer",
    "my ID",
    "my wallet",
    "my watch",
    "my credit card",
    "my passport",
    "my keys"
  ];
  let when = [
    "before class",
    "while I was sleeping",
    "while I was exercising",
    "during lunch time",
    "while I was praying",
    "before the flight",
    "before my birthday party",
    "while I was on vacation",
    "after I got fired"
  ];
  let fullSet = [who, action, what, when];
  let imgPaths = [
    "src/assets/img/ElmoFire.jpg",
    "src/assets/img/Gopher.png",
    "src/assets/img/rigo-baby.jpg",
    "src/assets/img/SideEyePuppet.png",
    "src/assets/img/SusDog.jpg"
  ];
  //Picks a random element from an array of any length
  function randomPick(arr) {
    let size = arr.length;
    let random = Math.floor(Math.random() * size);
    return arr[random];
  }
  //Loops through an array containing other arrays, calls randomPick to select an element from each, and stores the result.
  function buildExcuse(arr) {
    let excuse = [];
    for (let ele of arr) {
      let randomPiece = randomPick(ele);
      excuse.push(randomPiece);
    }
    return excuse.join(" ");
  }
  //Updates the excuse
  let excuse = buildExcuse(fullSet);
  document.getElementById("excuse").innerHTML = excuse;
  //Extra feature: Picks a random image to display with the excuse
  let imgPath = randomPick(imgPaths);
  document.getElementById("random-img").src = imgPath;
};
