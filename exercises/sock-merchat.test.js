const sockMerchant = require('./sock-merchat');

describe('sockMerchant', () => {
  test('returns correct number of pairs for sample input', () => {
    const n = 9;
    const ar = [10,20,20,10,10,30,50,10,20];
    expect(sockMerchant(n, ar)).toBe(3);
  });

  test('returns 0 for empty array', () => {
    expect(sockMerchant(0, [])).toBe(0);
  });

  test('returns 0 when no pairs', () => {
    expect(sockMerchant(3, [1,2,3])).toBe(0);
  });

  test('counts multiple pairs correctly', () => {
    expect(sockMerchant(4, [1,1,2,2])).toBe(2);
  });

  test('handles odd counts', () => {
    expect(sockMerchant(5, [1,1,1,1,1])).toBe(2);
  });
});
