/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(x, y) {
  if (x + y === 0) {
    return 0;
  }
  if (!Number.isFinite(x + y)) {
    return Number.MAX_VALUE;
  }
  return (x + y) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -(b / a);
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2))
  );
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return +value;
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(value, def) {
  const result = Number(value);
  return Number.isNaN(result) ? def : result;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= index; i += 1) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

function getSumToN(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  return result;
}

function getSumOfDigits(num) {
  let result = 0;
  let number = num;
  while (number > 0) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return result;
}

function isPowerOfTwo(num) {
  return Math.log2(num) % 1 === 0;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  const result = Number.parseFloat(str);
  return Number.isNaN(result) ? NaN : result;
}

function getIntegerOnString(str, base) {
  const result = Number.parseInt(str, base);
  return Number.isNaN(result) ? NaN : result;
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return parseFloat((x1 + x2 + x3).toFixed(10));
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(number) {
  return Math.floor((Math.abs(number) + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
