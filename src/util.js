export function toDecimal(num) {
  return +(Math.round(num * 10, 10) / 10).toFixed(1);
}

export function isValidNumStr(str) {
  return !Number.isNaN(parseFloat(str)) &&
    (str.indexOf('.') === -1 || str.indexOf('.') >= str.length - 2);
}

export function isIntStr(str) {
  return Number.isInteger(parseFloat(str)) && str.indexOf('.') === -1;
}

export function incVal(val, step) {
  if (!isValidNumStr(val.toString()) || !isValidNumStr(step.toString())) {
    throw new Error('args must be numbers with 0 or 1 decimal places');
  }

  return ((val * 10) + (step * 10)) / 10;
}

export function decVal(val, step) {
  if (!isValidNumStr(val.toString()) || !isValidNumStr(step.toString())) {
    throw new Error('args must be numbers with 0 or 1 decimal places');
  }

  return ((val * 10) - (step * 10)) / 10;
}
