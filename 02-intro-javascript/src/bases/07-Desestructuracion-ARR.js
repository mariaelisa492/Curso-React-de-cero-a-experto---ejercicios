//****************DESESTRUCTURACION DE ARREGLOS********************

// const personajes = ['Goku', 'Vegeta', 'Trunks']; //con corchetes pongo un nombre el que sea, va a reconocer la posicion 0 del array
// const[p1] = personajes;
// console.log(p1)



//**********PUEDO DESESTRUCTURAR OTROS ELEMENTOS DEL ARRAY CON COMAS************** 
// const personajes = ['Goku', 'Vegeta', 'Trunks']; 
// const[, , p2] = personajes;
// console.log(p2)



//*****************DESESTRUCUTRAR EL RETURN DE UNA FUNCION**************** */

// const retornaArreglo = () => {
//     return ['ABC', 123];
// }
// const [letras, numeros] = retornaArreglo();  //hago la desestruturación del return de la funcion
// console.log(letras, numeros);



/***************************************TAREA************************* */
//Una solucion declarando las dos let del inicio

// const user1 = (valor) => {
//     return [valor, ()=>{console.log('Hola Mundo') } ];
// }

// let nombre, userNombre;
// [nombre, userNombre] = user1('Goku');

// console.log(nombre)
// userNombre()


//Otra solucion
const user1 = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo') } ];
};

const [nombre, userNombre] = user1('Goku');
console.log(nombre)
userNombre()


