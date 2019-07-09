const main = require('../main');

const isStartSmaller = main.isStartSmaller;
const isOutOfRange = main.isOutOfRange;
const createMultiplicationTable = main.createMultiplicationTable;

// Test for isStartSmaller
it ('should return true when the start smaller than the end given 2 and 4', () => {
    expect(isStartSmaller(2, 4)).toBe(true);
});

// Test for isOutOfRange
it ('should return true when the start out of range given -1 and 4', () => {
    expect(isOutOfRange(-1, 4)).toBe(true);
});

it ('should return true when the end out of range given 1 and 1001', () => {
    expect(isOutOfRange(1, 1001)).toBe(true);
});

it ('should return true when the start and the end in the range given 1 and 2', () => {
    expect(isOutOfRange(1, 2)).toBe(false);
});

// Test for createMultiplicationTable
it ('should return null when the start and the end out of the range given 0, 1001', () => {
    expect(createMultiplicationTable(0, 1001)).toBe(null);
});

it ('should return null when end smaller than the end given 4, 2', () => {
    expect(createMultiplicationTable(4, 2)).toBe(null);
});

it ('should return null when the end out of range given 1, 1001', () => {
    expect(createMultiplicationTable(1, 1001)).toBe(null);
});

it ('should return result string when start smaller is equal the end given 2, 2', () => {
    expect(createMultiplicationTable(2, 2)).toBe("2*2=4"+" "+"\n");
});

it ('should return result string when the start smaller than the end given 2 and 4', () => {
    expect(createMultiplicationTable(2, 4)).toBe("2*2=4"+" "+"\n" + "2*3=6 3*3=9"+" "+"\n" + "2*4=8 3*4=12 4*4=16"+" "+"\n");
});