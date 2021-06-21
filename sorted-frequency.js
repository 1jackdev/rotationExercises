function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (rightIdx > leftIdx + 1) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (leftIdx + 1 == middleIdx && middleIdx == rightIdx - 1) {
      console.log(leftIdx, middleIdx, rightIdx);
      if (arr[leftIdx] < val && middleVal == val) return leftIdx;
      if (middleVal < val && arr[rightIdx] == val) return middleIdx;
      return leftIdx;
    }
    console.log(leftIdx, middleIdx, rightIdx);
    if (middleVal == val) {
      rightIdx = middleIdx + 1;
    } else if (middleVal < val) {
      leftIdx = middleIdx;
    } else if (middleVal > val) {
      rightIdx = middleIdx;
    }
  }

  return -1;
}

function findCieling(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (rightIdx > leftIdx + 1) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (leftIdx + 1 == middleIdx && middleIdx == rightIdx - 1) {
      if (arr[leftIdx] == val && middleVal > val) return middleIdx;
      return rightIdx;
    }

    if (middleVal == val) {
      if (arr[rightIdx] > val) {
        leftIdx = middleIdx;
      }
    } else if (middleVal < val) {
      leftIdx = middleIdx;
    } else if (middleVal > val) {
      rightIdx = middleIdx;
    }
  }

  return -1;
}

function sortedFrequency(arr, val) {
  if (val < arr[0] || val > arr[arr.length - 1]) return -1;
  let leftIndex = findFloor(arr, val);
  let rightIndex = findCieling(arr, val);
  console.log(leftIndex, rightIndex);
  return rightIndex - leftIndex;
}

module.exports = sortedFrequency;
