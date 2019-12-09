const binarySearch = (array, searchKey) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === searchKey) {
      return i;
    } else {
      return -1;
    }
  }
};

module.exports = { binarySearch };
