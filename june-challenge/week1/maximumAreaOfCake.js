/*
Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
Output: 4 
horizontal [0,1], [1,2], [2,4], [4,h]
vertical [0,1], [1,3], [3,w]

Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
Output: 6
horizontal [0,1], [1,3], [3,h]
veritcal [0,1], [1,w]

Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
Output: 9
horizontal [0,3], [3,h]
veritcal [0,3], [3,w]
*/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  horizontalCuts.unshift(0);
  verticalCuts.unshift(0);
  horizontalCuts.push(h);
  verticalCuts.push(w);
  let maximumArea = 0;
  horizontalCuts.forEach((elemH, horizontalIndex) => {
    verticalCuts.forEach((elemV, verticalIndex) => {
      let area =
        (horizontalCuts[horizontalIndex + 1] -
          horizontalCuts[horizontalIndex]) *
        (verticalCuts[verticalIndex + 1] - verticalCuts[verticalIndex]);
      if (area > maximumArea) {
        maximumArea = area;
      }
    });
  });
  return maximumArea % (10 ** 9 + 7);
};
// % 10 ** 9
// console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
// console.log(maxArea(5, 4, [3, 1], [1]));
// console.log(maxArea(5, 4, [3], [3]));
console.log(maxArea(1000000000, 1000000000, [2], [2]));
