'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];

  let aux = 2;

  while(num > 1){
    if(num % aux === 0){
      array.push(aux);
      num = num / aux;
    }else{
      aux++;
    }
  }
  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    let aux;

    for(let i = 0; i < array.length; i++){
      for(let j = i+1; j < array.length; j++){
        if(array[i] > array[j]){
          aux = array[i];
          array[i] = array[j];
          array[j] = aux; 
        }
      }
    }
    return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: [5]  [10, 1 , 0 , 8 , 3]

  
  for(let i = 1; i < array.length; i++){
    let aux = array[i];
    let j = i - 1;
    while(array[j] > aux && j >= 0) {
        array[j+1] = array[j];
        j--;          
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:   [20, 12, 50, 3, 44, 38, 5, 47, 15]


 // let minimo = array[0];
  for(let i = 0; i < array.length; i++){
    let minimo = i; // minimo 0
    for(let j = i+1; j < array.length; j++){ // j vale 12
      if(array[j] < array[minimo]){ //
        minimo = j;
      }
    }
    if(i !== minimo){
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
