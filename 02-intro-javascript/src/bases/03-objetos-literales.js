//Objetos literales tambien conocidos como diccionarios (python)

const person = {
    name: "Maria",
    lastName: "Hernandez",
    Age: 29
};
// console.table(person)  // para ver el objeto en una tabla desde consola >> muestra objeto impreso pero sin el nombre person
// console.log(person) //asi solo me imprime objetc, sin el nombre person


const otherPerson = {
    name: "Jhonatan", 
    lastName: "Sosa",
    Age: 28 
}

// console.log({otherPerson}); // para imprimir en consola el nombre del objeto
// console.log({person}); //puedo ver el nombre del objeto

// console.table({otherPerson});
// console.table({person});


const person2 = {
    name: "Maria",
    lastName: "Hernandez",
    Age: 29,
    direction:{
        Apto: "Pomona",
        Postal: 100021
    }
};

//si yo quiero hacer una copia del objeto no puedo hacer
// const person3 = persona
//porque me hace una copia de la referencia, es decir si cambio uno, cambia el otro igual


//tengo que usar el SPRED OPERATION ...   este hace copias del objeto

const person3 = {...person};   // estoy haciendo una copia en otro espacio de memoria de person
console.log(person3)

