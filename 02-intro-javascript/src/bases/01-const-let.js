//vamos a trabajar solo con const y let

//const: variables que no van a cambiar o no se van a renombrar
//let: son variables de scoope// ambito de bloque

const nombre = "Maria";   //si yo no voy a cambia el valor de nombre y apellido entonces lo pondo como constante
const apellido = "Hernandez";

let valorDado = 5;
valorDado = 4; //si tengo plantes de cambiar el valor del dado lo dejo como let

console.log(nombre, apellido, valorDado)

if(true){
    let valorDado = 10  // este let solo vive en este context
    console.log(valorDado)
}

console.log(valorDado);  // el let tiene valor de scoope 



//scoope o alcance: se refiere a la visibilidad de las variables. Pueden ser visibles globalmente, o solo ser visibles por ejemplo para la función que las contiene

//se ejecuta en el contexto de un objeto especifico. Contexto se refiere al objeto al que pertenece un metodo de javascript(this)


// var declara una variable de scope(alcance) global o local para la función sin importar el ámbito de bloque. Permite hoisting.

// let declara una variable de scope global, local para la función o de bloque. Es reasignable y no permite hoisting.

// const declara una variable de scope global, local para la función o de bloque. No es reasignable, pero es mutable. No permite hoisting.

// En general, let sería todo lo que se necesita dentro de un bloque, función o ámbito global. const sería para variables que no van sufrir una reasignación. var se puede relegar para cuando necesitemos hacer hoisting, vamos, casi nunca.