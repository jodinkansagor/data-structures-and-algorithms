const insertShiftArray = (array, value) => {

  let middleIndex = Math.ceil(array.length / 2) - 1;
  const newArray = new Array(array.length + 1);
  let x = 0;

  for(let i = 0; i < array.length; i++) {
    newArray[x] = array[i];
    x++;
    if(i === middleIndex) {
      newArray[x] = value;
      x++;
    }
  }
  return newArray;
};

module.exports = { insertShiftArray };
