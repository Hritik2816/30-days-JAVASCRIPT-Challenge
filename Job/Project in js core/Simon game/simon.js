let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let btnColors = ["red", "yellow", "green", "blue"];

const h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function flashColor(color) {
  const btn = document.getElementById(color);
  if (btn) {
    btn.classList.add("flash");
    setTimeout(() => {
      btn.classList.remove("flash");
    }, 250);
  }
}

function userFlashColor(color) {
  const btn = document.getElementById(color);
  if (btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
      btn.classList.remove("userFlash");
    }, 250);
  }
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * btnColors.length);
  let randomColor = btnColors[randomIndex];
  gameSeq.push(randomColor);
  console.log(gameSeq);
  flashColor(randomColor);
}

function checkBtn(index) {
  if (userSeq[index] === gameSeq[index]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! <b> Your scores is ${level}</b> <br> Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "#212121";
    }, 150);
    resetgame();
  }
}

function btnPress() {
  // console.log(this)
  const btn = this;
  const color = btn.id;
  userFlashColor(color);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(color);

  checkBtn(userSeq.length - 1);
}

const allBtns = document.querySelectorAll(".box");
allBtns.forEach(btn => {
  btn.addEventListener("click", btnPress);
});

function resetgame() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
}