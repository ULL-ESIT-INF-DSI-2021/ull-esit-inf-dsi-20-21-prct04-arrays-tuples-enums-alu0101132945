export function multiplyAll(multiplyArray){
    let result = [];
    return (num:number) => {
        for(let i = 0; i < multiplyArray.length; i++){
            result.push(multiplyArray[i]*num);
        }
        return result;
    }
}