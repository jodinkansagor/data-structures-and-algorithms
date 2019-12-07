const reverse = array => {
  const newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - 1 - i];
  }
  return newArray;
};

module.exports = reverse;
