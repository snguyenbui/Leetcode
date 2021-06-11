/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
  let s1index = 0;
  let s2index = 0;
  let readS1 = true;
  for (s3index in s3) {
    if (s1[s1index] !== s3[s3index] && s2[s2index] !== s3[s3index]) {
      return false;
    }
    if (readS1 && s1[s1index] === s3[s3index]) {
      s1index++;
    } else if (readS1 && s1[s1index] !== s3[s3index]) {
      readS1 = false;
      if (!readS1 && s2[s2index] === s3[s3index]) {
        s2index++;
      }
    } else if (!readS1 && s2[s2index] === s3[s3index]) {
      s2index++;
    } else if (!readS1 && s2[s2index] !== s3[s3index]) {
      readS1 = true;
      if (readS1 && s1[s1index] === s3[s3index]) {
        s1index++;
      }
    }
  }
  if (s1.length > s3.length || s2.length > s3.length) {
    return false;
  }
  return true;
};

// Input:
let s1 = "a";
let s2 = "";
let s3 = "";

console.log(isInterleave(s1, s2, s3));
// 0a 0d 1a 0d
