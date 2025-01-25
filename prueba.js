//Crea una función que calcule el índice de masa corporal (IMC) de una persona
//  a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    return peso / (altura*altura);
}
let calculoIMC = calcularIMC(1.55, 50);
console.log(calculoIMC);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
let factorial = calcularFactorial(5);
console.log(factorial);
//Crea una función que convierta un valor en dólares, pasado como parámetro, 
// y devuelva el valor equivalente en reales(moneda brasileña,
// si deseas puedes hacerlo con el valor del dólar en tu país). 
// Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);
//Crea una función que muestre en pantalla la tabla de multiplicar 
// de un número dado como parámetro.
function tablaMultiplicar(numero) {
    for (let i = 0; i <= 12; i++) {
        console.log(numero + ' x ' + i + ' = ' + numero*i);
    }
}
console.log(tablaMultiplicar(5));



