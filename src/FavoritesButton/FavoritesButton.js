import React from 'react';
import propTypes from 'prop-types';

const FavoritesButton = (props) => {
    return (
      <button onClick = {props.onClick} className='FavoritesButton'> Show Favorites </button>
    )
}

export default FavoritesButton;