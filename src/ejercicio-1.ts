export function decodeResistor(band1: string,band2: string){
    enum resistance {negro,marron,rojo,naranja,amarillo,verde,azul,violeta,gris,blanco};
    let resistance1: number;
    let resistance2: number;
    for(let i = 0; i < 10;i++){
        if(band1.toLowerCase() == resistance[i]){
            resistance1 = resistance[resistance[i]];;
        }
        if(band2.toLowerCase() == resistance[i]){
            resistance2 = resistance[resistance[i]]
        } 
    }
    let resultResist: string = String(resistance1) + String(resistance2);
    return Number(resultResist);
}