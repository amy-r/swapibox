import React from 'react';
import ReactDOM from 'react-dom';
import {fetchApi} from './helper';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'api', () => {

beforeEach(() => {
  const mockObj = {"name": 'luke', "homeworld": 'tattoine'}
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockObj)
    }))
})
  it('fetchApi should return API data once promise resolves', async () => {
    const expected = {"name": 'luke', "homeworld": 'tattoine'}
    const actual = await fetchApi();
    expect(actual).toEqual(expected)
  })

  it('should call the data with the correct params', () => {
    const url = 'https://swapi.co/api/people/?format=json';

    fetchApi(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

})