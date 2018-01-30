import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'App Component', () => {

  test('renders without crashing', () => {
    const renderedComp = shallow(<App />);

    expect(renderedComp).toMatchSnapshot();
  });

});