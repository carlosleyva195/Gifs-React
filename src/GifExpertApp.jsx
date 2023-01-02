import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //HOOK USE STATE
    const [ categories, setCategories ] = useState([ 'demon slayer' ]);

    const onAddCategory = ( newCategory) => {
      if (categories.includes(newCategory)) return;
      // categories.push( newCategory );
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Rana' ]);

    }

  return (
    <>
        { /* Título */ }
        <h1>GifExpertApp</h1>

        { /* Input */ }
        <AddCategory 
        onNewCategory = { (value ) => onAddCategory(value)}
          // setCategories={ setCategories }
        />

        { /* Listado de Gifs */ }
        {/* <button onClick={ onAddCategory }>Agregar</button> */}

          { 
            categories.map( (category) => (
                <GifGrid 
                  key={ category } 
                  category={ category }/>
            ))
          }

            { /* Gif Item */}

    </>
  )
}
