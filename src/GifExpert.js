// Created this componet using rafc snippet

import React, { useState } from 'react'

export const GifExpert = () => {

   // const categories = ['One Punch Man', 'Spider Man', 'Goku']

    const [categories, setCategories] = useState(['One Punch Man', 'Spider Man', 'Goku']);

    const handleAdd = (category) => {
        //setCategories( [...categories, 'Naruto'] );
        setCategories( cats => [ ...cats, 'Naruto']);
    }

  return (
      <>
        <h2>GifExpert</h2>
        <hr />

        <button onClick={ handleAdd } >Agregar categoría</button>

        <ul>
            { categories.map( category => {
                return <li key={category}>{category}</li>
            } ) }
        </ul> 

      </>

  )


}