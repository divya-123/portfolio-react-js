import React , { Fragment , useState, useReducer} from 'react';
import Card from '../UI/Card';
import classes from './Feedback.module.css';

const reducer = (state, action) => {
    switch (action.type){
        case 'POSITIVES_INPUT' : return {...state, enteredPositives:{value: action.val, } }
        case 'NEGATIVES_INPUT' : return {...state, enteredNegatives: action.val}
        case 'SUGGESTIONS_INPUT' : return {...state, enteredSuggestions: action.val}
        case 'NAME_INPUT' : return {...state, enteredName: action.val}
        case 'PHONENO_INPUT' : return {...state, enteredPhoneNo: action.val}  
        }
};


const Feedback = (props) =>{

    const [state, dispatch]= useReducer(reducer, {
        enteredPositives: '',
        enteredNegatives: '',
        enteredSuggestions: '',
        enteredName: '',
        enteredPhoneNo: ''
    });

    // const [enteredPositives, setEnteredPositives] = useState('');
    // const [enteredNegatives, setEnteredNegatives] = useState('');
    // const [enteredSuggestions, setEnteredSuggestions] = useState('');
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredPhoneNo, setEnteredPhoneNo] = useState('');

   
    const feedbackSubmitHandler =(event)=>{
        event.preventDefault();
        console.log(state.enteredPositives);
        console.log(state.enteredNegatives);
        console.log(state.enteredSuggestions);
        console.log(state.enteredName);
        console.log(state.enteredPhoneNo);
    };

    const inputChangeHandler = (event, field) =>{
        dispatch({type: `${field}_INPUT`, val: event.target.value})
    };

    const positivesChangeHandler = (event)=>
    {
        dispatch({type: 'POSITIVES_INPUT', val: event.target.value});
    };
    const negativesChangeHandler = (event)=>
    {
        dispatch({type: 'NEGATIVES_INPUT', val: event.target.value});
    };
    const suggestionsChangeHandler = (event)=>
    {
        dispatch({type: 'SUGGESTIONS_INPUT', val: event.target.value});
    };
    const nameChangeHandler = (event)=>
    {
        dispatch({type: 'NAME_INPUT', val: event.target.value});
    };
    const phoneNoChangeHandler = (event)=>
    {
        dispatch({type: 'PHONENO_INPUT', val: event.target.value});
    };
    return (
        <Card>
            <div>
                <h2>How did you like my work?</h2>
            </div>
            <form onSubmit={feedbackSubmitHandler} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='positives'>Things you liked:</label>
                    <input type='text' 
                        id='positives' 
                        value={state.enteredPositives}
                        onChange={positivesChangeHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='negatives'>Things you did not like:</label>
                    <input type='text' 
                            id='negatives' 
                            value={state.enteredNegatives}
                            onChange={negativesChangeHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='suggestions'>Your suggestions:</label>
                    <input type='text' 
                            id='suggestions' 
                            value={state.enteredSuggestions}
                            onChange={suggestionsChangeHandler}
                            />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your name:</label>
                    <input type='text' 
                            id='name' 
                            value={state.enteredName}
                            onChange={nameChangeHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phoneNo'>Your contact number:</label>
                    <input type='number' 
                            id='phoneNo' 
                            value={state.enteredPhoneNo}
                            onChange={phoneNoChangeHandler}/>
                </div>
                <div className={classes.actions}>
                    <button>Submit Feedback</button>
                </div>
                
            </form>
        </Card>
    )
};

export default Feedback;