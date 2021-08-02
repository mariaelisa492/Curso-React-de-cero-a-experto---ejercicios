//ASYNC AWAIT

//*******************DE LA FORMA LARGA Y ENREDADA *************** */

//ESTE CODIGO ES MUY LARGO

// const getImagenPromesa = () => {
//     const promesa = new Promise ((resolve, reject) => {
//         resolve('https://askjdafhafkdkd.com')
//     })
//     return promesa;
// }
// getImagenPromesa().then(console.log)



//************UN POCO MÁS SIMPLIFICADO*********** */

// const getImagenPromesa = () => new Promise (resolve => resolve('https://askjdafhafkdkd.com'))
// getImagenPromesa().then(console.log)



//************AHORA UTILIZANDO ASYNC y AWAIT*********** */ el await ayuda a que sea sincrono- debe estar dentro de una funcion async

const getImagen = async () => {                     //el async me hace que la función retorne ahora una promesa/asincrona

    try {
        const apiKey = 'Lle9q3lCkBr8ELfO1SJE5mJZkjbkl0C2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //es la respuesta de la peticion
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo del error
        console.error(error)
    }
}
getImagen();                                     //obtenemos el mismo resultado de arriba






