const index = require('../index');

describe('Day 1 challenge:', () => {
  it("should return 2 when the mass of the ship is 12",
    () => { expect(index.fuelAmountPerModule(12)).toBe(2); }
  ),
    it("should return 2 when the mass of the ship is 14", () => { expect(index.fuelAmountPerModule(14)).toBe(2) }),
    it("should return 654 when the mass of the ship is 1969", () => { expect(index.fuelAmountPerModule(1969)).toBe(654) }),
    it("should return 33583 when the mass of the ship is 100756", () => { expect(index.fuelAmountPerModule(100756)).toBe(33583) })
});

describe('Day 1/Part 2 challenge:', () => {
  it("should return 2 when the mass of the ship is 12",
    () => { expect(index.totalFuelAmountPerModule(index.fuelAmountPerModule(12))).toBe(2); }
  ),
    it("should return a total of 966 when the mass of the ship is 1969",
      () => { expect(index.totalFuelAmountPerModule(index.fuelAmountPerModule(1969))).toBe(966) }),
    it("should return a total of 50346 when the mass of the ship is 100756",
      () => { expect(index.totalFuelAmountPerModule(index.fuelAmountPerModule(100756))).toBe(50346) })
});