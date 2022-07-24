import React, { Fragment } from 'react';
import classes from './Header.module.css';
import hubble from '../../assets/hubble.jpg';

const Header = (props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Welcome to My Universe!!</h1>
            </header>
            <div className='main-image'>
        <img src={hubble} alt="home" />
       
      </div>
        </Fragment>
    );
}

export default Header;