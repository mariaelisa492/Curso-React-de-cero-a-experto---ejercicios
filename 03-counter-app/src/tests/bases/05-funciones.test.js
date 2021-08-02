import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"



describe('Pruebas en 05-funciones', ()=>{

    test('getUser debe retornar un objeto', () => {
        
        //preparación
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //el estimulo
        const user = getUser();

        //lo que se espera
        expect(user).toEqual(userTest)
    })
    


    test('getUsuarioActivo debe retornar un objeto con el nombre del argumento que recibe', () => {
        
        const nombre = 'Juan'

        //preparación
        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }

        //el estimulo
        const user2 = getUsuarioActivo(nombre);

        //lo que se espera
        expect(user2).toEqual(userTest2)
    })


})
