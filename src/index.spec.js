const { sumOfTwoInteger, diffOfTwoInteger } = require("./index");

test("sum of 1 and 4 should return 5", () => {
    expect(sumOfTwoInteger(1, 4)).toEqual(5);
});

test("diff of 5 and 4 should return 1", () => {
    expect(diffOfTwoInteger(5, 4)).toEqual(1);
});
