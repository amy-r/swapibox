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
import {getPeople, getPlanets, getVehicles, getFilm} from '../helper.js'

class App extends Component {
  constructor(){

    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      current: 'people',
      scroll: {},
      errorStatus: ''
    }
  }

favoriteCard = (e) => {
  const newFav = this.state[this.state.current].find( (card) => {
    return e.target.id === card.name
  })

  e.target.classList.add('favorite');
  const noDupes = this.state.favorites.filter( (card) => {
    return newFav.name !== card.name
  })

  this.setState({
    favorites: [...noDupes, newFav]
  }, console.log(this.state.favorites))
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

  else if (e.target.className ==="FavoritesButton"){
    this.setState({
      current: 'favorites'
    }, console.log(this.state.current))
  }
}
  
async componentDidMount() {
  const scroll = await getFilm();
  this.setState({
    scroll: scroll
  })
  }

  render() {
    return (
      <div className="App">
        <ScrollText scroll={this.state.scroll} className="Scroll"/>
        <header>
          <h2> SWAPI-Box </h2> 
          <FavoritesButton onClick= {this.clickFunction}/> 
        </header>  
        <div className= 'button-section'>
          <PeopleButton onClick= {this.clickFunction}/> <PlanetsButton onClick= {this.clickFunction}/> <VehiclesButton onClick= {this.clickFunction}/> 
        </div>
        <CardContainer favorites= {this.favoriteCard} display={this.state[this.state.current]}/>
      </div>
    );
  }

}
export default App;
