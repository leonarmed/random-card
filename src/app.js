/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

window.onload = function() {
  //write your code here
  let pinta = random(3);
  let card = random(12);
  let symbol = ["♦", "♥", "♠", "♣"];
  console.log("symbol", symbol[pinta], "pinta", pinta, "card", card);

  const up = document.querySelector(".up");
  const number = document.querySelector(".number");
  const down = document.querySelector(".down");

  if (pinta === 0 || pinta === 1) {
    up.className += " red";
    down.className += " red";
  }

  switch (card) {
    case 0:
      card = "A";
      break;
    case 11:
      card = "Q";
      break;
    case 12:
      card = "K";
      break;
  }

  up.textContent = symbol[pinta];
  number.textContent = card;
  down.textContent = symbol[pinta];
};
