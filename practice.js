let cadena = "JavaScript";

console.log(cadena[4]);

let mensaje = "hola, mundo";

console.log(mensaje[0])

console.log(mensaje[mensaje.length -1]); // de esta manera se muestra el ultimo indice de un string.
console.log(mensaje[mensaje.length - 4]);




let myArray = [["Danny", 98], ["juancho", 98]];
console.log(myArray[0][0]);
console.log(myArray[0]);
console.log(myArray[1]);

let arrayNums = [1, 2, 4];
console.log(arrayNums)
arrayNums[2] = 3;
console.log(arrayNums);

let arrayNames = ["Daniel", "Andres", "Nicolle"];

arrayNames.push("Juan"); // añadir un elemento en la ultima posicion del arreglo
console.log(arrayNames);

arrayNames.pop(); // eliminar el ultimo elemento de un array

arrayNames.shift(); // eliminar el primer elemento de un array
console.log(arrayNames);

arrayNames.unshift("pablito"); // añadir elementos en la primera posicion del arreglo
console.log(arrayNames);

function Message(){
    console.log("hello, and welcome to the los pollos hermanos family, my names is gustavo, but yo can call me gus.");
}

Message();

function Sumar(num1, num2){
    let suma = num1 + num2;
    console.log(suma);
}

Sumar(5, 3);

function RecibirMensaje(){
    let entrada = prompt("digite su mensaje");
    
    if(entrada == null){
        document.write("No hubo ningún mensaje");
    }
    else{
        document.write("mensaje recibido con exito. ", "el mensaje es: ", entrada);
    }
}

//RecibirMensaje();

function fila(){
    num = prompt("digite un numero: ");
    num2 = prompt("digite otro numero: ");
    num3 = prompt("digite otro numero: ");
    num4 = prompt("digite un numero mas: ");

    let element = [];
    element.push(num);
    element.push(num2);
    element.push(num3);
    element.push(num4);
    let mostrar = element.shift();
    document.write(element);
    document.write(" el elemento removido fue: ", mostrar);
    
}

fila();