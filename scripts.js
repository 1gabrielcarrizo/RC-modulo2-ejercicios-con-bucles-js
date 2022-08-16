/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.


3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….


7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1


8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……


9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10


10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


Ejercicios con Math
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


12- Realiza un script que genere un número aleatorio entre 1 y 99


Ejercicios con String
13- Realiza un script que pida un texto y lo muestre en mayúsculas.


14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


15- Realiza un script que cuente el número de vocales que tiene un texto.


16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let opcion = parseInt(prompt('Ingrese un numero entre 1-17 para elegir un ejercicio a desarrollar'))

switch(opcion){
    case 1:
        alert('1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.')

        let edad = parseInt(prompt('Ingresar una edad'));
        if(isNaN(edad)){
            document.write('El valor ingresado no es un numero')
        }else if(edad>18){
            document.write(`${edad} es mayor que 18, por lo tanto puede conducir`)
        }else if(edad == 18){
            document.write('El valor ingresado es igual a 18, por lo tanto puede conducir')
        }else {
            document.write(`${edad} es menor que 18, por lo tanto no puede conducir`)
        }
    break;
    case 2:
        alert('2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:\n\n0-2: Muy deficiente\n3-4: Insuficiente\n5-6: Suficiente\n7: Bien\n8-9: Notable\n10: Sobresaliente\n\nSi ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.')

        let nota = parseInt(prompt('Ingrese una nota entre 0-10'));

        if(isNaN(nota)){
            document.write('El valor ingresado no es un numero')
        }else{
            switch (nota) {
                case 0:
                case 1:
                case 2:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es MUY DEFICIENTE`)
                break;
                case 3:
                case 4:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es INSUFICIENTE`)
                break;
                case 5:
                case 6:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es SUFICIENTE`)
                break;
                case 7:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es esta BIEN`)
                break;
                case 8:
                case 9:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es NOTABLE`)
                break;
                case 10:
                    alert(`El valor introducido es ${nota} por lo tanto la nota es SOBRESALIENTE`)
                break;
                default:
                    document.write(`${nota} no se encuentra entre el rango de 0-10, por favor introduce un numero en ese rango`)
            }
        }
    break;
    case 3:
        alert('3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.\n\nNota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp')

        let texto = ''
        while(confirm('Quiere ingresar una palabra?')){
            texto = texto + prompt('Ingrese una palabra') + '-'
        }
        document.write(texto)
    break;
    case 4:
        alert('4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.')

        let num
        let acumulador = 0
        while(confirm('Quiere ingresar un numero?')){
            num = parseInt(prompt('Ingrese un numero por favor'))
            if(isNaN(num)){
                alert('El valor ingresado no es un numero')
            }else{
                acumulador += num
                document.write(`Numero ingresado: ${num}` + '<br>')
            }
        }
        document.write(`La suma total es ${acumulador}`)
    break;
    case 5:
        alert('5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).\n\nEl algoritmo para calcular la letra del dni es el siguiente :\n\nEl número debe ser entre 0 y 99999999\nDebemos calcular el resto de la división entera entre el número y el número 23.\nSegún el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) \nSi lo introducido no es un número deberá indicarse con un alert y volver a preguntar.\nDeberá de repetirse el proceso hasta que el usuario pulse «cancelar».')

        const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

        while(confirm('Quiere ingresar un DNI?')){
            const dni = prompt('Introduce tu DNI');
            if(isNaN(parseInt(dni))){
                alert('El valor ingresado no es un numero')
            }else if(dni.length == 8 && parseInt(dni)>0){
                document.write(`Tu DNI completo es ${dni}-${letras[dni%23]}` + '<br>')
            }else{
                alert('El numero de DNI tiene que tener 8 digitos y tiene que ser mayor que 0 y menor que 99999999')
            }
        }
    break;
    case 6:
        alert('6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :\n\n1\n22\n333\n4444\n55555\n666666\n…….')

        for(let i=1; i<=30; i++){
            for(let j=1; j<=30; j++){
                if(j<=i) document.write(i)
            }
            document.write('<br>')
        }
    break;
    case 7:
        alert('7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).\n\n303030303030303030303030303030303030303030303030303030303030\n2929292929292929292929292929292929292929292929292929292929\n28282828282828282828282828282828282828282828282828282828\n…..\n333\n22\n1')

        let number = parseInt(prompt('Ingrese un numero entre [1-50]'))

        if(isNaN(number)){
            document.write('El valor ingresado no es un numero')
        }else if(number<1 || number>50){
            document.write('El numero ingresado no se encuentra en el rango de [1-50]')
        }else{
            for(let i=number; i>=1; i--){
                for(let j=number; j>=1; j--){
                    if(j<=i) document.write(i)
                }
                document.write('<br>')
            }
        }
    break;
    case 8:
        alert('8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) \n\n1\n12\n123\n1234\n12345\n123456\n……')

        let numerito = parseInt(prompt('Ingrese un numero entre [1-50]'))

        if(isNaN(numerito)){
            document.write('El valor ingresado no es un numero')
        }else if(numerito<1 || numerito>50){
            document.write('El numero ingresado no se encuentra en el rango de [1-50]')
        }else{
            for(let i=1; i<=numerito; i++){
                for(let j=1; j<=numerito; j++){
                    if(j<=i) document.write(i)
                }
                document.write('<br>')
            }
        }
    break;
    case 9:
        alert('9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :\n\n1\n2\n3\n4 (Múltiplo de 4)\n5-\n————————————————————-\n\n6\n7\n8 (Múltiplo de 4)\n9 (Múltiplo de 9)\n10')

        for(let i=1; i<=500; i++){
            if(i%4 === 0 && i%9 === 0 && i%5 === 0){
                document.write(`${i} (multiplo de 4 y de 9)` + '<br>————————————————————<br>')
            }else if(i%4 === 0 && i%9 === 0){
                document.write(`${i} (multiplo de 4 y de 9)` + '<br>')
            }else if(i%4 === 0 && i%5 === 0){
                document.write(`${i} (multiplo de 4)` + '<br>————————————————————<br>')
            }else if(i%4 === 0){
                document.write(`${i} (multiplo de 4)` + '<br>')
            }else if(i%9 === 0 && i%5 === 0){
                document.write(`${i} (multiplo de 9)` + '<br>————————————————————<br>')
            }else if(i%9 === 0){
                document.write(`${i} (multiplo de 9)` + '<br>')
            }else if(i%5 === 0){
                document.write(`${i}` + '<br>————————————————————<br>')
            }else{
                document.write(`${i}` + '<br>')
            }
        }
    break;
    case 10:
        alert('10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.')

        let fila = parseInt(prompt('Ingrese la cantidad la cantidad de filas'))
        let columna = parseInt(prompt('Ingrese la cantidad la cantidad de columnas'))
        let resultado = fila*columna

        if(isNaN(fila) || isNaN(columna)){
            document.write('Las filas y/o columnas, no son numeros')
        }else if(fila <0 || columna < 0){
            document.write('Las filas y/o columnas no pueden ser numeros negativos')
        }else{
            for(let i=columna; i>=1; i--){
                for(let j=fila; j>=1; j--){
                    document.write(resultado + '\t')
                    resultado--
                }
                document.write('<br>')
            }
        }
    break;
    case 11:
        alert('Ejercicios con Math\n11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *\n\nNota: ver funcion Math() https://www.w3schools.com/js/js_math.asp')

        let nombre1 = prompt('Ingrese el nombre de la persona 1').toLowerCase()
        let edad1 = parseInt(prompt('Ingrese la edad de la persona 1'))

        let nombre2 = prompt('Ingrese el nombre de la persona 2').toLowerCase()
        let edad2 = parseInt(prompt('Ingrese la edad de la persona 2'))

        let nombre3 = prompt('Ingrese el nombre de la persona 3').toLowerCase()
        let edad3 = parseInt(prompt('Ingrese la edad de la persona 3'))

        if(isNaN(edad1) || isNaN(edad2) || isNaN(edad3)){
            document.write('La edad 1, 2 o 3 no es un numero')
        }else if(edad1==edad2 || edad1==edad3){
            document.write('2 o mas personas tienen la misma edad')
        }else if(edad1<=0 || edad2<=0 || edad3<=0){
            document.write('La edad no puede ser menor o igual que 0')
        }else if(edad1>edad2 && edad1>edad3){
            document.write(`${nombre1} [${edad1}] es mayor que ${nombre2} [${edad2}] y ${nombre3} [${edad3}]`)
        }else if(edad2>edad3){
            document.write(`${nombre2} [${edad2}] es mayor que ${nombre1} [${edad1}] y ${nombre3} [${edad3}]`)
        }else{
            document.write(`${nombre3} [${edad3}] es mayor que ${nombre1} [${edad1}] y ${nombre2} [${edad2}]`)
        }
    break;
    case 12:
        alert('12- Realiza un script que genere un número aleatorio entre 1 y 99')

        document.write(Math.round(Math.random() * (99 - 1)+1))
    break;
    case 13:
        alert('Ejercicios con String\n13- Realiza un script que pida un texto y lo muestre en mayúsculas.')

        let mayuscula = prompt('Ingrese un texto cualquiera para transformarlo en letras mayusculas').toUpperCase()
        document.write(mayuscula)
    break;
    case 14:
        alert('14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.')

        let cadena = prompt('Ingrese un texto cualquiera')
        let nuevaCadena = ''

        for(let letrita of cadena){
            nuevaCadena += letrita + '-'
        }
        
        document.write(nuevaCadena)
    break;
    case 15:
        alert('15- Realiza un script que cuente el número de vocales que tiene un texto.')

        const palabra = prompt('Introduce un texto').toLocaleLowerCase()

        let vocales = 0

        for(const letra of palabra){
            if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
                vocales++
            }
        }
        document.write(`Tu palabra tiene ${palabra.length} letras en total (contando tambien los espacios) y contiene ${vocales} vocales`)
    break;
    case 16:
        alert('16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.')

        let textito = prompt('Introduce un texto')
        let nuevoTexto = ''

        for(let text of textito){
            nuevoTexto = text + nuevoTexto
        }

        document.write(nuevoTexto)
    break;
    case 17:
        alert('17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.')

        let palabrita = prompt('Introduce un texto').toLocaleLowerCase()
        let posicion = 0

        for(let i = 0; i<palabrita.length; i++){
            if(palabrita.charAt(i) == 'a' || palabrita.charAt(i) == 'e' || palabrita.charAt(i) == 'i' || palabrita.charAt(i) == 'o' || palabrita.charAt(i) == 'u'){
                posicion = i
                break
            }
        }
        document.write(`La primera vocal se encuentra en la posicion ${posicion}`)
    break;
    default: document.write(`Ingresaste un numero y/o caracter diferente`)
}