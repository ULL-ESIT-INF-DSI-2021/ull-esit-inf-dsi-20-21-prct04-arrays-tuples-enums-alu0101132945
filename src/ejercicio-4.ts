/**
 * Recibe un vector de numbers en los que desplazara los 0 a las ultimas posiciones.
 * @param arrayZeros Vector de numbers con los valores que desplazara.
 * @return devuelve el vector resultado con los 0 en las ultimas posiciones.
 */

export function moveZeros(arrayZeros: number[]){
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