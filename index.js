// ejercicio #5
let MyArray = [1,2,2,3,4,4,4];
let histograma = [];
console.log(MyArray)

for(let i = 1; i <= 5; i++){
    histograma[i] = 0;
}

for(let i=0; i<MyArray.length; i++){
    histograma[MyArray[i]]++;
}

for (let i = 1; i <= 5; i++){
    console.log(i + ": " + "*".repeat(histograma[i]));
}

//ejercicio #6
var myArray, contador, numero;
 
 myArray = [1,5,5,7,6,7,7,1];
 
 for (var i=0 in myArray) {
   for (var a=0 in myArray) {
     if (myArray[a] > myArray[i]) {
       numero = myArray[a];
     }
   }
   contador=0
   for (var b in myArray) {
     if (numero == myArray[b]) {
       contador++;
     }
   }
   
 }
 console.log('el numero es '+ numero +' la longitud es '+ contador);


// ejercicio #7
let array = [4,7,8,2,9,1];
let suma;
for (var i = 0 in array){
  for (var x = 0 in array){
    suma = array[i] + array[x]
    if (suma == 10){
      console.log(array[i], array[x]);
      
    }
  } 
}