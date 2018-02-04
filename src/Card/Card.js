import React, { Component } from 'react';
import './Card.css'


const Card = (props) => {
const propsArray = Object.entries(props);

propsArray.pop();

let info = propsArray.map( (prop) => {
  return <li key={prop[0]}> {prop[0]}: {prop[1]} </li>
})
    return (
      <div className='Card' onClick={props.handleClick} id={props.name}>
      <ul>
        {info}
      </ul>
      </div>
    )
}


export default Card;

      // <div className = 'Card'>
      // <h3> {props.name} </h3>
      // <ul>
      //   <li> species: { props.species } </li>
      //   <li> homeworld: { props.homeworld } </li>
      //   <li> population: { props.population } </li>
      // </ul>
      // </div>