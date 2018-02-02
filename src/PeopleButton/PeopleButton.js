import React from 'react';
import propTypes from 'prop-types';

const PeopleButton = (props) => {


    return (
      <button onClick= {props.onClick} className= 'PeopleButton'>People</button>
    )
  
}

export default PeopleButton;