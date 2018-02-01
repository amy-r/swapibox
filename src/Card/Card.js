import React, { Component } from 'react';
import './Card.css'


const Card = ({name, species, homeworld, population}) => {

    return (
      <div className = 'Card'>
      <h3> {name} </h3>
      <ul>
        <li> species: { species } </li>
        <li> homeworld: { homeworld } </li>
        <li> population: { population } </li>
      </ul>
      </div>
    )
}


export default Card;