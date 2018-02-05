 /* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import PlanetsButton from './PlanetsButton';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'Planets Button', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<PlanetsButton />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});