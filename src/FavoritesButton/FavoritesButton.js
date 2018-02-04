import React from 'react';
import propTypes from 'prop-types';
import './FavoritesButton.css'

const FavoritesButton = (props) => {
    return (
      <button onClick = {props.onClick} className='FavoritesButton'> FAVORITES </button>
    )
}

export default FavoritesButton;