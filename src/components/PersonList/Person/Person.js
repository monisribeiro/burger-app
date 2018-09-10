import React, {Component} from 'react';
import classes from './Person.css';

//while using a function, state cannot be used, only props 
class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.customClick}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.customChange} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;