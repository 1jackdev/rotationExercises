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
      rightIdx = middleIdx;
    } else if (middleVal > arr[rightIdx]) {
      leftIdx = middleIdx;
    }
  }
  return -1;
}

function findIndex(arr, val, idx = 0, foundIndex = -1) {
  // base case
  if (idx == arr.length || foundIndex >= 0) return foundIndex;
  // normal case
  if (arr[idx] == val) foundIndex = idx;
  return findIndex(arr, val, idx + 1, foundIndex);
}

function findRotatedIndex(arr, foundIdx) {
  let rotationIndex = findRotationIndex(arr);
  let indexLeft = findIndex(arr.slice(0, rotationIndex), foundIdx);
  let indexRight = findIndex(arr.slice(rotationIndex), foundIdx);
  if (indexRight >= 0) return indexRight + rotationIndex;
  if (indexLeft >= 0) return indexLeft;
  return -1;
}

module.exports = findRotatedIndex;
