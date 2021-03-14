/**
 * Recibe un vector de string para comprobar si estas strings están encadenadas o no.
 * @param words Vector de strings con las palabras a revisar
 * @show Muestra por pantalla la concatenación de las letras repetidas en cada palabra si la string es
 * válida, indica error al encadenar en otro caso
 */

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