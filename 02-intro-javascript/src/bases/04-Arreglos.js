// ARREGLOS

const arreglo = [1, 2, 3, 4];
// podria usar arreglo.push(5); pero no lo voy a utilizar

const arreglo2 = [...arreglo, 5]; // spreed operation para copiar el arreglo anterior, abriendole los corchetes y añadiendo el 5

console.log(arreglo);
console.log(arreglo2);


//uso del map para copiar un arreglo pero hacer algo con el por cada posicion, este no hace copia de la referencia

const arreglo3 = arreglo2.map(function(numero){   //me permite no dañar los otros arreglos
    return numero*2
})

console.log(arreglo3);


//lo que esta dentro del map es un callback


