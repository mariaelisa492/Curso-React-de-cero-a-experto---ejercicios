
//FUNCIONES

function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar('Maria'));

//De esta manera es muy facil pisar a saludar con algo como
//saludar = 30 >>>>>> ahora saludar imprimiria 30


//******************************************************
//De esta manera evitamos pisar las variables USAR CONST

const saludarNew = function(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludarNew('Margarita'));



//*********************************************************** */
//FUNCIONES FLECHA - ARROW FUNCTION

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Jhonatan'));


// El return podria ir en la misma linea cuando es solo un return(resumida)
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Sofia'));

//Sin argumentos con arrow function
const saludar4 = () => `Hola mundo`;
console.log(saludar4());

// Puedo quitar el return usando parentesis para que Js entienda que estoy devolviendo ese bloque
const getUser = () => ({
    uId: 'ABC123',
    username: 'Loki'
});
console.log(getUser());

//TAREA CURSO---->> FUNCION FLECHA Y RETURN IMPLICITO

// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABS567',
//         username: nombre
//     }
// };
// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo)


const getUsuarioActivo = (nombre) => ({
    uid: 'ABS567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Maria');
console.log(usuarioActivo);



