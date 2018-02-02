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
import {getPeople} from '../helper.js'

class App extends Component {
  constructor(){

    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      current: 'people'
    }
  }


clickFunction = async (e) => {
  console.log(e.target.text)
if (e.target.className === 'PeopleButton'){
  const people = await getPeople();
  
  this.setState({
    people: people,
    current: 'people'
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
          <PeopleButton onClick= {this.clickFunction}/> <PlanetsButton /> <VehiclesButton /> 
        </div>
        <CardContainer display={this.state[this.state.current]}/>
        <ScrollText className="Scroll"/>
      </div>
    );
  }

}
export default App;
