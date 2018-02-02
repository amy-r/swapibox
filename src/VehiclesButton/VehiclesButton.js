import React from 'react';
import propTypes from 'prop-types';

const VehiclesButton = (props) => {
  return (
    <button onClick={props.onClick} className= 'VehiclesButton'>Vehicles</button>
  )
}

export default VehiclesButton;