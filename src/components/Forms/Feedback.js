import React , { Fragment , useReducer} from 'react';
import Card from '../UI/Card';
import classes from './Feedback.module.css';

const feedbackReducer = (state, action) => {
    if(action.type==='USER_INPUT') 
        return {
            value: action.val, isValid: state.val.trim()!==''
        };

    return {
        value: '' , isValid: false
    };
};
const Feedback = (props) =>{

    const [feedbackState, dispatchFeedback] = useReducer(feedbackReducer, {
        value: '',
        isValid: null
    });

    const feedbackSubmitHandler =(event)=>{
        event.preventDefault();

        dispatchFeedback({type: 'USER_INPUT', val: event.target.value});

    };
    return (
        <Card>
            <div>
                <h2>How did you like my work?</h2>
            </div>
            <form onSubmit={feedbackSubmitHandler} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='positives'>Things you liked:</label>
                    <input type='text' id='positives' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='negatives'>Things you did not like:</label>
                    <input type='text' id='negatives' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='suggestions'>Your suggestions:</label>
                    <input type='text' id='suggestions' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your name:</label>
                    <input type='text' id='name' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='phoneNo'>Your contact number:</label>
                    <input type='number' id='phoneNo' />
                </div>
                <div className={classes.actions}>
                    <button>Submit Feedback</button>
                </div>
                
            </form>
        </Card>
    )
};

export default Feedback;