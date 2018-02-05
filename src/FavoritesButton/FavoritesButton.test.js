/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesButton from './FavoritesButton';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'Favorites Button', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<FavoritesButton />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});