let longitud = 10;

function crearArray(n) {
    let array = []
    for(i = 0; i < n; i += 1) {
        array[i] = i + 1;
    }
    
    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);