function getDigits(number) {
  let output = [],
    sNumber = number.toString();

  for (let i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  return output;
}

function isSubArray(main, sub) {
  return sub.every(eachEle => {
    return main.indexOf(eachEle) + 1;
  });
}

function contains4(digits) {
  return isSubArray(digits, [4]);
}

function contains13(digits) {
  return isSubArray(digits, [1, 3]);
}

function isUnlucky(n) {
  let d = getDigits(n);
  return contains4(d) || contains13(d);
}

function createLuckyFloorsUpTo(n) {
  let result = [];
  let lastNum = 1;
  for (let i = 1; i <= n; i += 1) {
    let d = getDigits(i);
    if (isUnlucky(d)) {
      while (isUnlucky(d)) {
        i = i + 1;
        d = getDigits(i);
      }
    }
    lastNum = i;
    result.push(lastNum);
  }
  return result;
}

function getLuckyFloorNumber(n) {
  // TODO sanity check here!
  let luckyFloors = createLuckyFloorsUpTo(n);
  let bound = n;
  while (luckyFloors.length < n) {
    bound += 1;
    luckyFloors = createLuckyFloorsUpTo(bound);
  }
  return luckyFloors[luckyFloors.length - 1];
}
