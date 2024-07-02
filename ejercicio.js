var array = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}]
];


var pairs2 = []

function toCollection(arr) {
    var pairs = [];
    for (let i = 0; i < arr.length; i += 1) {
    let caca = arr[i];
    pairs[i] = caca[1];
    pairs[i].id = caca[0];
    }

    

    return pairs
}

let resultado = toCollection(array);
console.log(resultado);