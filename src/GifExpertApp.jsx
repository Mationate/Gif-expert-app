import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'One piece']);
    
    const onAddCategory = () => {
    //    setCategories([...categories, 'valorant']);
          setCategories(cat =>[...cat]);
    }

    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory/>
        {/* listado de gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map(category =>{
                return <li key={category} >{category} </li>
            }) }
            {/* <li></li> */}
        </ol>
            {/* gif item */}
        </>

    )
}
