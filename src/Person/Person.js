import React from 'react';
import './Person.css';
import Radium from 'radium';

//while using a function, state cannot be used, only props 
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.customClick}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.customChange} value={props.name}/>
        </div>
    );
}

export default Radium(person);