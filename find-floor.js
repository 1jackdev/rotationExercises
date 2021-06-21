function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (rightIdx > leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (val > arr[rightIdx]) return arr[rightIdx];
    if (leftIdx + 1 == middleIdx && middleIdx == rightIdx - 1) {
      if (arr[leftIdx] < val && middleVal > val) return arr[leftIdx];
      if (middleVal < val && arr[rightIdx] > val) return middleVal;
      return -1;
    }
    if (middleVal < val) {
      leftIdx = middleIdx;
    } else if (middleVal > val) {
      rightIdx = middleIdx;
    }
  }

  return -1;
}

module.exports = findFloor;
