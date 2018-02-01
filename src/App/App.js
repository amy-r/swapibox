import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js';
import CardContainer from '../CardContainer/CardContainer.js'
import FavoritesButton from '../FavoritesButton/FavoritesButton.js';
import PeopleButton from '../PeopleButton/PeopleButton.js';
import PlanetsButton from '../PlanetsButton/PlanetsButton.js';
import ScrollText from '../ScrollText/ScrollText.js';
import VehiclesButton from '../VehiclesButton/VehiclesButton.js';
import './App.css'

class App extends Component {
  constructor(){

    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    }
  }

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
    const unreslovedPromises = people.results.map( async (person) => {
      let species = await this.fetchApi(person.species);
      let homeworld = await this.fetchApi(person.homeworld);
      return {
        name: person.name,
        species: species.name,
        homeworld: homeworld.name,
        population: homeworld.population
      }
    })
    
  //fetches for homeworld, homeworld population, species

    return Promise.all(unreslovedPromises)
  }

  getPlanets = async() => {
    const planets = await this.fetchApi('https://swapi.co/api/planets/?format=json');
    const resolvedPromise = await this.getPlanet(planets);
    this.setState({planets: resolvedPromise})
  }

  getPlanet = (planets) => {
    const unreslovedPromises = planets.results.map( async (planet) => {

      let unresolvedResidents = await planet.residents.map( async (resident) => {
        let residentPage = await this.fetchApi(resident)
        let name = await residentPage.name;
        // console.log(name)
        return name;
      })
      console.log(unresolvedResidents)

      let residents = await Promise.all(unresolvedResidents);

      // name, terrain, population, climate, residents, favorite
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents
      }
    })

    return Promise.all(unreslovedPromises)
  }

  getVehicles = async() => {
    const vehicles = await this.fetchApi('https://swapi.co/api/vehicles/?format=json');
    const resolvedPromise = await this.getVehicle(vehicles)
    this.setState({vehicles: resolvedPromise})
  }

  getVehicle = (vehicles) => {
    const unreslovedPromises = vehicles.results.map( (vehicle) => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.class,
        passengers: vehicle.passengers,
      }
    })

    return Promise.all(unreslovedPromises)
  }
  
async componentDidMount() {
    await this.getPeople();
    await this.getPlanets();
    await this.getVehicles();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2> SWAPI-Box </h2> 
          <FavoritesButton /> 
        </header>  
        <div className= 'button-section'>
          <PeopleButton /> <PlanetsButton /> <VehiclesButton /> 
        </div>
        <CardContainer people= {this.state.people}/>
        <ScrollText className="Scroll"/>
      </div>
    );
  }

}
export default App;
