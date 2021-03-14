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