import { analizeArray } from "./functions";

test('analizeArray 1', () => {
    expect(analizeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})

//works with diferent values
test('analizeArray 2', () => {
    expect(analizeArray([1,2,3,4,5,6])).toEqual({average: 3, min: 1, max: 6, length: 6});
})

test('analizeArray 3', () => {
    expect(analizeArray([10, 9, 8, 7, 6, 5, 4, 3, 2])).toEqual({average: 6, min: 2, max: 10, length: 9});
})