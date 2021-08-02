//Desestructuración OBJETOS >>> Destructuring (asignación desestructurante)


//*****************************ASI SERIA SIN DESESTRUCTURAR****************************** */

// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman'
// };
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);




//**************************ASI SERIA con DESESTRUCTURAR******************************** */

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango:'Soldado'
};

// const {nombre} = persona;       // >>> extrae lo que ponga en las llaves, de este objeto persona. Estoy creando una constante nombre, que tendra el valor la extracción de persona.nombre del objeto
// console.log(nombre);

// const {nombre, edad, clave} = persona;  //>>> puedo extraer tambien la edad y clave
// console.log(nombre, edad, clave);   // >>>> puedo imprimir asi o por separado cada valor




//***************************MAS USOS - DESESTRUCTURAR EN EL ARGUMENTO************************** */

// const retornaPersona = ({nombre}) =>{
//     console.log(nombre)
// };
// retornaPersona(persona);



// const retornaPersona = ({nombre, edad, clave}) =>{
//     console.log(nombre, edad, clave)
// };
// retornaPersona(persona);



//***************************MAS USOS - PASAR VALORES POR DEFECTO************************** */


// const retornaPersona = ({nombre, edad, rango = 'Capitan'}) =>{ // si el objeto tiene la propiedad usa la de el y sino usa la que le pasamos por defecto
//     console.log(nombre, edad, rango)
// };
// retornaPersona(persona);



//***************************MAS USOS - ************************** */

const usuario= ({clave, edad}) =>{
    return {
        nombreClave: clave, 
        anios: edad
    }
}

const {nombreClave, anios} = usuario(persona);
console.log(nombreClave, anios);