## Práctica 4 - Arrays, tuplas y enumerados

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los arrays, tuplas y enumerados de TypeScript.

### Ejercicios
Los ejercicios ha desarrollar son los siguientes:

#### Ejercicio-1

El enunciado de este ejercicio es el siguiente:

Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. Para este ejercicio necesita conocer dos cosas sobre las resistencias:

Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.

Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde (valor 5), el valor de la resistencia se traduciría al número 15.

El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores como parámetros.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
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
```
En el que se puede ver que se soluciona creando un bucle guardando las resistencias que son iguales a las pasadas por parametros y luego se transforman en string, se hacen un join, y se devuelven como números.

#### Ejercicio-2

El enunciado del ejercicio es el siguiente:

Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.
Para resolver este ejercicio, escriba una función meshArray que compruebe si las cadenas del array están encadenadas o no. La función recibirá como parámetro un array de cadenas de texto y devolverá:

“Error al encadenar” si las cadenas del array no están encadenadas.
Una cadena de texto que contenga las letras que encadenan las palabras del array. A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
export function meshArray(wordsArray: String[]) {
    let coincidence: boolean;
    let posCoincidence: number;
    let result = '';
    let contCoincidence = 0;
  
    for (let j = 0; j < wordsArray.length - 1; j++) {
      coincidence = false;
      posCoincidence = 0;
      for (let i = wordsArray[j].length - 1; i >= 0; i--) {
        if (!coincidence && wordsArray[j][i] === wordsArray[j + 1][0]) {
          posCoincidence = wordsArray[j].slice(i, wordsArray[j].length).length;
          coincidence = true;
        }
      }
      if (coincidence && wordsArray[j].substr(-posCoincidence, wordsArray[2].length) === wordsArray[j + 1].slice(0, posCoincidence)) {
        result += wordsArray[j].substr(-posCoincidence, wordsArray[2].length);
        contCoincidence++;
      }
    }
    if (contCoincidence === (wordsArray.length - 1)) {
      console.log(result);
    } else {
      console.log('Error al encadenar');
    }
  }
```

En la solucion se va revisando un array con distintas string buscando coincidencias en la parte final de la cadena y la inicial de la siguiente,devolviendo la cadena de los valores encadenados de cada cadena o un error si no se encuentra los encadenados.

#### Ejercicio-3

El enunciado del ejercicio es el siguiente:

Escriba una función meanAndConcatenate que reciba como parámetro un array que incluye caracteres de texto y números. La función deberá devolver como resultado un array con dos valores.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
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
```

En la solucion se declaran dos variables:una string y un number y se van separando los elementos del array segun su tipo y se devuelven según lo que pide el ejercicio.

#### Ejercicio-4

El enunciado del ejercicio es el siguiente:

Dado un array de números, escriba una función moveZeros que reciba como parámetro dicho array y mueva todos los ceros presentes en el array al final del mismo. El array debe mantener el mismo orden respecto al resto de elementos.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
export function moveZeros(arrayZeros){
    let result = [];
    for(let i = 0; i < arrayZeros.length; i++){
        if (arrayZeros[i] != 0){
            result.push(arrayZeros[i]);
        }
    }
    for(let i = 0; i < arrayZeros.length; i++){
        if (arrayZeros[i] == 0){
            result.push(arrayZeros[i]);
        }
    }
    return result;
}
```

La solución se ha implementado buscando primero los numeros distintos de cero y se añaden al vector resultado y después una vez recorrido el vector se recorre otra vez añadiendo los ceros al final.

#### Ejercicio-5

El enunciado del ejercicio es el siguiente:

Cree una función multiplyAll que tome como parámetro un array de números. Esta función deberá devolver como resultado otra función que toma como argumento un único valor numérico y devuelve un nuevo array. El array devuelto por la segunda función debe ser el resultado de la multiplicación de los números del array por el valor numérico que recibe la segunda función. Además, no se debe modificar el primer array.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
export function multiplyAll(multiplyArray){
    let result = [];
    return (num:number) => {
        for(let i = 0; i < multiplyArray.length; i++){
            result.push(multiplyArray[i]*num);
        }
        return result;
    }
}
```

En este ejercicio se ha llamado a una funcion dentro de la función que es la que realiza todas las operaciones de multiplicación dentro del vector

#### Ejercicio-6

El enunciado del ejercicio es el siguiente:

Un punto describe una posición determinada respecto a un sistema de coordenadas preestablecido. Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y). A partir de la siguiente definición, cree un tipo de dato capaz de definir un punto bidimensional.

Además, defina las funciones necesarias para:

1. Sumar y restar dos puntos coordenada a coordenada.
2. Calcular el producto de un punto por un número.
3. Calcular la distancia euclídea entre dos puntos.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
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
```

En este ejercicio se creo un tipo de datos point que sirve para expresar las coordenadas de un punto y luego se procede a hacer las operaciones indicadas en el enunciado con los puntos.

#### Ejercicio-7

El enunciado del ejercicio es el siguiente:

A partir del desarrollo realizado para el ejericio anterior, cree un tipo de datos que sea capaz de definir puntos de 3 o más dimensiones. Esto es, un punto debe tener, como mínimo, tres dimensiones y, como máximo, las que el usuario desee. Además, desarrolle las mismas funciones que en el ejercicio anterior, de modo que puedan operar sobre puntos n-dimensionales. Tenga en cuenta que no se pueden operar los puntos definidos en diferentes sistemas de coordenadas. Es decir, no podemos sumar un punto de tres dimensiones y un punto de cinco dimensiones.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript
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
```

En este ejercicio la implementacion ha seguido la idea inicial del ejercicio anterior pero el type definido como punto ahora permite la declaracion de puntos con n-dimensiones.


#### Ejercicio-8

El enunciado del ejercicio es el siguiente:

A partir de un tablero bidimensional con tamaño [X, Y], donde X es el número de filas e Y el número de columnas. Considere que un agente está situado en un punto del tablero con coordenadas $(x_0, y_0)$ y tiene que llegar a un objetivo $(x_1, y_1)$. Para lograrlo, el agente solo puede realizar movimientos en los puntos cardinales, esto es, Norte, Sur, Este y Oeste. Tenga en cuenta que los movimientos positivos en el eje Y serán hacia el Norte y los negativos hacia el Sur. Del mismo modo, los movimientos positivos en el eje X serán hacia el Este y los negativos hacia el Oeste.

Para resolver este ejercicio se solicita lo siguiente:

Cree el tipo de dato más adecuado para representar los puntos cardinales.
Cree una función que reciba como parámetros las dimensiones del mapa, el punto de origen y el punto de destino del agente. Esta función calculará la ruta necesaria para llegar a dicho punto usando únicamente los movimientos permitidos (no se permiten movimientos en diagonal). El resultado de la función deberá ser un array que incluya todos los pasos que tiene que realizar el agente para llegar a su destino.

La solución que se ha desarrollado para resolver el ejercicio es la siguiente:

```typescript

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
```

En este ejercicio la solución implementada define un tipo de dato para los puntos cardinales, que ademas sirven para cualquier otro punto, a la función se le pasan dos puntos además de las dimensiones del tablero. En la ejecución de la función comprueba los movimientos que se pueden hacer, y si el movimiento es posible se suma a los puntos el valor del movimiento y añade al vector resultado el movimiento realizado,devolviendo este vector cuando la función termina de ejecutarse
