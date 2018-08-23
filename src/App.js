import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  //state changes (reserved var) means dom changes  
  state = {
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
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] =  {
        backgroundColor: 'salmon',
        color: 'black'
      }
      persons = (        
        <div > 
          {this.state.persons.map((person, idx) => {
            return (
              <Person 
              age={person.age} 
              name={person.name}
              customClick={this.deletePersonHandler.bind(this, idx)}
              customChange={(event) => this.changeNameHandler(event, person.id)}
              key={person.id}/>
            );
          })}
        </div>
      );
    }

    let classes = [];
    if(this.state.persons.length <= 2 ) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}> This is really working! </p>
          <button  
            style={style}
            onClick={this.togglePersonsHandler}>
              Toggle Persons 
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
