module.exports = function multiply(first, second) {
  // your solution
  const listNumFirst = first.split('').reverse();
  const listNumSecond = second.split('').reverse();

  const arrayNum = [];

  for (let i = 0; i < listNumFirst.length; i += 1) {
    for (let j = 0; j < listNumSecond.length; j++) {
      if (arrayNum[i + j]) {
        arrayNum[i + j] += listNumFirst[i] * listNumSecond[j];
      } else {
        arrayNum[i + j] = listNumFirst[i] * listNumSecond[j];
      }
    }
  }

  for (let i = 0; i < arrayNum.length; i += 1) {
    if (i + 1 < arrayNum.length) {
      arrayNum[i + 1] += Math.floor(arrayNum[i] / 10);
      arrayNum[i] = arrayNum[i] % 10;
    }
  }

  return arrayNum.reverse().join('');
};
