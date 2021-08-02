import React from 'react';
import '@testing-library/jest-dom';
import{shallow} from 'enzyme';
import { CounterApp } from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />) 

    beforeEach(()=> {
        wrapper = shallow(<CounterApp />)       //se ejecuta antes de cada test, inicializa el counterApp
    })
        
    test('Debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('Debe mostrar el counter pasado por default en props ', () => {
        const wrapper = shallow (<CounterApp value = {100}/>);
        const contadorBotton = wrapper.find('h2').text();
        expect(contadorBotton).toBe('100')
    });


    test('Debe incrementar al hacer click en +1 ', () => {

        wrapper.find('button').at(0).simulate('click');
        const contadorBotton = wrapper.find('h2').text();
        expect(contadorBotton).toBe('101');
    });

    test('Debe decrementar al hacer click en -1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const contadorBotton = wrapper.find('h2').text();
        expect(contadorBotton).toBe('99');
    })

    test('Debe colocar el valor por defecto en el boton Reset', () => {
        const wrapper = shallow (<CounterApp value = {100}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const contadorBotton = wrapper.find('h2').text().trim();

        expect(contadorBotton).toBe('100')
        
    })
    
    
})
    
