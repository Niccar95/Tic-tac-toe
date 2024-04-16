import "../scss/style.scss";
import { Gridbox } from "./models/Gridbox";
const board = document.getElementById("board");

for (let i = 1; i < 10; i++) {
  let GridBox = new Gridbox(i, false);
  const gridBox = document.createElement("section");
  gridBox.classList.add("gridBox");
  console.log(GridBox);
  board?.appendChild(gridBox);
}
