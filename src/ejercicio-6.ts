type Point = [number,number];

/**
 * Recibe dos puntos y los suma.
 * @param Point1, @param Point2 los 2 puntos que van a ser sumados.
 * @return devuelve el valor de la suma de los dos puntos.
 */

export function pointSum(Point1: Point,Point2: Point){
    let sumResult:Point = [0,0];
    for(let i = 0; i < Point1.length; i++){
        sumResult[i] = Point1[i] + Point2[i];
    }
    return sumResult;
}

/**
 * Recibe un punto y lo multiplica por un valor.
 * @param Point1, @param numMult el punto y el valor que lo va a multiplicar.
 * @return devuelve el valor de la multiplicación.
 */

export function pointProd(Point:Point,numMult: number){
    let prodResult:Point = [0,0];
    for(let i = 0; i < Point.length; i++){
        prodResult[i] = Point[i] * numMult
    }
    return prodResult;
}

/**
 * Recibe dos puntos y calcula la distancia euclidea.
 * @param Point1, @param Point2 los 2 puntos que de los que se va a calcular la distancia.
 * @return devuelve el valor de la distancia euclidea.
 */

export function pointEuc(Point1:Point, Point2:Point){
    let eucResult:number = 0;
    for(let i = 0;i < Point1.length;i++){
        eucResult += (Point2[i] - Point1[i])^2;
    }
    return Math.sqrt(eucResult);   
}

