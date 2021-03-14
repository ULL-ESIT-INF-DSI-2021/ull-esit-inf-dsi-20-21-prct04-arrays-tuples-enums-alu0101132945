type cardPoint = [number,number];
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