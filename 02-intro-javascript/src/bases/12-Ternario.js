// OPERADOR TERNARIO

//*****************forma convencional del if*****************

const activo = true;
// let mensaje= '';
//  if(activo){
//      mensaje = 'Activo';
//  }else{
//      mensaje = 'Inactivo';
//  }console.log(mensaje)


//*****************con ternario ?  :  *****************

// const mensaje = (activo) ? 'Activo' : 'Inactivo'
// console.log(mensaje)



//*****************con ternario más corto sin el else *****************

const mensaje = activo && 'Activo'
console.log(mensaje)


