 /* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'Card', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<Card />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});