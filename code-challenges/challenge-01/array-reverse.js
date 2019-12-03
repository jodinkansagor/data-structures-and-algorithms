
const reverse = array => {
  return array.map((value, index) => array[array.length - 1 - index]);
};

module.exports = reverse;
