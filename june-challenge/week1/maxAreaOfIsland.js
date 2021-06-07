/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  let maxCount = 0;
  let count = 0;
  for (y in grid) {
    for (x in grid[y]) {
      if (grid[y][x] === 1) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
    count = 0;
  }
  return maxCount;
};

const checkLeft = function (grid, x, y) {
  return grid[y][x - 1] === 1;
};

const checkRight = function (grid, x, y) {
  return grid[y][x + 1] === 1;
};

const checkUp = function (grid, x, y) {
  return grid[y - 1][x] === 1;
};

const checkDown = function (grid, x, y) {
  return grid[y + 1][x] === 1;
};

// const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
// const grid = [[0, 0, 1, 0, 0, 0, 0, 0]];
const grid = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
];
// const grid = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ];

console.log(maxAreaOfIsland(grid));
