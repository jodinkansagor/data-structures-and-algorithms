const { binarySearch } = require('../array-binary-search.js');

describe('shift array', () => {
    it('it finds the index of a given element', () => {
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    });
});
