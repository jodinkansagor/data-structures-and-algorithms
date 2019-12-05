const binarySearch = (array, searchKey) => {
    let indexWeAreLookingFor = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchKey) {
            return indexWeAreLookingFor;
        }
        indexWeAreLookingFor++;
    }
    return -1;
};

module.exports = { binarySearch };
