 /* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import VehiclesButton from './VehiclesButton';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'Vehicles Button', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<VehiclesButton />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});