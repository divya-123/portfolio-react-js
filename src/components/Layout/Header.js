import React, { Fragment , useState } from 'react';
import classes from './Header.module.css';
import hubble from '../../assets/hubble.jpg';
import ContactMe from '../Forms/ContactMe';
import Feedback from '../Forms/Feedback';

const Header = (props)=>{
    const [showContactMe, setShowContactMe] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const showContactMeForm = (event) =>{
        event.preventDefault();
        {!showContactMe ? setShowContactMe(true): setShowContactMe(false)}
    };

    const showFeedbackForm = (event) =>{
        event.preventDefault();
        {!showFeedback ? setShowFeedback(true): setShowFeedback(false)}
    };

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Divya Srivastava</h1>
                <button onClick={showContactMeForm}>Contact Me</button>
                <button onClick={showFeedbackForm}>Feedback</button>
            </header>
            <div className='main-image'>
        {/* <img src={hubble} alt="home" /> */}
       
      </div>
      <div>
        {showContactMe && <ContactMe />}
        {showFeedback && <Feedback />}
      </div>
        </Fragment>
    );
}

export default Header;