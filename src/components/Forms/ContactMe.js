import React, { Fragment, useState } from 'react';
import Card from '../UI/Card';
import classes from './ContactMe.module.css';
import Modal from '../UI/Modal';
const ContactMe = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(!animate);

    const confirmHandler = (event) =>{
        event.preventDefault();
        setShowModal(false);

    };
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Clicked');
        console.log({enteredName});
        console.log({enteredEmail});
        console.log({enteredMessage});
        setShowModal(true);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
    };
    return(
        <Fragment>
            {showModal && <Modal title='Thankyou!!' 
                            message='Thankyou for contacting me!! Will revert soon!!' 
                            onConfirm={confirmHandler}/>};
        {/* <div className={classes.header}>
            <h2>Contact Me</h2>
        </div> */}
        <Card>
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.control}>
            <label htmlFor='name' id='name'> Name </label>
            <input type='text' 
                    id='name' 
                    value={enteredName} 
                    onChange={(event)=>{setEnteredName(event.target.value);}} 
                    required></input>
            </div>
            <div className={classes.control}>
            <label htmlFor='email'> Email Address </label>
            <input type='text' 
                    id='email' 
                    value={enteredEmail} 
                    onChange={(event)=>{setEnteredEmail(event.target.value);}} 
                    required></input>
            </div>
            <div className={classes.control}>
            <label htmlFor='message'> Message </label>
            <textarea id='message' 
                    required rows='5' 
                    value={enteredMessage} 
                    onChange={(event)=>{setEnteredMessage(event.target.value);}}></textarea>            
            </div>
            <div className={classes.actions}>
            <button>Submit</button>
            <button onClick={handleClick} className={classes.animate}>Animate Me</button>
            </div>
        </form>
        </Card>
        </Fragment>
        
    );
};

export default ContactMe;