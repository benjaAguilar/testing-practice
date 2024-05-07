export default function capitalize(string){

    if(string === '' || typeof string === 'number') return null

    let arr = string.split('');
    const Firstletter = arr[0];
    arr[0] = Firstletter.toUpperCase();
    return arr.join(''); 
}