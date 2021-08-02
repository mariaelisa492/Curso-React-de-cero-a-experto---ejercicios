import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en 02-template-string.test.js', ()=>{

    test('getSaludo debe retornar hola Fernando', () => {   //primer test para getSaludo

        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect( saludo ).toBe ('hola ' + nombre);
    })


    test('getSaludo debe retornar hola Carlos si no hay argumento nombre', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe ('hola Carlos');
    })

})