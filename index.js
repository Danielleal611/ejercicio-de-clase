var limit = 10;
var fibo = [0,1];


	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i],"   ",Math.pow(fibo[i], 3));
 
	}

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