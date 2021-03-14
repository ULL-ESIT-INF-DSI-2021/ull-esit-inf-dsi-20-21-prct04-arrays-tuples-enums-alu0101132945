/**
 * Recibe un vector de strings y numbers para devolver la media y la concatencación de las strings.
 * @param MaC Vector de strings y numbers con los valores con los que se haran la media y la concatenación.
 * @return devuelve el vector con la concatenación y la media.
 */

export function meanAndConcatenate(MaC){
    let concatene: string= "";
    let mean: number = 0;
    let result = [];
    let numberOfValues: number = 0;
    for(let i = 0; i < MaC.length; i++){
        if(typeof(MaC[i]) == typeof(concatene)){
            concatene += MaC[i];
        }
        if(typeof(MaC[i]) == typeof(mean)){
            mean += MaC[i];
            numberOfValues ++;
        }
    }
    mean = mean/numberOfValues;
    result.push(mean);
    result.push(concatene);
    return result;
}