type PointN = [number,number,number,...number[]];

/**
 * Recibe dos puntos y los suma.
 * @param PointN1, @param PointN2 los 2 puntos que van a ser sumados.
 * @return devuelve el valor de la suma de los dos puntos.
 */

export function pointNSum(PointN1: PointN,PointN2: PointN){
    let sumResult:PointN = [0,0,0];
    if(pointN1.length != pointN2.length){
        console.log("No se pueden operar con puntos de distintas dimensiones");
        return;
    }
    for(let i = 0; i < PointN1.length; i++){
        sumResult[i] = PointN1[i] + PointN2[i];
    }
    return sumResult;
}

/**
 * Recibe un punto y lo multiplica por un valor.
 * @param Point1, @param numMult el punto y el valor que lo va a multiplicar.
 * @return devuelve el valor de la multiplicación.
 */

export function pointNProd(PointN:PointN,numMult: number){
    let prodResult:PointN = [0,0,0];
    for(let i = 0; i < PointN.length; i++){
        prodResult[i] = PointN[i] * numMult
    }
    return prodResult;
}

/**
 * Recibe dos puntos y calcula la distancia euclidea.
 * @param Point1, @param Point2 los 2 puntos que de los que se va a calcular la distancia.
 * @return devuelve el valor de la distancia euclidea.
 */

export function pointNEuc(PointN1:PointN, PointN2:PointN){
    if(pointN1.length != pointN2.length){
        console.log("No se pueden operar con puntos de distintas dimensiones");
        return;
    }
    let eucResult:number = 0;
    for(let i = 0;i < PointN1.length;i++){
        eucResult += (PointN2[i] - PointN1[i])^2;
    }
    return Math.sqrt(eucResult);   
}

let pointN1:PointN = [2,20,5,10];
let pointN2:PointN = [100,50,20,30];
console.log(pointNSum(pointN1,pointN2));
console.log(pointNProd(pointN1,4));
console.log(pointNEuc(pointN1,pointN2));