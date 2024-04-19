import "../scss/style.scss";
import { Gridbox } from "./models/Gridbox";

const board = document.getElementById("board");

let count: number = 0;

let list: Gridbox[] = [];

for (let i = 1; i < 10; i++) {
  const gridBox = document.createElement("section");
  let newGridBox = new Gridbox(i, gridBox, false);
  list.push(newGridBox);

  gridBox.classList.add("gridBox");
  board?.appendChild(gridBox);

  gridBox.innerHTML = newGridBox.id.toString();

  gridBox.addEventListener("click", () => {
    if (newGridBox.filled) {
      return;
    }

    gridBox.innerHTML = "You clicked me";

    newGridBox.filled = true;

    count++;
    console.log(count);

    if (count % 2 == 0) {
      console.log("hello");
    }
  });
}
