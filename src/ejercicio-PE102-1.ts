/**
 * Metodo que transforma una cadena de ADN en una de ARN
 * @param ADN La cadena de ADN que se va a transformar
 * @returns Una cadena de ARN resultado de la transformacion
 */

export function adnToARN(ADN: string[]): string[] | undefined{
    let error: undefined
        ADN.forEach(ADNs => {
            for(let i: number = 0; i <= ADNs.length; i++){
                if(ADNs[i] === 'A' || ADNs[i] === 'G' || ADNs[i] === 'T' || ADNs[i] === 'C'){continue}
                else{
                    return error
                }
        }
    });
    let ARN: string[]
    ADN.forEach(ADNs => {
        let ARNs: string = ''
        for(let i: number = 0; i <= ADNs.length; i++){
            if(ADNs[i] === 'A') ARNs += 'U' 
            else if(ADNs[i] === 'C') ARNs += 'G'
            else if(ADNs[i] === 'T') ARNs += 'A'
            else if(ADNs[i] === 'G') ARNs += 'C'
            console.log(`la cadena ARN es: ${ARNs}`)
        }
        ARN.push(ARNs)
    });
    return ARN
}

/**
 *  Metodo que transforma una cadena de ARN en una de ADN
 * @param ARN La cadena de ARN que se va a transformar
 * @returns Una cadena de ADN resultado de la transformacion
 */

export function arnToADN(ARN: string[]): string | undefined{
    let error: undefined
        ARN.forEach(ARNs => {
            for(let i: number = 0; i <= ARNs.length; i++){
                if(ARNs[i] === 'A' || ARNs[i] === 'G' || ARNs[i] === 'T' || ARNs[i] === 'C'){continue}
                else{
                    return error
                }
        }
    });
    let ADN: string[]
    ARN.forEach(ARNs => {
        let ADNs: string = ''
        for(let i: number = 0; i <= ARNs.length; i++){
            
            if(ARNs[i] === 'U') ADNs += 'A' 
            else if(ARNs[i] === 'C') ADNs += 'G'
            else if(ARNs[i] === 'A') ADNs += 'T'
            else if(ARNs[i] === 'G') ADNs +='C'
            console.log(`la cadena ADN es: ${ADNs}`)
        }
        ADN.push(ADNs)
    });
    return ADN
}