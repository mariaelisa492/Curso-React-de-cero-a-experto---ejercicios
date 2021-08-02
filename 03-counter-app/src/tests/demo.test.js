//Todas las pruebas test irian en el describe, se ve más ordenado

describe('Pruebas en el archivo demo.test.js', ()=>{

    test('Deben ser iguales los string', () => {            // primer argumento es un string
        
        //1.Inicialización
        const mensaje = 'Hola Mundo';
    
        //2. Estimulo
        const mensaje2 = "Hola Mundo";
    
        //3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2);  //===
    
    })

})





