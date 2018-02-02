import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css'

const CardContainer = ( {display} ) => {
    console.log(display)
    const Cards = display.map( person => {
    return (<Card {...person}/>)
  })

  return (
    <div className ="CardContainer">
    {Cards}
    </div>
  )
} 

export default CardContainer;

//need people click to happen, then set state, then rendering in card container