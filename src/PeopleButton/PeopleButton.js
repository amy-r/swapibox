import React from 'react';
import propTypes from 'prop-types';

const PeopleButton = (props) => {


    return (
      <button onClick= {props.onClick} className= 'PeopleButton'>PEOPLE</button>
    )
  
}

export default PeopleButton;