var numbers = [];
var numero = "";
var operacion = false;
var mensaje = "";

function saveNumbers(a) {
    
    numero = numero + a;
    mensaje = numero;
    document.getElementById('showNumbers').innerHTML = mensaje;
    console.log("función prueba: " + numero);
}


function opera(op){

    operacion = true;
    numbers.push(parseInt(numero), op);
    mensaje = numbers.reduce((acc, curr) => acc + " " + curr, "");
    document.getElementById('showNumbers').innerHTML = mensaje;
    console.log(numbers);
    numero = ""; 
}


function resultado() {
    numbers.push(parseInt(numero));
    console.log(numbers);

    var result = 0;

    if (operacion == true) {

        for(let i = 0; i < numbers.length; i += 1) {

        result = result + numbers[i];
        
        }
    }

    console.log(eval(result));
    // var r = parseInt(result);
    mensaje = eval(result);
    document.getElementById('showNumbers').innerHTML = mensaje;
    numbers = [];
    numero = mensaje;
    operacion = false;
}


function reset() {
    mensaje = "";
    document.getElementById('showNumbers').innerHTML = mensaje;
    numero = "";
    numbers = [];
    operacion = false;
}









