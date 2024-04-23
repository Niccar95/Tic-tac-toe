export const createX = (gridBox: HTMLElement) => {
  const x = document.createElement("img");

  x.classList.add("symbol");

  x.src = "/src/img/x-solid.svg";

  gridBox.appendChild(x);
};

export const createO = (gridBox: HTMLElement) => {
  const o = document.createElement("img");

  o.classList.add("symbol");

  o.src = "/src/img/o-solid.svg";

  gridBox.appendChild(o);
};

export const createActivityContainer = (activity: string) => {
  const container = document.createElement("div");
  const activityText = document.createElement("p");

  activityText.innerHTML = activity;

  document.body.appendChild(container);
  container.appendChild(activityText);
};
