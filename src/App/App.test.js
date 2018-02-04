
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'App Component', () => {

  it('exists', () => {
  })

  it('renders without crashing', () => {
    const renderedComponent = shallow(<App />, {disableLifecycleMethods: true})
    expect(renderedComponent).toMatchSnapshot();
  })

});