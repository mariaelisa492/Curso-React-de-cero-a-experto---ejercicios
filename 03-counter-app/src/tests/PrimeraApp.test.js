// import { render } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom'
import{shallow} from 'enzyme'
import { PrimeraApp } from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
    

    // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    //     // const saludo = 'Hola, soy Gokusiiii';
    //     // const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //     // expect(getByText(saludo)).toBeInTheDocument();  //deberias esperar que exista el saludo en el documento
    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />)   

        expect(wrapper).toMatchSnapshot();    

    })

    test('Debe mostrar el año mostrado enviado en props ', () => {

        const saludo = 'Hola, soy Goku';
        const anio = '2021';

        const wrapper = shallow(
                <PrimeraApp 
                saludo = {saludo}
                anio = {anio}
                />
            );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(anio)

        
    })
    
    


    
})
