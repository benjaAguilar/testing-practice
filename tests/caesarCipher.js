function createAlphabet(shift){
    let characterA = 'a'.charCodeAt(0);
    let characterZ = 'z'.charCodeAt(0);
    let alphabet = [];

    for(let i = characterA; i <= characterZ; i++){
        if(i + shift > characterZ){
            let sum = i + shift;
            let substract = sum - characterZ;
            alphabet.push(String.fromCharCode((characterA - 1) + substract));

        } else{
            alphabet.push(String.fromCharCode(i + shift));
        }
    }

    return alphabet;
}

export function caesarCipher(string, shift){
    let cipherWord = [];
    let alphabet = createAlphabet(0);
    let cipher = createAlphabet(shift);

    let upper = string.toUpperCase();
    if(upper === string){
        string = string.toLowerCase();
        upper = true;
    } 
    
    let arr = string.split('');
    arr.forEach(character => {
        if(character.charCodeAt(0) >= 'a'.charCodeAt(0) && character.charCodeAt(0) <= 'z'.charCodeAt(0)){
            let i = alphabet.indexOf(character);
            cipherWord.push(cipher[i]);
        } else{
            cipherWord.push(character);
        }
    });

    return upper === true ? cipherWord.join('').toUpperCase() : cipherWord.join('');
}