import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
      name: 'Monique',
      age: 23
    }, {
      name: 'Filipe',
      age: 34
    }, {
      name: 'Giovana',
      age: 18
    }]
  };

  switchNameHandler = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p> This is really working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name}>My hobbies: Playing Guitar</Person>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
