export const createX = (gridBox: HTMLElement) => {
  const x = document.createElement("img");

  x.src = "/src/img/x-solid.svg";

  gridBox.appendChild(x);
};

export const createO = (gridBox: HTMLElement) => {
  const o = document.createElement("img");

  o.src = "/src/img/o-solid.svg";

  gridBox.appendChild(o);
};
