// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore()", () => {
  it("should split students by score", () => {
    const students = [
      { name: 'Alice', score: 75 },
      { name: 'Bob', score: 90 },
      { name: 'Charlie', score: 60 },
    ];
    const scoreThreshold = 80;
    const result = partitionStudentsByScore(students, scoreThreshold);
    expect(result).toEqual([
      [{ name: 'Alice', score: 75 }, { name: 'Charlie', score: 60 }, { name: 'Bob', score: 90 }],
    ]);
  });
  

  it('should place all students in first array if necessary', () => {

  });

  it('should place all students in second array if necessary', () => {

  });

  it("should return an empty array with two arrays if the students list is empty", () => {
    const students = [];
    const scoreThreshold = 80;
    const result = partitionStudentsByScore(students, scoreThreshold);
    expect(result).toEql([[], []]);
  });
});
