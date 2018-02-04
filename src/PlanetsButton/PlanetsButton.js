import React from 'react';
import propTypes from 'prop-types';

const PlanetsButton = (props) => {
  return (
    <button onClick= {props.onClick} className= 'PlanetsButton'>PLANETS</button>
  )
  
}

export default PlanetsButton;