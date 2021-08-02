import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes";


describe('Pruebas en documento import y export', () => {

    test('Debe retornar un héroe por Id ', () => {

        const id=1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( (h) => h.id === id );

        expect(heroe).toEqual(heroeData);
        
    });

    test('Debe retornar un undefined si no hay un héroe con el id especificado ', () => {

        const id=10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
        
    });


    test('Debe retornar un arreglo con los héroes de DC ', () => {

        const owner = 'DC';
        const heroe =  getHeroesByOwner(owner);

        const heroesHouse = heroes.filter( (h) => h.owner === owner );

        expect(heroe).toEqual(heroesHouse);
        
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes =  getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        
    });
    
})
