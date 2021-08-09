import React, {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from './herlpes/getGifs';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {                   //es el ComponentDidMount, permite que no se vuelva a ejercutar el fetch
        getGifs(category)
        .then(gifs=>setImages(gifs))     //podria dejar solo el setImages
    }, [category])                        //si la categoria cambia, quisiera volver a ejecutar el efect


    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                    key={img.id}
                    {...img}/>   //aqui estoy mandando cada propiedad de las props como propiedad independiente
                ))
            }
        </div>
        </>
    )
}
