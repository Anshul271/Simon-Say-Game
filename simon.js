let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["purple", "green", "red", "yellow"];
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelup();
  }
});
function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let rand = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  btnflash(rand);
}
function btnpress() {
  console.log(this);
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkans(userseq.length-1);
}
function checkans(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      levelup();
    }
  } else {
    h2.innerHTML = `GAME OVER ! Your score was ${level} Please press any key to start`;
    reset();
  }
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
