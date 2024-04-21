import "../scss/style.scss";
import { createActivityContainer, createO, createX } from "./createHtml";
import { Gridbox } from "./models/Gridbox";
import { getActivities } from "./services/activityService";

const board = document.getElementById("board");

let count: number = 0;

let list: Gridbox[] = [];

let xList: HTMLImageElement[] = [];
let oList: HTMLImageElement[] = [];

for (let i = 1; i < 10; i++) {
  const gridBox = document.createElement("section");
  let newGridBox = new Gridbox(i, gridBox, false);
  list.push(newGridBox);

  gridBox.classList.add("gridBox");
  board?.appendChild(gridBox);

  gridBox.addEventListener("click", () => {
    if (newGridBox.filled) {
      return;
    }

    newGridBox.filled = true;

    count++;
    console.log(count);

    if (count % 2 == 0) {
      console.log("X");
      createX(gridBox, xList);
    } else {
      console.log("O");
      createO(gridBox, oList);
    }
  });
}

async function fetchActivity() {
  const activity = await getActivities();
  console.log(activity);

  createActivityContainer(activity);
}

fetchActivity();
