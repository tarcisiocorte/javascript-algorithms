const RotateMatrix = require('./rotate-matrix-1.7');

describe('RotateMatrix', () => {
  let rotateMatrix;

  beforeEach(() => {
    rotateMatrix = new RotateMatrix();
  });

  test('should return false for an empty matrix', () => {
    const matrix = [];
    expect(rotateMatrix.rotate(matrix)).toBe(false);
  });

  test('should return false for a non-square matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    expect(rotateMatrix.rotate(matrix)).toBe(false);
  });

  test('should rotate a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    const expected = [
      [3, 1],
      [4, 2]
    ];
    rotateMatrix.rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  test('should rotate a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
    rotateMatrix.rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  test('should rotate a 4x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];
    rotateMatrix.rotate(matrix);
    expect(matrix).toEqual(expected);
  });
});
