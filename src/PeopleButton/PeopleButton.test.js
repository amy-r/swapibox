 /* eslint-disable */ 
 
import React from 'react';
import ReactDOM from 'react-dom';
import PeopleButton from './PeopleButton';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'People Button', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<PeopleButton />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});