// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const analyzeArray = function (arr) {
  let min;
  let max;
  let total = 0;
  min = max = arr[0];

  arr.forEach((num) => {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
    total += num;
  });

  return {
    average: total / arr.length,
    min,
    max,
    length: arr.length,
  };
};

export { analyzeArray };
