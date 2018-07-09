import React from 'react';

import classes from './Poke.css';
import PokeIngredient from './PokeIngredient/PokeIngredient';

const poke = ( props ) => {
    console.log(props);
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <PokeIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p className={classes.Add}>Put something in your bowl
            </p>;
        }
        return (
            <div className={classes.Poke}>
                <PokeIngredient type="bowl" />
                {transformedIngredients}
               
            </div>
        );
};

export default poke;