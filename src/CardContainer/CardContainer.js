import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css'

const CardContainer = ({people}) => {
  const peopleCards = people.map( person => {
    return (<Card {...person}/>)
  })

  return (
    <div className ="CardContainer">
    {peopleCards}
    </div>
  )
} 

export default CardContainer;