type cardPoint = [number,number];

/**
 * Recibe dos puntos y el tamaño de un tablero, y indica los pasos que hay que recorrer para llegar
 * desde el inicio hasta el fin.
 * @param X, @param Y,las dimensiones del tablero 
 * @param initPoint, @param endPoint el punto de inicio y el punto de fin.
 * @return devuelve un vector con los pasos para llegar desde el punto inicial al final.
 */

export function agent(X:number,Y:number,initPoint: cardPoint, endPoint: cardPoint){
    let result = [];
    let north:cardPoint = [1,0];
    let south:cardPoint = [-1,0];
    let east:cardPoint = [0,1];
    let west:cardPoint = [0,-1];
    while(initPoint[0] !== endPoint[0] && 0 < initPoint[0] && initPoint[0] < X){
        if(initPoint[0] < endPoint[0]){
            initPoint[0] += north[0];
            result.push("north");
        }
        else{
            initPoint[0] += south[0];
            result.push("south");
        }
    }
    while(initPoint[1] !== endPoint[1] && 0 < initPoint[1] && initPoint[1] < Y){
        if(initPoint[1] < endPoint[1]){
            initPoint[1] += east[1];
            result.push("east");
        }
        else{
            initPoint[1] += west[1];
            result.push("west");
        }
    }
    if(result == []){
        console.log("Error con los datos introducidos");
        return;
    }
    return result;
}