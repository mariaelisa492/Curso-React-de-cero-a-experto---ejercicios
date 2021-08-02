import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Pruebas en desestructuración', () => {

    test('retornaArreglo debe retornar un string y un numero', () => {

        // const arr = retornaArreglo();  //  return ['ABC', 123]
        const [letras, numeros] = retornaArreglo();

        // expect(arr).toEqual(['ABC', 123])
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')


    })  
})
