import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; 
    //    setCategories([...categories, 'valorant']);
          setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory={value => onAddCategory(value)}
        // setCategories={setCategories} 
        />
            { categories.map((category) =>
                (<GifGrid key={category} category={category} />))
            }
        </>

    )
}
