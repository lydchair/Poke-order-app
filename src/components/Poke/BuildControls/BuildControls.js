import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import OrderSummary from '../OrderSummary/OrderSummary';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Tofu', type: 'tofu' },
    { label: 'Tuna', type: 'tuna' },
    { label: 'Salmon', type: 'salmon' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
       <strong>  <p className={classes.Current}>Current Price:{props.price.toFixed(2)}</p></strong>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
       
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;