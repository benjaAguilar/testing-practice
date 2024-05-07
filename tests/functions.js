export default function capitalize(string){
    if(string === '' || typeof string === 'number') return null

    let arr = string.split('');
    const Firstletter = arr[0];
    arr[0] = Firstletter.toUpperCase();
    return arr.join(''); 
}

export function reverseString(string){
    if(string === '') return null

    if(typeof string === 'number'){
        string = string.toString();
        let arr = string.split('').reverse();
        return parseInt(arr.join(''));
    }

    let arr = string.split('').reverse();
    return arr.join('');
}