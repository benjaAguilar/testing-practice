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

export function calculator(num1, num2, ...rest){
    let arr = [];
    let notNumber;
    if(num2 === undefined) num2 = num1;

    rest.splice(0, 0, num1, num2);

    rest.forEach(num => {
        if(typeof num === 'string'){
            num = parseInt(num);
        }
        if(isNaN(num)) notNumber = true;
        arr.push(num);
    });

    if(notNumber) return null;

    return{
        add: arr.reduce((total, current) => total + current),
        substract: arr.reduce((total, current) => total - current),
        divide: arr.reduce((total, current) => total / current),
        multiply: arr.reduce((total, current) => total * current)
    }
}