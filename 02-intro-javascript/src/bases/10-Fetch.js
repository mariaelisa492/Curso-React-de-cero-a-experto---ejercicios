//FETCH: permite hacer peticiones HTTP asíncronas (AJAX)Javascript Asyncronus (JSON)>>>
//vamos a utilizar Fetch(utiliza promesas y permite hacer  lo mismo.)

//urilizar Ajax, se puede hacer con JQUERY(libreria externa)GET-POST
//otra opción para hacer peticiones es AXIOS(lireria externa)
//otra opción es API FETCH(libreria propia js)>>> regresa como resultado una promesa


//*********************USAREMOS FETCH*********************** */ 
//FETCH ya vienen en el navegador y no necesitamos instalar nada

const apiKey = 'Lle9q3lCkBr8ELfO1SJE5mJZkjbkl0C2';

const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
        .then(resp => resp.json())   //return implitico: este tiene una respuesta. Retorna una promesa
        .then(({data}) => {       //esa promesa es pasada al siguiente then, la desestructuramos
            
            const {url} = data.images.original;    //console.log(data.images.original.url)me interesa de data, las images y el original
            
            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
            
        })
        .catch(console.warn);
