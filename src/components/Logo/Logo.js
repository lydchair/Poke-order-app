import React from 'react';

import pokeLogo from '../../assets/images/poke-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pokeLogo} alt="MyPoke" />
    </div>
);

export default logo;