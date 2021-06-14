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
  let output1 = true;
  let output2 = true;
  if (
    s1.length > s3.length ||
    s2.length > s3.length ||
    s2.length + s1.length > s3.length
  ) {
    return false;
  }
  for (s3index in s3) {
    console.log(s1[s1index], s1index);
    console.log(s2[s2index], s2index);
    console.log(s3[s3index], s3index);
    if (s1[s1index] !== s3[s3index] && s2[s2index] !== s3[s3index]) {
      output1 = false;
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
  console.log(output1);
  s1index = 0;
  s2index = 0;
  readS1 = false;

  for (s3index in s3) {
    console.log(s1[s1index], s1index);
    console.log(s2[s2index], s2index);
    console.log(s3[s3index], s3index);
    if (s1[s1index] !== s3[s3index] && s2[s2index] !== s3[s3index]) {
      output2 = false;
    }
    if (!readS1 && s2[s2index] === s3[s3index]) {
      s2index++;
    } else if (!readS1 && s2[s2index] !== s3[s3index]) {
      readS1 = true;
      if (readS1 && s1[s1index] === s3[s3index]) {
        s1index++;
      }
    } else if (readS1 && s1[s1index] === s3[s3index]) {
      s1index++;
    } else if (readS1 && s1[s1index] !== s3[s3index]) {
      readS1 = false;
      if (!readS1 && s2[s2index] === s3[s3index]) {
        s2index++;
      }
    }
  }
  return output1 || output2;
};

// Input:
let s1 = "aabcc";
let s2 = "dbbca";
let s3 = "aadbcbbcac";

console.log(isInterleave(s1, s2, s3));
// 0a 0d 1a 0d
