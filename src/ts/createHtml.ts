export const createX = (gridBox: HTMLElement, xList: HTMLImageElement[]) => {
  const x = document.createElement("img");

  x.src = "/src/img/x-solid.svg";

  gridBox.appendChild(x);

  xList.push(x);

  console.log(xList);
};

export const createO = (gridBox: HTMLElement, oList: HTMLImageElement[]) => {
  const o = document.createElement("img");

  o.src = "/src/img/o-solid.svg";

  gridBox.appendChild(o);

  oList.push(o);

  console.log(oList);
};

export const createActivityContainer = (activity: string) => {
  const container = document.createElement("div");
  const activityText = document.createElement("p");

  activityText.innerHTML = activity;

  document.body.appendChild(container);
  container.appendChild(activityText);
};
