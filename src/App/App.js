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
      people: []
    }
  }

  // create an api function that calls https://swapi.co/api/people/{number}
  //.then(({ results }) => this.setState( { person: results }))
  // a callback function taking in results as a parameter and setting state 
  // with those results 

  // getPeople = () => {
  //   //returns a Response objects
  //   fetch('https://swapi.co/api/people/?format=json')

  //   //returns an object, with a key of results and a value of an array. 
  //   .then(response => response.json())

  //   //returns an array of objects. each with key value pairs we want to access
  //   .then(data => data.results)

  //   // gives us an array of all the names
  //   .then(people => this.getPerson(people))
  //   .then(people =>  this.setState({ people }))
  //   .then(console.log(this.state))
  // }
  async fetchApi(url) {
    try {
      const fetched = await fetch(url);
      const response = await fetched.json();
      return response;
    } catch (error) {
      this.setState({ errorStatus: 'fetchApi Error'})
    }
  }

  getPeople = async() => {
    const people = await this.fetchApi('https://swapi.co/api/people/?format=json');
    const resolvedPromise = await this.getPerson(people);
    this.setState({people: resolvedPromise})
  }

  // takes in unresolved promises?
  getPerson = (people) => {
    const unreslovedPromises = people.results.map( (person) => {
      fetch(person.homeworld).then(response => response.json)
      return {
        name: person.name,
        species: this.fetchApi(person.species),
        homeworld: person.homeworld,
      }
    })
    
  //fetches for homeworld, homeworld population, species

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
