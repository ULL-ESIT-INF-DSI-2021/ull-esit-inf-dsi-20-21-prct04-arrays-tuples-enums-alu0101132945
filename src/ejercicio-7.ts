type PointN = [number,number,number,...number[]];

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

export function pointNProd(PointN:PointN,numMult: number){
    let prodResult:PointN = [0,0,0];
    for(let i = 0; i < PointN.length; i++){
        prodResult[i] = PointN[i] * numMult
    }
    return prodResult;
}

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