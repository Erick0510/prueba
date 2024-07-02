function operacion() {
const one = document.getElementById('one').value;
const two = document.getElementById('two').value;
// const op = [document.getElementById('s').value, document.getElementById('r').value, document.getElementById('m').value, document.getElementById('d').value];

const select = document.getElementById('ope').value;

var result = 0;
var mensaje = "";

switch (select) {

    case "suma":
        const numero = parseInt(one);
        const numeroDos = parseInt(two);
        result = numero + numeroDos;
        mensaje = one + " + " + two + " = " + result;
        document.getElementById('screen').innerHTML = mensaje;
        mensaje = "";
       
        break;

    case "resta":
        result = one - two;
        mensaje = "El resultado es: " + result;
        document.getElementById('screen').innerHTML = mensaje;
        mensaje = "";
       
        break;
    
    case "Multiplicacion":
        result = one * two;
        mensaje = "El resultado es: " + result;
        document.getElementById('screen').innerHTML = mensaje;
        mensaje = "";
        
        break;
    
    case "division":
        result = one / two;
        mensaje = "El resultado es: " + result;
        document.getElementById('screen').innerHTML = mensaje;
        mensaje = "";
        break;

    default: 
    console.log("Error");

}

console.log(result); 
}

function division() {
    var message = "Hola, soy una variable"
    calculo(message);

}


// function calculo(m) {
//     console.log(m);
// }


function primeraFuncion(valor) {
    console.log(valor);
}

function segundaFuncion() {
    var localVar = "Soy una variable local";
    primeraFuncion(localVar); // Pasa la variable local como parámetro
}

// segundaFuncion(); // Imprime: Soy una variable local





function multipicacion(one, two) {

    const resultado = two * one;
    console.log(resultado);


}







