import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js';
import CardContainer from '../CardContainer/CardContainer.js'
import FavoritesButton from '../FavoritesButton/FavoritesButton.js';
import PeopleButton from '../PeopleButton/PeopleButton.js';
import PlanetsButton from '../PlanetsButton/PlanetsButton.js';
import ScrollText from '../ScrollText/ScrollText.js';
import VehiclesButton from '../VehiclesButton/VehiclesButton.js';

class App extends Component {
  constructor(){

    super();
    this.state = {
      people : []
    }
  }

  // create an api function that calls https://swapi.co/api/people/{number}
  //.then(({ results }) => this.setState( { person: results }))
  // a callback function taking in results as a parameter and setting state 
  // with those results 

  // getPeople = () => {
  //   fetch('https://swapi.co/api/people/10/').then(results => results.json()).then(({ results }) => {this.setState(this.state.people:results)})
  // }

  // componentDidMount() {
  //   this.getPeople()
  // }
  render() {
    return (
      <div className="App">
        <header> 
          <h2> SWAPI-Box </h2> 
          <FavoritesButton /> 
          <hr />
        </header>
        <div className = 'button-section'>
          <PeopleButton /> <PlanetsButton /> <VehiclesButton /> 
        </div>
        <CardContainer />
      </div>
    );
  }

}
export default App;
