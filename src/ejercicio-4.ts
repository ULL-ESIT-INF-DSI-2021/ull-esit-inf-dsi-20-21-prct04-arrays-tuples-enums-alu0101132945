export function moveZeros(arrayZeros){
    let result = [];
    for(let i = 0; i < arrayZeros.length; i++){
        if (arrayZeros[i] != 0){
            result.push(arrayZeros[i]);
        }
    }
    for(let i = 0; i < arrayZeros.length; i++){
        if (arrayZeros[i] == 0){
            result.push(arrayZeros[i]);
        }
    }
    return result;
}