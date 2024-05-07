import capitalize from "./functions";

test('Capitalization', () => {
    expect(capitalize('java')).toBe('Java');
});

//function works with other words
test('Capitalization 2', () => {
    expect(capitalize('babel')).toBe('Babel');
});

//still working if the string is empty
test('Capitalization (empty string)', () => {
    expect(capitalize('')).toBe(null);
});

//works with numbers
test('Capitalization (numbers)', () => {
    expect(capitalize(123)).toBe(null);
});