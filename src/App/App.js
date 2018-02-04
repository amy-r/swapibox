import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js';
import CardContainer from '../CardContainer/CardContainer.js'
import FavoritesButton from '../FavoritesButton/FavoritesButton.js';
import PeopleButton from '../PeopleButton/PeopleButton.js';
import PlanetsButton from '../PlanetsButton/PlanetsButton.js';
import ScrollText from '../ScrollText/ScrollText.js';
import VehiclesButton from '../VehiclesButton/VehiclesButton.js';
import './App.css';
import {getPeople, getPlanets, getVehicles} from '../helper.js'

class App extends Component {
  constructor(){

    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      current: 'people',
      errorStatus: ''
    }
  }


clickFunction = async (e) => {
  console.log(e.target.className)
  if (e.target.className === 'PeopleButton'){
    const people = await getPeople();
    
    this.setState({
      people: people,
      current: 'people'
    })
  }
  else if (e.target.className ==='PlanetsButton'){
    const planets = await getPlanets();

    this.setState({
      planets: planets,
      current: 'planets'
    })
  }
  else if (e.target.className ==="VehiclesButton"){
    const vehicles = await getVehicles();

    this.setState({
      vehicles: vehicles,
      current: 'vehicles'
    })
  }
}
  
async componentDidMount() {
    // await Helper.getPeople();
    // await Helper.getPlanets();
    // await Helper.getVehicles();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2> SWAPI-Box </h2> 
          <FavoritesButton /> 
        </header>  
        <div className= 'button-section'>
          <PeopleButton onClick= {this.clickFunction}/> <PlanetsButton onClick= {this.clickFunction}/> <VehiclesButton onClick= {this.clickFunction}/> 
        </div>
        <CardContainer display={this.state[this.state.current]}/>
        <ScrollText className="Scroll"/>
      </div>
    );
  }

}
export default App;
