function sumOfSquares(maxNumber) {
  const array = Array.from(Array(maxNumber + 1).keys());
  return array
    .map((number) => {
      return number ** 2;
    })
    .reduce((accumulator, item) => {
      return accumulator + item;
    });
}
let sumOSq = (n) =>
  [...Array(20 + 1).keys()]
    .map((n) => n ** 2)
    .reduce((acc, prev) => acc + prev);

module.exports = sumOfSquares;
