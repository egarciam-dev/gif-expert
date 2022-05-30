import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([])

  useEffect( () => {
    getGifs();
  }, [])

  const getGifs = async() => {

    const apiKey = 'api_key=44RJR7JwcvoIwGBSFof5qD7DRsPnABz8';
    const url    = 'https://api.giphy.com/v1/gifs/search?';
    const search_query = 'q=Rick and morty&limit=10&';
    const fullUrl = url + search_query + apiKey;
    const resp = await fetch( fullUrl );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    setImages(gifs);

  }

  return (
    <div>
      <h3>{category}</h3>
      {
        images.map( img => (
          <GifGridItem 
  	      key={ img.id }
          { ...img }
          />
        ))
      }
    </div>
  )

}
