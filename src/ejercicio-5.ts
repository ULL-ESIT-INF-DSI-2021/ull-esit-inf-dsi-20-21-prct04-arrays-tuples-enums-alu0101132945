/**
 * Recibe un vector de numbers a los que va a multiplicar dentro de otra funcion por un valor.
 * @param multiplyArray Vector de numbers con los valores que se multiplicaran
 * @return devuelve el vector con los valores multiplicados
 */

export function multiplyAll(multiplyArray: number[]){
    let result = [];
    return (num:number) => {
        for(let i = 0; i < multiplyArray.length; i++){
            result.push(multiplyArray[i]*num);
        }
        return result;
    }
}