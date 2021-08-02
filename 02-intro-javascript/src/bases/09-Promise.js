// PROMISE 

import {getHeroeById} from './bases/08-Import-Export';


// const promesa = new Promise((resolve, reject) => {   // es una convención que se llamen asi

//     setTimeout(() => {               //permite ejecutar una tarea y ejecutar un callback
//         const p1 = getHeroeById(2)
//         resolve(p1)              //cuando esta tarea termine, llama al resolve, para que notifique a quien este escuchando en el then, y luego el se ejecute, recibiendo en then lo que el resolve  le envie
//     }, 2000)

// });

// promesa.then((heroe)=>{    //then, la promesa se hizo correctamente. 
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));



//******************************* */

const getHeroeByIdAsync = (id) => {

   return new Promise((resolve, reject) => {   //debemos retornar la promesa

        setTimeout(() => {              
            const p1 = getHeroeById(id)
            if(p1 !== undefined) resolve(p1) 
            else reject('Error, no fue posible encontrar al héroe')            
        }, 2000)
    
    });
}

getHeroeByIdAsync(1)
    .then((heroe) => console.log('Heroe', heroe)) // puede escribirse como console.log y listo, el recibe la referencia del resolve
    .catch((err)=>console.warn(err))               // puede ponerse solo console.warn, el recibe lo que envie el reject