import { reverseString } from "./functions";

test('String reversed', () => {
    expect(reverseString('jest')).toBe('tsej');
});

//works with other strings
test('String reversed 2', () => {
    expect(reverseString('odin')).toBe('nido');
});

//also works if string is empty
test('String reversed (empty string)', () => {
    expect(reverseString('')).toBe(null);
});

//works with numbers
test('String reversed (numbers)', () => {
    expect(reverseString(634)).toBe(436);
});

