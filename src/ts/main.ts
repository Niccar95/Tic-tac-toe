import "../scss/style.scss";
import { Gridbox } from "./models/Gridbox";

const board = document.getElementById("board");
let count: number = 0;

for (let i = 1; i < 10; i++) {
  const gridBox = document.createElement("section");
  let GridBox = new Gridbox(i, gridBox, false);
  gridBox.classList.add("gridBox");
  board?.appendChild(gridBox);

  gridBox.innerHTML = GridBox.id.toString();

  gridBox.addEventListener("click", () => {
    gridBox.innerHTML = "You clicked me";
    count++;
    console.log(count);

    GridBox.filled = true;

    if (count % 2 == 0) {
      console.log("hello");
    }
  });
}
