import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

//while using a function, state cannot be used, only props 
class PersonList extends Component {
    render() {
     return this.props.persons.map((person, idx) => {
        return (
            <ErrorHandler 
            key={person.id}>
            <Person 
            age={person.age} 
            name={person.name}
            customClick={() => this.props.clicked(idx)}
            customChange={(event) => this.props.changed(event, person.id)}/>
            </ErrorHandler>
        );
    });
    }
}


export default PersonList;