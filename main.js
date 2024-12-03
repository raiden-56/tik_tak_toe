let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    position1 = boxes[pattern[0]].innerText;
    position2 = boxes[pattern[1]].innerText;
    position3 = boxes[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        console.log("winner");
        showWinner(position1);
      }
    }
  }
};
