'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let acumulado = 0;
	var numeroEnBinarioString = String(num);
  let j = 0;
  
  for(let i = numeroEnBinarioString.length; i > 0; i--){
    acumulado = acumulado + (parseInt(numeroEnBinarioString[j]) * Math.pow(2,i-1));
    j++;
  }
  
	return acumulado;
}

function DecimalABinario(num) {
  // tu codigo aca
  let numeroBinario = "";
  let resto;
  
   while(num / 2 !== 0) {
      resto = num % 2;
      num = Math.floor(num / 2);
      numeroBinario += resto;
   } 
   
  let arreglo = [];
  arreglo =  numeroBinario.split('').reverse().join('');
  
  
  return arreglo;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}