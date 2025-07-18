describe("twNumberSum", function () {
  it("should return 0 if input is empty", function () {
    expect(twNumberSum([])).toEqual(0);
  });

  it("should return 0 if input is [1]", function () {
    expect(twNumberSum([1])).toEqual(0);
  });

  it("should return 0 if input is [1, 2]", function () {
    expect(twNumberSum([1, 2])).toEqual(0);
  });

  it("should return 0 if input is [1, 2, 3]", function () {
    expect(twNumberSum([1, 2, 3])).toEqual(0);
  });

  it("should return 1 if input is [1, 2, 3, 4]", function () {
    expect(twNumberSum([1, 2, 3, 4])).toEqual(1);
  });

  it("should return 2 if input is [1, 2, 3, 4, 5]", function () {
    expect(twNumberSum([1, 2, 3, 4, 5])).toEqual(2);
  });

  it("should return 3 if input is [1, 2, 3, 4, 5, 6]", function () {
    expect(twNumberSum([1, 2, 3, 4, 5, 6])).toEqual(3);
  });

  it("should return 4 if input is [1, 2, 3, 4, 5, 6, 7]", function () {
    expect(twNumberSum([1, 2, 3, 4, 5, 6, 7])).toEqual(4);
  });

  it("should return 5 if input is [1, 2, 3, 4, 5, 6, 7, 8]", function () {
    expect(twNumberSum([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(5);
  });

  it("should return 6 if input is [1, 2, 3, 4, 5, 6, 7, 8, 9]", function () {
    expect(twNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(6);
  });
});
