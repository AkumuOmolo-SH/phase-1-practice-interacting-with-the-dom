"use strict";


function _toConsumableArray(collection) {
  return Array.isArray(collection) ? collection.slice() : Array.from(collection);
}

let playing = true;
let counter = document.getElementById("counter");


function timer() {
  return setInterval(() => {
    counter.innerText = parseInt(counter.innerText) + 1;
  }, 1000);
}

let interval = timer();


const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const likesList = document.querySelector(".likes");


minus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});


plus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});


heart.addEventListener("click", () => {
  const currentNum = parseInt(counter.innerText);
  const existingLike = document.querySelector(`[data-num="${currentNum}"]`);

  if (existingLike) {
    let likeCount = parseInt(existingLike.querySelector("span").innerText);
    existingLike.innerHTML = `${currentNum} has been liked <span>${likeCount + 1}</span> times`;
  } else {
    const newLi = document.createElement("li");
    newLi.setAttribute("data-num", currentNum);
    newLi.innerHTML = `${currentNum} has been liked <span>1</span> time`;
    likesList.appendChild(newLi);
  }
});


pause.addEventListener("click", function () {
  if (playing) {
    clearInterval(interval);
    this.innerText = "resume";
  } else {
    interval = timer();
    this.innerText = "pause";
  }

  playing = !playing;

 
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (btn.id !== "pause") {
      btn.disabled = !playing;
    }
  });
});


commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("comment-input");
  const commentText = input.value.trim();

  if (commentText !== "") {
    const commentDisplay = document.querySelector(".comments");
    const newP = document.createElement("p");
    newP.innerText = commentText;
    commentDisplay.appendChild(newP);
    input.value = ""; // Clear input after submit
  }
});
