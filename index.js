/*var limit = 10;
var fibo = [0,1];


	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i],"   ",Math.pow(fibo[i], 3));
 
	}
*/
  /*import string  //ejercicio realizado en python.

  array = []
  
  for i in range(65, 91):
      array.append(chr(i))
  
  
  for i in range(97, 127):
      array.append(chr(i))
      
  
  palabra = input("Digite El mensaje Olculto \n")
  
  corrimiento = int(input("Digite el corrimiento \n"))
  resultado = ""
  for i in range(len(palabra)):
      for j in range(len(array)):
          if palabra[i]==array[j]:
              letraFinal = j-corrimiento
              resultado+=array[letraFinal]
  print(resultado)
*/

//ejercicio hecho en python

/*
lista = [20, 19, 17, 18, 30, 68, 1 ]

for resultado in lista:
	if resultado  % 2 == 0:
		print( resultado, "es el resultado divisible entre 2") 
*/

function cal_entradas(){
    var dinamix = 18800;
    var tres_D = 15500;
    var dos_D = 11300;
    var resultado;
    var reserva = prompt("Desea reservar? (escriba si o no)");
    var tipo = prompt("Tipo de boleta:");
    var entrada = prompt("Cantidad de boletas:");
    var hora = prompt ("hora de compra");
    var medioPago = prompt("Medio de pago (escriba efectivo o tarjeta): ");
    var descuent_1 = 0.1
    
    if(tipo == "dinamix" && hora<18 && medioPago == "efectivo"){ //en las sentencias condicionales se evalua el
    resultado = dinamix * entrada * descuent_1;                  //tipo de entrada, la hora y si aplica el descuento
    document.write("el descuento es de: ",resultado," ");
    }
    else if(tipo == "dinamix" && hora > 18 && medioPago == "efectivo"){
        resultado = dinamix * entrada * 0.5
        document.write("hora pico, incremento del 50% del valor, el aumento es de: ", resultado)
    }
    else if(tipo == "2d" && hora<18 && medioPago == "efectivo"){
        resultado = dos_D * entrada * descuent_1;
        document.write("el descuento es de: ",resultado, " ");
    }
    else if(tipo == "2d" && hora > 18 && medioPago == "efectivo"){
        resultado = dos_D * entrada * 0.25
        document.write("hora pico, incremento del 25% del valor, el aumento es de: ", resultado)
    }
    else if(tipo == "3d" && hora<18 && medioPago == "efectivo"){
        resultado = tres_D * entrada * descuent_1;
        document.write("el descuento es de: ",resultado, " ");
    }
    else if(tipo == "3d" && hora > 18 && medioPago == "efectivo"){
        resultado = tres_D * entrada * 0.25
        document.write("hora pico, incremento del 25% del valor, el aumento es de: ", resultado)
    }
    

    if (entrada >= 3){
        resultado = resultado - 500
        document.write("has comprado mas de 2 entradas, tienes un descuento adicional de 500.");
        document.write("total: ", resultado)
    }

    if (medioPago == "tarjeta" && tipo == "dinamix"){
        resultado = dinamix * 0.05;
        document.write("has pagado con la tarjeta del cine, tienes un 5% de descuento.")
        document.write("el descuento es: ", resultado);
    }
    else if(medioPago == "tarjeta" && tipo == "2d"){
        resultado = dos_D * 0.05;
        document.write("has pagado con la tarjeta del cine, tienes un 5% de descuento.")
        document.write("el descuento es: ", resultado);
    }
    else if(medioPago == "tarjeta" && tipo == "3d"){
        resultado = tres_D * 0.05;
        document.write("has pagado con la tarjeta del cine, tienes un 5% de descuento.")
        document.write("el descuento es: ", resultado);
    }
    if(reserva == "si"){
        var tipos = dinamix, dos_D, tres_D;
        resultado = tipos * entrada + 2000;
        document.write("el valor a pagar con reserva es: ",resultado)
    }
    
  }
  cal_entradas()