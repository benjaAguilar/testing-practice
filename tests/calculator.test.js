import { calculator } from "./functions";

test('calculate 1', () => {
    expect(calculator(2, 2)).toEqual({add: 4, substract: 0, divide: 1, multiply: 4});
});

//works with diferent values
test('calculate 2', () => {
    expect(calculator(6, 3)).toEqual({add: 9, substract: 3, divide: 2, multiply: 18});
});

test('calculate 3', () => {
    expect(calculator(3, 5)).toEqual({add: 8, substract: -2, divide: 0.6, multiply: 15});
});

//works with only one val, (uses the same num)
test('calculate (one param)', () => {
    expect(calculator(6)).toEqual({add: 12, substract: 0, divide: 1, multiply: 36});
});

//works with num strings
test('calculate (strings num)', () => {
    expect(calculator('10', '5')).toEqual({add: 15, substract: 5, divide: 2, multiply: 50});
});

test('calculate (strings num mix)', () => {
    expect(calculator(8, '8')).toEqual({add: 16, substract: 0, divide: 1, multiply: 64});
});

test('calculate (strings num mix)', () => {
    expect(calculator('5')).toEqual({add: 10, substract: 0, divide: 1, multiply: 25});
});

//dosent break if you pass nan
test('calculate (string characters)', () => {
    expect(calculator('im a string!', 'asd')).toBe(null);
});

//can handle more numbers
test('calculate (...rest)', () => {
    expect(calculator(3, 9, 5)).toEqual({add: 17, substract: -11, divide: 0.06666666666666667, multiply: 135});
});

test('calculate (...rest 2)', () => {
    expect(calculator(8, 3, 10, 7, 5)).toEqual({add: 33, substract: -17, divide: 0.007619047619047618, multiply: 8400});
});

//rest can handle strings
test('calculate (...rest string)', () => {
    expect(calculator(8, 3, 10, '7', '5')).toEqual({add: 33, substract: -17, divide: 0.007619047619047618, multiply: 8400});
});

test('calculate (...rest string NaN)', () => {
    expect(calculator(8, 3, 10, '7', 'foo')).toBe(null);
});