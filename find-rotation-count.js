function findRotationIndex(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (rightIdx > leftIdx + 1) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (leftIdx + 1 == middleIdx && middleIdx == rightIdx - 1) {
      if (arr[leftIdx] > middleVal) return leftIdx;
      if (arr[rightIdx] < middleVal) return middleIdx;
      if (arr[rightIdx] > middleVal) return rightIdx;
    }
    if (middleVal < arr[rightIdx]) {
      if (middleVal > arr[leftIdx]) {
        return -1;
      }
      rightIdx = middleIdx;
    } else if (middleVal > arr[rightIdx]) {
      leftIdx = middleIdx;
    }
  }

  return -1;
}

function findRotationCount(arr) {
  const rotationIndex = findRotationIndex(arr) + 1;
  return rotationIndex;
}

module.exports = findRotationCount;
