type Point = [number,number];

export function pointSum(Point1: Point,Point2: Point){
    let sumResult:Point = [0,0];
    for(let i = 0; i < Point1.length; i++){
        sumResult[i] = Point1[i] + Point2[i];
    }
    return sumResult;
}

export function pointProd(Point:Point,numMult: number){
    let prodResult:Point = [0,0];
    for(let i = 0; i < Point.length; i++){
        prodResult[i] = Point[i] * numMult
    }
    return prodResult;
}

export function pointEuc(Point1:Point, Point2:Point){
    let eucResult:number = 0;
    for(let i = 0;i < Point1.length;i++){
        eucResult += (Point2[i] - Point1[i])^2;
    }
    return Math.sqrt(eucResult);   
}

