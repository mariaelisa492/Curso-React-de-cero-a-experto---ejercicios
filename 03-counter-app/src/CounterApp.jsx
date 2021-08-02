import React, {useState} from 'react';
import PropTypes from 'prop-types'


export const CounterApp = ({value = 100}) =>{

    const [counter, setCounter] = useState(value);   // el state es un array con 2 posiciones, en la 0 esta el estado y en el 1 esta la función que permite modificar el estado
                                                    
    //handleAdd
    const handleAdd = () =>{                                                            //puedo hacer la función del onclick afuera o dentro de las {} del onClick
        setCounter(counter+1)
    // o pordria hacerse asi cuando no conozco el counter setCounter((c)=>c+1)
    }

    //handleDelete
    const handleDelete = () => setCounter(counter-1)      //puede ser en una sola linea
    // o pordria hacerse asi cuando no conozco el counter setCounter((c)=>c-1)
    
        

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>   
        <button onClick={()=>setCounter(value)} >Reset</button>
        <button onClick={handleDelete} >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number                         //cuando pongo el required, es cuando es oligatorio y manda warning
}


