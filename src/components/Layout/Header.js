import React, { Fragment , useState } from 'react';
import classes from './Header.module.css';
import hubble from '../../assets/hubble.jpg';
import ContactMe from '../ContactMe';

const Header = (props)=>{
    const [showContactMe, setShowContactMe] = useState(false);

    const showContactMeForm = (event) =>{
        event.preventDefault();
        {!showContactMe ? setShowContactMe(true): setShowContactMe(false)}
    };
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Divya Srivastava</h1>
                <button onClick={showContactMeForm}>Contact Me</button>
            </header>
            <div className='main-image'>
        {/* <img src={hubble} alt="home" /> */}
       
      </div>
      <div>
        {showContactMe && <ContactMe />}
      </div>
        </Fragment>
    );
}

export default Header;