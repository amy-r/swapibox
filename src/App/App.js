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

  getPeople = () => {
    //returns a Response objects
    fetch('https://swapi.co/api/people/?format=json')
    //returns an object, with a key of results and a value of an array. 
    .then(results => results.json())
    //returns an array of objects. each with key value pairs we want to access
    .then(objects => objects.results)
    // gives us an array of all the names
    .then(people => this.getPerson(people))
    .then(people =>  this.setState({ people }))
    .then(console.log(this.state))
  }


  // takes in unresolved promises?
  getPerson = (people) => {
    const unreslovedPromises = people.map( (person) => {
      return person.name
    })
    
  //fetches for homeworld, homeworld pop, species
    return Promise.all(unreslovedPromises)
  }


  componentDidMount() {
    this.getPeople();
  }

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
