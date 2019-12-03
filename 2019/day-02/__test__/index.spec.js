const index = require("../index");

describe("Day 2: 1202 Program Alarm", () => {
  it("should add the two next numbers", () => {
    const intcode = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
    expect(index.solve(intcode)).toEqual([
      1,
      9,
      10,
      70,
      2,
      3,
      11,
      0,
      99,
      30,
      40,
      50
    ]);
  });
});
