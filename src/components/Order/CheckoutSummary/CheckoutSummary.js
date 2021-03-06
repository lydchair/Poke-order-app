import React from 'react';

import Poke from '../../Poke/Poke';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div style={{fontSize:'10px', color:'#00534b'}}>
                <h1>Click continue to tell us where the Poke should go</h1>
                </div>
            <div style={{width: '100%', margin: 'auto', color: 'grey'}}>
                <Poke ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;