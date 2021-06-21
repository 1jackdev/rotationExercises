function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex;
  // handle arrs with either all 1's or all 0's
  if (arr[leftIndex] == 0) {
    return arr.length;
  } else if (arr[rightIndex] == 1) {
    return 0;
  }

  while (leftIndex <= rightIndex) {
    if (arr[leftIndex] == 0) {
      // everything to the right of leftIndex must be a 0
      // so we return the amount between the end of the arr
      // and this leftIndex
      return arr.length - leftIndex;
    } else if (arr[rightIndex] == 1) {
      return arr.length - rightIndex - 1;
    }

    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let middleVal = arr[middleIndex];
    if (middleVal == 0) {
      rightIndex = middleIndex - 1;
    } else if (middleVal == 1) {
      leftIndex = middleIndex + 1;
    }
  }
}
module.exports = countZeroes;
