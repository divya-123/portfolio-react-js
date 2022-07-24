import React, { Fragment } from 'react';
import Card from './UI/Card';
import classes from './ContactMe.module.css';
const ContactMe = (props) => {
    return(
        <Fragment>
        <div className={classes.header}>
            <h2>Contact Me</h2>
        </div>
        <Card>
        <form className={classes.form}>
            <div className={classes.control}>
            <label htmlFor='name' id='name'> Name </label>
            <input type='text' id='name'></input>
            </div>
            <div className={classes.control}>
            <label htmlFor='email'> Email Address </label>
            <input type='text' id='email'></input>
            </div>
            <div className={classes.control}>
            <label htmlFor='message'> Message </label>
            <textarea id='message' required rows='5'></textarea>            
            </div>
            <div className={classes.actions}>
            <button>Submit</button>
            </div>
        </form>
        </Card>
        </Fragment>
        
    );
};

export default ContactMe;