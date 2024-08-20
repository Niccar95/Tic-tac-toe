import { list } from "./main";

const winPatterns: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkForWin = (): boolean => {
  for (const pattern of winPatterns) {
    const [first, second, third] = pattern;
    const box1 = list[first];
    const box2 = list[second];
    const box3 = list[third];

    if (
      (box1.hasX && box2.hasX && box3.hasX) ||
      (box1.hasO && box2.hasO && box3.hasO)
    ) {
      return true;
    }
  }

  return false;
};
