import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PokeIngredient.css';

class PokeIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
         
            case ( 'bowl' ):
                ingredient = (
                    <div className={classes.Bowl}>
                    
                    </div>
                );
                break;
            case ( 'salmon' ):
                ingredient = <div className={classes.Salmon}></div>;
                break;
            case ( 'tuna' ):
                ingredient = <div className={classes.Tuna}></div>;
                break;
            case ( 'tofu' ):
                ingredient = <div className={classes.Tofu}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

PokeIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PokeIngredient;