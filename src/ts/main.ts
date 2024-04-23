import "../scss/style.scss";
import { createActivityContainer, createO, createX } from "./createHtml";
import { Gridbox } from "./models/Gridbox";
import { getActivities } from "./services/activityService";
import { checkForWin } from "./winPatterns";

const board = document.getElementById("board");

let count: number = 0;

export let list: Gridbox[] = [];

for (let i = 1; i < 10; i++) {
  const gridBox = document.createElement("section");
  let newGridBox = new Gridbox(i, gridBox, false, false, false);
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
      createX(gridBox);
      newGridBox.hasX = true;
    } else {
      createO(gridBox);
      newGridBox.hasO = true;
    }

    const winner = checkForWin();
    if (winner && count % 2 == 0) {
      console.log("Player X has won!");
    } else if (winner && count % 2 == 1) {
      console.log("Player O has won!");
    } else {
      console.log("Continue game...");
    }
  });
}

async function fetchActivity() {
  const activity = await getActivities();
  console.log(activity);

  createActivityContainer(activity);
}

fetchActivity();
