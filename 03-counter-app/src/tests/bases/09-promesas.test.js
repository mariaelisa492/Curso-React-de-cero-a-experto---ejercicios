import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import { heroes } from "../../data/heroes";


describe('Pruebas con promesas', () => {

    test('Debe retornar un héroe async', (done) => {     //debe llevar el done
        
        const id = 1; 
        
        getHeroeByIdAsync(id)
            .then(heroe =>{
        
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });
    

    test('Debe obtener un error si el héroe por Id no existe ', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error =>{
        
                expect(error).toBe('No se pudo encontrar el héroe');
                done();     //debo llamarlo para indicar que aqui termina
            })
    });

})
