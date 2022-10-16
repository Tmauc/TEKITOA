export function getUniqueRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr?.length);
  const item = arr[randomIndex];

  return item;
}

export function getRandomArray(arr, lengthArray) {
  var tmpArray = [];
  for (let i = 0; i < lengthArray; i++) {
    var tmpItem = getUniqueRandomItem(arr);
    tmpArray.push(tmpItem);
  }
  return tmpArray;
}
