import { caesarCipher } from "./caesarCipher";

test('caesar 1', () => {
    expect(caesarCipher('hello', 4)).toBe('lipps');
});

//works with diferent words
test('caesar 2', () => {
    expect(caesarCipher('react', 4)).toBe('viegx');
});

//works with uppercase
test('caesar uppercase', () => {
    expect(caesarCipher('JUMP', 4)).toBe('NYQT');
});

//can handle punctuation
test('caesar punctuatuion', () => {
    expect(caesarCipher('solid!', 4)).toBe('wspmh!');
});

test('caesar punctuatuion 2', () => {
    expect(caesarCipher('...rest', 4)).toBe('...viwx');
});

test('caesar punctuatuion 3', () => {
    expect(caesarCipher('[(hello)]', 4)).toBe('[(lipps)]');
});

//can handle different shifting
test('caesar shifting 1', () => {
    expect(caesarCipher('age of empires', 1)).toBe('bhf pg fnqjsft');
});

test('caesar shifting 2', () => {
    expect(caesarCipher('SQL', -1)).toBe('RPK');
});