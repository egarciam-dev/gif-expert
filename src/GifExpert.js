// Created this componet using rafc snippet

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpert = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = (category) => {
    //    //setCategories( [...categories, 'Naruto'] );
    //    setCategories( cats => [ ...cats, 'Naruto']);
    // }

  return (
      <>
        <h2>GifExpert</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ul>
            { categories.map( category =>
                <GifGrid 
                    category={category}
                    key={category} 
                />
                ) 
            }
        </ul> 

      </>

  )


}