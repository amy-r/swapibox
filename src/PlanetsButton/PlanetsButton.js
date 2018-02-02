import React from 'react';
import propTypes from 'prop-types';

const PlanetsButton = (props) => {
  return (
    <button onClick= {props.onClick} className= 'PlanetsButton'>Planets</button>
  )
  
}

export default PlanetsButton;