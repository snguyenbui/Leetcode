/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  let maxCount = 0;
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        count++;
        if (checkUp(grid, x, y)) {
          count++;
        }
        if (checkDown(grid, x, y)) {
          count++;
        }
      }
      if (grid[y][x] === 0) {
        if (count > maxCount) {
          maxCount = count;
        }
        count = 0;
      }
    }
    count = 0;
  }
  return maxCount;
};

const checkUp = function (grid, x, y) {
  if (y !== 0) {
    return grid[y - 1][x] === 1;
  }
  return false;
};

const checkDown = function (grid, x, y) {
  if (y < grid.length - 1) {
    return grid[y + 1][x] === 1;
  }
  return false;
};

// const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
// const grid = [[0, 0, 1, 0, 0, 0, 0, 0]];
// const grid = [
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0],
// ];
// const grid = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ];

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));
