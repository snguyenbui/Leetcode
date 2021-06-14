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
  horizontalCuts.push(h);
  verticalCuts.unshift(0);
  verticalCuts.push(w);
  let maxArea = 0;
  for (let height in horizontalCuts) {
    for (let width in verticalCuts) {
      console.log(horizontalCuts[height]);
      console.log(verticalCuts[width]);
    }
  }
};

maxArea(5, 4, [1, 2, 4], [1, 3]);
