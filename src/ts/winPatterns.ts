import { list } from "./main";

const winPatterns: number[][] = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
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
