import React, { Component } from 'react';
import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    //state changes (reserved var) means dom changes  
    this.state = {
      persons: [{
        id: 1,
        name: 'Monique',
        age: 23
      }, {
        id: 2,
        name: 'Filipe',
        age: 34
      }, {
        id: 3,
        name: 'Giovana',
        age: 18
      }], 
      otherState: 'some other value',
      showPersons: false
    };
  }

  //being used for the input on person.js 
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>p.id === id);
    const newPerson  = {
      ...this.state.persons[personIndex]
    };
    newPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = newPerson;

    this.setState({
      persons: persons
    });

  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (index) => {
    if(this.state.persons.length === 1) {
      throw new Error('minimum length reached');
    }
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (        
        <div > 
         <PersonList 
         persons={this.state.persons} 
         clicked={this.deletePersonHandler} 
         changed={this.changeNameHandler}/>
        </div>
      );
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
        toggle={this.togglePersonsHandler} 
        persons={this.state.persons}
        showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
