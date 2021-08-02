
//IMPORT Y EXPORT - FUNCIONES COMUNES DE ARREGLOS

//1. importo en el index y exporto en la data*******************

import {heroes} from '../data/heroes';     //es una forma de importar}
// console.log(heroes);



//2. importo en el index y exporto en la data*******************
// import heroes from './data/heroes';     //es una forma de importar}
// console.log(heroes);
//y en el export pongo export default



//*****************TAREA(find)********************** */

export const getHeroeById = (id)=>{
    return heroes.find((heroe) =>heroe.id ===id) //callback (solo devuelve un elemento)
}
// console.log(getHeroeById(1))



//*****************TAREA(filter)********************** */

export const getHeroeByOwner = (owner)=>{
    return heroes.filter((heroe) =>heroe.owner === owner) //devuelve nuevo array
}
// // console.table(getHeroesByOwner('DC'))


// OTRAS FORMAS DE IMPORTAR Y EXPORTAR

//Puedo en el import quitar k las {}, cuando en el export uso el dafault ya sea en la misma 
//funcion o arreglo de objetos(debo quitarle el nombre), o lo puedo exportar abajo con algo
//como 
//export default heroes; 

//cuando no uso default debo poner {} en el import
//Si hay exportaciones individuales en un mismo archivo, en el import debo usar {}
//ejemplo export const owners = ['DC', 'Marvel']
//ejemplo export default heores

//import heroes {owners} from './....'
