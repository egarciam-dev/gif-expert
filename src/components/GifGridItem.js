import React from 'react'

export const GifGridItem = ( {id, title, url } ) => {

  return (
    <div>
        <img src={ url } alt={ title }/>
        <h2>{title}</h2>
    </div>
)
}
