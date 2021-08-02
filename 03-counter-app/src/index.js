import React from 'react';            //el react debe estar importado aqui para usar jsx
import ReactDOM from 'react-dom';
import {CounterApp} from './CounterApp.jsx';
import './index.css';
// import { PrimeraApp } from './PrimeraApp.jsx';

                                                           //para renderizar estos elementos debemos importar ReactDOM, lo va a renderizar en el index.html

const divRoot = document.querySelector('#root');                //aqui obtuve el div donde vamos a renderizar con su #

ReactDOM.render(<CounterApp value={100}/>, divRoot);                      //recibe el componente y donde lo voy a renderizar
// ReactDOM.render(<PrimeraApp saludo='Hola, soy Goku'/>, divRoot); 