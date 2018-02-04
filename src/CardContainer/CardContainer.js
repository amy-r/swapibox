import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css'

const CardContainer = ( {display, favorites} ) => {
    const Cards = display.map(input  => {

    return (<Card key={input.name} {...input} handleClick={favorites}/>)
  })

  return (
    <div className ="CardContainer">
    {Cards}
    </div>
  )
} 

export default CardContainer;

//need people click to happen, then set state, then rendering in card container