import React from "react";   //tengo que importar react porque estoy usando jsx
import PropTypes from 'prop-types';


export const PrimeraApp = ({saludo, anio})=>{

    // const saludo = 'Hola Mundo';
    // const anio = 2021;     
    
    return (                                                  //debo poner todo dentro de un solo div que los contenga o en el fragment <></>
        <>
        {/* {<pre>{JSON.stringify(saludo, null, 3)}</pre>} */}
        <h1>{saludo}!!!</h1>
        <p>{anio}</p>
        </>
    )
}

PrimeraApp.protoTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {                  //para poner props por default
    anio: '2021'
}



// export default  PrimeraApp;







//vamos a trabajar con FUNCTIONAL COMPONENTES no con componentes de clase
//Este es un functional component exportado