// Este componete debe recibir la función de setCategories desde
// el componente que lo renderiza.

import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ] );
        }
    }

  return (
    <form onSubmit={ handleSubmit } >
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form>
  )
}
