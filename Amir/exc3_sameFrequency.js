function sameFrequency(num1, num2) {
  const lut = {};

  while (num1 !== 0) {
    let key = num1 % 10;
    lut[key] = ++lut[key] || 1;
    num1 = Math.floor(num1 / 10);
  }

  while (num2 !== 0) {
    let key = num2 % 10;
    if (!lut[key]) {
      return false;
    }
    --lut[key];
    num2 = Math.floor(num2 / 10);
  }

  for (let n in lut) {
    if (lut[n] !== 0) return false;
  }
  return true;
}
