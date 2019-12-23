function compress(arr) {
  let i = 0;
  let result = [];
  while (i < arr.length) {
    let delta = i + 1;
    let repeated = 0;
    while (delta < arr.length && arr[delta] === arr[i]) {
      delta += 1;
      repeated += 1;
    }
    if (repeated > 0) {
      // Two or more consecutive equal numbers
      result.push(arr[i].toString() + ':' + (repeated + 1).toString());
      i = delta;
    } else {
      // Normal flow, no consecutive equal numbers found
      result.push(arr[i]);
      i += 1;
    }
  }
  return result;
}

describe('Compress function', () => {
  test('it should compress an array with compressable and uncompressable values', () => {
    // GIVEN
    let input = [5, 5, 5, 7, 7, 3, 1];
    let output = ['5:3', '7:2', 3, 1];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
  test('it should compress an array with compressable values only', () => {
    // GIVEN
    let input = [5, 5, 5, 7, 7];
    let output = ['5:3', '7:2'];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
  test('it should compress an array with all compressable values of the same number', () => {
    // GIVEN
    let input = [5, 5, 5];
    let output = ['5:3'];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
  test('it should not compress an array with uncompressable values only', () => {
    // GIVEN
    let input = [3, 1];
    let output = [3, 1];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
  test('it should not compress an array with only one element', () => {
    // GIVEN
    let input = [1];
    let output = [1];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
  test('it should compress an array with compressable values at the end', () => {
    // GIVEN
    let input = [1, 3, 5, 5, 5, 7, 7];
    let output = [1, 3, '5:3', '7:2'];
    // WHEN compress THEN return compressed array
    expect(compress(input)).toEqual(output);
  });
});
